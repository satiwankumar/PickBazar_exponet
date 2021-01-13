import React, { useContext } from 'react';

import { LOGIN } from '../graphql/mutation/Auth'
import { useMutation } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { withApollo } from 'helper/apollo';
import {
  LinkButton,
  Button,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Input,
  Divider,
} from 'containers/SignInOutForm/SignInOutForm.style';

import { Facebook, Google } from 'components/AllSvgIcon';//ye he na bas jo function banao iske andar naam de do
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';












 function SignIn() {
    const router = useRouter()
    
    
  const { authState:{isAuthenticated},authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const [login,{data}] = useMutation(LOGIN);

  const loginCallback = async (e) => {
    try {
      e.preventDefault()
      console.log(email, password)
      toast.configure();
     const LoginInput = {email:email,password:password,role:"Customer"}
  
  
      const result = await login({
  
        variables: {input:LoginInput}
      });
      console.log("dataaaa",result.data)
  
      if (result.data) {
          
        // console.log(result)
          localStorage.setItem('access_token', `${result.data.login.token}`);
          // alert("toast")
          toast.success(`🦄  ${result.data.login.message} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
    
    
    
            })

          authDispatch({ type: 'SIGNIN_SUCCESS' });
          if (router.query && router.query.from) {
              let url = router.query.from
            router.push(`${router.query.from}`);
            }
            else{
        router.push('/')
    }
        //   closeModal();
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
  if(isAuthenticated){
router.push('/')
 }
 
  return (
 <div className="">
<div className="container">
   <div className="row">
     <div className="col-lg-6 offset-lg-3">
    <Wrapper>
      <Container>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}

        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
        <form onSubmit={(e) => loginCallback(e)}>
          <FormattedMessage
            id='emailAddressPlaceholder'
            defaultMessage='Email Address.'
          >
            {(placeholder) => (
              <Input
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
          </FormattedMessage>
              <div className="position-relative">
          <FormattedMessage
            id='passwordPlaceholder'
            defaultMessage='Password (min 6 characters)'
            values={{ minCharacter: 6 }}
          >
            {(placeholder) => (
              <Input
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            )}
            
          </FormattedMessage>
          <button className="view-pass-btn" ><i className="fa fa-eye"></i></button>
          </div>
          

          <Button
            fullwidth
            title={'Continue'}
            intlButtonId='continueBtn'
            type='submit'
            style={{ color: '#fff' }}
          />
          
        </form>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>

        {/* <Button
          fullwidth
          title={'Continue with Facebook'}
          className='facebook'
          icon={<Facebook />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          onClick={loginCallback}
          style={{ color: '#fff' }}
        />

        <Button
          fullwidth
          title={'Continue with Google'}
          className='google'
          icon={<Google />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          onClick={loginCallback}
          style={{ color: '#fff' }}
        /> */}

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={()=>router.push('/signup')}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
        {/* <a href="#" className="back-to-login"><i className="fa fa-angle-left"></i> back to login</a> */}
      <ToastContainer />

      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={()=>router.push('/forgot')}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
    </div>
   </div>
   </div>
   </div>
  );
}


export default withApollo(SignIn)