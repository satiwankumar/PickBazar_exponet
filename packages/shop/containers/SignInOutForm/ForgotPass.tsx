import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import gql from 'graphql-tag';

import {
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  Input,
  Button,
  LinkButton,
  Offer,
} from './SignInOutForm.style';
import { FormattedMessage } from 'react-intl';
import { AuthContext } from 'contexts/auth/auth.context';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';
// import { FORGOT } from 'graphql/mutation/Auth';



export const FORGOT_PASSWORD = gql`  
mutation forgotPassword($input: ForgotPasswordInput!){
forgotPassword(input : $input ) {
  status
  message
}
}
`

toast.configure()
export default function ForgotCode() {
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');

  const [forgotPassword] = useMutation(FORGOT_PASSWORD)

  const HandleForgot = async (e) => {
    try {
      e.preventDefault()
      
    //  const ForgotPasswordInput = {email:email}
  
  
      const result = await forgotPassword({
  
        variables: {input:{email:email}
      }
      });
      console.log("dataaaa",result.data)
  
      if (result.data) {
        // console.log(result)
          // localStorage.setItem('access_token', `password Sent Successfully`);
          // alert("toast")
          toast.success(`🦄  Reset Code sent Successfully to Email `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
    
    
    
            })
          // authDispatch({ type: 'SIGNIN_SUCCESS' });
         
         
          // closeModal();
        }else{
          toast.warn(`🦄  Invalid Credentials `, {
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
      console.log("errror",error)
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

  
// else{
//   console.log("Invalid Credentials")
// }

  };


  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };



  return (
    <Wrapper>
      
      <Container style={{ paddingBottom: 30 }}>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}
  <form onSubmit={(e) => HandleForgot(e)}>
        <Heading>
          <FormattedMessage
            id='forgotPassText'
            defaultMessage='Forgot Password'
          />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='sendResetPassText'
            defaultMessage="We'll send you a link to reset your password"
          />
        </SubHeading>

        {/* <FormattedMessage
          id='emailAddressPlaceholder'
          defaultMessage='Email Address or Contact No.'
        >
         
        </FormattedMessage> */}
        <Input type='text' placeholder={"Enter Email Address"}  onChange={(e) => setEmail(e.target.value)} />
        <Button
          fullwidth
          title={'Reset Password'}
          intlButtonId='resetPasswordBtn'
          style={{ color: '#fff' }}
          type="submit"
        />
        
        <Offer style={{ padding: '20px 0 0' }}>
          <FormattedMessage id='backToSign' defaultMessage='Back to' />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </form>

      </Container>
      
      <ToastContainer autoClose={3000}/>

    </Wrapper>
  );
}
