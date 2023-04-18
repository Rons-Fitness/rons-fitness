import React from 'react';
import './noItemsFound.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const EmptyWishList = () => {
  return (
    <div className="empty-state">
      <div className="content">
        <div className="empty-state__icon">
          <img src="/asstes/img/notFound/empty_wishList.jpg" alt="" />
        </div>
        <div className="empty-state__message">No Items in Wishlist.!!</div>
        <h5 style={{ margin: '25px 0' }}>
          Explore more, and shortlist some items
        </h5>
        <Link to="/products">
          <input
            required
            type="button"
            value="Explore"
            className={classNames(
              'shipping-btn  btn-views-active',
              'activeAddressType'
            )}
            style={{
              height: 35.5,
              padding: '0 30px',
              border: 'none',
              borderRadius: 5,
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default EmptyWishList;
