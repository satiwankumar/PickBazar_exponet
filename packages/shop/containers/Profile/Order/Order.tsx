import React, { useState, useEffect, useContext} from 'react';
import gql from 'graphql-tag';
import Moment from 'react-moment';

import { Scrollbars } from 'react-custom-scrollbars';
import { useQuery } from '@apollo/react-hooks';
import {getURl} from '../../../utils'
// import Loading from 'components/Loader/Loader'
import {
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  NoOrderFound,
} from './Order.style';
import { AuthContext, } from 'contexts/auth/auth.context';

import OrderDetails from './SingleOrderDetails/OrderDetails';
import OrderCard from './OrderCard/OrderCard';
import OrderCardMobile from './OrderCard/orderCardMobile';
import useComponentSize from 'helper/useComponentSize';
import { FormattedMessage } from 'react-intl';
import {useRouter} from 'next/router'
import Loader from 'components/Loader/Loader';
const progressData = ['Order Received', 'Order On The Way', 'Order Delivered'];




const GET_ORDERS = gql`
query getOrderByCustomer{
  getOrderByCustomer{
    id
        customer_id
        shipping_address_1
        total
        created_at
        payment_method
        customer_phone
        status
        
        orderVariation{
   variations{
       id
       variation_name
       variation_quantity
variation_price
  variation_sell_price
   }
   product{
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
  
        }
   }
    }
}

  # query getAllOrders($text: String, $user: Int!, $limit: Int) {
  #   orders(text: $text, limit: $limit, user: $user) {
  #     id
  #     status
  #     shipping_address_1
  #     amount
  #     date
  #     subtotal
  #     deliveryFee
  #     discount
  #     deliveryTime
  #     products {
  #       title
  #       price
  #       total
  #       image
  #       weight
  #       quantity
  #       id
  #     }
  #   }
  # }
`;

const orderTableColumns = [
  {
    title: <FormattedMessage id='cartItems' defaultMessage='Items' />,
    dataIndex: '',
    key: 'items',
    width: 250,
    ellipsis: true,
    render: (text, record,key) => {
    console.log("record",key)
      return (
        <ItemWrapper>
          {/* <ImageWrapper>
            <img src={record.productImages.length>0&& record.productImages[0].image!==undefined?getURl(record.productImages[0].image):""} alt={record.name} />
          </ImageWrapper> */}

          <ItemDetails>
            <ItemName>{`${record.variations.variation_name} of ${record.variations.variation_quantity}`}</ItemName>
            {/* {/* <ItemSize>{record.qty}</ItemSize> */}
            {/* <ItemPrice>${record.variations.variation_sell_price?record.variations.variation_sell_price:record.variations.variation_price}</ItemPrice>  */}
          </ItemDetails>
        </ItemWrapper>
      );
    },
  },
  // {
  //   title: (
  //     <FormattedMessage id='intlTableColTitle2' defaultMessage='Quantity' />
  //   ),
  //   dataIndex: 'variation_quantity',
  //   key: 'variations.variation_quantity',
  //   align: 'center',
  //   width: 100,
  // },
  
  {
    title: <FormattedMessage id='intlTableColTitle3' defaultMessage='Price' />,
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    width: 100,
    render: (text, record) => {
      return <p>${record.variations.variation_sell_price?record.variations.variation_sell_price:record.variations.variation_price}</p>;
    },
  },
];

type OrderTableProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const OrdersContent: React.FC<OrderTableProps> = ({
  deviceType: { mobile, tablet, desktop },
}) => {
  const { authState:{isAuthenticated},authDispatch } = useContext<any>(AuthContext);
  const router = useRouter()
 
  useEffect(() => {
    if(!isAuthenticated){ 
    router.push('/signin');
    return
    }
})
  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');

  const [targetRef, size] = useComponentSize();
  const orderListHeight = size.height - 79;

  const { data, error, loading } = useQuery(GET_ORDERS);
  console.log("dataaaa",data)


 
  useEffect(() => {
    if (data && data.getOrderByCustomer && data.getOrderByCustomer.length !== 0) {
      setOrder(data &&data.getOrderByCustomer[0]);
      setActive(data && data.getOrderByCustomer[0].id);
    }
  }, [data && data.getOrderByCustomer]);

  if (loading) {
    return (
      <>
      <div className="loading">loading</div>
      <Loader/>
      </>
    );
  }

  if (error) return <div>{error.message}</div>;

  const handleClick = order => {
    setOrder(order);
    setActive(order.id);
  };

  // console.log(data.getOrderByCustomer, 'data.getOrderByCustomer', order, 'order');
const getStatus=(status)=>{
 return  status.toLowerCase()=="pending"?1:status.toLowerCase()=="processing"?2:status.toLowerCase()=="delivered"?3:1
}
// console.log("status",getStatus("delivered"))
const  getDate = (date)=>{
  return <Moment format='Do MMM YYYY'>{date}</Moment>

}
const  getTime = (time)=>{
  return <Moment format='h:mm:ss a'>{time}</Moment>


}

  return (
    <OrderBox>
      {desktop && (
        <>
          <OrderListWrapper style={{ height: size.height }}>
            <Title style={{ padding: '0 20px' }}>
              <FormattedMessage
                id='intlOrderPageTitle'
                defaultMessage='My Order'
              />
            </Title>

            <Scrollbars
              universal
              autoHide
              autoHeight
              autoHeightMin={420}
              autoHeightMax={isNaN(orderListHeight) ? 500 : orderListHeight}
            >
              <OrderList>
                {data.getOrderByCustomer.length !== 0 ? (
                  data.getOrderByCustomer.map((order: any) => (
                    <OrderCard
                      key={order.id}
                      orderId={order.id}
                      className={order && order.id === active ? 'active' : ''}
                      status={progressData[ getStatus(order.status)- 1]}
                      date={getDate(order.created_at)}
                      // deliveryTime={order.deliveryTime}
                      amount={order.total}
                      onClick={() => {
                        handleClick(order);
                      }}
                    />
                  ))
                ) : (
                  <NoOrderFound>
                    <FormattedMessage
                      id='intlNoOrderFound'
                      defaultMessage='No order found'
                    />
                  </NoOrderFound>
                )}
              </OrderList>
            </Scrollbars>
          </OrderListWrapper>

          <OrderDetailsWrapper ref={targetRef}>
            <Title style={{ padding: '0 20px' }}>
              <FormattedMessage
                id='orderDetailsText'
                defaultMessage='Order Details'
              />
            </Title>
            {order && order.id && (
              <OrderDetails
                progressStatus={getStatus(order.status)}
                progressData={progressData}
                address={order.shipping_address_1}
                subtotal={parseFloat(parseFloat(order.total).toFixed(2))}
                discount={order.discount?order.discount:0}
                deliveryFee={order.deliveryFee?order.deliveryFee:0}
                grandTotal={parseFloat(parseFloat(order.total).toFixed(2))}
                tableData={order.orderVariation}
                columns={orderTableColumns}
              />
            )}
          </OrderDetailsWrapper>
        </>
      )}

      {(mobile || tablet) && (
        <OrderList>
          <OrderCardMobile
            orders={data.getOrderByCustomer}
            className={order && order.id === active ? 'active' : ''}
            progressData={progressData}
            columns={orderTableColumns}
            onClick={() => {
              handleClick(order);
            }}
          />
        </OrderList>
      )}
    </OrderBox>
  );
};

export default OrdersContent;
