import React, { useContext ,useCallback} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDrawerDispatch } from '../../context/DrawerContext';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { LOGIN } from '../../graphql/Auth'
import gql from 'graphql-tag';
import { useMutation,useQuery } from '@apollo/react-hooks';


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../context/auth';
import {
  FormFields,
  FormLabel,
  FormTitle,
  Error,
} from '../../components/FormFields/FormFields';
import { Wrapper, FormWrapper, LogoImage, LogoWrapper } from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Logoimage from '../../image/PickBazar.png';
import { FORGOT } from '../../settings/constants';

const GET_SITE_DATA = gql`
  query getSiteSetting{
  getSiteSetting{
        site_name
        site_description
        image
    }
}

`
const initialValues = {
  username: '',
  password: '',
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Username is Required!'),
    password: Yup.string().required('Password is Required!'),
  });
};

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};
toast.configure();
export default () => {

  let history = useHistory();
  let location = useLocation();
  const dispatch = useDrawerDispatch();
  const openCategoryForm = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'CATEGORY_FORM' }),
    [dispatch]
  );

  const {data} = useQuery(GET_SITE_DATA)
  const [login] = useMutation(LOGIN);
  
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  
  if (isAuthenticated) return <Redirect to={{ pathname: '/' }} />;

  let { from } = (location.state as any) || { from: { pathname: '/' } };
  
  
  
  let loginsubmit =async ({username, password}) => {
try{

  const LoginInput = {email:username,password:password,role:"Admin"}

  const result = await login({    variables: {input:LoginInput} });
  if(result){
    if (result.data.login.status ==200) {
      // console.log(result)

      // alert(toast)
     
      authenticate(result.data.login.token, () => {


       
            history.replace(from);
            
                  toast.success(`🦄  ${result.data.login.message} `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

          
        })
   })
        } 
      
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
}



  
 




   
  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={loginsubmit}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <FormFields>
                <LogoWrapper>
                <LogoImage src={`${data && data.getSiteSetting.image}`} alt="Exponent-Admin" />
                </LogoWrapper>
                <FormTitle>Log in to admin</FormTitle>
              </FormFields>

              <FormFields>
                <FormLabel>Email</FormLabel>
                <Field
                  type="email"
                  name="username"
                  component={MyInput}
                  placeholder="Email"
                />
                {errors.username && touched.username && (
                  <Error>{errors.username}</Error>
                )}
              </FormFields>
              <FormFields>
                <FormLabel>Password</FormLabel>
                <Field
                  type="password"
                  name="password"
                  component={MyInput}
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </FormFields>
              {/* <button type="button"   onClick={() => history.push(FORGOT)} >Forgot password</button> */}
              <Button
                type="submit"
                disabled={isSubmitting}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      width: '100%',
                      marginLeft: 'auto',
                      borderTopLeftRadius: '3px',
                      borderTopRightRadius: '3px',
                      borderBottomLeftRadius: '3px',
                      borderBottomRightRadius: '3px',
                    }),
                  },
                }}
              >
                Submit
              </Button>

                  

            </Form>
          )}
          validationSchema={getLoginValidationSchema}
        />
          <ToastContainer autoClose={2000} />
      </FormWrapper>
   
    </Wrapper>
    
  );
};
