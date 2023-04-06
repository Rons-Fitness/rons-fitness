import AddressForm from 'components/address/AddressForm';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUserAddress } from 'redux/auth/actions';

const NewAddress = ({ addNewAddress }) => {
  const [address, setAddress] = useState({
    addressType: 'home',
    shippingAddress: {
      firstName: 'Rishi',
      lastName: 'Patel',
      addressLine1: 'addressLine1',
      addressLine2: 'addressLine2',
      pinCode: 393002,
      city: 'ankleshwar',
      state: 'Gujrat',
      country: 'india',
      phoneNo: 7621937212,
    },
    billingAddress: {
      firstName: 'firstName',
      lastName: 'lastName',
      addressLine1: 'addressLine1',
      addressLine2: 'addressLine2',
      pinCode: 393002,
      city: 'ankleshwar',
      state: 'Gujrat',
      country: 'india',
      phoneNo: 7621937212,
    },
  });
  return (
    <div>
      <AddressForm
        address={address}
        setAddress={setAddress}
        saveAddress={addNewAddress}
      />
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { selectedProduct, loading } = product;
  const { keyword } = user;

  return { selectedProduct, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  addNewAddress: (address, history) =>
    dispatch(createUserAddress(address, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);
