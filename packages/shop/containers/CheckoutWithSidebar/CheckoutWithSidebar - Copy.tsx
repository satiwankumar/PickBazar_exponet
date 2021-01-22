import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Button from 'components/Button/Button';
import RadioCard from 'components/RadioCard/RadioCard';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import PaymentGroup from 'components/PaymentGroup/PaymentGroup';
import Loader from 'components/Loader/Loader';
import UpdateAddress from './Update/UpdateAddress';
import UpdateContact from './Update/UpdateContact';
import StripePaymentForm from '../Payment/StripePaymentForm';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import { AuthContext } from 'contexts/auth/auth.context';

import { CURRENCY } from 'helper/constant';
import { openModal } from '@redq/reuse-modal';
import { Product } from 'interfaces';
import { useMutation } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import CheckoutWrapper, {
  CheckoutContainer,
  CheckoutInformation,
  InformationBox,
  DeliverySchedule,
  Heading,
  Heading2,
  ButtonGroup,
  CheckoutSubmit,
  HaveCoupon,
  CouponBoxWrapper,
  CouponInputBox,
  Input,
  CouponCode,
  RemoveCoupon,
  ErrorMsg,
  TermConditionText,
  TermConditionLink,
  CartWrapper,
  CalculationWrapper,
  OrderInfo,
  Title,
  ItemsWrapper,
  Items,
  Quantity,
  Multiplier,
  ItemInfo,
  Price,
  TextWrapper,
  Text,
  Bold,
  Small,
  NoProductMsg,
} from './CheckoutWithSidebar.style';

import { Plus } from 'components/AllSvgIcon';
import TextField from 'components/TextField/TextField';

import Sticky from 'react-stickynode';
import { HeaderContext } from 'contexts/header/header.context';

import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { APPLY_COUPON } from 'graphql/mutation/coupon';
import { useLocale } from 'contexts/language/language.provider';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {CHECK_OUT} from 'graphql/mutation/checkout'
import { toast } from 'react-toastify';
import address from 'data/address';
// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}

type CartItemProps = {
  product: any;
};

const OrderItem: React.FC<CartItemProps> = ({ product }) => {
  
  // console.log("product",productVariations)
    const { id, quantity, title, name, unit, price, salePrice,productVariations,variationId } = product;
    let filterVariation=  productVariations.length>0?productVariations.filter(item=>item.variations.id==variationId):null
    let filterVariation1 = filterVariation[0]
    // console.log("filter",filterVariation)
    let displayPrice = filterVariation.length>0?filterVariation1.variations.variation_price:"";
    let variationname= filterVariation.length>0?filterVariation1.variations.variation_name:title 
    let variationquantity = filterVariation.length>0?filterVariation1.variations.variation_quantity:title 
    return (
      <Items key={id}>
        {/* <Quantity>{quantity}</Quantity>
        <Multiplier>For</Multiplier> */}
        <ItemInfo>
          {`${variationname} of ${variationquantity} `} 
        </ItemInfo>
      {/* <Multiplier>For</Multiplier> */}
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
      </Items>
    );
  };

const CheckoutWithSidebar: React.FC<MyFormProps> = ({ token, deviceType }) => {

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);

  const { register, handleSubmit, errors } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [hasCoupon, setHasCoupon] = useState(false);


  const [couponCode, setCouponCode] = useState('');
  const [couponError, setError] = useState('');
  const { state, dispatch } = useContext(ProfileContext);
  const { userAddress, contact, card, schedules } = state;

  const [Token,setToken] = useState("")

  const [Billing,setBilling] = useState({
    first_name:"",
    last_name:"",
    email:"",
    address:"",
    address2:"",
    phone:"",
    city:"",
    zip:"",
    country:"",
    state:""
             

  });
  
  const [shipping,setShipping] = useState({
    first_name:"",
    last_name:"",
    address1:"",
    address2:"",
    phone:"",
    city:"",
    zip:"",
    country:"",
    state:""
             

  });

  const getScheduleById = (id)=>{
      let data =  state.schedules.filter(item=>item.id==id)
      console.log("dataaaaaa",data)
      return data[0].time_slot
  }

  useEffect(() => {

    if (isAuthenticated) {
    // {  toggleRestaurant();
    //   clearCart();}
    Billing.first_name = state.first_name?state.first_name:""
    Billing.last_name = state.last_name?state.last_name:""
    Billing.email =state.email ?state.email:""
  }
    


 
}, [state,isAuthenticated]);
// console.log("statesssssssssss",state)
const [PrimaryId,setPrimary ] = useState(state.userAddress!=undefined && state.userAddress.length>0 ?state.userAddress[0].id:"");
const [delivery,setDelivery ] = useState(state.schedules!=undefined && state.schedules ?state.schedules[0].id:"");
const [address,setAddress ] = useState('');
 
