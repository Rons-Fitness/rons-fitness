import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './app.css';
import Loader from 'components/common/loader/Loader';

// import { NotificationContainer } from './components/common/react-notifications';

// import { ProtectedRoute } from './helpers/authHelper';

// const ViewHome = React.lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/user/login')
// );
const Navbar = lazy(() => import('components/navbar/Navbar'));
const Dashboard = lazy(() => import('./containers/Dashboard'));
const ProductList = lazy(() => import('./containers/ProductList'));
const NotFound = lazy(() => import('containers/NotFound'));

const App = () => {
  return (
    <div className="h-100">
      <>
        {/* <NotificationContainer /> */}

        <Suspense fallback={<Loader />}>
          <Router>
            <Navbar />
            <Switch>
              {/* <ProtectedRoute
                  path={adminRoot}
                  component={ViewApp}
                  roles={[UserRole.Admin, UserRole.Editor]}
                /> */}
              <Route
                exact
                path="/"
                render={(props) => <Dashboard {...props} />}
              />
              <Route
                exact
                path="/products"
                render={(props) => <ProductList {...props} />}
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
        </Suspense>
      </>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
