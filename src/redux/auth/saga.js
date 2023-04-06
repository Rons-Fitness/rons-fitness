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
    const { data } = yield call(getUSerDetailsAsync);
    if (data) {
      yield put(getUserDetailSuccess(data));
    } else {
      history.push('/');
      yield put(getUserDetailsError('token expired'));
    }
  } catch (error) {
    history.push('/');
    yield put(getUserDetailsError('something went wrong'));
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
    } else {
      yield put(loginUserError(message));
    }
  } catch (error) {
    yield put(loginUserError(error));
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
      yield put(verifyOtpSuccess());
      localStorage.removeItem('mobileNo');
      localStorage.setItem('auth_token', token);
      yield put(getUserDetailSuccess(user));
      window.location.reload();
    } else {
      yield put(verifyOtpError(message));
    }
  } catch (error) {
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
  history.push('/');
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  localStorage.clear();
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
    }
  } catch (error) {
    put(getUserWIshLIstError(error));
  }
}

export function* watchGetUserWishList() {
  yield takeEvery(GET_WISHLIST_DETAILS, getUserWishList);
}

const addToWishListAsync = async (_id) => {
  const res = await API.post(`/product/wishlist/${_id}`);
  return res;
};
function* addToWishList({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(addToWishListAsync, _id);
    if (status === 200) {
      yield put(addProductToWishListSuccess(data));
    } else {
      yield put(addProductToWishListError('add product to wishlist error'));
    }
  } catch (error) {
    yield put(addProductToWishListError(error));
  }
}

export function* watchAddToWishList() {
  yield takeEvery(ADD_PRODUCT_TO_WISHLIST, addToWishList);
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
  return res;
};
function* addProductToCart({ payload }) {
  const { data, history } = payload;
  try {
    const {
      data: {
        data: { cart },
      },
      status,
    } = yield call(AddtoCartAsync, data);
    if (status === 200) {
      yield put(addToCartSuccess(cart));
      if (history) history.push('/user/cart');
    } else {
      yield put(addToCartError('something went wrong'));
    }
  } catch (err) {
    yield put(addToCartError(err));
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
      },
      status,
    } = yield call(removeFromCartAsync, data);
    if (status === 200) {
      yield put(reomveFromCartSuccess(cart));
    } else {
      yield put(reomveFromCartError('something went wrong'));
    }
  } catch (err) {
    yield put(reomveFromCartError(err));
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
      getUserAddressesError('something went wrong');
    }
  } catch (err) {
    getUserAddressesError(err);
  }
}

export function* watchUserAddress() {
  yield takeEvery(GET_USER_ADDRESS, getUserAddress);
}

const createAddressAsync = async (address) => {
  console.log({ address });
  const res = await API.post('/address', address);
  return res;
};
function* createAddress({ payload }) {
  const { address, history } = payload;
  console.log({ history });
  try {
    const { data, status } = yield call(createAddressAsync, address);
    if (status === 201) {
      history.push('/user/address');
      yield put(createUserAddressSuccess(data));
    } else {
      yield put(createUserAddressError('Something went wrong'));
    }
  } catch (err) {
    yield put(createUserAddressError(err));
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
      history.push('/user/address');
    } else {
      yield put(updateUserAddressError('Something went wrong'));
    }
  } catch (err) {
    yield put(updateUserAddressError(err));
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
  ]);
}
