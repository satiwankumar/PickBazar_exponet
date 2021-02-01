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
import { RESET_PASSWORD } from 'graphql/mutation/Auth';





toast.configure()
function ForgotCode() {
    const router = useRouter()

  const { authState:{isAuthenticated}, authDispatch } = useContext<any>(AuthContext);
  const [newpassword, setNewPassword] = React.useState('');
  const [confirmpassword,setConfirmPassword] = React.useState('');


  const [resetPassword] = useMutation(RESET_PASSWORD)

// let checking = router.query && router.query.code?true:false
// if(!checking){
//     //   toast.error(`🦄  Invalid Code `, {
//     //     position: "top-right",
//     //     autoClose: 5000,
//     //     hideProgressBar: false,
//     //     closeOnClick: true,
//     //     pauseOnHover: true,
//     //     draggable: true,
//     //     progress: undefined,




//     //     })
//  router.push('/resetpassword')
let code = router.query.resetCode
// }

  const HandleForgot = async (e) => {
    try {
      e.preventDefault()
      
    //  const ForgotPasswordInput = {email:email}
    console.log("code",router.query.resetCode)


    if(newpassword!==confirmpassword){
        return  toast.error(`🦄  password Mismatch `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
    
    
    
            })
    }    

      const result = await resetPassword({
  
        variables: {code:router.query.resetCode, password:newpassword}
      })
   
    //   console.log("dataaaa",result.data)
  
      if (result.data.resetPassword.status ==200) {
        // console.log(result)
          // localStorage.setItem('access_token', `password Sent Successfully`);
          // alert("toast")
          toast.success(`🦄  Password Changed Successfully `, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    
            })
            router.push('/signin')
           
         
         
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
  }

  if(isAuthenticated){
    router.push('/')
     }
  return (
    <div className="">
    <div className="container">
       <div className="row">
         <div className="col-lg-6 offset-lg-3">
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
        <div className="position-relative">
        <Input type='password' placeholder={"Enter New Password"} value={newpassword} required="true"  onChange={(e) => setNewPassword(e.target.value)} />
        <button className="view-pass-btn" ><i className="fa fa-eye"></i></button>
        </div>
        <div className="position-relative">
        <Input type='password' placeholder={"Enter Confirm Password"} value={confirmpassword} required="true"  onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="view-pass-btn" ><i className="fa fa-eye"></i></button>
        </div>
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
    </div>
    </div>
    </div>
    </div>
    
  );
}
export default withApollo(ForgotCode)