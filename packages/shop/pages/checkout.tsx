import React, { useState } from 'react';
import { NextPage } from 'next';
import { openModal } from '@redq/reuse-modal';
import $ from 'jquery';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Checkout from 'containers/CheckoutWithSidebar/CheckoutWithSidebar - Copy';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from '../containers/SignInOutForm/Form';
import Router from 'next/router'

import { ProfileProvider } from 'contexts/profile/profile.provider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Loader from 'components/Loader/Loader'
const stripePromise = loadStripe('pk_test_HAorAMBpZdnSy3XeSoEc7EHZ00GmySthxL');

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  // const router = useRouter()

//   const handleJoin = () => {
//     authDispatch({
//       type: 'SIGNIN'
//     })
//     openModal({
//       show: true,
//       overlayClassName: 'quick-view-overlay',
//       closeOnClickOutside: true,
//       component: AuthenticationForm,
//       closeComponent: '',
//       config: {
//         enableResizing: false,
//         disableDragging: true,
//         className: 'quick-view-modal',
//         width: 458,
//         height: 'auto',
//       },
//     });
//   }

//   const testing = () => {
//     <div id="one" style={{ margin: "50px", zIndex: 1 , padding: "500px" }} onClick={() => openModal({
//      show: true,
//      overlayClassName: 'quick-view-overlay',
//      closeOnClickOutside: true,
//      component: AuthenticationForm,
//      closeComponent: '',
//      config: {
//        enableResizing: false,
//        disableDragging: true,
//        className: 'quick-view-modal',
//        width: 458,
//        height: 'auto',
//      },
//    })}><h1 id="el1" >CLIck me</h1></div>
 
//  }
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  let data = ""
  console.log("isAuthenticated", isAuthenticated)
let datass ={}
let loadings = false;
  if (isAuthenticated) {

    const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
    if (loading) {
      return (
        <>
        <div className="loading">loading</div>
        <Loader/>
        </>
      );
    }
    loadings=loading
    
    if (error) return <div>{error} </div>;
  datass=data&& data.profile

  }else{
    datass ={userAddress:[]}
  }



  const token = 'true';
  return (
    <>
      {/* {isAuthenticated ? */}
        {/* <>
          <SEO title='Checkout - Exponet' description='Checkout Details' />
          <ProfileProvider initData={datass}>
            <Modal>
              <Elements stripe={stripePromise}>
              <Checkout token={token} deviceType={deviceType} />
              </Elements>

            </Modal>
          </ProfileProvider> </> : */}
        <>
        {!loadings?
         ( 
         <><SEO title='Checkout - Exponet' description='Checkout Details' />
          <ProfileProvider initData={datass}>
            <Modal>
              <Elements stripe={stripePromise}>
              <Checkout token={token} deviceType={deviceType} />
              </Elements>
         
            </Modal>
          </ProfileProvider>
          </>):<Loader/>
          
          } </> :

    </>
  );
};

export default withApollo(CheckoutPage);