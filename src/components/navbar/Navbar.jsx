/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import AuthPopup from 'components/auth/AuthPopup';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getUserDetails } from 'redux/actions';
import {
  changeSearchText,
  loginUser,
  setAuthPopup,
  verifyOtp,
} from 'redux/auth/actions';
import { getHomeScreenData } from 'redux/product/actions';

const Navbar = ({
  currentUser,
  sendOtp,
  verifyUserOtp,
  getLoggedInUserDetails,
  setSearchText,
  authPopupState,
  changePopupState,
  getHomeScreenDetails,
  homeScreenData,
}) => {
  const history = useNavigate();
  const [text, settext] = useState('');

  const { brands, category } = homeScreenData;

  useEffect(() => {
    if (!currentUser) getLoggedInUserDetails(history);
  }, [currentUser, getLoggedInUserDetails, history]);

  useEffect(() => {
    getHomeScreenDetails();
  }, [getHomeScreenDetails]);

  // search after delay
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
                    id=""
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>

                  {Boolean(category.length) && (
                    <ul className="dropdown-menu">
                      {category.map((elem) => (
                        <li key={elem._id}>
                          <Link to={`/products/category=${elem.name}`}>
                            <a className="dropdown-item">{elem.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link ">Brand</a>
                  {Boolean(brands.length) && (
                    <ul className="dropdown-menu">
                      {brands.map((brand) => (
                        <li key={brand._id}>
                          <Link to={`/products/brand=${brand.name}`}>
                            <a className="dropdown-item">{brand.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    onClick={() => {
                      setSearchText('');
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/contact-us"
                    onClick={() => {
                      setSearchText('');
                    }}
                  >
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
          <div className="head-section" style={{ margin: 'auto' }}>
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
                  <a>
                    <p
                      className="login-btn "
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => changePopupState(true)}
                    >
                      Login
                    </p>
                  </a>
                ) : (
                  <Link
                    to="/user/profile"
                    onClick={() => {
                      setSearchText('');
                    }}
                  >
                    <p className="shoping-cart" style={{ margin: '0 15px' }}>
                      <a>
                        <i className="bi bi-person" />
                      </a>
                    </p>
                  </Link>
                )}
                <Link
                  to="/user/cart"
                  onClick={() => {
                    setSearchText('');
                  }}
                >
                  <p className="shoping-cart">
                    <a>
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
const mapStateToProps = ({ user, product }) => {
  const { currentUser, authPopupState } = user;
  const { homeScreenData } = product;
  return { currentUser, authPopupState, homeScreenData };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeScreenDetails: () => dispatch(getHomeScreenData()),
  setSearchText: (text) => dispatch(changeSearchText(text)),
  getLoggedInUserDetails: (hsitory) => dispatch(getUserDetails(hsitory)),
  sendOtp: (mobileNo) => dispatch(loginUser(mobileNo)),
  verifyUserOtp: (otpValues, history) =>
    dispatch(verifyOtp(otpValues, history)),
  changePopupState: (state) => dispatch(setAuthPopup(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
