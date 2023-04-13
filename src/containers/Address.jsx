import React, { useEffect } from 'react';
import AddressMain from 'components/address/AddressMain';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import {
  changeSearchText,
  deleteUserAddress,
  deliverToThisAddress,
  getUserAddresses,
} from 'redux/auth/actions';
import { useHistory } from 'react-router-dom';

const Address = ({
  getAddresses,
  addresses,
  setDeliveryAddress,
  deleteAddress,
  keyword,
  setSearchText,
}) => {
  const history = useHistory();
  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    if (keyword && keyword.length > 0) history.push('/products');
  }, [keyword]);

  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  return (
    <div style={{ minHeight: 'calc(100vh - 115px)', overflow: 'auto' }}>
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
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
