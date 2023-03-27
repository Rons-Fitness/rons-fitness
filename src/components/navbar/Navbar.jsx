/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg nav-section">
          <div className="container">
            <a className="navbar-brand img-nav" href="index.html" />
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
              <form action="" method="post" className="inputcontainer">
                <input type="text" placeholder="Search for product" />
                <button type="submit">
                  <i className="bi bi-search" />
                </button>
              </form>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <div className=" login-section">
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
                        <form method="post">
                          <input type="number" placeholder="Contact Number" />
                          <input type="number" placeholder="OTP" />
                          <p className="resend-p ">
                            Didn’t Receive? <span> Resend </span>
                          </p>
                          <div className="col-12 d-flex justify-content-center">
                            <input
                              type="submit"
                              className=" submit-profile"
                              value="Verify"
                            />
                          </div>
                        </form>
                        <p className="text-center">
                          Don’t have an account? Create account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Navbar;
