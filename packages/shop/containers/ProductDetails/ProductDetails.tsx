import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NoResultFound from 'components/NoResult/NoResult';
import Breadcrumbs  from './BreadCumbs'
import Select from 'react-select';
// import SelectedItem from '../LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style'
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
// const BreadCrumbs: React.FunctionComponent = () => {
//   return (
    
//     // <div className="breadcrumb">
//     //     <ul className="list-inline">
//     //         <li><a href="#">Home</a></li>
//     //         <li><a href="#">Parent Category</a></li>
//     //         <li><a href="#">Child Category</a></li>
//     //         <li><a href="#">More Category if any</a></li>
//     //         <li className="active">Product Name</li>
//     //     </ul>
//     // </div>
//   )  
// }

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
  const [varprice, setVariPrice] = useState('');
  
  console.log("vari",vari)
  console.log("qty",qty)
  
  const { isRtl } = useLocale();
  const { addItem, removeItem, isInCart, getItem, items } = useCart();
  const data = product;
  // ata && product.productVariations.filter((item, key) =>{return item.variations.id==id})
  const handleAddClick = (e) => {
    e.stopPropagation();

    let newdata = product
    // console.log("newdata",newdata)
    // newdata.productVariations =  product.productVariations.filter((item, key) =>{return item.variations.id==vari})
    // console.log("newdata",newdata)
    addItem(data,qty,vari);
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
const getVariation = (id)=>{
  let variationOptions = data && product.productVariations.filter((item, key) =>{return item.variations.id==id})
  
    return variationOptions[0]
}
  
  const handleRadioChange = (e) => {
    // "foo3bar5".match(/\d+/)[0]
    let selected = getVariation(e.target.value)
    setVari(selected.variations.id);
    setVariPrice(selected.variations.variation_price)
  //  console.log("selected",selected.variations.id)
    // console.log("qty",selected.variations.variation_quantity)
    setQty(selected.variations.variation_quantity);
  }

  const variation = () => {
    // return "hello"
    // console.log("dfdsfsd", product.productVariations);
   
    if (Object.keys(product.productVariations).length > 0) {
       return( <>
    
    {/* <h1 style={{ "margin": "5px 0px 2.5px 5px" }} >Variations </h1>  */}
      {/* <Select> */}
        <select id="data" onChange={(value)=>handleRadioChange(value)}  style={{
           "borderRadius":"4px",
           "padding":"10px",
           "margin":"0px 12px 10px 0px",
           "width":"40%",
           "border":"1px solid #ccc",
           "float":"left"
          }}>
          {data && product.productVariations.map((item, key) =>
          key!==0?
            <option key={item.variations.id} value={item.variations.id} >{`${item.variations.variation_name} of ${item.variations.variation_quantity} for ${item.variations.variation_price}`}</option>
          : <option key={item.variations.id} value={item.variations.id} >{`${item.variations.variation_name} `}</option>
            )}

        </select>
        {/* </Select> */}
      </>
      
     )
    
    }
  }
  console.log("qtys: ",qty);
  function createMarkup(description) {
    return {__html: description};
  }
  
  return (
    <>
         <Breadcrumbs/>


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
          
          
              {/* {product.discountInPercent ? (
                <SalePrice>
                  {CURRENCY}
                  {varprice?varprice:0}
                </SalePrice>
              ) : (
                ''
              )} */}

              {/* <ProductPrice>
                {varprice!=""? CURRENCY:""}
                {product.salePrice ? product.salePrice: `${varprice}`  }
              </ProductPrice> */}
              
          </ProductTitlePriceWrapper>

          
                                  <ProductWeight>
                                
                                  <ProductPrice>
                                  <p  style={{color:"black",float:"left",paddingRight:"10px"}}> {varprice!=""? " "+ "PRICE":""} </p>
                                        {varprice!=""? " "+ CURRENCY:""}
                                        {product.salePrice ? product.salePrice: `  ${varprice}`  }
                                      </ProductPrice>
   
              
              </ProductWeight><br/>
          <ProductWeight>{`Actual size : ${product.actual_size}`}
          
          
          
          </ProductWeight><br/>
          <ProductWeight>{`Nominal size : ${product.nominal_size}`}</ProductWeight><br/>
          {variation()}
          <ProductCartBtn>
                <Button
                  title='Add to Cart'
                  intlButtonId='addToCartButton'
                  iconPosition='left'
                  size='small'
                  className='cart-button'
                  // style={margin-top: "30px";}
                  icon={<CartIcon />}
                  disabled={vari==="0"||vari===""?true:false}
                  onClick={handleAddClick}
                />
              
            
            </ProductCartBtn>
          {/* <ProductWeight>{product.unit}</ProductWeight> */}
          <ProductDescription>
        <div  className="custome-ul" dangerouslySetInnerHTML={createMarkup(product.description)}></div>
            {/* // <ReadMore character={0}>{product.description}</ReadMore */}
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
     { Object.keys(product.relatedProducts).length>0?(
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
     ): ""}
    </>
  );
};

export default ProductDetails;
