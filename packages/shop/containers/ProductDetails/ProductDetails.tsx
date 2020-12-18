import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NoResultFound from 'components/NoResult/NoResult';

import FormControl from '@material-ui/core/FormControl';
import Router from 'next/router';
import Fade from 'react-reveal/Fade';

import Button from 'components/Button/Button';
import { useRouter } from 'next/router';
// import { getURl } from '../../utils';

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
} from '../Products/Products.style';
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
const BreadCrumbs: React.FunctionComponent = () => {
  return (
    <div className="breadcrumb">
        <ul className="list-inline">
            <li><a href="#">Home</a></li>
            <li><a href="#">Parent Category</a></li>
            <li><a href="#">Child Category</a></li>
            <li><a href="#">More Category if any</a></li>
            <li className="active">Product Name</li>
        </ul>
    </div>
  )  
}

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const router = useRouter();
  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {
  
    if (router.pathname === `$/product/${modalProps.slug}`) {
      
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
  const handleModalClose = () => {
    const as = router.asPath;
    router.push(as, as, { shallow: true });
    closeModal();
  };
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
    // "foo3bar5".match(/\d+/)[0]
    let selected = e.target.value
    console.log("e.target.value: ",selected);

    setVari(selected.id);
    // let qtys = e.target.name.match(/\d+/)[0]
    setQty(selected.variation_quantity);
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
            <FormControlLabel value={item.variations.id} name={item && item.variations.variation_name} checked={item && item.variations.id == vari ? true : false}  control={<Radio />} label={`${item && item.variations.variation_name} ${item && item.variations.variation_quantity} of $${item.variations.variation_price}`} />
            {/* <FormControlLabel value="worst" control={<Radio />} label="The worst." /> */}
          </RadioGroup>
        )}
      )
    }
  }
  return (
    <>
       <BreadCrumbs />

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
                  disabled={vari?true:false}
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
        {/* <Products
          type={product.categories[0].id}
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        /> */}
              <ProductsRow>
      

      {  

   Object.keys(product.relatedProducts).length>0?(
    product.relatedProducts.map((element,index) => (

     
    
    
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
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
