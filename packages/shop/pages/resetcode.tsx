import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import gql from 'graphql-tag';
import { useRouter } from 'next/router'
import { withApollo } from 'helper/apollo';
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
} from 'containers/SignInOutForm/SignInOutForm.style';
import { FormattedMessage } from 'react-intl';
import { AuthContext } from 'contexts/auth/auth.context';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';
import { FORGOT_CODE } from 'graphql/mutation/Auth';





toast.configure()
function ForgotCode() {
    const router = useRouter()

  const { authState:{isAuthenticated}, authDispatch } = useContext<any>(AuthContext);
  const [code, setresetCode] = React.useState('');

  const [forgotCode] = useMutation(FORGOT_CODE)

  const HandleForgot = async (e) => {
    try {
      e.preventDefault()
      
    //  const ForgotPasswordInput = {email:email}
  
  
      const result = await forgotCode({
  
        variables: {code:code}
      })
   
      console.log("dataaaa",result.data)
  
      if (result.data.forgotCode.status ==200) {
        // console.log(result)
          // localStorage.setItem('access_token', `password Sent Successfully`);
          // alert("toast")
          toast.success(`🦄  Verified Code Successfully `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
            })
            console.log("resetcode",code)
            router.push({
                pathname:'/resetcode',
                query:{resetCode:code}
            })
          // authDispatch({ type: 'SIGNIN_SUCCESS' });
         
         
          // closeModal();
        }else{
          toast.warn(`🦄  Invalid Code `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
    
    
    
            })


        }
        router.push('resetpassword')
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


//   const toggleSignInForm = () => {
//     authDispatch({
//       type: 'SIGNIN',
//     });
//   };
  if(isAuthenticated){
    router.push('/')
     }


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
        <Input type='text' placeholder={"Enter reset Code"} required="true"  onChange={(e) => setresetCode(e.target.value)} />
        <Button
          fullwidth
          title={'Reset Password'}
          intlButtonId='resetPasswordBtn'
          style={{ color: '#fff' }}
          type="submit"
        />
        
        {/* <Offer style={{ padding: '20px 0 0' }}>
          <FormattedMessage id='backToSign' defaultMessage='Back to' />{' '}
          <LinkButton onClick={()=>router.push('/forgot')}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer> */}
      </form>

      </Container>
      
      <ToastContainer autoClose={3000}/>

    </Wrapper>
  );
}
export default withApollo(ForgotCode)