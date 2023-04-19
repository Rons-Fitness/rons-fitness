/* eslint-disable no-extra-boolean-cast */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NoAddressFound from 'components/notFound/NoAddressFound';
import AddressBox from './AddressBox';

const AddressMain = ({
  addresses,
  setDeliveryAddress,
  deleteAddress,
  addressToDeliver,
  setDeliverToThisAddress,
}) => {
  return (
    <>
      <div
        className="delivery-section"
        style={{ background: '#FFFFFF', minHeight: 'calc(100vh - 115px)' }}
      >
        <div className="container">
          <div className="row  ">
            {Boolean(addresses.length) ? (
              <div className="col-lg-6">
                <div className="address-body">
                  <div className="Address-head">
                    <p>Select Delivery Address</p>
                    <p>
                      <Link to="/user/address/new">+ Add New Address</Link>
                    </p>
                  </div>
                  {addresses.map(
                    ({ _id, addressType, shippingAddress, billingAddress }) => (
                      <AddressBox
                        key={_id}
                        _id={_id}
                        addressType={addressType}
                        shippingAddress={shippingAddress}
                        billingAddress={billingAddress}
                        setDeliveryAddress={setDeliveryAddress}
                        deleteAddress={deleteAddress}
                        addressToDeliver={addressToDeliver}
                        setDeliverToThisAddress={setDeliverToThisAddress}
                      />
                    )
                  )}
                </div>
              </div>
            ) : (
              <NoAddressFound />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressMain;
