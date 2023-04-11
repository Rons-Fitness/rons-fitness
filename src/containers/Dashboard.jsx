import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardMain from 'components/dashboard/DashboardMain';
import { getHomeScreenData } from 'redux/product/actions';
import { Link, useHistory } from 'react-router-dom';
import Footer from 'components/footer/Footer';
import { addProductToCart, addProductToWishList } from 'redux/auth/actions';

const Dashboard = ({
  homeScreenData,
  getHomeScreenDetails,
  keyword,
  addtoCart,
  addToWishlist,
}) => {
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
      <DashboardMain
        homeScreenData={homeScreenData}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
      />
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
  addtoCart: (data, history) => dispatch(addProductToCart(data, history)),
  addToWishlist: (_id, inWishlist) =>
    dispatch(addProductToWishList(_id, inWishlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
