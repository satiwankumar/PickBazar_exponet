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

// const GET_STAFFS = gql`
//   query getStaffs($role: String, $searchBy: String) {
//     staffs(role: $role, searchBy: $searchBy) {
//       id
//       name
//       email
//       contact_number
//       creation_date
//       role
//     }
//   }
// `;

const CREATE_CUSTOMER = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
     
      
    token
    message
    status
  
    }
  }
`;

type Props = any;
toast.configure()
const StaffMemberForm : React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const  form= useForm();
  const [country, setCountry] = React.useState(undefined);
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('');

  const [register] = useMutation(CREATE_CUSTOMER)
  // , {
//     update(cache, { data: { createStaff } }) {
//       const { staffs } = cache.readQuery({
//         query: GET_STAFFS,
//       });

//       cache.writeQuery({
//         query: GET_STAFFS,
//         data: { staffs: staffs.concat([createStaff]) },
//       });
//     },
//   });
  const onSubmit =async (data) => {
    try{
    const {first_name,last_name,email,password} = data

    const newCustomer = {
      first_name:first_name,
      last_name:last_name,
      email:email,
      password:password,
      roles:"2" 

    };
    console.log(data);
  const result =  await  register({ variables: { input: newCustomer } });
   if(result){
    if (result.data.register.status ==200) {
      // console.log(result)

      // alert(toast)
     
     
      toast.success(`🦄  ${result.data.register.message} `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        })
      
      }else{
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
  } catch (error) {
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
        <DrawerTitle>Add Customers </DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={form.handleSubmit(onSubmit)} style={{ height: '100%' }}>
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
                Add Customer name, description and necessary information from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    inputRef={form.register({ required: true, maxLength: 20 })}
                    name="first_name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    inputRef={form.register({ required: true, maxLength: 20 })}
                    name="last_name"
                  />
                </FormFields>

                {/* <FormFields>
                  <FormLabel>Contact No.</FormLabel>
                  <PhoneInput
                    country={country}
                    onCountryChange={({ option }) => setCountry(option)}
                    text={text}
                    onTextChange={(e) => setText(e.currentTarget.value)}
                    inputRef={register({ required: true })}
                    name="contact_number"
                  />
                </FormFields> */}

                <FormFields>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    inputRef={form.register({ required: true })}
                    name="email"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    inputRef={form.register({ required: true })}
                    name="password"
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          {/* <Row>
            <Col lg={4}>
              <FieldDetails>
                Expand or restrict user’s permissions to access certain part of
                 system.
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
          </Row> */}
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
            Add Customer
          </Button>
        </ButtonGroup>
        <ToastContainer autoClose={2000} />

      </Form>
    </>
  );
};

export default StaffMemberForm;
