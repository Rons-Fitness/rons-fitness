/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AddressMain = () => {
  return (
    <>
      <div className="delivery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="address-body">
                <div className="Address-head">
                  <p>Select Delivery Address</p>
                  <p>
                    <a href="Checkout-page.html">+ Add New Address</a>
                  </p>
                </div>
                <div className="delivery-contain">
                  <div className="delivery-name">
                    <div>
                      <h5>
                        Amzad Saikh <span className="home-tag">Home</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <p className="address-write">
                      Ramkrishna Apartment, Near Sardar Bhavan Society,mg Road
                      78, <br />
                      Udaipur-313001 <br />
                      +91 8756957656, +91 9453698424
                    </p>
                  </div>
                  <div className="fw-semibold edit">
                    <a href="#"> Edit </a>
                    <span className="Delete-colour">Delete</span>
                  </div>
                  <div className="delivery-btn">
                    <p>
                      <a href="#">Deliver to this Address</a>
                    </p>
                  </div>
                </div>

                <div className="delivery-contain">
                  <div className="delivery-name">
                    <div>
                      <h5>
                        Amzad Saikh <span className="home-tag">Office</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <p className="address-write">
                      Ramkrishna Apartment, Near Sardar Bhavan Society,mg Road
                      78, <br />
                      Udaipur-313001 <br />
                      +91 8756957656, +91 9453698424
                    </p>
                  </div>
                  <div className="fw-semibold edit">
                    <a href="#"> Edit </a>{' '}
                    <span className="Delete-colour">Delete</span>
                  </div>
                  <div className="delivery-btn">
                    <p>
                      <a href="#">Deliver to this Address</a>
                    </p>
                  </div>
                </div>

                <div className="delivery-contain">
                  <div className="delivery-name">
                    <div>
                      <h5>
                        Amzad Saikh <span className="home-tag">Other</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <p className="address-write">
                      Ramkrishna Apartment, Near Sardar Bhavan Society,mg Road
                      78, <br />
                      Udaipur-313001 <br />
                      +91 8756957656, +91 9453698424
                    </p>
                  </div>
                  <div className="fw-semibold edit">
                    <a href="#"> Edit </a>
                    <span className="Delete-colour">Delete</span>
                  </div>
                  <div className="delivery-btn">
                    <p>
                      <a href="#">Deliver to this Address</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressMain;
