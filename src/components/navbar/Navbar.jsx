/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthPopup from 'components/auth/AuthPopup';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getUserDetails } from 'redux/actions';
import {
  changeSearchText,
  loginUser,
  setAuthPopup,
  verifyOtp,
} from 'redux/auth/actions';

const Navbar = ({
  currentUser,
  sendOtp,
  verifyUserOtp,
  getLoggedInUserDetails,
  setSearchText,
  authPopupState,
  changePopupState,
}) => {
  const history = useHistory();
  const [text, settext] = useState('');

  useEffect(() => {
    if (!currentUser) getLoggedInUserDetails(history);
  }, [currentUser, getLoggedInUserDetails, history]);

  React.useEffect(() => {
    const setData = setTimeout(() => {
      setSearchText(text);
    }, 1500);

    return () => clearTimeout(setData);
  }, [text, setSearchText]);

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg nav-section">
          <div className="container">
            <Link
              className="navbar-brand img-nav"
              to="/"
              onClick={() => {
                setSearchText('');
              }}
            >
              <img
                src="asstes/img/logo/vector black.png"
                alt=""
                className="pe-3"
              />
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
                  <Link className="nav-link " to="/contact-us">
                    Contact
                  </Link>
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
                        onClick={() => changePopupState(true)}
                      >
                        Login
                      </p>
                    </a>
                  </>
                ) : (
                  <Link to="/user/profile">
                    <p className="shoping-cart">
                      <a href="cart-page.html">
                        <i class="bi bi-person" />
                      </a>
                    </p>
                  </Link>
                )}
                <Link to="/user/cart">
                  <p className="shoping-cart">
                    <a href="cart-page.html">
                      <i className="bi bi-cart2" />
                    </a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthPopup
        sendOtp={sendOtp}
        verifyUserOtp={verifyUserOtp}
        authPopupState={authPopupState}
        changePopupState={changePopupState}
      />
    </>
  );
};
const mapStateToProps = ({ user }) => {
  const { currentUser, authPopupState } = user;
  return { currentUser, authPopupState };
};
const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(changeSearchText(text)),
  getLoggedInUserDetails: (hsitory) => dispatch(getUserDetails(hsitory)),
  sendOtp: (mobileNo) => dispatch(loginUser(mobileNo)),
  verifyUserOtp: (otpValues, history) =>
    dispatch(verifyOtp(otpValues, history)),
  changePopupState: (state) => dispatch(setAuthPopup(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
