import { PRODUCT_ACTIONS } from "./types";

export const setCategories = (categories) => ({
    type: PRODUCT_ACTIONS.SET_CATEGORIES,
    payload: categories
  });
  
  export const setProductList = (products) => ({
    type: PRODUCT_ACTIONS.SET_PRODUCT_LIST,
    payload: products
  });
  
  export const setTotal = (total) => ({
    type: PRODUCT_ACTIONS.SET_TOTAL,
    payload: total
  });
  
  export const setFetchState = (state) => ({
    type: PRODUCT_ACTIONS.SET_FETCH_STATE,
    payload: state
  });
  
  export const setLimit = (limit) => ({
    type: PRODUCT_ACTIONS.SET_LIMIT,
    payload: limit
  });
  
  export const setOffset = (offset) => ({
    type: PRODUCT_ACTIONS.SET_OFFSET,
    payload: offset
  });
  
  export const setFilter = (filter) => ({
    type: PRODUCT_ACTIONS.SET_FILTER,
    payload: filter
  });