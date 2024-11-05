/* eslint-disable no-undef */
import axiosInstance from '@/api/axiosInstance';
import md5 from 'md5';  // require yerine import kullanıyoruz
import { CLIENT_ACTIONS } from './types';

// Action Creators
export const setUser = (user) => ({
  type: CLIENT_ACTIONS.SET_USER,
  payload: user
});

export const setRoles = (roles) => ({
  type: CLIENT_ACTIONS.SET_ROLES,
  payload: roles
});

export const setTheme = (theme) => ({
  type: CLIENT_ACTIONS.SET_THEME,
  payload: theme
});

export const setLanguage = (language) => ({
  type: CLIENT_ACTIONS.SET_LANGUAGE,
  payload: language
});

export const setAddressList = (addresses) => ({
  type: CLIENT_ACTIONS.SET_ADDRESS_LIST,
  payload: addresses
});

export const setCreditCards = (cards) => ({
  type: CLIENT_ACTIONS.SET_CREDIT_CARDS,
  payload: cards
});

// Thunk action creator for login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/login', {
      email: credentials.email,
      password: credentials.password
    });

    if (response.data && response.data.token) {
      if (credentials.rememberMe) {
        localStorage.setItem('token', response.data.token);
      }

      const gravatarHash = md5(credentials.email.toLowerCase().trim());
      const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=identicon`;

      const userData = {
        ...response.data.user,
        avatar: gravatarUrl
      };

      // Bearer prefix'i olmadan token'ı ekle
      axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
      dispatch(setUser(userData));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    dispatch(setUser(null));
    return false;
  }
};

// Logout action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  delete axiosInstance.defaults.headers.common['Authorization'];
  dispatch(setUser(null));
};

export const verifyToken = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return false;
    }

    // Token'ı axios header'ına ekle (Bearer prefix'i olmadan)
    axiosInstance.defaults.headers.common['Authorization'] = token;

    // Token'ı verify et
    const response = await axiosInstance.get('/verify');

    if (response.data) {
      // Gravatar URL oluştur
      const gravatarHash = md5(response.data.email.toLowerCase().trim());
      const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=identicon`;

      // User bilgisini güncelle
      const userData = {
        ...response.data,
        avatar: gravatarUrl
      };

      // Token'ı yenile
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
      }

      dispatch(setUser(userData));
      return true;
    }

    return false;
  } catch (error) {
    console.error('Token verification error:', error);
    // Token geçersizse temizle
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
    dispatch(setUser(null));
    return false;
  }
};