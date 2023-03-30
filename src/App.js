import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './app.css';
// import { NotificationContainer } from './components/common/react-notifications';

// import { ProtectedRoute } from './helpers/authHelper';

// const ViewHome = React.lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/user/login')
// );
const Navbar = lazy(() => import('components/navbar/Navbar'));
const Dashboard = lazy(() =>
  import(/* webpackChunkName: "views" */ './containers/Dashboard')
);

const App = () => {
  return (
    <div className="h-100">
      <>
        {/* <NotificationContainer /> */}

        <Suspense fallback={<div className="loading">loading</div>}>
          <Router>
            <Navbar />
            <Switch>
              {/* <ProtectedRoute
                  path={adminRoot}
                  component={ViewApp}
                  roles={[UserRole.Admin, UserRole.Editor]}
                /> */}
              <Route path="/" render={(props) => <Dashboard {...props} />} />
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

              {/*
                <Redirect exact from="/" to={adminRoot} />
                */}
              <Redirect to="/error" />
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
