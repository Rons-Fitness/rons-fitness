import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DashboardMain from 'components/dashboard/DashboardMain';
// import { getHomeScreenData } from 'redux/product/actions';
import { useNavigate } from 'react-router-dom';

import {
  addProductToCart,
  addProductToWishList,
  changeSearchText,
} from 'redux/auth/actions';
import { getHomeScreenData } from 'redux/product/actions';

const Dashboard = ({
  homeScreenData,
  getHomeScreenDetails,
  keyword,
  addtoCart,
  addToWishlist,
  setSearchText,
}) => {
  const history = useNavigate();

  useEffect(() => {
    getHomeScreenDetails();
  }, [getHomeScreenDetails]);

  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  useEffect(() => {
    if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
        // background: 'rgb(254, 249, 241)',
      }}
    >
      <DashboardMain
        homeScreenData={homeScreenData}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
      />
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
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
