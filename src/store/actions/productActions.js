// src/store/actions/productActions.js
import { PRODUCT_ACTIONS } from "./types";

import { products,shopPageData  } from "@/data";
// Action Creators (mevcut)
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

// Kategori fetch işlemi - rating'e göre sıralanacak
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(setFetchState('FETCHING'));
    
    // shopPageData'dan clothsCategories'i al
    const categories = shopPageData.clothsCategories;
    
    dispatch(setCategories(categories));
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    console.error('Categories fetch error:', error);
    dispatch(setFetchState('FAILED'));
  }
};

// Ürün fetch işlemi - pagination ile
export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch(setFetchState('FETCHING'));
    
    // API isteği yerine local data'yı kullanalım
    const { limit, offset } = getState().product;
    const total = products.length;
    
    // Pagination için slice kullanalım
    const paginatedProducts = products.slice(offset, offset + limit);
    
    dispatch(setProductList(paginatedProducts));
    dispatch(setTotal(total));
    dispatch(setOffset(offset));
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    console.error('Products fetch error:', error);
    dispatch(setFetchState('FAILED'));
  }
};