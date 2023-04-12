import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setAuthPopup } from 'redux/auth/actions';

const ProtectedRoute = ({ render: Component, ...rest }) => {
  const token = localStorage.getItem('auth_token');
  const dispatch = useDispatch();
  const setComponent = (props) => {
    if (token) {
      return <Component {...props} />;
    }
    dispatch(setAuthPopup(true));
    return <Redirect to="/" />;
  };
  return <Route exact {...rest} render={setComponent} />;
};

export default ProtectedRoute;
