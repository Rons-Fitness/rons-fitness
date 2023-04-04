import Loader from 'components/common/loader/Loader';
import Footer from 'components/footer/Footer';
import ProductListMain from 'components/products/ProductListMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';
import { addProductToCart } from 'redux/auth/actions';

function ProductList({
  products,
  getProductList,
  keyword,
  loading,
  addtoCart,
}) {
  console.log({ loading });
  useEffect(() => {
    getProductList({ keyword });
  }, [keyword]);

  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      {loading ? (
        <Loader />
      ) : (
        <ProductListMain products={products} addtoCart={addtoCart} />
      )}
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ product, user }) => {
  const { products, loading } = product;
  const { keyword } = user;

  return { products, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getProductList: (data) => dispatch(getProducts(data)),
  addtoCart: (_id, history) => dispatch(addProductToCart(_id, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
