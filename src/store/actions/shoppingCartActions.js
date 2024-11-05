import { SHOPPING_CART_ACTIONS } from "./types";

export const setCart = (cart) => ({
    type: SHOPPING_CART_ACTIONS.SET_CART,
    payload: cart
  });
  
  export const setPayment = (payment) => ({
    type: SHOPPING_CART_ACTIONS.SET_PAYMENT,
    payload: payment
  });
  
  export const setAddress = (address) => ({
    type: SHOPPING_CART_ACTIONS.SET_ADDRESS,
    payload: address
  });