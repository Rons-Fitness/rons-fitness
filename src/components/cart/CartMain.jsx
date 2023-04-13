/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useRazorpay from 'react-razorpay';
import API from 'helpers/API';
import NoItemsFound from 'components/notFound/NoItemsFound';

const CartMain = ({
  cart,
  removeItemFromCart,
  addtoCart,
  addressToDeliver,
  currentUser,
}) => {
  const history = useHistory();
  const Razorpay = useRazorpay();
  const { lastName, firstName, mobileNo } = currentUser;

  const handlePayment = async (addressId) => {
    try {
      if (!addressId) return;
      const order = await API.post('/order', {
        addressId,
      });
      const {
        data: {
          data: { id, amount },
        },
      } = order;
      localStorage.setItem('order_id', id);
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Gym Cart',
        description: 'Test Transaction',
        image:
          '	https://rons-fitness-dev.s3.ap-northeast-1.amazonaws.com/1680499818975.webp',
        order_id: id,
        prefill: {
          name: firstName + lastName,
          contact: mobileNo,
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
        handler: (response) => {
          localStorage.removeItem('order_id');
          if (response.razorpay_payment_id) history.push('/user/orders');
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-section">
      <div className="container">
        {cart && cart?.products.length === 0 ? (
          <NoItemsFound />
        ) : (
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
                      {console.log({ value })}
                      <div className="row">
                        <div className="col-lg-2 col-md- col-sm-12 d-flex align-items-center justify-content-center m-0 p-0">
                          <div className="my-cart-img-box">
                            <Link to={`/product/${value._id}`}>
                              {' '}
                              <img
                                src={
                                  value.image.find((elem) => elem.url !== '')
                                    .url
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
              {addressToDeliver ? (
                <div className="Delivery-fix-body">
                  <div className="Delivery-at-contain">
                    <div className="icon-box">
                      <iconify-icon icon="mdi:map-marker-outline" />{' '}
                    </div>
                    <div style={{ width: '100%' }}>
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
                  <a
                    onClick={() => handlePayment(addressToDeliver._id)}
                    className="place-btn"
                  >
                    <p>Place Order</p>
                  </a>
                </div>
              ) : (
                <div className="Delivery-fix-body">
                  <div className="Delivery-at-contain">
                    <div className="icon-box">
                      <iconify-icon icon="mdi:map-marker-outline" />{' '}
                    </div>
                    <div>
                      <div className="Delivery-at">
                        <Link to="/user/address" className="Change">
                          <p style={{ margin: 'auto', color: '#f7a742' }}>
                            Select Delivery Address
                          </p>{' '}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <a
                    onClick={() => handlePayment(addressToDeliver._id)}
                    className="place-btn"
                    style={{ cursor: 'pointer' }}
                  >
                    <p>Place Order</p>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartMain;
