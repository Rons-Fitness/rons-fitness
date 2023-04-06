import AddressForm from 'components/address/AddressForm';
import React, { useState } from 'react';

const NewAddress = () => {
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
    <div>
      <AddressForm address={address} setAddress={setAddress} />
    </div>
  );
};

export default NewAddress;
