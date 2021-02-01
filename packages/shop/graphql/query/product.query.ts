import gql from 'graphql-tag';

export const GET_PRODUCT_WITH_RELATED_PRODUCTS = gql`
  query getProductWithRelatedProducts($slug: String!, $type: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      type
      image
      categories {
        id
        slug
        title
      }
    }
    relatedProducts(slug: $slug, type: $type) {
      id
      title
      slug
      weight
      price
      type
      image
    }
  }
`;

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($type: String!, $slug: String!) {
    relatedProducts(type: $type, slug: $slug) {
      id
      title
      slug
      weight
      price
      type
      image
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      discountInPercent
      type
      gallery {
        url
      }
      image
      categories {
        id
        slug
        title
      }
    }
  }
`;
export const GET_PRODUCT_DETAILS = gql`
query getProductBySlug($slug: String!){
  getProductBySlug(slug: $slug){
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
            variation_sell_price
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


`;
// query getProduct($slug: String!) {
  //     product(slug: $slug) {
  //       id
  //       slug
  //       name
  //       type
  //       unit
  //       price
  //       salePrice
  //       description
  //       discountInPercent
  //       gallery {
  //         url
  //       }
  //       image
  //       categories {
  //         id
  //         slug
  //         title
  //       }
  //       author {
  //         id
  //         name
  //         avatar
  //         bio
  //         socials {
  //           id
  //           media
  //           profileLink
  //         }
  //       }
  //       meta {
  //         publisher
  //         isbn
  //         edition
  //         languages
  //         country
  //         numberOfReader
  //         numberOfPage
  //         samplePDF
  //       }
  //     }
  //   }