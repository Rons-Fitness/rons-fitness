/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getUserDetails } from 'redux/actions';
import { changeSearchText, loginUser, verifyOtp } from 'redux/auth/actions';

const Navbar = ({
  currentUser,
  sendOtp,
  verifyUserOtp,
  getLoggedInUserDetails,
  setSearchText,
}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [text, settext] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token && !currentUser) getLoggedInUserDetails();
  }, [currentUser]);

  React.useEffect(() => {
    const setData = setTimeout(() => {
      setSearchText(text);
    }, 1500);

    return () => clearTimeout(setData);
  }, [text]);

  const handleSubmit = () => {
    if (mobileNo !== '') {
      if (otpSent) {
        verifyUserOtp({ otp, mobileNo });
      } else {
        setOtpSent(true);
        sendOtp(mobileNo);
      }
    }
  };

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg nav-section">
          <div className="container">
            <Link
              class="navbar-brand img-nav"
              to="/"
              onClick={() => {
                setSearchText('');
              }}
            >
              <img src="asstes/img/logo/vector black.png" alt="" class="pe-3" />
              GymCart
            </Link>
            <button
              className="navbar-toggler btn-nav"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_1"
              aria-controls="navbar_1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbar_1"
              tabIndex="-1"
            >
              <ul className="navbar-nav ms-auto  nav-ul">
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id=""
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>

                  <div
                    className="dropdown-menu  mt-0  mydropudowan"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row my-4">
                        <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                          <div className="list-group ">
                            <h4 className="mb-0 list-group-item ">
                              Lorem ipsum
                            </h4>
                            <a
                              href="productsviewdetailes.html"
                              className="list-group-item"
                            >
                              Products details
                            </a>
                            <a
                              href="product grid page.html"
                              className="list-group-item "
                            >
                              Product list{' '}
                            </a>
                            <a
                              href="Rating-&-reveiws.html"
                              className="list-group-item "
                            >
                              Rating & Reveiws
                            </a>
                            <a
                              href="Delivery-address-page.html"
                              className="list-group-item "
                            >
                              Delivery address
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                          <div className="list-group ">
                            <h4 className="mb-0 list-group-item ">
                              Explicabo voluptas
                            </h4>
                            <a
                              href="wishlist page.html"
                              className="list-group-item "
                            >
                              Wishlist{' '}
                            </a>
                            <a
                              href="Checkout-page.html"
                              className="list-group-item "
                            >
                              Checkout{' '}
                            </a>
                            <a
                              href="Profile-page.html"
                              className="list-group-item "
                            >
                              Profile
                            </a>
                            <a
                              href="About-us-page.html"
                              className="list-group-item "
                            >
                              About us
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                          <div className="list-group">
                            <h4 className="mb-0 list-group-item">
                              Iste quaerato
                            </h4>
                            <a href="#" className="list-group-item ">
                              Cras justo odio
                            </a>
                            <a href="#" className="list-group-item ">
                              Est iure
                            </a>
                            <a href="#" className="list-group-item ">
                              Praesentium
                            </a>
                            <a href="#" className="list-group-item ">
                              Laboriosam
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link " href="#">
                    Brand
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="Privacy-Policy.html">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="Refund-Policy.html">
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="shipping-cancellation-return-dispute-resolution-policy.html"
                      >
                        Shipping policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="terms-of-use-policy.html"
                      >
                        Terms of use policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="Contact-us-page.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="min-hed">
        <div className="container">
          <div className="head-section">
            <div className=" col-md-3  col-sm-0 " />
            <div className="col-md-6 col-sm-6">
              <div action="" className="inputcontainer">
                <input
                  type="text"
                  placeholder="Search for product"
                  onChange={(e) => settext(e.target.value)}
                />
                <button type="button">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className=" login-section">
                {!currentUser ? (
                  <>
                    <a href="#">
                      <p
                        className="login-btn "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Login
                      </p>
                    </a>

                    <div
                      className="modal fade "
                      id="staticBackdrop"
                      tabIndex="-1"
                      aria-labelledby="staticBackdrop"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="text-end">
                            {' '}
                            <button
                              type="button"
                              className="btn-close "
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-header">
                            <div>
                              <h4
                                className="modal-title  text-center col-md-12"
                                id="staticBackdropLabel"
                              >
                                Login
                              </h4>
                              <p>Please login using account details below.</p>
                            </div>
                          </div>
                          <div className="modal-body">
                            <input
                              type="number"
                              placeholder="Contact Number"
                              name="mobileNo"
                              onChange={(e) => setMobileNo(e.target.value)}
                            />
                            {otpSent ? (
                              <>
                                <input
                                  type="number"
                                  placeholder="OTP"
                                  name="otp"
                                  onChange={(e) => setOtp(e.target.value)}
                                />
                                <p className="resend-p ">
                                  Didn’t Receive?{' '}
                                  <span onClick={() => sendOtp(mobileNo)}>
                                    Resend
                                  </span>
                                </p>
                              </>
                            ) : (
                              ''
                            )}
                            <div className="col-12 d-flex justify-content-center">
                              <input
                                className=" submit-profile"
                                onClick={handleSubmit}
                                value={otpSent ? 'Verify' : 'send OTP'}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                <p className="shoping-cart">
                  <a href="cart-page.html">
                    <i className="bi bi-cart2" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ user }) => {
  const { currentUser } = user;
  return { currentUser };
};
const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(changeSearchText(text)),
  getLoggedInUserDetails: () => dispatch(getUserDetails()),
  sendOtp: (mobileNo) => dispatch(loginUser(mobileNo)),
  verifyUserOtp: (otpValues, history) =>
    dispatch(verifyOtp(otpValues, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
