import { CLIENT_ACTIONS } from "../actions/types";

const initialClientState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'tr'
};

export const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case CLIENT_ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    case CLIENT_ACTIONS.SET_ROLES:
      return { ...state, roles: action.payload };
    case CLIENT_ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case CLIENT_ACTIONS.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case CLIENT_ACTIONS.SET_ADDRESS_LIST:
      return { ...state, addressList: action.payload };
    case CLIENT_ACTIONS.SET_CREDIT_CARDS:
      return { ...state, creditCards: action.payload };
    default:
      return state;
  }
};