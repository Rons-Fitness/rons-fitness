import React, { useEffect } from 'react';
import AddressMain from 'components/address/AddressMain';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import {
  deleteUserAddress,
  deliverToThisAddress,
  getUserAddresses,
} from 'redux/auth/actions';

const Address = ({
  getAddresses,
  addresses,
  setDeliveryAddress,
  deleteAddress,
}) => {
  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <AddressMain
        addresses={addresses}
        setDeliveryAddress={setDeliveryAddress}
        deleteAddress={deleteAddress}
      />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ user }) => {
  const { keyword, addresses } = user;
  return { addresses, keyword };
};

const mapDispatchToProps = (dispatch) => ({
  getAddresses: () => dispatch(getUserAddresses()),
  setDeliveryAddress: (address) => dispatch(deliverToThisAddress(address)),
  deleteAddress: (_id) => dispatch(deleteUserAddress(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
