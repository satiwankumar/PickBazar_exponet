import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';

import Router,{useRouter} from 'next/router'
import OrderRecivedWrapper, {
  OrderRecivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
} from './OrderReceived.style';
import { FormattedMessage } from 'react-intl';
import { useQuery } from '@apollo/react-hooks';
// import {GET_ORDER_DETAIL} from 'graphql/query/order.query'


const GET_ORDER_DETAIL = gql`
query getOrderById($order_id:Int) {
    getOrderById(order_id:$order_id){
        id
        customer_id
        shipping_address_1
        total
        created_at
        payment_method
        customer_phone
        status
        products{
            id
             slug
   price
   selling_price
   unit
   qty
   actual_size
   nominal_size
   name
   description
   productVariations{
   variations{
       id
       variation_name
       variation_quantity
variation_price
   }
   }
  
        }
         
    
}
}`

type OrderRecivedProps = {};

const OrderRecived: React.FunctionComponent<OrderRecivedProps> = props => {
const{query} = useRouter()
console.log("Checkoutdata",query)
const { data, error, refetch, fetchMore } = useQuery(GET_ORDER_DETAIL, {

  variables: { order_id:query.order_id?query.order_id:null}

});
  if(error){
    return <div>Error! {error.message}</div>;
  }

  return (
    
    
    <OrderRecivedWrapper>
      <OrderRecivedContainer>
        <Link href="/">
          <a className="home-btn">
            <FormattedMessage id="backHomeBtn" defaultMessage="Back to Home" />
          </a>
        </Link>

        <OrderInfo>
          <BlockTitle>
            <FormattedMessage
              id="orderReceivedText"
              defaultMessage="Order Received"
            />
          </BlockTitle>

          <Text>
            <FormattedMessage
              id="orderReceivedSuccess"
              defaultMessage="Thank you. Your order has been received"
            />
          </Text>

          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="orderNumberText"
                  defaultMessage="Order Number"
                />
              </Text>
              <Text>{data&&data.getOrderById[0].id}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="orderDateText" defaultMessage="Date" />
              </Text>
              <Text>{data&&data.getOrderById[0].created_at}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
              <Text>{data&&data.getOrderById[0].total}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
              <Text>
              {data&&data.getOrderById[0].payment_method}
              </Text>
            </InfoBlock>
          </InfoBlockWrapper>
        </OrderInfo>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id="orderDetailsText"
              defaultMessage="Order Details"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="totalItemText"
                  defaultMessage="Total Item"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>6 Items</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="orderTimeText"
                  defaultMessage="Order Time"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text> {data&&data.getOrderById[0].created_at}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                {/* <FormattedMessage
                  id="deliveryTimeText"
                  defaultMessage="Delivery Time"
                /> */}
                Customer ID
              </Text>
            </ListTitle>
            <ListDes>
              <Text>  {data&&data.getOrderById[0].customer_id}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryLocationText"
                  defaultMessage="Delivery Location"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>
              {data&&data.getOrderById[0].shipping_address_1}
              </Text>
            </ListDes>
          </ListItem>
        </OrderDetails>

        <TotalAmount>
          <BlockTitle>
            <FormattedMessage
              id="totalAmountText"
              defaultMessage="Total Amount"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="subTotal" defaultMessage="Sub total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data&&data.getOrderById[0].total}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data&&data.getOrderById[0].payment_method}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymentMethodName"
                  defaultMessage="Delivery Charge"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>10</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data&&data.getOrderById[0].total}</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderRecivedContainer>
    </OrderRecivedWrapper>
  );
};

export default OrderRecived;
