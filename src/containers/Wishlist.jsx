/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import Loader from 'components/common/loader/Loader';
import WishlistMain from 'components/wishlist/WishlistMain';
import {
  addProductToCart,
  changeSearchText,
  getUserWishList,
  removeProductToWishList,
} from 'redux/auth/actions';
import NoItemsFound from 'components/notFound/NoItemsFound';
import { useHistory } from 'react-router-dom';

const Wishlist = ({
  keyword,
  loading,
  wishlist,
  getWishList,
  removeFromWishList,
  addtoCart,
  setSearchText,
}) => {
  useEffect(() => {
    getWishList();
  }, [getWishList]);

  const history = useHistory();
  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    if (keyword && keyword.length > 0) history.push('/products');
  }, [keyword]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
      }}
    >
      {loading ? (
        <Loader />
      ) : wishlist.length ? (
        <WishlistMain
          wishlist={wishlist}
          keyword={keyword}
          removeFromWishList={removeFromWishList}
          addtoCart={addtoCart}
        />
      ) : (
        <NoItemsFound />
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { keyword, loading, wishlist } = user;

  return { keyword, loading, wishlist };
};
const mapDispatchToProps = (dispatch) => ({
  getWishList: () => dispatch(getUserWishList()),
  removeFromWishList: (_id) => dispatch(removeProductToWishList(_id)),
  addtoCart: (data, history) => dispatch(addProductToCart(data, history)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
