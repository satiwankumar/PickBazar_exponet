import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Router from 'next/router';
import Button from 'components/Button/Button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  BackButton,
  ProductWeight,
  ProductDescription,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  RelatedItems,
} from './ProductDetails.style';
import { LongArrowLeft, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import Products from 'containers/Products/Products';
import { CURRENCY } from 'helper/constant';
import { Product } from 'interfaces';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';
import { ItemBox } from 'containers/Cart/CartItem/CartItem.style';

type ProductDetailsProps = {
  product: Product | any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const [vari, setVari] = useState('');
  const [qty, setQty] = useState('');
  console.log("productDetail0",product)
  const { isRtl } = useLocale();
  const { addItem, removeItem, isInCart, getItem, items } = useCart();
  const data = product;
console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",data)
  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data,qty);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const handleRadioChange = (e) => {
    console.log("e.target.value: ",e.target.value);
    // "foo3bar5".match(/\d+/)[0]
    setVari(e.target.value);
    // let qtys = e.target.name.match(/\d+/)[0]
    // setQty(qtys);
    // console.log("qtys: ",qtys);
  }
  const variation = () => {
    // return "hello"
    console.log("dfdsfsd", product.productVariations);
    if (Object.keys(product.productVariations).length > 0) {
      return product.productVariations.map((item) => {
        
        console.log("item: ",item.variations.id);
         return (
          <RadioGroup aria-label="variation" value={vari} name="vari" onChange={handleRadioChange}>
            <FormControlLabel value={item.variations && item.variations} name={item && item.variations.variation_name} checked={item && item.id == vari ? true : false}  control={<Radio />} label={`${item && item.variations.variation_name} ${item && item.variations.variation_quantity} of $${item.variations.variation_price}`} />
            {/* <FormControlLabel value="worst" control={<Radio />} label="The worst." /> */}
          </RadioGroup>
        )}
      )
    }
  }
  return (
    <>
      <ProductDetailsWrapper className='product-card' dir='ltr'>
        {!isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                title='Back'
                intlButtonId='backBtn'
                iconPosition='left'
                size='small'
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                icon={<LongArrowLeft />}
                onClick={Router.back}
              />
            </BackButton>

            <CarouselWithCustomDots
              items={product.productImages}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}

        <ProductInfo dir={isRtl ? 'rtl' : 'ltr'}>
          <ProductTitlePriceWrapper>
            <ProductTitle>{product.name}</ProductTitle><br/>
          
            <ProductPriceWrapper>
              {product.discountInPercent ? (
                <SalePrice>
                  {CURRENCY}
                  {product.price}
                </SalePrice>
              ) : (
                ''
              )}

              <ProductPrice>
                {CURRENCY}
                {product.salePrice ? product.salePrice : product.price}
              </ProductPrice>
            </ProductPriceWrapper>
          </ProductTitlePriceWrapper>
          <ProductWeight>{`ActualSize : ${product.actual_size}`}</ProductWeight><br/>
          <ProductWeight>{`NomialSize : ${product.nominal_size}`}</ProductWeight><br/>
          {variation()}
          <ProductCartBtn>
                <Button
                  title='Add to Cart'
                  intlButtonId='addToCartButton'
                  iconPosition='left'
                  size='small'
                  className='cart-button'
                  icon={<CartIcon />}
                  onClick={handleAddClick}
                />
              
            
            </ProductCartBtn>
          {/* <ProductWeight>{product.unit}</ProductWeight> */}
          <ProductDescription>
            <ReadMore character={600}>{product.description}</ReadMore>
          </ProductDescription>

          <ProductCartWrapper>
            {/* <ProductCartBtn>
              {!isInCart(data.id) ? (
                <Button
                  title='Add to Cart'
                  intlButtonId='addToCartButton'
                  iconPosition='left'
                  size='small'
                  className='cart-button'
                  icon={<CartIcon />}
                  onClick={handleAddClick}
                />
              ) : (
                <Counter
                  value={getItem(data.id).qty}
                  onDecrement={handleRemoveClick}
                  onIncrement={handleAddClick}
                />
              )}
            </ProductCartBtn> */}
           
         
          </ProductCartWrapper>

          {/* <ProductMeta>
            <MetaSingle>
              {product.categories
                ? product.categories.map((item: any) => (
                  console.log("item,item",ItemBox),
                    <Link
                      href={`/${item.name.toLowerCase()}?category=${
                        item[1]
                      }`}
                      key={`link-${item.id}`}
                    >
                      {
                        <a>
                          <MetaItem>{item.name}</MetaItem>
                        </a>
                      }
                    </Link>
                  ))
                : ''}
            </MetaSingle>
          </ProductMeta> */}
        </ProductInfo>

        {isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                title='Back'
                intlButtonId='backBtn'
                iconPosition='left'
                size='small'
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                icon={<LongArrowLeft />}
                onClick={Router.back}
              />
            </BackButton>

            <CarouselWithCustomDots
              items={product.gallery}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}
      </ProductDetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id='intlReletedItems'
            defaultMessage='Related Items'
          />
        </h2>
        <Products
          type={product.categories[0].id}
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
