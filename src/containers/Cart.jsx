import React from 'react';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';
import CartMain from 'components/cart/CartMain';
import Loader from 'components/common/loader/Loader';
import { addProductToCart, reomveProductFromCart } from 'redux/auth/actions';

function Cart({ keyword, loading, cart, removeItemFromCart, addtoCart }) {
  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      {loading ? (
        <Loader />
      ) : (
        <CartMain
          cart={cart}
          keyword={keyword}
          removeItemFromCart={removeItemFromCart}
          addtoCart={addtoCart}
        />
      )}
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
  removeItemFromCart: (data) => dispatch(reomveProductFromCart(data)),
  addtoCart: (data, history) => dispatch(addProductToCart(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
