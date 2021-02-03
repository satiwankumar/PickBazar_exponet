import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    return (
        <CardElement options={{
          hidePostalCode:true,
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}  />
    );
  };

export default CheckoutForm
