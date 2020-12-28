import React, { useContext, useState, useEffect } from 'react';
import Router,{useRouter} from 'next/router';

import Link from 'next/link';
import InputButton from 'components/Input/Input'
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
  stripeDiv
} from './CheckoutWithSidebar.style';

import { Plus } from 'components/AllSvgIcon';

import Sticky from 'react-stickynode';
import { HeaderContext } from 'contexts/header/header.context';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import {CHECK_OUT} from 'graphql/mutation/checkout'
import { APPLY_COUPON } from 'graphql/mutation/coupon';
import { useLocale } from 'contexts/language/language.provider';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { order } from 'styled-system';
import TextField from 'components/TextField/TextField';


// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}

type CartItemProps = {
  product: Product;
};

const OrderItem: React.FC<CartItemProps> = ({ product }) => {
  
  const { pathname, query } = useRouter();

  const { id, quantity, title, name, unit, price, salePrice } = product;
  const displayPrice = salePrice ? salePrice : price;
  
  return (
    <Items key={id}>
      <Quantity>{quantity}</Quantity>
      <Multiplier>x</Multiplier>
      <ItemInfo>
        {name ? name : title} {unit ? `| ${unit}` : ''}
      </ItemInfo>
      <Price>
        {CURRENCY}
        {displayPrice}
      </Price>
    </Items>
  );
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({ token, deviceType }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [hasCoupon, setHasCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setError] = useState('');
  const { state, dispatch } = useContext(ProfileContext);
  // const [token,setToken] = useState('')
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
  const { address, contact, card, schedules } = state;
  const [Token,setToken] = useState("")
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const [checkout] = useMutation(CHECK_OUT);
  const [appliedCoupon] = useMutation(APPLY_COUPON);

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
  
  console.log("orderItems",orderItems)

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
  const [Billing,setBilling] = useState({
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
  const { headerState } = useContext<any>(HeaderContext);
  const totalHeight = headerState?.desktopHeight > 0 ? headerState.desktopHeight + 30 : 76 + 30;

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
  useEffect(() => {
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
    };
  }, []);
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

  const handleBilling = (e)=>{
      setBilling({...Billing,[e.target.name]:e.target.value  })
  }

  const handleShipping = (e)=>{
    setShipping({...shipping,[e.target.name]:e.target.value  })
  }

  console.log("orderItems",orderItems)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    console.log("result",result)
    let stripeToken = result.token.id;
    setToken(stripeToken)
    // console.log(result.token.id);
    // console.log(stripeToken);
   ;

console.log("billing",Billing)
console.log("shipping",shipping)
    setLoading(true);
    if (isValid) {
      const result =  await checkout({
        variables:{
          input:{
            token: stripeToken?stripeToken:"",
            customer_email: "test@gmail.com",
            customer_phone: "+1 (772) 895-7472",
            is_billing: "false",
            is_shipping: "false",
            sub_total: 200,
            shipping_cost: 0,
            coupon_id: couponCode,
            discount: 0,
            total: 200,
            currency: "$",
            currency_rate: "27.5",
            billing:{
              first_name: Billing.first_name,
              last_name: Billing.last_name,
              address_1: Billing.address1,
              address_2: Billing.address2,
              city: Billing.city,
              zip: Billing.zip,
              country: Billing.country,
              state: Billing.state
            },
            ship_to_a_different_address: "0",
            shipping:{
              first_name: shipping.first_name,
              last_name: shipping.last_name,
              address_1: shipping.address1,
              address_2: shipping.address2,
              city: shipping.city,
              zip: shipping.zip,
              country: shipping.country,
              state: shipping.state
            },
            delivery_time:{
              date: null,
              min_time: null,
              max_time: null,
          },
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
      clearCart();
      console.log("result",result)
      
      const updatedQuery =result.data.checkout?
      { order_id :parseInt(result.data.checkout.order_id) }
      : {order_id:null};
      Router.push({
        pathname:'/order-received' ,
        query: updatedQuery,
      });
   
    }
    setLoading(false);
  };


  const handleStripeSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    
    console.log(result.token.id);
    return result.token.id
  };

  const CheckoutForm = () => {
    const stripe = useStripe();
    return (
        <CardElement />
    );
  };



  return (
      <form onSubmit={(e)=>handleSubmit(e)} >
        <CheckoutWrapper>
          <CheckoutContainer>
            <CheckoutInformation>
              {/* DeliveryAddress */}
              <InformationBox>
                <Heading>
                  <h1>Billing Details</h1>
                </Heading>

                <h4>FirstName</h4>
                <TextField placeholder="Please enter First Name" type="text" name="first_name" onChange={(e)=>handleBilling(e)}  /><br/>
                <h4>LastName</h4>
                <TextField placeholder="Please enter Last Name" type="text" name="last_name"onChange={(e)=>handleBilling(e)}/><br/>
                <h4>Address1</h4>
                <TextField placeholder="Please enter Address1" type="text" name="address1"   onChange={(e)=>handleBilling(e)} />   <br/>
                <h4>Address2</h4>
                <TextField placeholder="Please enter Address2" type="text" name="address2"   onChange={(e)=>handleBilling(e)} />   <br/>
                <h4>Phone</h4>
                <TextField placeholder="Please enter Phone" type="number" name="Phone"   onChange={(e)=>handleBilling(e)} />   <br/>
                <h4>City</h4>
                <TextField placeholder="Please enter City" type="test" name="city"    onChange={(e)=>handleBilling(e)}/>   <br/>
                <h4>Zip</h4>
                <TextField placeholder="Please enter Zip" type="test" name="zip"  onChange={(e)=>handleBilling(e)}  />   <br/>
                <h4>Country</h4>
                <TextField placeholder="Please enter Country" type="text" name="country"  onChange={(e)=>handleBilling(e)}  />   <br/>
                <h4>State</h4>
                <TextField placeholder="Please enter State" type="text" name="state"   onChange={(e)=>handleBilling(e)} />   <br/>

            
                
              </InformationBox>
              <InformationBox>
                <Heading>
                  <h1>Shipping Details</h1>
                </Heading>
                <h4>FirstName</h4>
                <TextField placeholder="Please enter First Name" type="text" name="first_name" onChange={(e)=>handleShipping(e)}  /><br/>
                <h4>LastName</h4>
                <TextField placeholder="Please enter Last Name" type="text" name="last_name"onChange={(e)=>handleShipping(e)}/><br/>
                <h4>Address1</h4>
                <TextField placeholder="Please enter Address1" type="text" name="address1"   onChange={(e)=>handleShipping(e)} />   <br/>
                <h4>Address2</h4>
                <TextField placeholder="Please enter Address2" type="text" name="address2"   onChange={(e)=>handleShipping(e)} />   <br/>
                <h4>Phone</h4>
                <TextField placeholder="Please enter Phone" type="number" name="Phone"   onChange={(e)=>handleShipping(e)} />   <br/>
                <h4>City</h4>
                <TextField placeholder="Please enter City" type="text" name="city"    onChange={(e)=>handleShipping(e)}/>   <br/>
                <h4>Zip</h4>
                <TextField placeholder="Please enter Zip" type="text" name="zip"  onChange={(e)=>handleShipping(e)}  />   <br/>
                <h4>Country</h4>
                <TextField placeholder="Please enter Country" type="text" name="country"  onChange={(e)=>handleShipping(e)}  />   <br/>
                <h4>State</h4>
                <TextField placeholder="Please enter State" type="text" name="state"   onChange={(e)=>handleShipping(e)} />   <br/>
              </InformationBox>
              {/* DeliverySchedule */}
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

                  Coupon start
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
                    onClick={handleSubmit}
                    type='button'
                    disabled={!isValid}
                    title='Proceed to Checkout'
                    intlButtonId='proceesCheckout'
                    loader={<Loader />}
                    isLoading={loading}
                  />
                </CheckoutSubmit>
              </InformationBox>
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


