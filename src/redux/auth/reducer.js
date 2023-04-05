// import { isAuthGuardActive, currentUser } from 'constants/defaultValues';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  USER_AUTH_SUCCESS,
  SET_SEARCH_TEXT,
  GET_WISHLIST_DETAILS,
  GET_WISHLIST_DETAILS_SUCCESS,
  GET_WISHLIST_DETAILS_ERROR,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  ADD_PRODUCT_TO_WISHLIST_ERROR,
  DELETE_PRODUCT_FROM_CART_ERROR,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  GET_USER_ADDRESS,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_ERROR,
} from '../contants';

const INIT_STATE = {
  currentUser: null,
  forgotUserMail: '',
  newPassword: '',
  resetPasswordCode: '',
  loading: false,
  error: '',
  success: '',
  keyword: '',
  wishlist: [],
  addresses: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, keyword: action.payload };
    case GET_USER_DETAILS:
      return { ...state, loading: true, error: '' };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case OTP_VERIFY:
      return { ...state, loading: true, error: '' };
    case OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case OTP_VERIFY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: '',
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: '',
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: '' };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: '',
        error: '',
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: '',
        resetPasswordCode: '',
        error: action.payload.message,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        success: '',
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        error: '',
      };
    case LOGOUT_USER:
      return { ...state, currentUser: null, error: '' };

    case GET_WISHLIST_DETAILS:
      return { ...state, loading: true };
    case GET_WISHLIST_DETAILS_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case GET_WISHLIST_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    // case DELETE_PRODUCT_FROM_WISHLIST:
    //   return { ...state, loading: true };
    case ADD_PRODUCT_TO_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case ADD_PRODUCT_TO_WISHLIST_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case DELETE_PRODUCT_FROM_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case DELETE_PRODUCT_FROM_WISHLIST_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case ADD_PRODUCT_TO_CART:
      return { ...state };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, cart: action.payload },
      };
    case ADD_PRODUCT_TO_CART_ERROR:
      return { ...state, error: action.payload.message };
    case DELETE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, cart: action.payload },
      };
    case DELETE_PRODUCT_FROM_CART_ERROR:
      return { ...state, error: action.payload.message };
    case GET_USER_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
      };
    case GET_USER_ADDRESS_ERROR:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};
