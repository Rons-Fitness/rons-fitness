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
import Loader from 'components/common/loader/Loader';

const Address = ({
  getAddresses,
  addresses,
  setDeliveryAddress,
  deleteAddress,
  keyword,
  setSearchText,
  loading,
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
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
        background: 'rgb(254, 249, 241)',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <AddressMain
          addresses={addresses}
          setDeliveryAddress={setDeliveryAddress}
          deleteAddress={deleteAddress}
        />
      )}
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ user }) => {
  const { keyword, addresses, loading } = user;
  return { addresses, keyword, loading };
};

const mapDispatchToProps = (dispatch) => ({
  getAddresses: () => dispatch(getUserAddresses()),
  setDeliveryAddress: (address) => dispatch(deliverToThisAddress(address)),
  deleteAddress: (_id) => dispatch(deleteUserAddress(_id)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
