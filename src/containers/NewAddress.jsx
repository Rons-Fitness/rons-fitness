import AddressForm from 'components/address/AddressForm';
import React, { useState } from 'react';

const NewAddress = () => {
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
      <AddressForm address={address} setAddress={setAddress} />
    </div>
  );
};

export default NewAddress;
