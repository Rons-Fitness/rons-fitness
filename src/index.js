/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loader from 'components/common/loader/Loader';
import configureStore from './redux/store';
import reportWebVitals from './reportWebVitals';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

const Main = () => {
  return (
    <>
      <Provider store={configureStore}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
      <NotificationContainer />
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// /* eslint-disable global-require */
// import './assets/css/vendor/bootstrap.min.css';
// import './assets/css/vendor/bootstrap.rtl.only.min.css';

// require('./AppRenderer');
