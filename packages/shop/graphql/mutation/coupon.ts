import gql from 'graphql-tag';

export const APPLY_COUPON = gql`
mutation applyCoupon($coupon: String!){
  applyCoupon(coupon: $coupon){
    data{
          id
          name
          code
          value
          is_percent
          free_shipping
          start_date
          end_date
          is_active
          used
    }
    message
    status
}
}

`;
  // mutation applyCoupon($code: String!) {
  //   applyCoupon(code: $code) {
  //     id
  //     code
  //     discountInPercent
  //   }
  // }