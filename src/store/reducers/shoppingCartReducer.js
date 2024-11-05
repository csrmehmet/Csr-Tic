import { SHOPPING_CART_ACTIONS } from "../actions/types";

const initialShoppingCartState = {
    cart: [], // [{ count: 1, product: { id: "1235", … } }]
    payment: {},
    address: {}
  };
  
  export const shoppingCartReducer = (state = initialShoppingCartState, action) => {
    switch (action.type) {
      case SHOPPING_CART_ACTIONS.SET_CART:
        return { ...state, cart: action.payload };
      case SHOPPING_CART_ACTIONS.SET_PAYMENT:
        return { ...state, payment: action.payload };
      case SHOPPING_CART_ACTIONS.SET_ADDRESS:
        return { ...state, address: action.payload };
      default:
        return state;
    }
  };