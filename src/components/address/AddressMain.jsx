/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AddressMain = ({ addresses }) => {
  console.log({ addresses });
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
                {addresses.map(({ _id, addressType, shippingAddress }) => (
                  <div className="delivery-contain" key={_id}>
                    <div className="delivery-name">
                      <div>
                        <h5>
                          {shippingAddress.firstName} {shippingAddress.lastName}
                          <span className="home-tag">{addressType}</span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8">
                      <p className="address-write">
                        {shippingAddress.addressLine1}
                        <br />
                        {shippingAddress.addressLine2}, <br />
                        {shippingAddress.city}-{shippingAddress.pinCode} <br />
                        {shippingAddress.phoneNo}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressMain;
