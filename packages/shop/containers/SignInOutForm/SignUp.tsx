import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import {REGISTER} from '../../graphql/mutation/Auth'
import {useMutation} from '@apollo/react-hooks'
import {
  Button,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  Divider,
  LinkButton,
} from './SignInOutForm.style';
import { Facebook, Google } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';

export default function SignOutModal() {
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [first_name, setfirstname] = React.useState('');
  const [last_name, setlastname] = React.useState('');
  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };


// const RegisterInput = {
//     // console.log(email,password,first_name,last_name)

 
// }


const [register,{data}]  = useMutation(REGISTER)
  const SigupCallback = async (e)=>{
    
    try {
      e.preventDefault()
      console.log("dataaa",email,password,first_name,last_name)
  
      const result =  await register({
        variables: {input:{ first_name:first_name,last_name:last_name,email: email, password: password,roles:"2"}}
      })
      console.log("dataaa",result)
        if(result.data){
            
          toggleSignInForm()
         
          
         
              toast.success(`🦄  ${result.data.register.message} `, {
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
      <Container>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}
<form  onSubmit={(e) => SigupCallback(e)}>
          <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>

        
        <FormattedMessage
          id='firstname'
          defaultMessage='Last name'
        >
          {placeholder => <Input type='text' value={first_name} name="first_name" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)} required/>}
        </FormattedMessage><FormattedMessage
          id='lastname'
          defaultMessage='First name'
        >
          {placeholder => <Input type='text' value={last_name} name="last_name" placeholder="Last name" onChange={(e)=>setlastname(e.target.value)} required/>}
        </FormattedMessage>
        <FormattedMessage
          id='emailAddressPlaceholder'
          defaultMessage='Email Address'
        >
          {placeholder => <Input type='email' value={email} name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>}
        </FormattedMessage>
        <FormattedMessage
          id='passwordPlaceholder'
          defaultMessage='Password (min 6 characters)'
        >
          {placeholder => <Input type='password' value={password} name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} minlength="8" required/>}
        </FormattedMessage>
        

        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage
            id='signUpText'
            defaultMessage="By signing up, you agree to Pickbazar's"
          />{' '}
          <Link href='/'>
            <a>
              <FormattedMessage
                id='termsConditionText'
                defaultMessage='Terms &amp; Condtion'
              />
            </a>
          </Link>
        </HelperText>

        <Button
          fullwidth
          title={'Continue'}
          intlButtonId='continueBtn'
          style={{ color: '#fff' }}
          type="submit"
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
          iconPosition='left'
          className='facebook'
          icon={<Facebook />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          style={{ color: '#fff' }}
        />

        <Button
          fullwidth
          title={'Continue with Google'}
          className='google'
          iconPosition='left'
          icon={<Google />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          style={{ color: '#fff' }}
        /> */}
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
      <ToastContainer autoClose={2000}/>
    </Wrapper>
  );
}
