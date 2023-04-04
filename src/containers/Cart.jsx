import React from 'react';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';
import CartMain from 'components/cart/CartMain';
import Loader from 'components/common/loader/Loader';

function Cart({ keyword, loading, cart }) {
  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      {loading ? <Loader /> : <CartMain cart={cart} keyword={keyword} />}
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  const { keyword, currentUser, loading } = user;

  return { keyword, loading, cart: currentUser?.cart };
};
const mapDispatchToProps = (dispatch) => ({
  getProductList: (data) => dispatch(getProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
