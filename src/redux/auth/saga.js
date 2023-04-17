/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
import API from 'helpers/API';
import Notification from 'components/Notification/Notification';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_USER_DETAILS,
  OTP_VERIFY,
  CHANGE_PASSWORD,
  GET_WISHLIST_DETAILS,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_CART,
  GET_USER_ADDRESS,
  CREATE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  GET_ADDRESS_BY_ID,
  DELETE_USER_ADDRESS,
  LIKE_DISLIKE_PRODUCT_REVIEW,
  GET_USER_ORDERS,
  GET_ORDER_BY_ID,
  ADD_EDIT_USER_REVIEW,
  UPDATE_USER_DETAILS,
} from '../contants';

import {
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
  getUserDetailSuccess,
  getUserDetailsError,
  verifyOtpSuccess,
  verifyOtpError,
  changePasswordError,
  changePasswordSuccess,
  authSuccess,
  getUserWishListSuccess,
  getUserWIshLIstError,
  addToCartSuccess,
  addToCartError,
  addProductToWishListSuccess,
  addProductToWishListError,
  removeProductToWishListSuccess,
  removeProductToWishListError,
  reomveFromCartSuccess,
  reomveFromCartError,
  getUserAddressesSuccess,
  getUserAddressesError,
  createUserAddressSuccess,
  createUserAddressError,
  updateUserAddressError,
  getAddressByIdSuccess,
  getAddressByIdError,
  deleteUserAddressSuccess,
  deleteUserAddressError,
  setAuthPopup,
  getUserOrdersSuccess,
  getUserOrderError,
  removeProductToWishList,
  getOrderByIdSuccess,
  getOrderByIdError,
  updateUserDetailsSuccess,
  updateUserDetailsError,
} from './actions';

const getUSerDetailsAsync = async () => {
  try {
    const res = await API.get('/user/profile');
    return res;
  } catch (error) {
    return error;
  }
};

export function* getUserWorker({ payload }) {
  const { history } = payload;
  try {
    const { data, status } = yield call(getUSerDetailsAsync);
    if (status === 200) {
      yield put(getUserDetailSuccess(data));
      yield put(setAuthPopup(false));
    } else {
      history.push('/');
      yield put(setAuthPopup(true));
      yield put(getUserDetailsError('token expired'));
    }
  } catch (error) {
    history.push('/');
    yield put(getUserDetailsError('something went wrong'));
    yield put(setAuthPopup(true));
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_DETAILS, getUserWorker);
}

