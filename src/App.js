/* eslint-disable import/extensions */
import React, { lazy } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './app.css';
import Navbar from 'components/navbar/Navbar';
import ProtectedRoute from 'helpers/authHelper.js';

// import Loader from 'components/common/loader/Loader';

// import { NotificationContainer } from './components/common/react-notifications';

// import { ProtectedRoute } from './helpers/authHelper';

// const ViewHome = React.lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/user/login')
// );
// const Navbar = lazy(() => import('components/navbar/Navbar'));
const Dashboard = lazy(() => import('./containers/Dashboard'));
const ProductList = lazy(() => import('./containers/ProductList'));
const ProductDetails = lazy(() => import('./containers/ProductDetails'));
const Cart = lazy(() => import('./containers/Cart'));
const Wishlist = lazy(() => import('containers/Wishlist'));
const Address = lazy(() => import('./containers/Address'));
const NewAddress = lazy(() => import('./containers/NewAddress'));
const EditAddress = lazy(() => import('./containers/EditAddress'));
const UserProfile = lazy(() => import('./containers/UserProfile'));
const NotFound = lazy(() => import('containers/NotFound'));

const App = () => {
  return (
    <div className="h-100">
      <>
        {/* <NotificationContainer /> */}

        {/* <Suspense fallback={<Loader />}> */}
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/products"
              render={(props) => <ProductList {...props} />}
              // render={(props) => <ProductDetails {...props} />}
            />
            <Route
              exact
              path="/product/:id"
              render={(props) => <ProductDetails {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/cart"
              render={(props) => <Cart {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/wishlist"
              render={(props) => <Wishlist {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/address"
              render={(props) => <Address {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/address/new"
              render={(props) => <NewAddress {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/address/edit/:id"
              render={(props) => <EditAddress {...props} />}
            />
            <ProtectedRoute
              exact
              path="/user/profile"
              render={(props) => <UserProfile {...props} />}
            />
            {/* <Route
                  path="/user"
                  render={(props) => <ViewUser {...props} />}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <ViewError {...props} />}
                />
                <Route
                  path="/unauthorized"
                  exact
                  render={(props) => <ViewUnauthorized {...props} />}
                /> */}
            <Route
              path="/notfound"
              exact
              render={(props) => <NotFound {...props} />}
            />
            <Redirect to="/notfound" />
          </Switch>
        </Router>
        {/* </Suspense> */}
      </>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
