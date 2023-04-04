/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CartMain = ({ cart }) => {
  console.log({ cart });
  return (
    <div className="cart-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 com-md-9 col-sm-12">
            <div className="my-cart-body">
              <div className=" my-cart-head">
                <h1>
                  My Cart<span>(3)</span>
                </h1>
                <p>
                  <a href="wishlist page.html"> My Wishlist</a>
                </p>
              </div>
              {cart &&
                cart?.products.map(({ value }) => (
                  <div className="my-cart-contain" key={value._id}>
                    <div className="row">
                      <div className="col-lg-2 col-md- col-sm-12 d-flex align-items-center justify-content-center m-0 p-0">
                        <div className="my-cart-img-box">
                          <a href="productsviewdetailes.html">
                            {' '}
                            <img
                              src="asstes/img/Wishlist page img/2.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-8 com-md- col-sm-12">
                        <div className="my-cart-list">
                          <a href="productsviewdetailes.html">
                            <h5>{value.name}</h5>
                          </a>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Harum sed nemo
                          </p>
                          <div className="fw-semibold"> ₹ 8389 </div>
                          <div className=" form-box ">
                            <div className="d-flex">
                              <label for="number"> Qty :</label>
                              <input
                                type="number"
                                value="1"
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
                            <i className="far fa-trash-alt" />
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
                      Delivery at <span className="tag"> Home</span>
                    </p>{' '}
                    <span className="">
                      <a href="Delivery-address-page.html" className="Change">
                        Change
                      </a>
                    </span>
                  </div>
                  <p className="addres">
                    Ramkrishna Apartment, Near Sardar Bhavan Society,mg Road 78,
                    udaipur.{' '}
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
