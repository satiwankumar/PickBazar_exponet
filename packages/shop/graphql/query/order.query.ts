import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
 query getOrder(order_filter_by_status: null,order_filter_by_address:null){
     getOrder{
        id
        customer_id
        shipping_address_1
        total
        created_at
        payment_method
        customer_phone
        status
    }
}
}`