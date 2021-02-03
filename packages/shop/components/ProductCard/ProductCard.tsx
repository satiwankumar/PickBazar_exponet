import React from 'react';
import Image from 'components/Image/Image';
import Button from '../Button/Button';
import {getURl} from '../../utils'
import { CartIcon } from '../AllSvgIcon';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  DiscountPercent,
} from './ProductCard.style';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';
import { cartAnimation } from 'helper/cart-animation';

type ProductCardProps = {
  title: string;
  image: any;
  weight: string;
  currency: string;
  brand:string
  actual_size:string,
  nominal_size:string,
  variations:any,
  description: string;
  price: number;
  salePrice?: number;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};
// console.log("dataaaa",image)

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  weight,
  price,
  salePrice,
  brand,
  actual_size,
  nominal_size,
  variations,
  discountInPercent,
  cartProducts,
  addToCart,
  updateCart,
  value,
  currency,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  const { addItem, removeItem, getItem, isInCart, items } = useCart();

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };
    const handleIsSale = () => { 
      let isSale = false
      // variations.forEach(item=> {
      //     if(item.variations.vvariation_sell_price > 0){
      //       isSale = true

      //     }
      // });
      for (const [index, val] of variations.entries()) {
        console.log('item:', { index, val });
        if (val.variations.variation_sell_price >0) {
            isSale =true
          break;
        }
      }
      return isSale
    }
    console.log("abc",handleIsSale())

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };
  console.log("variations",variations[0].variations.variation_name)
  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        <Image
          url={Object.keys(image).length>0?getURl(image[0].image):image}
          className="product-image"
          style={{ position: 'relative' }}
          alt="noimage"
        />

  


        {handleIsSale ()===true? (
          <>
            <DiscountPercent>{"on Sale"}</DiscountPercent>
          </>
        ) : (
          ''
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className="product-title">{` ${ title}`}</h3>
        <span className="product-weight">Actual size: &nbsp;&nbsp;&nbsp; {actual_size}</span><br></br>
        <span className="product-weight">{`Nominal size:  ${nominal_size}`}</span>
        {/* {Object.keys(variations).length>0?} */}

        <div className="product-meta">
          {
          // <div className="productPriceWrapper">
          //   {variations[0].variations.variation_sell_price>0 ? (
          //     <span className="discountedPrice">
          //       {"onSale"}
          //       {variations[0].variation_sell_price>0?variations[0].variation_price:""}
          //     </span>
          //   ) : (
          //     ''
          //   )}

          /* {  <span className="product-price">
              {currency}
              {salePrice ? salePrice : price}
            </span>} 
          </div> 
          */
}
          {/* {!isInCart(data.id) ? (
            <Button
              title="Cart"
              intlButtonId="addCartButton"
              iconPosition="left"
              colors="primary"
              size="small"
              variant="outlined"
              className="cart-button"
              icon={<CartIcon />}
              onClick={handleAddClick}
            />
          ) : (
            <Counter
              value={getItem(data.id).quantity}
              onDecrement={handleRemoveClick}
              onIncrement={handleAddClick}
            />
          )} */}
         
            {/* <Button
              title="Cart"
              intlButtonId="addCartButton"
              iconPosition="left"
              colors="primary"
              size="small"
              variant="outlined"
              className="cart-button"
              icon={<CartIcon />}
              onClick={handleAddClick}
            /> */}
      
          
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
