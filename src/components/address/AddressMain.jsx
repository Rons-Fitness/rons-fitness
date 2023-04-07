/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AddressMain = ({ addresses, setDeliveryAddress, deleteAddress }) => {
  const history = useHistory();
  return (
    <>
      <div className="delivery-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="address-body">
                <div className="Address-head">
                  <p>Select Delivery Address</p>
                  <p>
                    <Link to="/user/address/new">+ Add New Address</Link>
                  </p>
                </div>
                {addresses.map(
                  ({ _id, addressType, shippingAddress, billingAddress }) => (
                    <div className="delivery-contain" key={_id}>
                      <div className="delivery-name">
                        <div>
                          <h5>
                            {shippingAddress.firstName}{' '}
                            {shippingAddress.lastName}
                            <span className="home-tag">{addressType}</span>
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8">
                        <p className="address-write">
                          {shippingAddress.addressLine1}
                          <br />
                          {shippingAddress.addressLine2}, <br />
                          {shippingAddress.city}-{shippingAddress.pinCode}{' '}
                          <br />
                          {shippingAddress.phoneNo}
                        </p>
                      </div>
                      <div className="fw-semibold edit">
                        <Link to={`/user/address/edit/${_id}`}> Edit </Link>
                        <span
                          className="Delete-colour"
                          onClick={() => deleteAddress(_id)}
                        >
                          Delete
                        </span>
                      </div>
                      <div
                        className="delivery-btn"
                        onClick={() => {
                          setDeliveryAddress({
                            _id,
                            addressType,
                            shippingAddress,
                            billingAddress,
                          });
                          history.push('/user/cart');
                        }}
                      >
                        <p>
                          <a>Deliver to this Address</a>
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressMain;
