import React, { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/CheckBox/CheckBox';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import Button, { KIND } from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';

const roleSelectOptions = [
  { value: '1', label: 'Admin' },
  { value: '2', label: 'Customer' },
  { value: '3', label: 'Manager' },
  { value: '4', label: 'Delivery boy' },
];



const CREATE_STAFF = gql`
  mutation registerStaffMember($input: StaffMemberInput) {
    registerStaffMember(input: $input) {
      token
       message
     status
    }
  }
`;

type Props = any;
toast.configure()
const StaffMemberForm: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const { register, handleSubmit,errors } = useForm();
  const [role, setRole] = React.useState([]);

  const [country, setCountry] = React.useState(undefined);

  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('');

  const [createStaff] = useMutation(CREATE_STAFF)
  function handleCategory({ value }) {
    setRole(value);
  
  }
  // , {
    // update(cache, { data: { createStaff } }) {
    //   // const { staffs } = cache.readQuery({
    //   //   query: GET_STAFFS,
    //   // });

    //   // cache.writeQuery({
    //   //   query: GET_STAFFS,
    //   //   data: { staffs: staffs.concat([createStaff]) },
    //   // });
    // },
  // });
  const onSubmit =async (data) => {
  try{
    console.log("Data",data)
    // const StaffMemberInput = {
    //   first_name:data.first_name,
    //   last_name:data.last_name,
    //   email:data.email,
    //   phone_number:data.phone_number,
    //   role: role[0].value
    // };
    console.log(data);
    const result = await createStaff({ variables: { input:  {
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      phone_number:data.phone_number,
      roles: role.length>0 ? role[0].value:2
    } } });

    if(result){
      if (result.data.registerStaffMember.status ==200) {
        // console.log(result)

              
                    toast.success(`🦄  ${result.data.registerStaffMember.message} `, {
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
  }

    closeDrawer();
    
setTimeout(() => {
  window.location.reload()
  
}, 3000);
  
  }
  catch (error) {
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

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Staff Member</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add staff name, description and necessary information from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="first_name"
                    
                  />
                    {errors.first_name && <span className="text-danger">This field is required</span>}
                </FormFields>

                <FormFields>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="last_name"
                  />
                   {errors.last_name && <span className="text-danger">This field is required</span>}
                </FormFields>

                <div className="contact-field">
                <FormFields>
                  <FormLabel>Contact No.</FormLabel>
                  <PhoneInput
                    
                    country={country}
                    onCountryChange={({ option }) => setCountry(option)}
                    text={text}
                    onTextChange={(e) => setText(e.currentTarget.value)}
                    inputRef={register({ required: true })}
                    name="phone_number"
                    required="true"
                    
                  />
                   {errors.phone_number && <span className="text-danger">This field is required</span>}
                  
                </FormFields>
                </div>
                <FormFields>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    inputRef={register({ required: true })}
                    name="email"
                  />
                   {errors.email && <span className="text-danger">This field is required</span>}

                </FormFields>
                <FormFields>
                  <FormLabel>Role</FormLabel>
                  <Col sm={12} >
                  <Select
                   
                    options={roleSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Role"
                    value={role}
                    searchable={false}
                    onChange={handleCategory}
                    inputRef={register({
                      required: true
                   })}
                    name="Role"
                    required="required"
                  />
                   {errors.Role && <span className="text-danger">This field is required</span>}

                </Col>
                </FormFields> 
             

              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Expand or restrict user’s permissions to access certain part of
                pickbazar system.
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    inputRef={register}
                    overrides={{
                      Label: {
                        style: ({ $theme }) => ({
                          color: $theme.colors.textNormal,
                        }),
                      },
                    }}
                  >
                    Access for created account
                  </Checkbox>
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Add Staff
          </Button>
        </ButtonGroup>
        <ToastContainer autoClose={2000} />

      </Form>
    </>
  );
};

export default StaffMemberForm;
