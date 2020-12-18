export const cartItemsTotalPrice = (items, coupon = null) => {
  // console.log("items",items)
  // let filterVariation =  items.productVariations.filter(item=>item.variations.id == items.variationId)
  //   // newState.productVariations= filterVariation;
  let total = items.reduce((price, product) => {
    let variation = product.productVariations.find((variation)=>variation.variations.id == product.variationId);
    // console.log('items reducer',variation);
    if(variation){
      // console.log('items reducer',variation.);
      return price = parseFloat(price) + parseFloat(variation.variations.variation_price);
      // console.log('items reducer',variation);
    }else if (product.salePrice) {
      return price = parseFloat(price) + parseFloat(product.salePrice) ;
    }
    return price = parseFloat(price) + parseFloat(product.price);
  }, 0);




  console.log("items total",total)
  // return ;
  const discount = coupon
    ? (total * Number(coupon.discountInPercent)) / 100
    : 0;
  return total - discount;
};
// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
  // console.log("action.payload",action.payload)
  // const existingCartItemIndex = state.items.findIndex(
  //   (item) => item.id === action.payload.id
  // );

  // if (existingCartItemIndex > -1) {
  //   const newState = [...state.items];
  //   newState[existingCartItemIndex].quantity += action.payload.quantity;
  //   return newState;
  // }
  // const newState = state.items[0];
  
  // let filterVariation =  newState.productVariations.filter(item=>item.variations.id == newState.variationId)
  //   // newState.productVariations= filterVariation;
  // state.items[0].productVariations = filterVariation

  return [...state.items, action.payload];
};

// cartItems, cartItemToRemove
const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc];
    }
    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  console.log("state: ",action.payload);
  return state.items.filter((item , index) => index !== action.payload);

};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return { ...state, ...action.payload };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'ADD_ITEM':
      return { ...state, items: addItemToCart(state, action) };
    case 'REMOVE_ITEM':
      return { ...state, items: removeItemFromCart(state, action) };
    case 'CLEAR_ITEM_FROM_CART':
      return { ...state, items: clearItemFromCart(state, action) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, coupon: null };
    case 'TOGGLE_RESTAURANT':
      return { ...state, isRestaurant: !state.isRestaurant };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
