import React, { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from 'baseui';
import {

  Trash, Plus
} from '../../components/AllSvgIcon';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Button from '../../components/Button/Button';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Header, Heading } from '../../components/WrapperStyle';
import Fade from 'react-reveal/Fade';
import ProductCard from '../../components/ProductCard/ProductCard';
import NoResult from '../../components/NoResult/NoResult';
import { CURRENCY } from '../../settings/constants';
import Placeholder from '../../components/Placeholder/Placeholder';
import Category from '../Category/Category';
import { getURl } from '../../utils';

export const ProductsRow = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '25px',
  backgroundColor: $theme.colors.backgroundF7,
  position: 'relative',
  zIndex: '1',

  '@media only screen and (max-width: 767px)': {
    marginLeft: '-7.5px',
    marginRight: '-7.5px',
    marginTop: '15px',
  },
}));

export const Col = styled(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = styled(Rows, () => ({
  '@media only screen and (min-width: 768px) and (max-width: 991px)': {
    alignItems: 'center',
  },
}));

export const ProductCardWrapper = styled('div', () => ({
  height: '100%',
}));

export const LoaderWrapper = styled('div', () => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexWrap: 'wrap',
}));

export const LoaderItem = styled('div', () => ({
  width: '25%',
  padding: '0 15px',
  marginBottom: '30px',
}));

const GET_PRODUCTS = gql`
query getproducts($filter_category_id:Int,$filter_by_name: String){
  getproducts(filter_category_id:$filter_category_id ,filter_by_name:$filter_by_name){
   id
  brand{
    name
  },
  slug
   price
   selling_price
   unit
   qty
   actual_size,
   nominal_size
   name
   description
   productImages{
    id
    product_id
    image
    }
   productVariations{
                  price
              variations{
                  id
                  variation_name
              }}
   categories{
       id
       name
   }

  },  
 

  getCategory(category_id:$filter_category_id,filter_by_name: null){
    id
    image
    name
    slug
    type
    subcategories {
      id
      name
      slug
      position
      is_searchable
      parent_id
  
    
}
}
  # getCategoryWithoutFilter{
  #   id
  #   name
  #   image
  #   type
  #   slug
   
  #   parent_id
  #   subcategories {
  #     name
  #     slug
  #     position
  #     is_searchable
  #     parent_id
  #      subcategories {
  #     name
  #     slug
  #     position
  #     is_searchable
  #     parent_id
  #   }
  #   }

  #   },
    
}
  # query getProducts(
  #   $type: String
  #   $sortByPrice: String
  #   $searchText: String
  #   $offset: Int
  # ) {
  #   products(
  #     type: $type
  #     sortByPrice: $sortByPrice
  #     searchText: $searchText
  #     offset: $offset
  #   ) {
  #     items {
  #       id
  #       name
  #       description
  #       image
  #       type
  #       price
  #       unit
  #       salePrice
  #       discountInPercent
  #     }
  #     totalCount
  #     hasMore
  #   }
  # }

 `;
// const GET_CATEGORIES = gql`
// query getCategory{
//   getCategory{
//     id
//     image
//     name
//     slug
//     type

// }
// }`


const typeSelectOptions = [
  { value: 'grocery', label: 'Grocery' },
  { value: 'women-cloths', label: 'Women Cloths' },
  { value: 'bags', label: 'Bags' },
  { value: 'makeup', label: 'Makeup' },
];
const priceSelectOptions = [
  { value: 'highestToLowest', label: 'Highest To Lowest' },
  { value: 'lowestToHighest', label: 'Lowest To Highest' },
];

