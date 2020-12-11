import React, { useState } from 'react';

import Router from 'next/router';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { closeModal } from '@redq/reuse-modal';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '../../components/Select/Select'
import Button from 'components/Button/Button';
import {
  QuickViewWrapper,
  ProductDetailsWrapper,
  ProductPreview,
  DiscountPercent,
  ProductInfoWrapper,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
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
  ModalClose,
} from './QuickView.style';
import { CURRENCY } from 'helper/constant';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';
import { ItemBox } from 'containers/Cart/CartItem/CartItem.style';
import CheckBox from 'components/Checkbox/Checkbox';




type QuickViewProps = {
  modalProps: any;
  deviceType: any;
  onModalClose: any;
};

const QuickView: React.FunctionComponent<QuickViewProps> = ({
  modalProps,
  deviceType,
  onModalClose,
}) => {
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const {
    id,
    type,
    name,
    weight,
    productImages,
    variations,
    brand,
    nominal_size,
    actual_size,
    price,
    discountInPercent,
    salePrice,
    description,
    categories,
  } = modalProps;


  const { isRtl } = useLocale();
  const [vari, setVari] = useState('');
  const [qty, setQty] = useState('');
  
  const handleAddClick = (e: any) => {
    e.stopPropagation();
    addItem(modalProps,qty);
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItem(modalProps);
  };
  console.log("modalPRops", modalProps)
  function onCategoryClick() {
    Router.push({
      pathname: `/${modalProps.categories[0].name.toLowerCase()}`,
      query: { category: modalProps.categories[1].id },
    }).then(() => window.scrollTo(0, 0));
    closeModal();
  }
  const handleRadioChange = (e) => {
    console.log("e.target.value: ",e.target.value);
    // "foo3bar5".match(/\d+/)[0]
    setVari(e.target.value);
    let qtys = e.target.name.match(/\d+/)[0]
    setQty(qtys);
    // console.log("qtys: ",qtys);
  }

  const variation = () => {
    // return "hello"
    console.log("dfdsfsd", Object.keys(modalProps.productVariations));
    if (Object.keys(modalProps.productVariations).length > 0) {
      return modalProps.productVariations.map((item) => {
        
        console.log("item: ",item);
         return (
          <RadioGroup aria-label="variation" value={vari} name="vari" onChange={handleRadioChange}>
            <FormControlLabel value={item.variations && item.variations.id} name={item.variations && item.variations.variation_name} checked={item.variations && item.variations.id == vari ? true : false}  control={<Radio />} label={`${item.variations && item.variations.variation_name} of $${item.price}`} />
            {/* <FormControlLabel value="worst" control={<Radio />} label="The worst." /> */}
          </RadioGroup>
        )}
      )
    }
    // Object.keys(modalProps.productVariations).length > 0 ?

    // modalProps.productVariations.map((item)=> {
    //   // console.log("variation",item);
    //   // return item;
    //      return (<RadioGroup aria-label="variation" name="varation"  onChange={handleRadioChange}>

    //       <FormControlLabel value="best" control={<Radio />} label="The best!" />
    //       <FormControlLabel value="worst" control={<Radio />} label="The worst." />
    //     </RadioGroup>)
    // }
    //  ):"null"



  }
  // variation()
  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon />
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          {!isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={productImages} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
          <ProductInfoWrapper dir={isRtl ? 'rtl' : 'ltr'}>
            <ProductInfo>
              <ProductTitlePriceWrapper>
                <ProductTitle>{`${brand.name} ${name}`}</ProductTitle>
                <ProductPriceWrapper>
                  {discountInPercent ? (
                    <SalePrice>
                      {CURRENCY}
                      {price}
                    </SalePrice>
                  ) : (
                      ''
                    )}

                  <ProductPrice>
                    {CURRENCY}
                    {salePrice ? salePrice : price}
                  </ProductPrice>
                </ProductPriceWrapper>
              </ProductTitlePriceWrapper>

              <ProductWeight>{`ActualSize : ${actual_size}`}</ProductWeight>
              <ProductWeight>{`NomialSize : ${nominal_size}`}</ProductWeight>

              {/* <ProductWeight></ProductWeight> */}

              {variation()}

              <ProductDescription>
                <ReadMore character={10000000}>{description}</ReadMore>
              </ProductDescription>

              <ProductCartWrapper>
              <ProductCartBtn>
                 
                    <Button
                      disabled={vari?false:true}
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon />}
                      onClick={handleAddClick}
                    />
                 
               
                    
                </ProductCartBtn>
                {/* <ProductCartBtn>
                  {!isInCart(id) ? (
                    <Button
                      disabled={vari?false:true}
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon />}
                      onClick={handleAddClick}
                    />
                  ) : (
                    "null"
                      // <Counter
                      //   value={qty ? parseInt(qty) : "cart"}
                      //   //onDecrement={handleRemoveClick}
                      //   //onIncrement={handleAddClick}
                      // />
                    )}
                </ProductCartBtn>
                 */}
              </ProductCartWrapper>

              <ProductMeta>
                <MetaSingle>
                  {categories
                    ?
                    <MetaItem
                      onClick={() => onCategoryClick()}
                      key={categories[1].id}
                    >
                      {categories[1].name}
                    </MetaItem>

                    : 'new tag'}
                </MetaSingle>
              </ProductMeta>
            </ProductInfo>
          </ProductInfoWrapper>

          {isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={productImages} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;
