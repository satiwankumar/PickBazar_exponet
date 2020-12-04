import gql from 'graphql-tag';

export const CHECK_OUT = gql`
  mutation($input: CheckoutInput) {
    checkout(input: $input) 
     
  }
`;
// mutation{
//     checkout(input: {
//   _token: "ysdNMsZF3nl5waFG9am27dxOyxAgCvQadmNLUErT",
//   customer_email: "jizogubosu@mailinator.com",
//   customer_phone: "+1 (772) 895-7472",
//   is_billing: "false"
//   is_shipping: "false"
//   sub_total: 200
//   shipping_cost: 0
//   coupon_id: null
//   discount: 0
//   total: 200
//   currency: "AE"
//   currency_rate: "27.5"
//   billing: {
//     first_name: "Graiden",
//     last_name: "Castro",
//     address_1: "574 South Cowley Avenue",
//     address_2: "Quisquam recusandae",
//     city: "Totam aspernatur acc",
//     zip: "48368",
//     country: "AE",
//     state: "Dolore recusandae E"
//   },
//   ship_to_a_different_address: "0",
//   shipping: {
//   first_name: "Graiden",
//     last_name: "Castro",
//     address_1: "574 South Cowley Avenue",
//     address_2: null,
//     city: "Totam aspernatur acc",
//     zip: "48368",
//     country: "AE",
//     state: "Dolore recusandae E"
//   },
//   delivery_time:{
//       date: null
//       min_time: null
//       max_time: null
//   },
//   locale: "en",
//   payment_method: "stripe",
//   shipping_method: "free_shipping",
//   terms_and_conditions: "on",
//   service_charge: 0,
//   tax: 0,
//   items:[
//     {
//       product_id: 58,
//       unit_price: 8,
//       qty: 2,
//     }
//   ],
// })
// }