import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { styled } from 'baseui';
import { AuthContext } from '../../context/auth';

import { Grid, Row, Col as Column } from '../../components/FlexBox/FlexBox';
import RadialBarChart from '../../components/Widgets/RadialBarChart/RadialBarChart';
import LineChart from '../../components/Widgets/LineChart/LineChart';
import ColumnChart from '../../components/Widgets/ColumnChart/ColumnChart';
import DonutChart from '../../components/Widgets/DonutChart/DonutChart';
import GraphChart from '../../components/Widgets/GraphChart/GraphChart';
import GradiantGraphChart from '../../components/Widgets/GradiantGraphChart/GradiantGraphChart';
import MapWidget from '../../components/Widgets/MapWidget/MapWidget';
import StickerCard from '../../components/Widgets/StickerCard/StickerCard';

import {
  Revenue,
  Refund,
  CoinIcon,
  CartIconBig,
  UserIcon,
  DeliveryIcon,
} from '../../components/AllSvgIcon';





const Col = styled(Column, (props) => ({
  '@media only screen and (max-width: 574px)': {
    marginBottom: '30px',

    ':last-child': {
      marginBottom: 0,
    },
  },

  '@media only screen and (max-width: 990px)': {
    marginBottom: props.className === 'mb-30' ? '30px' : '0',
  },
}));

const GET_DASHBOARD= gql`
query dashboardAnalytics($filter_by_name:String){
  dashboardAnalytics{
        totalSales
        totalOrders
        totalProducts
        totalCustomers
        latestOrders{
            id
            customer_first_name
            customer_last_name
            total
            status
            created_at
        }
        salesAnalytics{
            day
            amount
        }
    
    }
    
    getCustomer (filter_by_name:$filter_by_name){
        
        created_at
        
        }
}`
toast.configure()





const Dashboard = () => {
  const { signout } = React.useContext(AuthContext);

  const {data,error} = useQuery(GET_DASHBOARD,{
    variables:{filter_by_name:null}
  })
  if (error) {
    signout();
    return <div>Error! {error.message}</div>;
  }
  let totalvalue = 0
  console.log("datum",data)
  const sales = data && parseInt(data.dashboardAnalytics.totalSales)
  const days =data && data.dashboardAnalytics ? data.dashboardAnalytics.salesAnalytics.map(item=>item.day) : ""
  const saleValue =data && data.dashboardAnalytics ? data.dashboardAnalytics.salesAnalytics.map(item=>item.amount) : ""
  // const TotalValue =data && data.dashboardAnalytics ? data.dashboardAnalytics.salesAnalytics.map(item=>totalvalue+=item.amount) : ""
 data&& saleValue.map(item=>{
      totalvalue = totalvalue+item
    })

  
console.log("days",totalvalue)
return(
  <Grid fluid={true}>
    
   

    <Row>
      <Col lg={3} sm={6} xs={12} className="mb-30">
        <StickerCard
          title="Total Sales"
          subtitle="(Last 30 Days)"
          icon={<CoinIcon />}
          price={data && parseInt(data.dashboardAnalytics.totalSales)}
          indicator="up"
          indicatorText="Sales up"
          // note="(previous 30 days)"
          link="#"
          // linkText="Full Details"
        />
      </Col>
      <Col lg={3} sm={6} xs={12} className="mb-30">
        <StickerCard
          title="Total Order"
          subtitle="(Last 30 Days)"
          icon={<CartIconBig />}
          price={data && data.dashboardAnalytics.totalOrders}
          indicator="up"
          indicatorText="Order up"
          // note="(previous 30 days)"
          // link="#"
          // linkText="Full Details"
        />
      </Col>
      <Col lg={3} sm={6} xs={12}>
        <StickerCard
          title="New Customer"
          subtitle="(Last 30 Days)"
          icon={<UserIcon />}
          price={data && data.dashboardAnalytics.totalCustomers}
          indicator="up"
          indicatorText="Customer up"
          // note="(previous 30 days)"
          link="#"
          // linkText="Full Details"
        />
      </Col>
      <Col lg={3} sm={6} xs={12}>
        <StickerCard
          title="Total Products"
          subtitle="(Last 30 Days)"
          icon={<DeliveryIcon />}
          price={data && data.dashboardAnalytics.totalProducts}
          indicator="up"
          indicatorText="Products up"
          // note="(previous 30 days)"
          link="#"
          // linkText="Full Details"
        />
      </Col>
    </Row>
    {/* <Row>
      <Col md={5} lg={4} sm={6}>
        <RadialBarChart
          widgetTitle="Target"
          series={[43, 75]}
          label={['$1,342', '$8,908']}
          colors={['#03D3B5', '#666d92']}
          helperText={['Weekly Targets', 'Monthly Targets']}
        />
      </Col>
      <Col md={7} lg={8} sm={6}>
        <LineChart
          widgetTitle="User Hit Rate"
          color={['#03D3B5']}
          categories={[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          seriesName="Unique visitors"
          series={[200, 150, 430, 320, 600, 468, 309, 500, 273, 370, 260, 180]}
        />
      </Col>
    </Row> */}
    <Row>
      <Col md={7} lg={8}>
        <GraphChart
          widgetTitle="Sales From Social Media"
          colors={['#03D3B5']}
          series={[25, 30, 14, 30, 55, 60, 48]}
          labels={[
            '2019-05-12',
            '2019-05-13',
            '2019-05-14',
            '2019-05-15',
            '2019-05-16',
            '2019-05-17',
            '2019-05-18',
          ]}
        />
      </Col>

      <Col md={5} lg={4}>
        <DonutChart
          widgetTitle="Target"
          series={[sales, 6340]}
          labels={['Total Sales', '']}
          colors={['#03D3B5', '#666d92']}
          helperText={['Weekly Targets', 'Monthly Targets']}
          icon={[<Revenue />, <Refund />]}
          prefix="$"
        />
      </Col>
    </Row>

    <Row>
      <Col md={12} lg={12}>
        <ColumnChart
          widgetTitle="Sale History"
          colors={['#03D3B5']}
          prefix="$"
          totalValue={data &&totalvalue }
          // position="up"
          // percentage="1.38%"
          text="Last Seven Days Sale"
          series={saleValue}
          categories={
            days
          }
        />
      </Col>
    </Row>
    {/* <Row>
      <Col md={5} lg={4}>
        <GradiantGraphChart
          colors={['#03D3B5']}
          series={[25, 30, 14, 30, 55, 60, 48]}
          labels={[
            '2019-05-12',
            '2019-05-13',
            '2019-05-14',
            '2019-05-15',
            '2019-05-16',
            '2019-05-17',
            '2019-05-18',
          ]}
          topRowTitle="Performance"
          bottomRowData={[
            {
              label: 'Last Week Profit',
              valueText: '+29.7%',
              value: 29.7,
              color: '#03D3B5',
            },
            {
              label: 'This Week Losses',
              valueText: '-53.4%',
              value: 53.4,
              color: '#FC747A',
            },
          ]}
        />
      </Col>

      <Col md={7} lg={8}>
        <MapWidget
          data={[
            {
              name: 'Williamburgs',
              value: 69922,
              color: '#2170FF',
            },
            {
              name: 'Brooklyn',
              value: 41953,
              color: '#29CAE4',
            },
            {
              name: 'New York',
              value: 23307,
              color: '#666D92',
            },
            {
              name: 'Jersey City',
              value: 20200,
              color: '#03D3B5',
            },
          ]}
          totalText="Total Client"
        />
      </Col>
    </Row> */}
    <ToastContainer autoClose={2000}/>
  </Grid>
)
        };

export default Dashboard;
