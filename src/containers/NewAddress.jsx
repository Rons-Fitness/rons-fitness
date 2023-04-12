import AddressForm from 'components/address/AddressForm';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUserAddress } from 'redux/auth/actions';

const NewAddress = ({ addNewAddress }) => {
  const [address, setAddress] = useState({
    addressType: 'home',
    shippingAddress: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      phoneNo: '',
    },
    billingAddress: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      phoneNo: '',
    },
  });
  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
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
