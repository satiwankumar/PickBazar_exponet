import React, { useState } from 'react';
import { NextPage } from 'next';
import { openModal } from '@redq/reuse-modal';
import $ from 'jquery';

import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Checkout from 'containers/CheckoutWithSidebar/CheckoutWithSidebar';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from '../containers/SignInOutForm/Form';

import { ProfileProvider } from 'contexts/profile/profile.provider';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const CheckoutPage: NextPage<Props> = ({ deviceType }) => {

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN'
    })
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  }

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  let data = ""
  console.log("isAuthenticated", isAuthenticated)
  if (isAuthenticated) {

    const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
    if (loading) {
      return <div>loading...</div>;
    }
    if (error) return <div>{error} </div>;
  }
  else {
    console.log("error called");



  }

  const testing = () => {
     <div id="one" style={{ margin: "50px", zIndex: 1 , padding: "500px" }} onClick={() => openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    })}><h1 id="el1" >CLIck me</h1></div>
  
  }





  const token = 'true';
  return (
    <>
      {isAuthenticated ?
        <>
          <SEO title='Checkout - Exponet' description='Checkout Details' />
          <ProfileProvider initData={data}>
            <Modal>
              <Checkout token={token} deviceType={deviceType} />
              {testing()}
            </Modal>
          </ProfileProvider> </> :
        <>
          <SEO title='Checkout - Exponet' description='Checkout Details' />
          <ProfileProvider initData={data}>
            <Modal>
              {/* <Checkout token={token} deviceType={deviceType} /> */}
              
              {testing()
              
              }
              
            </Modal>
          </ProfileProvider> </>
      }
    </>
  );
};

export default withApollo(CheckoutPage);
