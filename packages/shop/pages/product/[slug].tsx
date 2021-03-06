import React from 'react';
import { NextPage } from 'next';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ProductDetails from 'containers/ProductDetails/ProductDetails';
// import ProductDetailsBook from 'containers/ProductDetailsBook/ProductDetailsBook';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'styled/product-single.style';
import CartPopUp from 'containers/Cart/CartPopUp';
import { withApollo } from 'helper/apollo';
import { GET_PRODUCT_DETAILS } from 'graphql/query/product.query';
import { Breadcrumbs } from 'nextjs-breadcrumbs'
import Loader from 'components/Loader/Loader'
type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductPage: NextPage<Props> = ({ deviceType }) => {
  const {
    query: { slug },
  } = useRouter();
  // console.log("queryslug",slug)

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug },
  });
  if (loading) {
    return (
      <>
      <div className="loading">loading</div>
      <Loader/>
      </>
    );
  }
  if (error) return <div>Error: {error.message}</div>;

  // let content;
  // switch (data.product.type) {
  //   case 'BOOK': {
  //     content = (
  //       <ProductDetailsBook product={data.product} deviceType={deviceType} />
  //     );
  //     break;
  //   }
  //   default: {
  //     content = (
  //       <ProductDetails product={data.product} deviceType={deviceType} />
  //     );
  //   }
  // }
  data.getProductBySlug[0].productVariations.unshift({variations:{id:"0",variation_name:"Select Variation" ,variation_quantity:"",variation_price:""}})
  
  let content =  <ProductDetails product={data.getProductBySlug[0]} deviceType={deviceType} />
     


  return (
    <>
      <SEO
        title={`${data.getProductBySlug[0].name} - ExponetDetails`}
        description={`${data.getProductBySlug[0].name} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            {content}
            <CartPopUp deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(ProductPage);