const { isRtl } = useLocale();
  const {
    items,
    removeCoupon,
    coupon,
    applyCoupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const [appliedCoupon] = useMutation(APPLY_COUPON);

  const handleBilling = (e)=>{
    console.log(e.target.name,e.target.value)
    setBilling({...Billing,[e.target.name]:e.target.value  })
}



// console.log("statessss",state)

  const [checkout] = useMutation(CHECK_OUT);

  const { headerState } = useContext<any>(HeaderContext);

  const totalHeight =
    headerState?.desktopHeight > 0 ? headerState.desktopHeight + 30 : 76 + 30;
    let orderItems  = []
  
    items.forEach(item=> {
    let variation = item.productVariations.find((variation)=>variation.variations.id == item.variationId);
    // console.log('items reducer',variation);
    if(variation){
      // console.log('items reducer',variation.);product_id: 58,
                
      let data  =  { "product_id":"" ,"unit_price":"","qty":"","variation_id":""}
    data.product_id  = item.id
    data.unit_price = variation.variations.variation_price
    data.qty  = variation.variations.variation_quantity
    data.variation_id  = variation.variations.id
    orderItems.push(data)
  
  }
  
       
  }
  
  );
  const handleCheckout = async (data , e) => {
   
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
 try{

 
    // console.log(getScheduleById(delivery))
    // return
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    // console.log("result",result)

    if(!isAuthenticated && address==""){
      toast.error("Please Select Address");
      return;
    }
    if(result.error){
      toast.error(result.error.message);
      return;
    }
    


    let stripeToken = result.token.id;
    setToken(stripeToken)
    // console.log(result.token.id);
    // console.log(stripeToken);
   ;

  

// console.log("billing",Billing)
// console.log("shipping",shipping)
    setLoading(true);
    if (isValid) {
      const result =  await checkout({
        variables:{
          input:{
            token: stripeToken?stripeToken:"",
            first_name: Billing.first_name,
            last_name: Billing.last_name,
            customer_email:Billing.email,
            customer_phone: "+1 (772) 895-7472",
            sub_total: calculateSubTotalPrice(),
            shipping_cost: 0,
            coupon_id: couponCode,
            discount: 0,
            total: calculatePrice(),
            currency: "$",
            currency_rate: "27.5",
            address_id: state.id?PrimaryId:null,
            user_id: state.id?state.id:null,
            address:state.id?null:address,
            delivery: getScheduleById(delivery)?getScheduleById(delivery):null,
            locale: "en",
            payment_method: "stripe",
            shipping_method: "free_shipping",
            terms_and_conditions: "on",
            service_charge: 0,
            tax: 0,
            items:orderItems
          }
        }
      })


      console.log("result",result)

      clearCart();
      // console.log("result",result)
         
    if (result.data.checkout.status==200) {
       
   
              
      toast.success(`🦄  Order Placed Successfully `, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,


})
const updatedQuery =result.data.checkout?
{ order_id :parseInt(result.data.checkout.order_id) }
: {order_id:null};
Router.push({
  pathname:'/order-received' ,
  query: updatedQuery,
});
setLoading(false);

}
else{
  toast.error(`🦄 SomeThing Went Wrong`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

}
    
  }
}
  catch (error) {
    console.log("error",error)
    toast.error(`🦄 SomeThing Went Wrong`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })


  }

  };


  // const handleSubmit = async () => {
  //   setLoading(true);
  //   if (isValid) {
  //     clearCart();
  //     Router.push('/order-received');
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    if (
      calculatePrice() > 0 &&
      cartItemsCount > 0 &&
      // address.length &&
      // contact.length &&
      // card.length &&
      schedules.length
    ) {
      setIsValid(true);
    }
  }, [state]);

  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };
