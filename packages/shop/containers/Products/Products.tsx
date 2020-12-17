import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getURl } from '../../utils';

import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { openModal, closeModal } from '@redq/reuse-modal';
import ProductCard from 'components/ProductCard/ProductCard';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './Products.style';
import { CURRENCY } from 'helper/constant';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Placeholder from 'components/Placeholder/Placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/NoResult/NoResult';
import { object } from 'yup';

const QuickView = dynamic(() => import('../QuickView/QuickView'));

const GET_PRODUCTS = gql`

 query getproducts($filter_category_id:Int,$filter_by_name: String){
  getproducts(filter_category_id:$filter_category_id ,filter_by_name:$filter_by_name,brand_id:null){
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
 
       variations{
           id
           variation_name
           variation_quantity
          variation_price
       }
       }
    categories{
        id
        name
    }
    relatedProducts{
     id
  brand{
      name
  }
  slug
  price
  selling_price
  unit
  qty
  actual_size
  nominal_size
  name
  description
  productImages{
      id
      product_id
      image
  }
  productVariations{
 
  variations{
      id
      variation_name
      variation_quantity
     variation_price
  }
  }
  categories{
      id
      name
  }
  }
 
   }
  
  }

#  getProductByCategory( input : {category_id: $category_id }){
#         products{
#           id
#    brand{
#        name
#    }
#    slug
#    price
#    selling_price
#    unit
#    qty
#    actual_size
#    nominal_size
#    name
#    description
#    image
#    categories{
#        id
#        name
#    }
#     }
# }
# }

# query  categoryProduct($category_id: Int!) {
#   categoryProduct(category_id: $category_id){

#     products{
#     id
#     brand_id
#     slug
#     tax_class_id
#     sku
#     price
#     special_price
#     special_price_type
#     special_price_start
#     special_price_end
#     selling_price
#     manage_stock
#     qty
#     in_stock
#     }

#   }
  
#   }
  

  

#   query getProducts(
#     $type: String
#     $text: String
#     $category: String
#     $offset: Int
#     $limit: Int
#   ) {
#     products(
#       type: $type
#       text: $text
#       category: $category
#       offset: $offset
#       limit: $limit
#     ) {
#       items {
#         id
#         title
#         slug
#         unit
#         price
#         salePrice
#         description
#         discountInPercent
#         type
#         image
#         gallery {
#           url
#         }
#         categories {
#           id
#           title
#           slug
#         }
#       }
#       hasMore
#     }
  
  
`;
type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  type: string;
  fetchLimit?: number;
  loadMore?: boolean;
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true,
}) => {
  const router = useRouter();
  const [loadingMore, toggleLoading] = useState(false);
 console.log("dataproducts",router.query)

console.log("typeinproducts",type)
  const { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {

    variables: {

      // type: type,
      // text: '/product/category',
      filter_category_id:router.query.category ?router.query.category:type ,
      filter_by_name:router.query.text?router.query.text:null
      

      // category_id: Number(router.query.category ?router.query.category:1),
      // offset: 0,
      // limit: 5,
    },
  });
console.log("updatedata",data)


  // Quick View Modal
  const handleModalClose = () => {
    const as = router.asPath;
    router.push(as, as, { shallow: true });
    closeModal();
  };

  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {

    if (router.pathname === '/product/[slug]') {
      const as = `/product/${modalProps.id}`;
      router.push(router.pathname, as);
      return;
    }
    // if (router.pathname === '/product/[slug]') {
    //   const as = `/product/${modalProps.id}`;
    //   router.push(router.pathname, as);
    //   return;
    // }
    // openModal({
    //   show: true,
    //   overlayClassName: 'quick-view-overlay',
    //   closeOnClickOutside: false,
    //   component: QuickView,
    //   componentProps: { modalProps, deviceType, onModalClose },
    //   closeComponent: 'div',
    //   config: {
    //     enableResizing: false,
    //     disableDragging: true,
    //     className: 'quick-view-modal',
    //     width: 900,
    //     y: 30,
    //     height: 'auto',
    //     transition: {
    //       mass: 1,
    //       tension: 0,
    //       friction: 0,
    //     },
    //   },
    // });
    const href = router.asPath;
    const as = `/product/${modalProps.slug}`;
    router.push(href, as, { shallow: true });
  };


  if (loading) {
    return (
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
      </LoaderWrapper>
    );
  }

  if (error) return <div>{error.message}</div>;



//  const products = Object.keys(data).length>0?(data.categoryProduct.map(item=>item.products)):""

// console.log("products",products)
  // const handleLoadMore = () => {
  //   toggleLoading(true);
  //   fetchMore({
  //     variables: {
  //       offset: Number(data.categoryProduct.products.length),
  //       limit: fetchLimit,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       toggleLoading(false);
  //       if (!fetchMoreResult) {
  //         return prev;
  //       }
  //       return {
  //         products: {
  //           __typename: prev.products.__typename,
  //           // items: [...prev.products.items, ...fetchMoreResult.products.items],
  //           hasMore: fetchMoreResult.products.hasMore,
  //         },
  //       };
  //     },
  //   });
  // };

  return (
    <>
    {/* <div className="row">
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  <div className="col-6 col-md-4">.col-6 .col-md-4</div>
</div> */}
      <ProductsRow>
      

         {  
  
      Object.keys(data.getproducts).length>0?(
               data.getproducts.map((element,index) => (

        
       
       
          <ProductsCol key={element.id}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                <ProductCard
                  title={element.name}
                  description={element.description}
                  image={element.productImages}
                  brand={element.brand.name}
                  actual_size={element.actual_size}
                  nominal_size={element.nominal_size}
                  variations={element && element.productVariations}
                  weight={element.unit}
                  currency={CURRENCY}
                  price={element.price}
                  salePrice={element.selling_price}
                  // discountInPercent={10}
                  data={element}
                  deviceType={deviceType}
                  onClick={() =>
                    handleQuickViewModal(element, deviceType, handleModalClose)
                    }
                  
                />
               </Fade>
              

            </ProductCardWrapper> 
        
          </ProductsCol>
          
          
        ))): <NoResultFound />
        }
           
          
      </ProductsRow>
      {/* {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title="Load More"
            intlButtonId="loadMoreBtn"
            size="small"
            isLoading={loadingMore}
            loader={<Loader color="#009E7F" />}
            style={{
              minWidth: 135,
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#009E7F',
            }}
          />
        </ButtonWrapper>
      )} */}
    </>
  );
};
export default Products;
