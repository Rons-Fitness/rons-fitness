/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import API from 'helpers/API';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AddressForm = ({ address, setAddress, saveAddress }) => {
  const history = useHistory();
  const { shippingAddress, billingAddress, addressType } = address;

  const changeDetails = (type, key, value) => {
    setAddress((oldVal) => {
      return {
        ...oldVal,
        [type]: {
          ...oldVal[type],
          [key]: value,
        },
      };
    });
  };
  const changeAddressType = (value) => {
    setAddress((oldVal) => {
      return {
        ...oldVal,
        addressType: value,
      };
    });
  };

  const updateDetailsBasedOnPin = async (pin, type) => {
    if (pin.length === 6) {
      const {
        data: { data, success },
      } = await API.get(`/address/pincode/${pin}`);
      if (success) {
        const { stateName, taluk, country } = data;
        setAddress((oldVal) => {
          return {
            ...oldVal,
            [type]: {
              ...oldVal[type],
              state: stateName,
              city: taluk,
              country,
            },
          };
        });
      }
    }
  };
  return (
    <div className="Checkout-section">
      <div className="container">
        <div className="Checkout-header">
          <h4>Address </h4>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="Checkout-left-body">
              <p className="checkout-p">Checkout</p>

              <div className="Shipping-body">
                <div className=" d-flex justify-content-between">
                  <p className="billing-p">Shipping address</p>
                </div>
                <div className="col-12 d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="First name"
                    className="checkout-input-wid"
                    value={shippingAddress.firstName}
                    onChange={(e) =>
                      changeDetails(
                        'shippingAddress',
                        'firstName',
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="checkout-input-wid"
                    value={shippingAddress.lastName}
                    onChange={(e) =>
                      changeDetails(
                        'shippingAddress',
                        'lastName',
                        e.target.value
                      )
                    }
                  />
                </div>
                <input
                  className="col-12"
                  type="text"
                  placeholder="Address line - 1"
                  value={shippingAddress.addressLine1}
                  onChange={(e) =>
                    changeDetails(
                      'shippingAddress',
                      'addressLine1',
                      e.target.value
                    )
                  }
                />{' '}
                <br />
                <input
                  className="col-12"
                  type="text"
                  placeholder="Address line - 2"
                  value={shippingAddress.addressLine2}
                  onChange={(e) =>
                    changeDetails(
                      'shippingAddress',
                      'addressLine2',
                      e.target.value
                    )
                  }
                />{' '}
                <br />
                <input
                  className="col-12"
                  type="text"
                  placeholder="City"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    changeDetails('shippingAddress', 'city', e.target.value)
                  }
                />
                <br />
                <div className="col-12 d-flex justify-content-between">
                  <input
                    type="number"
                    placeholder="Pincode"
                    className="checkout-input-wid"
                    value={shippingAddress.pinCode}
                    onChange={(e) => {
                      changeDetails(
                        'shippingAddress',
                        'pinCode',
                        e.target.value
                      );
                      updateDetailsBasedOnPin(
                        e.target.value,
                        'shippingAddress'
                      );
                    }}
                  />

                  <input
                    id=""
                    name="cars"
                    placeholder="State"
                    className="checkout-input-wid"
                    value={shippingAddress.state}
                    onChange={(e) =>
                      changeDetails('shippingAddress', 'state', e.target.value)
                    }
                  />
                </div>
                <div className="col-12 d-flex justify-content-between">
                  <input
                    id=""
                    name="cars"
                    placeholder="Country"
                    className="checkout-input-wid"
                    value={shippingAddress.country}
                    onChange={(e) =>
                      changeDetails(
                        'shippingAddress',
                        'country',
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"
                    placeholder="Number"
                    className="checkout-input-wid"
                    value={shippingAddress.phoneNo}
                    onChange={(e) =>
                      changeDetails(
                        'shippingAddress',
                        'phoneNo',
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="billing-body">
              <div className=" d-flex justify-content-between">
                <p className="billing-p">Billing addresss</p>
                {/* <p className="edit-p">
                  <a href="#"> Edit details </a>
                </p> */}
              </div>
              <form>
                <div className="col-12 d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="First name"
                    className="checkout-input-wid"
                    value={billingAddress.firstName}
                    onChange={(e) =>
                      changeDetails(
                        'billingAddress',
                        'firstName',
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="checkout-input-wid"
                    value={billingAddress.lastName}
                    onChange={(e) =>
                      changeDetails(
                        'billingAddress',
                        'lastName',
                        e.target.value
                      )
                    }
                  />
                </div>
                <input
                  className="col-12"
                  type="text"
                  placeholder="Address line - 1"
                  value={billingAddress.addressLine1}
                  onChange={(e) =>
                    changeDetails(
                      'billingAddress',
                      'addressLine1',
                      e.target.value
                    )
                  }
                />
                <br />
                <input
                  className="col-12"
                  type="text"
                  placeholder="Address line - 2"
                  value={billingAddress.addressLine2}
                  onChange={(e) =>
                    changeDetails(
                      'billingAddress',
                      'addressLine2',
                      e.target.value
                    )
                  }
                />
                <br />
                <input
                  className="col-12"
                  type="text"
                  placeholder="City"
                  value={billingAddress.city}
                  onChange={(e) =>
                    changeDetails('billingAddress', 'city', e.target.value)
                  }
                />
                <br />
                <div className="col-12 d-flex justify-content-between">
                  <input
                    type="number"
                    placeholder="Pincode"
                    className="checkout-input-wid"
                    value={billingAddress.pinCode}
                    onChange={(e) => {
                      changeDetails(
                        'billingAddress',
                        'pinCode',
                        e.target.value
                      );
                      updateDetailsBasedOnPin(e.target.value, 'billingAddress');
                    }}
                  />

                  <input
                    id=""
                    name="cars"
                    placeholder="State"
                    className="checkout-input-wid"
                    value={billingAddress.state}
                    onChange={(e) =>
                      changeDetails('billingAddress', 'state', e.target.value)
                    }
                  />
                </div>
                <div className="col-12 d-flex justify-content-between">
                  <input
                    id=""
                    name="cars"
                    placeholder="Country"
                    className="checkout-input-wid"
                    value={billingAddress.country}
                    onChange={(e) =>
                      changeDetails('billingAddress', 'country', e.target.value)
                    }
                  />

                  <input
                    type="number"
                    placeholder="Number"
                    className="checkout-input-wid"
                    value={billingAddress.phoneNo}
                    onChange={(e) =>
                      changeDetails('billingAddress', 'phoneNo', e.target.value)
                    }
                  />
                </div>
                <div className="address-types-body">
                  <p>Address type</p>
                  <div className="d-flex">
                    <div className="d-flex  align-items-center me-3">
                      <input
                        type="radio"
                        value="Home"
                        name="address"
                        id="Home"
                        checked={addressType === 'home'}
                        onChange={() => changeAddressType('home')}
                      />{' '}
                      <label className="ms-2" for="Home">
                        Home
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Office"
                        name="address"
                        id="Office"
                        checked={addressType === 'office'}
                        onChange={() => changeAddressType('office')}
                      />
                      <label className="ms-2" for="Office">
                        Office
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Other"
                        name="address"
                        id="Other"
                        checked={addressType === 'other'}
                        onChange={() => changeAddressType('other')}
                      />
                      <label className="ms-2" for="Other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-3">
                  <input
                    type="button"
                    value="Save & Continue"
                    className="shipping-btn"
                    onClick={() => saveAddress(address, history)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
