import ProductDetailsMain from 'components/products/ProductDetailsMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from 'redux/actions';
// import Error404 from 'components/notFound/Error404';

const ProductDetails = ({ getProductById, selectedProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) getProductById(id);
  }, [id, getProductById]);
  console.log({ selectedProduct });
  return (
    <div>
      <ProductDetailsMain selectedProduct={selectedProduct} />
    </div>
  );
};
const mapStateToProps = ({ product, user }) => {
  const { selectedProduct, loading } = product;
  const { keyword } = user;

  return { selectedProduct, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getProductById: (id) => dispatch(getSingleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
