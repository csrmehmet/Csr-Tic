import { PRODUCT_ACTIONS } from "../actions/types";

const initialProductState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED' // "NOT_FETCHED" | "FETCHING" | "FETCHED" | "FAILED"
  };
  
  export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
      case PRODUCT_ACTIONS.SET_CATEGORIES:
        return { ...state, categories: action.payload };
      case PRODUCT_ACTIONS.SET_PRODUCT_LIST:
        return { ...state, productList: action.payload };
      case PRODUCT_ACTIONS.SET_TOTAL:
        return { ...state, total: action.payload };
      case PRODUCT_ACTIONS.SET_FETCH_STATE:
        return { ...state, fetchState: action.payload };
      case PRODUCT_ACTIONS.SET_LIMIT:
        return { ...state, limit: action.payload };
      case PRODUCT_ACTIONS.SET_OFFSET:
        return { ...state, offset: action.payload };
      case PRODUCT_ACTIONS.SET_FILTER:
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };