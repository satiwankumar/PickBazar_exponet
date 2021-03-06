import React, { useContext,useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { Col } from 'react-styled-flexboxgrid';
import { openModal } from '@redq/reuse-modal';
import { ToastContainer, toast } from 'react-toastify';
import RadioCard from 'components/RadioCard/RadioCard';
import { ProfileContext } from 'contexts/profile/profile.context';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import StripePaymentForm from '../../Payment/StripePaymentForm';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Input,
  Row,
  ButtonGroup,
} from './Settings.style';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import PaymentGroup from 'components/PaymentGroup/PaymentGroup';
import updateAddress from '../../Checkout/Update/UpdateAddress';
import UpdateContact from '../../Checkout/Update/UpdateContact';
import Button from 'components/Button/Button';
import { UPDATE_PROFILE } from 'graphql/mutation/me';
import { FormattedMessage } from 'react-intl';

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [profileUpdate] = useMutation(UPDATE_PROFILE);
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);


const [formData, setFormData] = useState({
  first_name:state.first_name?state.first_name:"",
  last_name:state.last_name?state.last_name:"",
  email:state.email?state.email:""
  
})

const {userAddress}  = state
console.log("state",userAddress)

//  const [first_name, setFirstname] = useState()
//  const [last_name, setLastname] = useState(state.last_name)
//  const [email, setEmail] = useState(state.email)

  const { address, contact, card } = state;

  const handleChange = (e, field: string) => {
    setFormData({...formData,[field]:e.target.value})
    const value = e.target.value
    dispatch({ type: 'HANDLE_ON_INPUT_CHANGE', payload: { value, field } });
  };
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
      const modalComponent = name === 'address' ? updateAddress : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      console.log(name, item, type, 'delete');
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

  const handleSave = async () => {
    const { first_name,last_name, email } = formData;
    // const UpdateData = {
    //   first_name:first_name,
    //   last_name:last_name, 
    //   email:email
    // }
   
   
   
   
    // console.log(first_name,last_name,email)
    const result  = await profileUpdate({
      variables:{
        
          first_name:first_name,
          last_name:last_name,
          email:email
    }})
    console.log("result",result)
      if (result.data) {
      
       
    
         
              
          toast.success(`🦄  ${result.data.profileUpdate} `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  
            
          })
 
          } 
        
        else{
                          toast.error(`🦄 SomeThing Went Wrong`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            })
    
  
    }
  setTimeout(()=>{
    window.location.reload();

  },3000)
    
  };

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id="profilePageTitle"
              defaultMessage="Your Profile"
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Input
              type="text"
              label="Name"
              value={formData.first_name}
              onChange={(e) => handleChange(e, 'first_name')}
              style={{ backgroundColor: '#F7F7F7' }}
              intlInputLabelId="profileNameField"
            />
          </Col>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Input
              type="text"
              label="Name"
              value={formData.last_name}
              onChange={(e) => handleChange(e, 'last_name')}
              style={{ backgroundColor: '#F7F7F7' }}
              intlInputLabelId="profileNameField"
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5} style={{  marginTop: '50px' }}>
            <Input
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={(e) => handleChange(e, 'email')}
              style={{ backgroundColor: '#F7F7F7' }}
              intlInputLabelId="profileEmailField"
              disabled="disabled"
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button
              title="Save"
              onClick={handleSave}
              style={{ width: '100%' }}
              intlButtonId="profileSaveBtn"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                {/* <Title>
                  <FormattedMessage
                    id="contactNumberTItle"
                    defaultMessage="Contact Numbers"
                  />
                </Title> */}
              </HeadingSection>
              {/* <ButtonGroup>
                <RadioGroup
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
                      name="contact"
                      onEdit={() => handleEditDelete(item, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      title="Add Contact"
                      iconPosition="right"
                      colors="primary"
                      size="small"
                      variant="outlined"
                      type="button"
                      intlButtonId="addContactBtn"
                      onClick={() =>
                        handleModal(UpdateContact, {}, 'add-contact-modal')
                      }
                    />
                  }
                />
              </ButtonGroup> */}
            </SettingsFormContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id="deliveryAddresTitle"
                    defaultMessage="Delivery Address"
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroup
                  items={userAddress}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.address_type}
                      content={item.address}
                      name="address"
                      checked={item.type === 'primary'}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_ADDRESS',
                          payload: item.id.toString(),
                        })
                      }
                      onEdit={() => handleEditDelete(item, 'edit', 'address')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'address')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      title="Add Adderss"
                      iconPosition="right"
                      colors="primary"
                      size="small"
                      variant="outlined"
                      type="button"
                      intlButtonId="addAddressBtn"
                      onClick={() =>
                        handleModal(updateAddress, {}, 'add-address-modal')
                      }
                    />
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                {/* <Title>
                  <FormattedMessage
                    id="paymentCardTitle"
                    defaultMessage="Payments Card"
                  />
                </Title> */}
              </HeadingSection>
              <PaymentGroup
                name="payment"
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
                    { buttonText: 'Add Card' },
                    'add-address-modal stripe-modal'
                  );
                }}
              />
            </SettingsFormContent>
          </Col>
        </Row>
      </SettingsFormContent>
      <ToastContainer autoClose={2000} />

    </SettingsForm>
  );
};

export default SettingsContent;
