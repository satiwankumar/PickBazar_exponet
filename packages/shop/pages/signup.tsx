import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import {REGISTER} from '../graphql/mutation/Auth'
import { withApollo } from 'helper/apollo';
import { useForm } from 'react-hook-form';

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
} from '../containers/SignInOutForm/SignInOutForm.style';
import { Facebook, Google } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';
import { SEO } from 'components/seo';

 function SignUp() {
    const router = useRouter()
  const { register:validation, handleSubmit,errors, setValue } = useForm();
     
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');

  const [first_name, setfirstname] = React.useState('');
  const [last_name, setlastname] = React.useState('');
  const [phone_number, setPhoneNumber] = React.useState('');
  const [phone_number_secondary, setSecondaryPhone] = React.useState('');


  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };


// const RegisterInput = {
//     // console.log(email,password,first_name,last_name)

 
// }


const [register,{data}]  = useMutation(REGISTER)
  const SigupCallback = async (data,e)=>{
    
    try {
      e.preventDefault()
      console.log("dataaa",email,password,first_name,last_name,confirmpassword,phone_number,phone_number_secondary)

      if(confirmpassword!==password){

        toast.error(`🦄 Confirm Password doesnot Match`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
        return 
      }


  
      const result =  await register({
        variables: {input:{ first_name:first_name,last_name:last_name,email: email, password: password,roles:"2",phone_number:phone_number??0,phone_number_secondary:phone_number_secondary??0}}
      })
      console.log("dataaa",result)
        if(result.data){
            
        //   toggleSignInForm()
         
          
         
              toast.success(`🦄 You are Registered Successfylly Please Login to proceed`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        
        
        
        
                })

            }
             router.push('/signin')
    
            
   
        
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
    <div className="">
<SEO title='Sign Up - Exponent' description='Sign Up Details' />

    <div className="container">
       <div className="row">
         <div className="col-lg-6 offset-lg-3">
    <Wrapper>
      <Container>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}
<form  onSubmit={handleSubmit(SigupCallback)}>
          <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>

        
    
       <Input type='text' value={first_name} name="first_name" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)}  ref={validation({ required: true })} />
       {errors.first_name && <span  style={{color: "red",margin:" 0px 326px 0px 0px"}}>This field  is required</span>}
       
    
        
        
   
      <Input type='text' value={last_name} name="last_name" placeholder="Last name"  onChange={(e)=>setlastname(e.target.value)} ref={validation({ required: true })} />
      {errors.last_name && <span  style={{color: "red",margin:" 0px 326px 0px 0px"}}>This field  is required</span>}
      
    
        <Input type='email' value={email} name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} ref={validation({ required: true })} />
       {errors.email && <span  style={{color: "red",margin:" 0px 326px 0px 0px"}}>This field  is required</span>}
        
   
     <Input type='password' value={password} name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} ref={validation({ required: true })} minlength="8" />
          {errors.password && <span  style={{color: "red",margin:" 0px 326px 0px 0px"}}>This field  is required</span>}

        <button className="view-pass-btn" ><i className="fa fa-eye"></i></button>
   
        <div className="position-relative">
      <Input type='password' value={confirmpassword} name="confirmpassword" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} ref={validation({ required: true })} minlength="8" />
      {errors.password && <span  style={{color: "red",margin:" 0px 326px 0px 0px"}}>This field  is required</span>}
   

    
          <Input type='text' value={phone_number} name="phone_number" placeholder="Phone no" onChange={(e)=>setPhoneNumber(e.target.value)}  />
   
    
         <Input type='text' value={phone_number_secondary} name="phone_number_secondary" placeholder="Secondary Phone no" onChange={(e)=>setSecondaryPhone(e.target.value)}  />
   
        <button className="view-pass-btn" ><i className="fa fa-eye"></i></button>
        </div>

        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage
            id='signUpText'
            defaultMessage="By signing up, you agree to Exponet's"
          />{' '}
          <Link href='/'>
            <a>
              <FormattedMessage
                id='termsConditionText'
                defaultMessage='Terms &amp; Conditions'
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
            <LinkButton onClick={()=>router.push('/signin')}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
      <ToastContainer autoClose={2000}/>
    </Wrapper>
    
    </div>
   </div>
   </div>
   </div>
  );
}
export default withApollo(SignUp)