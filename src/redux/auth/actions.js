import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
  GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD,
  USER_AUTH_SUCCESS,
  SET_SEARCH_TEXT,
  GET_WISHLIST_DETAILS,
  GET_WISHLIST_DETAILS_SUCCESS,
  GET_WISHLIST_DETAILS_ERROR,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_WISHLIST,
  ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  ADD_PRODUCT_TO_WISHLIST_ERROR,
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  // GET_CART_DETAILS,
} from '../contants';

export const changeSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

export const getUserDetails = (history) => ({
  type: GET_USER_DETAILS,
  payload: { history },
});
export const getUserDetailSuccess = (user) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload: user,
});
export const getUserDetailsError = (message) => ({
  type: GET_USER_DETAILS_ERROR,
  payload: { message },
});

export const loginUser = (mobileNo) => ({
  type: LOGIN_USER,
  payload: { mobileNo },
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const verifyOtp = (otpValues, history) => ({
  type: OTP_VERIFY,
  payload: { otpValues, history },
});
export const verifyOtpSuccess = () => ({
  type: OTP_VERIFY_SUCCESS,
});
export const verifyOtpError = (message) => ({
  type: OTP_VERIFY_ERROR,
  payload: { message },
});

export const forgotPassword = (mobileNo, history) => ({
  type: FORGOT_PASSWORD,
  payload: { mobileNo, history },
});
export const forgotPasswordSuccess = (mobileNo) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: mobileNo,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ token, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { token, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: { newPassword },
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const changePassword = (values, history) => ({
  type: CHANGE_PASSWORD,
  payload: { ...values, history },
});
export const changePasswordSuccess = (message) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: { message },
});
export const changePasswordError = (message) => ({
  type: CHANGE_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});
export const authSuccess = () => ({
  type: USER_AUTH_SUCCESS,
});
export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

// wishlist
export const getUserWishList = () => ({
  type: GET_WISHLIST_DETAILS,
});
export const getUserWishListSuccess = (list) => ({
  type: GET_WISHLIST_DETAILS_SUCCESS,
  payload: list,
});
export const getUserWIshLIstError = (message) => ({
  type: GET_WISHLIST_DETAILS_ERROR,
  payload: { message },
});

export const addProductToWishList = (_id) => ({
  type: ADD_PRODUCT_TO_WISHLIST,
  payload: { _id },
});
export const addProductToWishListSuccess = (list) => ({
  type: ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  payload: list,
});

export const addProductToWishListError = (message) => ({
  type: ADD_PRODUCT_TO_WISHLIST_ERROR,
  payload: { message },
});

export const removeProductToWishList = (_id) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST,
  payload: { _id },
});
export const removeProductToWishListSuccess = (list) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  payload: list,
});

export const removeProductToWishListError = (message) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  payload: { message },
});

// cart
export const addProductToCart = (data, history) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { data, history },
});

export const addToCartSuccess = (cart) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: cart,
});
export const addToCartError = (message) => ({
  type: ADD_PRODUCT_TO_CART_ERROR,
  payload: { message },
});
