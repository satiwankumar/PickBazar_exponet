import React from 'react';
import {getURl} from '../../utils'

// import {getURl} from '../../utils.js'
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent,
  Image,
  ProductTitle,
  ProductWeight,
  ProductMeta,
  OrderID,
  ProductPriceWrapper,
  ProductPrice,
  DiscountedPrice,
} from './ProductCard.style';
import { useDrawerDispatch } from '../../context/DrawerContext';

type ProductCardProps = {
  title: string;
  image: any;
  actual_size?: string;
  nominal_size?: string;
  
  currency?: string;
  description?: string;
  price: number;
  salePrice?: number;
  orderId?: number;
  discountInPercent?: number;
  brand?: string;
  data: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  actual_size,
  nominal_size,
  price,
  salePrice,
  discountInPercent,
  currency,
  data,
  brand,
  orderId,
  ...props
}) => {
  const dispatch = useDrawerDispatch();
// console.log("files",image[0].image)

// const getimages = (image)=>{

//   return image.length> 0? image.map(item=>
// <Image url={item.image} className="product-image" />

//   ):
// (<Image url={null} className="product-image" />)

  
//   }

  const openDrawer = React.useCallback(
    () =>
      dispatch({
        type: 'OPEN_DRAWER',
        drawerComponent: 'PRODUCT_UPDATE_FORM',
        data: data,
      }),
    [dispatch, data]
  );

     
//  let images=  { data && image.map(item=><Image url={item.image} className="product-image" />)}
let getImage = (image)=>{
 return  Object.keys(image).length>0? image[0].image:""
   
}
  return (
    <ProductCardWrapper
      {...props}
      className="product-card"
      onClick={openDrawer}
    >
      {}
      
      <ProductImageWrapper>
        {/* { data&& image.map(item=><Image url={item.image} className="product-image" />)} */}
     
        {console.log("imageeach",getImage(image))}
        {/* console.log(getImage(image)) */}
        <Image url={getImage(image)} className="product-image" />
        {/* {discountInPercent && discountInPercent !== 0 ? (
          <>
            <SaleTag>Sale</SaleTag>
            <DiscountPercent>{discountInPercent}% Off</DiscountPercent>
          </>
        ) : null} */}
      </ProductImageWrapper>



      <ProductInfo>
        <ProductTitle>{`${brand=="Others"?"":brand   } ${  title}`}</ProductTitle>
        <ProductWeight>{`Actual: ${ actual_size}`}</ProductWeight><br/>
        <ProductWeight>{`Nominal: ${ nominal_size}`}</ProductWeight>
        <ProductMeta>
          <ProductPriceWrapper>
            <ProductPrice>
              {currency}
              {salePrice && salePrice !== 0 ? salePrice: price}
            </ProductPrice>

            {discountInPercent && discountInPercent !== 0 ? (
              <DiscountedPrice>
                {currency}
                {price}
              </DiscountedPrice>
            ) : null}
          </ProductPriceWrapper>

          <OrderID>{orderId}</OrderID>
        </ProductMeta>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
