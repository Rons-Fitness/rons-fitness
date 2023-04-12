import Footer from 'components/footer/Footer';
import ProductListMain from 'components/products/ProductListMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';
import { addProductToCart, addProductToWishList } from 'redux/auth/actions';
import { getHomeScreenData } from 'redux/product/actions';

function ProductList({
  products,
  getProductList,
  keyword,
  loading,
  addtoCart,
  addToWishlist,
  getHomeScreenDetails,
  homeScreenData,
}) {
  useEffect(() => {
    getHomeScreenDetails();
    getProductList({ keyword });
  }, [keyword]);

  return (
    <div style={{ minHeight: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <ProductListMain
        products={products}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
        homeScreenData={homeScreenData}
        getProductList={getProductList}
        loading={loading}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ product, user }) => {
  const { products, loading, homeScreenData } = product;
  const { keyword } = user;
  return { products, keyword, loading, homeScreenData };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeScreenDetails: () => dispatch(getHomeScreenData()),
  getProductList: (data) => dispatch(getProducts(data)),
  addtoCart: (_id, history) => dispatch(addProductToCart(_id, history)),
  addToWishlist: (_id, inWishlist) =>
    dispatch(addProductToWishList(_id, inWishlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
