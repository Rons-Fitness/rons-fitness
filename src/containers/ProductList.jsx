import Footer from 'components/footer/Footer';
import ProductListMain from 'components/products/ProductListMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';

function ProductList({ products, getProductList, keyword }) {
  useEffect(() => {
    getProductList({ keyword });
  }, [keyword]);

  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <ProductListMain products={products} />
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ product, user }) => {
  const { products } = product;
  const { keyword } = user;

  return { products, keyword };
};
const mapDispatchToProps = (dispatch) => ({
  getProductList: (data) => dispatch(getProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
