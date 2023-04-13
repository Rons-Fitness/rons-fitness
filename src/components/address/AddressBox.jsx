/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateUserAddress } from 'redux/auth/actions';

const AddressBox = ({
  _id,
  addressType,
  shippingAddress,
  billingAddress,
  deleteAddress,
  setDeliveryAddress,
  updateAddress,
}) => {
  const history = useHistory();
  const [activeStatus, setactiveStatus] = useState(false);

  return (
    <div className="delivery-contain" key={_id}>
      <div className="delivery-name">
        <div>
          <h5>
            {shippingAddress.firstName} {shippingAddress.lastName}
            <span className="home-tag">{addressType}</span>
          </h5>
        </div>
        <input
          type="radio"
          value="Home"
          name="address"
          id="Home"
          style={{ cursor: 'pointer' }}
          checked={activeStatus}
          onClick={() => setactiveStatus(!activeStatus)}
        />{' '}
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
        <Link to={`/user/address/edit/${_id}`}> Edit </Link>
        <span className="Delete-colour" onClick={() => deleteAddress(_id)}>
          Delete
        </span>
      </div>
      {activeStatus && (
        <div
          className="delivery-btn"
          onClick={() => {
            setDeliveryAddress({
              _id,
              addressType,
              shippingAddress,
              billingAddress,
            });
            updateAddress({
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
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { keyword, selectedAddress, loading } = user;

  return { selectedAddress, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  updateAddress: (address, history) =>
    dispatch(updateUserAddress(address, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBox);
