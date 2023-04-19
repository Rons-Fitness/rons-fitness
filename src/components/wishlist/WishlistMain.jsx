/* eslint-disable no-extra-boolean-cast */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import EmptyWishList from 'components/notFound/EmptyWishList';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const WishlistMain = ({ wishlist, removeFromWishList, addtoCart }) => {
  const history = useHistory();
  return (
    <div
      className="my-whish-section"
      style={{ minHeight: 'calc(100vh - 115px)' }}
    >
      <div className="container">
        <div className="my-whish-head">
          <h1>
            My Wishlist <span>({wishlist.length})</span>
          </h1>
        </div>
        <div className="my-whish-body">
          {Boolean(wishlist.length) ? (
            wishlist.map((wish) => (
              <div className="my-whish-contain" key={wish._id}>
                <div className="row">
                  <div className="col-lg-2 col-md- col-sm-12 d-flex justify-content-center">
                    <div className="my-whish-img-box">
                      <Link to={`/product/${wish._id}`}>
                        <img
                          src={wish.image.find((img) => img.url !== '').url}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-9 com-md- col-sm-12">
                    <div className="my-wish-list">
                      <a>
                        <h5 className="align-items-center">{wish.name}</h5>
                        {wish.flavour !== '' && (
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                            style={
                              wish.nonVeg
                                ? {
                                    color: 'red',
                                  }
                                : {
                                    color: 'green',
                                  }
                            }
                          />
                        )}
                      </a>
                      <p>{wish.brand}</p>
                      <h3>
                        ₹{wish.price}{' '}
                        <span>
                          MRP:<del className="ms-1">{wish.mrp}</del>
                        </span>
                      </h3>
                      <p className="star">
                        <i className="fas fa-star" />
                        {wish.rating}
                      </p>
                      <div className="btn-mywish-body">
                        <p className="bin-body">
                          <i
                            className="far fa-trash-alt"
                            onClick={() => removeFromWishList(wish._id)}
                          />
                        </p>
                        <a
                          onClick={() =>
                            addtoCart(
                              {
                                _id: wish._id,
                                qty: 1,
                              },
                              history
                            )
                          }
                        >
                          <p
                            className="btn-mywhish"
                            style={{ cursor: 'pointer' }}
                          >
                            <i className="bi bi-cart2" />
                            <span className=""> Move To Cart </span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md- col-sm-12 d-flex justify-content-end">
                    <div className="bin-body">
                      <a href="#">
                        <i
                          className="far fa-trash-alt"
                          onClick={() => removeFromWishList(wish._id)}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyWishList />
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistMain;
