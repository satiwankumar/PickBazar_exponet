import gql from 'graphql-tag';

export const APPLY_COUPON = gql`
mutation applyCoupon($code: String!){
  applyCoupon(coupon: $code)
}

`;
  // mutation applyCoupon($code: String!) {
  //   applyCoupon(code: $code) {
  //     id
  //     code
  //     discountInPercent
  //   }
  // }