/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

const CartMain = ({
  cart,
  removeItemFromCart,
  addtoCart,
  addressToDeliver,
}) => {
  return (
    <div className="cart-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 com-md-9 col-sm-12">
            <div className="my-cart-body">
              <div className=" my-cart-head">
                <h1>
                  My Cart<span>({cart && cart?.products.length})</span>
                </h1>
                <p>
                  <Link to="/user/wishlist"> My Wishlist</Link>
                </p>
              </div>
              {cart &&
                cart?.products.map(({ value, qty }) => (
                  <div className="my-cart-contain" key={value._id}>
                    <div className="row">
                      <div className="col-lg-2 col-md- col-sm-12 d-flex align-items-center justify-content-center m-0 p-0">
                        <div className="my-cart-img-box">
                          <Link to={`/product/${value._id}`}>
                            {' '}
                            <img
                              src={
                                value.image.find((elem) => elem.url !== '').url
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-8 com-md- col-sm-12">
                        <div className="my-cart-list">
                          <a href="productsviewdetailes.html">
                            <h5>{value.name}</h5>
                          </a>
                          <p>{value.brand}</p>
                          <div className="fw-semibold"> ₹ {value.price} </div>
                          <div className=" form-box ">
                            <div className="d-flex">
                              <label for="number"> Qty :</label>
                              <input
                                min="1"
                                type="number"
                                value={qty}
                                onChange={(e) =>
                                  addtoCart({
                                    _id: value._id,
                                    qty: e.target.value,
                                  })
                                }
                                className="form-control"
                                id="number"
                              />
                            </div>
                            <div className="bin-remove-add">
                              <p className="bin-body ">
                                <a href="#">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md- col-sm-12 d-flex justify-content-end bin-box">
                        <p className="bin-body ">
                          <a href="#">
                            <i
                              className="far fa-trash-alt"
                              onClick={() =>
                                removeItemFromCart({ _id: value._id })
                              }
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-12">
            <div className="total-box">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" colspan="4" className="Price-detal ">
                      Price Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" />
                    <td className="subtotal">Subtotal :</td>
                    <td />
                    <td className="text-end ">₹{cart?.subTotal}</td>
                  </tr>
                  <tr>
                    <th scope="row" />
                    <td className="discount">Discount :</td>
                    <td className="text-end" />
                    <td className="text-end">
                      <span className="me-2">-</span> ₹{cart?.discount}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" />
                    <td className="info-btn">
                      Tax
                      {/* <i className="bi bi-info-circle" /> */}
                      <span className="ms-3">:</span>{' '}
                    </td>
                    <td className="text-end" />
                    <td className="text-end">
                      <span className="me-2">+</span> ₹{cart?.tax}
                    </td>
                  </tr>
                  <tr className="total-border">
                    <th scope="row" />
                    <th className="fw-semibold">Total :</th>
                    <td className="" />
                    <th className="text-end fw-semibold">₹{cart?.total}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Delivery-fix-body">
              <div className="Delivery-at-contain">
                <div className="icon-box">
                  <iconify-icon icon="mdi:map-marker-outline" />{' '}
                </div>
                <div>
                  <div className="Delivery-at">
                    <p>
                      {' '}
                      Delivery at{' '}
                      <span className="tag">
                        {' '}
                        {addressToDeliver?.addressType}
                      </span>
                    </p>{' '}
                    <span className="">
                      <Link to="/user/address" className="Change">
                        <a>Change</a>
                      </Link>
                    </span>
                  </div>
                  <p className="addres">
                    {addressToDeliver?.shippingAddress.addressLine1}
                    <br />
                    {addressToDeliver?.shippingAddress.addressLine2}
                  </p>
                </div>
              </div>
              <a href="#" className="place-btn">
                <p>Place Order</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