console.log("statesss",state)
  const handleEditDelete = async (item: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddress : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      switch (name) {
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });

          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        case 'contact':
          dispatch({ type: 'DELETE_CONTACT', payload: item.id });

          return await deleteContactMutation({
            variables: { contactId: JSON.stringify(item.id) },
          });
        case 'address':
          dispatch({ type: 'DELETE_ADDRESS', payload: item.id });

          return await deleteAddressMutation({
            variables: { addressId: JSON.stringify(item.id) },
          });
        default:
          return false;
      }
    }
  };

  const handleApplyCoupon = async () => {
    const { data }: any = await appliedCoupon({
      variables: { code: couponCode },
    });
    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      applyCoupon(data.applyCoupon);
      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };
  const handleOnUpdate = (couponCode: any) => {
    setCouponCode(couponCode);
  };
  const CheckoutForm = () => {
    const stripe = useStripe();
    return (
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}  />
    );
  };

  return (
    <form>
      <CheckoutWrapper>
        <CheckoutContainer>
          
          <CheckoutInformation>
            {/* DeliveryAddress */}


            <form onSubmit={handleSubmit(handleCheckout)}>
            <InformationBox>
              <DeliverySchedule>
                <Heading>
                  User Details
                </Heading>
                
                <Heading2>
                  First Name :
                </Heading2>
                <Input 
                type="text" name="first_name"  value={Billing.first_name}  onChange={(e)=>handleBilling(e)} ref={register({ required: true })}  /><br/>
                {errors.first_name && <span className="text-danger">This field is required</span>}
                <Heading2>
                  Last Name :
                </Heading2>
                <Input placeholder="Please enter Last Name" type="text" name="last_name" value={Billing.last_name} onChange={(e)=>handleBilling(e)} ref={register({ required: true })}  /><br/>
                {errors.last_name &&  <span className="text-danger">This field is required</span>}
                <Heading2>
                  Email :
                </Heading2>

                <Input placeholder="Please enter Email " type="email" name="email" value={Billing.email} onChange={(e)=>handleBilling(e)} ref={register({ required: true })}  /><br/>
                {errors.email &&  <span className="text-danger">This field is required</span>}
              </DeliverySchedule>
            </InformationBox>

            <InformationBox>
              <Heading>
                <FormattedMessage
                  id='checkoutDeliveryAddress'
                  defaultMessage='Delivery Address'
                />
              </Heading>
              <ButtonGroup>
                <RadioGroup
                  items={userAddress}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.address_type}
                      content={item.address}
                      
                      name='address'
                      checked={item.id === PrimaryId}
                      onChange={() =>
                        
                      {setPrimary(item.id)
                        setAddress(item.address)
                        dispatch({
                          type: 'SET_PRIMARY_ADDRESS',
                          payload: item.id.toString(),
                        })}}
                      
                      onEdit={() => handleEditDelete(item, 'edit', 'address')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'address')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      className='addButton'
                      title='Add New'
                      icon={<Plus width='10px' />}
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='textButton'
                      type='button'
                      intlButtonId='addNew'
                      onClick={() =>
                        handleModal(UpdateAddress, 'add-address-modal')
                      }
                    />
                  }
                />
              </ButtonGroup>
            </InformationBox>

            {/* DeliverySchedule */}
            <InformationBox>
              <DeliverySchedule>
                <Heading>
                  <FormattedMessage
                    id='deliverySchedule'
                    defaultMessage='Select Your Delivery Schedule'
                  />
                </Heading>
                <RadioGroup
                  items={schedules}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.title}
                      content={item.time_slot}
                      name='schedule'
                      checked={item.id === delivery}
                      withActionButtons={false}
                      
                      onChange={()=>
                      {  setDelivery(item.id)
                        dispatch({
                          type: 'SET_PRIMARY_SCHEDULE',
                          payload: item.id.toString(),
                        })}
                      }
                    />
                  )}
                />
              </DeliverySchedule>
            </InformationBox>


           



            {/* Contact number */}
            {/* <InformationBox>
              <Heading>
                <FormattedMessage
                  id='contactNumberText'
                  defaultMessage='Select Your Contact Number'
                />
              </Heading>
              <ButtonGroup>
                {/* <RadioGroup
                  items={contact}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.type}
                      content={item.number}
                      checked={item.type === 'primary'}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_CONTACT',
                          payload: item.id.toString(),
                        })
                      }
                      name='contact'
                      onEdit={() => handleEditDelete(item, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      title='Add Contact'
                      icon={<Plus width='10px' />}
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      type='button'
                      intlButtonId='addContactBtn'
                      onClick={() =>
                        handleModal(UpdateContact, 'add-contact-modal')
                      }
                    />
                  }
                /> 
              </ButtonGroup>
            </InformationBox>
             */}
            {/* PaymentOption */}

            <InformationBox
              className='paymentBox'
              style={{ paddingBottom: 30 }}
            >
              <Heading>
                <FormattedMessage
                  id='selectPaymentText'
                  defaultMessage='Select Payment Option'
                />
              </Heading>
              <div style={{ padding: 10 }} className="stripeDiv">
                    <CheckoutForm />                  

                </div>
              {/* <PaymentGroup
                name='payment'
                deviceType={deviceType}
                items={card}
                onEditDeleteField={(item: any, type: string) =>
                  handleEditDelete(item, type, 'payment')
                }
                onChange={(item: any) =>
                  dispatch({
                    type: 'SET_PRIMARY_CARD',
                    payload: item.id.toString(),
                  })
                }
                handleAddNewCard={() => {
                  handleModal(
                    StripePaymentForm,
                    { totalPrice: calculatePrice() },
                    'add-address-modal stripe-modal'
                  );
                }}
              /> */}

              {/* Coupon start */}
              {coupon ? (
                <CouponBoxWrapper>
                  <CouponCode>
                    <FormattedMessage id='couponApplied' />
                    <span>{coupon.code}</span>

                    <RemoveCoupon
                      onClick={(e) => {
                        e.preventDefault();
                        removeCoupon();
                        setHasCoupon(false);
                      }}
                    >
                      <FormattedMessage id='removeCoupon' />
                    </RemoveCoupon>
                  </CouponCode>
                </CouponBoxWrapper>
              ) : (
                <CouponBoxWrapper>
                  {!hasCoupon ? (
                    <HaveCoupon onClick={() => setHasCoupon((prev) => !prev)}>
                      <FormattedMessage
                        id='specialCode'
                        defaultMessage='Have a special code?'
                      />
                    </HaveCoupon>
                  ) : (
                    <>
                      <CouponInputBox>
                        <Input
                          onUpdate={handleOnUpdate}
                          value={couponCode}
                          intlPlaceholderId='couponPlaceholder'
                        />
                        <Button
                          onClick={handleApplyCoupon}
                          title='Apply'
                          intlButtonId='voucherApply'
                        />
                      </CouponInputBox>

                      {couponError && (
                        <ErrorMsg>
                          <FormattedMessage
                            id='couponError'
                            defaultMessage={couponError}
                          />
                        </ErrorMsg>
                      )}
                    </>
                  )}
                </CouponBoxWrapper>
              )}

              <TermConditionText>
                <FormattedMessage
                  id='termAndConditionHelper'
                  defaultMessage='By making this purchase you agree to our'
                />
                <Link href='#'>
                  <TermConditionLink>
                    <FormattedMessage
                      id='termAndCondition'
                      defaultMessage='terms and conditions.'
                    />
                  </TermConditionLink>
                </Link>
              </TermConditionText>

              {/* CheckoutSubmit */}
              <CheckoutSubmit>
                <Button
                  type='submit'
                  disabled={!isValid}
                  title='Proceed to Checkout'
                  intlButtonId='proceesCheckout'
                  loader={<Loader />}
                  isLoading={loading}
                />
              </CheckoutSubmit>
            </InformationBox>
            </form>
          </CheckoutInformation>

          <CartWrapper>
            <Sticky enabled={true} top={totalHeight} innerZ={999}>
              <OrderInfo>
                <Title>
                  <FormattedMessage
                    id='cartTitle'
                    defaultMessage='Your Order'
                  />
                </Title>

                <Scrollbars
                  universal
                  autoHide
                  autoHeight
                  autoHeightMax='390px'
                  renderView={(props) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        marginLeft: isRtl ? props.style.marginRight : 0,
                        marginRight: isRtl ? 0 : props.style.marginRight,
                        paddingLeft: isRtl ? 15 : 0,
                        paddingRight: isRtl ? 0 : 15,
                      }}
                    />
                  )}
                >
                  <ItemsWrapper>
                    {cartItemsCount > 0 ? (
                      items.map((item) => (
                        <OrderItem key={`cartItem-${item.id}`} product={item} />
                      ))
                    ) : (
                      <NoProductMsg>
                        <FormattedMessage
                          id='noProductFound'
                          defaultMessage='No products found'
                        />
                      </NoProductMsg>
                    )}
                  </ItemsWrapper>
                </Scrollbars>

                <CalculationWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='subTotal'
                        defaultMessage='Subtotal'
                      />
                    </Text>
                    <Text>
                      {CURRENCY}
                      {calculateSubTotalPrice()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='intlOrderDetailsDelivery'
                        defaultMessage='Delivery Fee'
                      />
                    </Text>
                    <Text>{CURRENCY}0.00</Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='discountText'
                        defaultMessage='Discount'
                      />
                    </Text>
                    <Text>
                      {CURRENCY}
                      {calculateDiscount()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper style={{ marginTop: 20 }}>
                    <Bold>
                      <FormattedMessage id='totalText' defaultMessage='Total' />{' '}
                      <Small>
                        (
                        <FormattedMessage
                          id='vatText'
                          defaultMessage='Incl. VAT'
                        />
                        )
                      </Small>
                    </Bold>
                    <Bold>
                      {CURRENCY}
                      {calculatePrice()}
                    </Bold>
                  </TextWrapper>
                </CalculationWrapper>
              </OrderInfo>
            </Sticky>
          </CartWrapper>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default CheckoutWithSidebar;