toast.configure()
export default function Products() {


  // const{data:data1}= useQuery(GET_CATEGORIES);

  // console.log("data1",data1)
  const [loadingMore, toggleLoading] = useState(false);
  const [type, setType] = useState([]);
  // const [subType, setSubType] = useState(null);
  const [priceOrder, setPriceOrder] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDrawerDispatch();
  const openDrawer = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'PRODUCT_FORM' }),
    [dispatch]
  );
  const { data, error, refetch, fetchMore } = useQuery(GET_PRODUCTS, {

    variables: { filter_category_id: null, filter_by_name: null }
  });
  // console.log("typeSelectOptions",data1)

  if (error) {

    toast.error(`🦄 SomeThing Went Wrong`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    return <div>Error! {error.message}</div>;


  }

  const categories = data && data.getCategory.filter(item => item.parent_id == null)
  // console.log("category ",typeof(categories),categories)

  const Subcategories = []

  data && data.getCategory.map(
    item => item.subcategories.map(
      item => Subcategories.push(item)
    ))
  // console.log("Subcategories",Subcategories)





  //   if(Object.keys(data).length>0){
  //     console.log(data.getCategory.map(item=>console.log(item.name)))
  // }


  if (error) {
    return <div>Error! {error.message}</div>;
  }
  // function loadMore() {
  //   toggleLoading(true);
  //   fetchMore({
  //     variables: {
  //       offset: data.getproducts.length,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       toggleLoading(false);
  //       if (!fetchMoreResult) return prev;
  //       return Object.assign({}, prev, {
  //         products: {
  //           __typename: prev.products.__typename,
  //           items: [...prev.products.items, ...fetchMoreResult.products.items],
  //           hasMore: fetchMoreResult.products.hasMore,
  //         },
  //       });
  //     },
  //   });
  // }
  // function handlePriceSort({ value }) {
  //   setPriceOrder(value);
  //   if (value.length) {
  //     refetch({
  //       sortByPrice: value[0].value,
  //     });
  //   } else {
  //     refetch({
  //       sortByPrice: null,
  //     });
  //   }
  // }
  function handleCategoryType({ value }) {

    setType(value)
    if (value.length) {
      refetch({
        filter_category_id: value[0].id, filter_by_name: search !== null ? search : null
      });
    } else {
      refetch({
        filter_category_id: null, filter_by_name: null
      });
    }
  }
  function handleSearch(event) {
    console.log(event.currentTarget.value)
    const value = event.currentTarget.value;
    setSearch(value);
    if (search !== "") {
      refetch({ filter_category_id: type.length ? type[0].id : null, filter_by_name: value });
    }
    else {
      refetch({
        filter_category_id: type.length ? type[0].id : null, filter_by_name: null
      });
    }
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header style={{ marginBottom: 15 }}>
            <Col md={2} xs={12}>
              <Heading>Products</Heading>
            </Col>

            <Col md={10} xs={12}>
              <Row>
                <Col md={6} lg={3} xs={12}>
                  <Select
                    options={data && categories}
                    labelKey='name'
                    valueKey='id'
                    placeholder='Category Type'
                    value={type}
                    searchable={false}
                    onChange={handleCategoryType}
                  />
                </Col>

                {/* <Col md={3} xs={12}>
                  <Select
                    options={data && Subcategories}
                    labelKey='name'
                    valueKey='id'
                    placeholder='SubCategory Type'
                    // value={subType}
                    searchable={false}
                    // onChange={handleCategoryType}
                  />
                </Col> */}
                {/* <Col md={3} xs={12}>
                  <Select
                    options={priceSelectOptions}
                    labelKey='label'
                    valueKey='value'
                    value={priceOrder}
                    placeholder='Price'
                    searchable={false}
                    // onChange={handlePriceSort}
                  />
                </Col> */}

                <Col md={6} xs={12}>
                  <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={12} lg={3}>
                  <Button
                  className="add-pro-btn"
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                  >
                    Add Products
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>

          <Row>
            {data ? (
              Object.keys(data.getproducts).length > 0 ? (
                data.getproducts.map((item: any, index: number) => (
                  <Col
                    md={4}
                    lg={3}
                    sm={6}
                    xs={12}
                    key={index}
                    style={{ margin: '15px 0' }}
                  >
                    <Fade bottom duration={800} delay={index * 10}>
                      <ProductCard
                        title={item.name}
                        brand={item.brand.name}
                        actual_size={item.actual_size}
                        nominal_size={item.nominal_size}
                        image={data &&item.productImages.map(item=>{return item.image=getURl(item.image)})}
                        currency={CURRENCY}
                        price={parseFloat(parseFloat(item.price).toFixed(2))}
                        salePrice={parseFloat(parseFloat(item.selling_price).toFixed(2))}
                        discountInPercent={item.discountInPercent}
                        data={item}
                      />
                    </Fade>
                  </Col>
                ))
              ) : (
                  <NoResult />
                )
            ) : (
                <LoaderWrapper>
                  <LoaderItem>
                    <Placeholder />
                  </LoaderItem>
                  <LoaderItem>
                    <Placeholder />
                  </LoaderItem>
                  <LoaderItem>
                    <Placeholder />
                  </LoaderItem>
                  <LoaderItem>
                    <Placeholder />
                  </LoaderItem>
                </LoaderWrapper>
              )}
          </Row>
          {/* {data && data.getproducts && data.getproducts.hasMore && (
            <Row>
              <Col
                md={12}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button onClick={loadMore} isLoading={loadingMore}>
                  Load More
                </Button>
              </Col>
            </Row>
          )} */}
        </Col>
      </Row>
      <ToastContainer autoClose={2000} />

    </Grid>
  );
}
