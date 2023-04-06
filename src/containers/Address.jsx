import React, { useEffect } from 'react';
import AddressMain from 'components/address/AddressMain';
import Footer from 'components/footer/Footer';
import { connect } from 'react-redux';
import { getUserAddresses } from 'redux/auth/actions';

const Address = ({ getAddresses, addresses }) => {
  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  return (
    <div style={{ height: 'calc(100vh - 115px)', overflow: 'auto' }}>
      <AddressMain addresses={addresses} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
