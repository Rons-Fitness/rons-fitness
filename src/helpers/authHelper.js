import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ render: Component, ...rest }) => {
  const token = localStorage.getItem('auth_token');
  const setComponent = (props) => {
    if (token) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };
  return <Route exact {...rest} render={setComponent} />;
};

export default ProtectedRoute;
