import React, { useEffect } from 'react';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import Loader from 'components/common/loader/Loader';
import WishlistMain from 'components/wishlist/WishlistMain';
import { getUserWishList } from 'redux/auth/actions';

const Wishlist = ({ keyword, loading, wishlist, getWishList }) => {
  useEffect(() => {
    getWishList();
  }, [getWishList]);

  return (
    <div
      style={{
        height: 'calc(100vh - 115px)',
        overflow: 'auto',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <WishlistMain wishlist={wishlist} keyword={keyword} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
