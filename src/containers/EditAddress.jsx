import AddressForm from 'components/address/AddressForm';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAddressById, updateUserAddress } from 'redux/auth/actions';

const EditAddress = ({ getAddressFromId, selectedAddress, updateAddress }) => {
  const { id } = useParams();
  const [address, setAddress] = useState({
    addressType: '',
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
  useEffect(() => {
    if (selectedAddress) {
      setAddress(selectedAddress);
    }
  }, [selectedAddress]);
  useEffect(() => {
    if (id) getAddressFromId(id);
  }, [id, getAddressFromId]);

  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <AddressForm
        address={address}
        setAddress={setAddress}
        saveAddress={updateAddress}
      />
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
  getAddressFromId: (_id) => dispatch(getAddressById(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