const GenerateOtpAsync = async (mobileNo) => {
  try {
    const res = await API.post('/user/generate-otp', {
      mobileNo,
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* loginWithPhoneNumber({ payload }) {
  const { mobileNo } = payload;

  try {
    const loginUser = yield call(GenerateOtpAsync, mobileNo);
    const {
      data: { message },
      status,
    } = loginUser;

    if (status === 200) {
      localStorage.setItem('mobileNo', JSON.stringify({ mobileNo }));
      yield put(authSuccess());
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(loginUserError(message));
    }
  } catch (error) {
    yield put(loginUserError(error));
    Notification('error');
  }
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginWithPhoneNumber);
}

const verifyOtpAsync = async (mobileNo, otp) => {
  try {
    const { data, status } = await API.post('/user/verify-otp', {
      mobileNo: Number(mobileNo),
      otp: Number(otp),
    });
    return { data, status };
  } catch (error) {
    return error;
  }
};
function* verifyOtp({ payload }) {
  const {
    otpValues: { mobileNo, otp },
  } = payload;

  try {
    const {
      data: { success, token, user, message },
      status,
    } = yield call(verifyOtpAsync, mobileNo, otp);
    if (status === 200 && success) {
      Notification('success', message);
      yield put(verifyOtpSuccess());
      localStorage.removeItem('mobileNo');
      localStorage.setItem('auth_token', token);
      yield put(getUserDetailSuccess(user));
      yield put(setAuthPopup(false));
      window.location.reload();
    } else {
      Notification('error', message);
      yield put(verifyOtpError(message));
    }
  } catch (error) {
    Notification('error');
    yield put(verifyOtpError('something went wrong please try again'));
  }
}
export function* watchVerifyOtp() {
  yield takeEvery(OTP_VERIFY, verifyOtp);
}

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) => {
  console.log({ email, password });
};

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      const item = { uid: registerUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await history.push('/');
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  localStorage.clear();
  Notification('success', 'Use Logged Out');
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

function* forgotPassword({ payload }) {
  const { mobileNo, history } = payload;
  try {
    const {
      status,
      data: { message },
    } = yield call(GenerateOtpAsync, mobileNo);
    if (status === 200) {
      yield put(forgotPasswordSuccess('OTP sent successfully to your number'));
      history.push('/user/otp');
    } else {
      yield put(forgotPasswordError(message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (token, newPassword) => {
  try {
    const res = await API.post(`/user/password/${token}`, {
      password: newPassword,
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* resetPassword({ payload }) {
  const { newPassword, token } = payload;
  try {
    const {
      status,
      data: { message, success },
    } = yield call(resetPasswordAsync, token, newPassword);
    if (status === 200 && success) {
      yield put(resetPasswordSuccess(message));
      window.location.href = '/';
    } else {
      yield put(resetPasswordError(message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

const changePasswordAsync = async (oldPassword, newPassword) => {
  try {
    const res = await API.put('user/password', { oldPassword, newPassword });
    return res;
  } catch (error) {
    return error;
  }
};
function* changePassword({ payload }) {
  const { oldPassword, newPassword } = payload;
  try {
    const {
      status,
      data: { success, message },
    } = yield call(changePasswordAsync, oldPassword, newPassword);
    if (status === 200 && success) {
      yield put(changePasswordSuccess(message));
    } else {
      yield put(changePasswordError(message));
    }
  } catch (error) {
    yield put(changePasswordError(error));
  }
}
export function* watchChangePassword() {
  yield takeEvery(CHANGE_PASSWORD, changePassword);
}

// wish list
const getUserWishListAsync = async () => {
  const res = await API.get('/product/wishlist');
  return res;
};
function* getUserWishList() {
  try {
    const { data, status } = yield call(getUserWishListAsync);
    if (status === 200) {
      yield put(getUserWishListSuccess(data));
    } else {
      yield put(getUserWIshLIstError('someting went wrong'));
      Notification('error');
    }
  } catch (error) {
    put(getUserWIshLIstError(error));
    Notification('error');
  }
}

export function* watchGetUserWishList() {
  yield takeEvery(GET_WISHLIST_DETAILS, getUserWishList);
}

const addToWishListAsync = async (_id, inWishlist) => {
  let res;
  if (inWishlist) res = await API.put(`/product/wishlist/${_id}`);
  else res = await API.post(`/product/wishlist/${_id}`);
  return res;
};
function* addToWishList({ payload }) {
  const { _id, inWishlist } = payload;
  try {
    console.log({ inWishlist });
    const {
      data: { data, message },
      status,
    } = yield call(addToWishListAsync, _id, inWishlist);
    if (status === 200) {
      yield put(addProductToWishListSuccess(data));
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(addProductToWishListError('add product to wishlist error'));
    }
  } catch (error) {
    Notification('error');
    yield put(addProductToWishListError(error));
  }
}

export function* watchAddToWishList() {
  yield takeLatest(ADD_PRODUCT_TO_WISHLIST, addToWishList);
}

const removeFromWishListAsync = async (_id) => {
  const res = await API.put(`/product/wishlist/${_id}`);
  return res;
};
function* removeFromWishList({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(removeFromWishListAsync, _id);
    if (status === 200) {
      yield put(removeProductToWishListSuccess(data));
    } else {
      yield put(removeProductToWishListError('add product to wishlist error'));
    }
  } catch (error) {
    yield put(removeProductToWishListError(error));
  }
}

export function* watchRemoveFromWishList() {
  yield takeEvery(DELETE_PRODUCT_FROM_WISHLIST, removeFromWishList);
}

// cart
const AddtoCartAsync = async ({ _id, qty = 1 }) => {
  const res = await API.post(`/user/cart/${_id}`, { qty });
  console.log({ res });
  return res;
};
function* addProductToCart({ payload }) {
  const { data, history } = payload;
  try {
    const {
      data: { data: cartData, message },
      status,
    } = yield call(AddtoCartAsync, data);
    if (status === 200) {
      yield put(addToCartSuccess(cartData.cart));
      yield put(removeProductToWishList(data._id));
      Notification('success', message);
      if (history) history.push('/user/cart');
    } else {
      console.log('error');
      yield put(setAuthPopup(true));
      yield put(addToCartError(message));
      Notification('error', message);
    }
  } catch (err) {
    yield put(setAuthPopup(true));
    yield put(addToCartError(err));
    Notification('error');
  }
}
export function* addProductToCartWatch() {
  yield takeEvery(ADD_PRODUCT_TO_CART, addProductToCart);
}
const removeFromCartAsync = async ({ _id }) => {
  const res = await API.put(`/user/cart/${_id}`);
  return res;
};
function* removeProductFromCart({ payload }) {
  const { data } = payload;
  try {
    const {
      data: {
        data: { cart },
        message,
      },
      status,
    } = yield call(removeFromCartAsync, data);
    if (status === 200) {
      yield put(reomveFromCartSuccess(cart));
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(reomveFromCartError('something went wrong'));
    }
  } catch (err) {
    yield put(reomveFromCartError(err));
    Notification('error');
  }
}
export function* removeProductFromCartWatch() {
  yield takeEvery(DELETE_PRODUCT_FROM_CART, removeProductFromCart);
}

// address
const getUserAddressAsync = async () => {
  const res = await API.get('/address');
  return res;
};

function* getUserAddress() {
  try {
    const { data, status } = yield call(getUserAddressAsync);
    if (status === 200) {
      yield put(getUserAddressesSuccess(data || []));
    } else {
      yield put(getUserAddressesError('something went wrong'));
    }
  } catch (err) {
    yield put(getUserAddressesError(err));
  }
}

export function* watchUserAddress() {
  yield takeEvery(GET_USER_ADDRESS, getUserAddress);
}

const createAddressAsync = async (address) => {
  const res = await API.post('/address', address);
  return res;
};
function* createAddress({ payload }) {
  const { address, history } = payload;
  try {
    const { data, status } = yield call(createAddressAsync, address);
    if (status === 201) {
      history.push('/user/address');
      yield put(createUserAddressSuccess(data));
      Notification('success', 'Address Added');
    } else {
      yield put(createUserAddressError('Something went wrong'));
      Notification('error');
    }
  } catch (err) {
    yield put(createUserAddressError(err));
    Notification('error');
  }
}
export function* watchCreateAddress() {
  yield takeEvery(CREATE_USER_ADDRESS, createAddress);
}

const updateAddressAsync = async (address) => {
  const { _id } = address;
  delete address._id;
  const res = await API.put(`/address/${_id}`, address);
  return res;
};
function* updateAddress({ payload }) {
  const { address, history } = payload;
  try {
    const { status } = yield call(updateAddressAsync, address);
    if (status === 200) {
      if (history) history.push('/user/address');
      Notification('success', 'Address Updated');
    } else {
      yield put(updateUserAddressError('Something went wrong'));
      Notification('error');
    }
  } catch (err) {
    yield put(updateUserAddressError(err));
    Notification('error');
  }
}
export function* watchUpdateAddress() {
  yield takeEvery(UPDATE_USER_ADDRESS, updateAddress);
}

const getAddressByID = async (_id) => {
  const res = await API.get(`/address/${_id}`);
  return res;
};
function* getAddressById({ payload }) {
  const { _id } = payload;
  try {
    const { data, status } = yield call(getAddressByID, _id);
    if (status === 200) {
      yield put(getAddressByIdSuccess(data));
    } else {
      yield put(getAddressByIdError('Something went wrong'));
    }
  } catch (err) {
    yield put(getAddressByIdError(err));
  }
}
export function* watchAddressById() {
  yield takeEvery(GET_ADDRESS_BY_ID, getAddressById);
}

const deleteAddressByID = async (_id) => {
  const res = await API.delete(`/address/${_id}`);
  return res;
};
function* deleteAddressById({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data, message },
      status,
    } = yield call(deleteAddressByID, _id);
    if (status === 200) {
      yield put(deleteUserAddressSuccess(data));
      Notification('success', message);
    } else {
      yield put(deleteUserAddressError('Something went wrong'));
      Notification('error', message);
    }
  } catch (err) {
    yield put(deleteUserAddressError(err));
    Notification('error');
  }
}
export function* watchDeleteAddress() {
  yield takeEvery(DELETE_USER_ADDRESS, deleteAddressById);
}

const likeDislikeProductReviewAsync = async (_id, liked) => {
  let res = {};
  if (liked) res = await API.post(`/product/${_id}/review/like`);
  else res = await API.post(`/product/${_id}/review/dislike`);
  return res;
};

function* likeDislikeProductReview({ payload }) {
  const { _id, liked } = payload;
  try {
    const {
      data: { message },
      status,
    } = yield call(likeDislikeProductReviewAsync, _id, liked);
    if (status === 200) Notification('success', message);
    else Notification('error', message);
  } catch (err) {
    console.log(err);
  }
}

export function* watchLikeDislikeProductReview() {
  yield takeEvery(LIKE_DISLIKE_PRODUCT_REVIEW, likeDislikeProductReview);
}

const addEditUserReviewAsync = async (review) => {
  const { _id } = review;
  const res = await API.post(`/product/${_id}/review`, review);
  console.log({ res });
  return res;
};

function* addEditUserReview({ payload }) {
  const { review, history } = payload;
  try {
    const {
      status,
      data: { message },
    } = yield call(addEditUserReviewAsync, review);
    if (status === 201) {
      Notification('success', message);
      history.push('/user/orders');
    } else {
      Notification('error', message);
    }
  } catch (error) {
    console.log(error);
    Notification('error');
  }
}

export function* watchAddEditUserReview() {
  yield takeEvery(ADD_EDIT_USER_REVIEW, addEditUserReview);
}

// user orders
const getUserOrdersAsync = async () => {
  const res = await API.get('/order/myorders');
  return res;
};

function* getUserOrders() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getUserOrdersAsync);
    if (status === 200) {
      yield put(getUserOrdersSuccess(data));
    } else {
      yield put(getUserOrderError('someting went wrong '));
    }
  } catch (err) {
    yield put(getUserOrderError(err));
  }
}

export function* watchGetUserOrders() {
  yield takeEvery(GET_USER_ORDERS, getUserOrders);
}

const getOrderByIdAsync = async (_id) => {
  const res = await API.get(`/order/${_id}`);
  return res;
};
function* getOrderByID({ payload }) {
  const { _id } = payload;
  console.log({ _id });
  try {
    const { data, status } = yield call(getOrderByIdAsync, _id);
    if (status === 200) {
      yield put(getOrderByIdSuccess(data));
    } else {
      yield put(getOrderByIdError('something went wrong'));
    }
  } catch (err) {
    yield put(getOrderByIdError(err));
  }
}
export function* watchGetOrderByID() {
  console.log('take');
  yield takeEvery(GET_ORDER_BY_ID, getOrderByID);
}

const updateUserDetailsAsync = async (data) => {
  const res = await API.post('/user/profile', data);
  return res;
};

function* updateUserDetails({ payload }) {
  console.log({ payload });
  try {
    const {
      data: { data, message },
      status,
    } = yield call(updateUserDetailsAsync, payload);

    if (status === 200) {
      yield put(updateUserDetailsSuccess(data));
      Notification('success', message);
    } else {
      yield put(updateUserDetailsError('someting went wrong'));
      Notification('error', message);
    }
  } catch (error) {
    yield put(updateUserDetailsError(error));
    Notification('error');
  }
}
export function* watchUpdateUserDetails() {
  yield takeEvery(UPDATE_USER_DETAILS, updateUserDetails);
}
export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchGetUser),
    fork(watchVerifyOtp),
    fork(watchChangePassword),
    fork(watchGetUserWishList),
    fork(addProductToCartWatch),
    fork(watchAddToWishList),
    fork(watchRemoveFromWishList),
    fork(removeProductFromCartWatch),
    fork(watchUserAddress),
    fork(watchCreateAddress),
    fork(watchUpdateAddress),
    fork(watchAddressById),
    fork(watchDeleteAddress),
    fork(watchLikeDislikeProductReview),
    fork(watchGetUserOrders),
    fork(watchGetOrderByID),
    fork(watchAddEditUserReview),
    fork(watchUpdateUserDetails),
  ]);
}
