import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardMain from 'components/dashboard/DashboardMain';
import Footer from 'components/footer/Footer';
import { getHomeScreenData } from 'redux/product/actions';

const Dashboard = ({ homeScreenData, getHomeScreenDetails }) => {
  useEffect(() => {
    getHomeScreenDetails();
  }, [getHomeScreenDetails]);

  return (
    <div style={{ height: 'calc(100vh - 113px)', overflow: 'auto' }}>
      <DashboardMain homeScreenData={homeScreenData} />
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ product }) => {
  const { homeScreenData } = product;
  return { homeScreenData };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeScreenDetails: () => dispatch(getHomeScreenData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
