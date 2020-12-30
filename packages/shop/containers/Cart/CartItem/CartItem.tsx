import React from 'react';
import { Counter } from 'components/Counter/Counter';
import { CURRENCY } from 'helper/constant';
import { CloseIcon } from 'assets/icons/close';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './CartItem.style';
import { getURl } from 'utils';

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  
// console.log("dataaaaaaaaaaaaaaaaa",data.variationId)

  const { title, productImages, price, salePrice, unit, quantity, variationId,productVariations} = data;
  let filterVariation=  productVariations.length>0?productVariations.filter(item=>item.variations.id==variationId):null
  let filterVariation1 = filterVariation[0]
  // console.log("dataaaaaaaaaaaaaaaa",filterVariation.length>0?filterVariation1.variations.variation_price:false)
  let displayPrice = filterVariation.length>0?filterVariation1.variations.variation_price:salePrice ? salePrice : price;
// console.log("display price",displayPrice)
   displayPrice = parseFloat(displayPrice).toFixed(2)

  // const totalPrice = quantity * displayPrice;
  return (
    <ItemBox>
      {/* <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant='lightVertical'
      /> */}
      <Image src={getURl(productImages[0].image)} />
      <Information>
        <Name>{title}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>
          {quantity} 
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        { displayPrice}

        {/* {(quantity * displayPrice).toFixed(2)} */}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
