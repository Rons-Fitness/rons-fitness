import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardMain from 'components/dashboard/DashboardMain';
import { getHomeScreenData } from 'redux/product/actions';
import { Link, useHistory } from 'react-router-dom';
import Footer from 'components/footer/Footer';

const Dashboard = ({ homeScreenData, getHomeScreenDetails, keyword }) => {
  const history = useHistory();

  useEffect(() => {
    if (keyword && keyword.length > 0) <Link exact to="/products" />;
  }, [keyword]);

  useEffect(() => {
    getHomeScreenDetails();
  }, [getHomeScreenDetails]);

  useEffect(() => {
    if (keyword && keyword.length > 0) history.push('/products');
  }, [keyword]);
  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <DashboardMain homeScreenData={homeScreenData} />
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { homeScreenData } = product;
  const { keyword } = user;
  return { homeScreenData, keyword };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeScreenDetails: () => dispatch(getHomeScreenData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
