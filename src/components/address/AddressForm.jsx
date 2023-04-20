/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import Notification from 'components/Notification/Notification';
import API from 'helpers/API';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddressForm = ({ address, setAddress, saveAddress }) => {
  const history = useHistory();
  const reg = new RegExp('^[0-9]*$');
  const { shippingAddress, billingAddress, addressType, _id } = address;
  const [setAsAbove, setsetAsAbove] = useState(false);

  const changeDetails = (type, key, value) => {
    if (setAsAbove) {
      if (type === 'shippingAddress')
        setAddress((oldVal) => {
          return {
            ...oldVal,
            shippingAddress: {
              ...oldVal.shippingAddress,
              [key]: value,
            },
            billingAddress: {
              ...oldVal.billingAddress,
              [key]: value,
            },
          };
        });
    } else {
      setAddress((oldVal) => {
        return {
          ...oldVal,
          [type]: {
            ...oldVal[type],
            [key]: value,
          },
        };
      });
    }
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
      console.log({ data, success });
      if (success) {
        const { stateName, districtName, country } = data;
        if (setAsAbove) {
          if (type === 'shippingAddress')
            setAddress((oldVal) => {
              return {
                ...oldVal,
                shippingAddress: {
                  ...oldVal.shippingAddress,
                  state: stateName,
                  city: districtName,
                  country,
                },
                billingAddress: {
                  ...oldVal.billingAddress,
                  state: stateName,
                  city: districtName,
                  country,
                },
              };
            });
        } else {
          setAddress((oldVal) => {
            return {
              ...oldVal,
              [type]: {
                ...oldVal[type],
                state: stateName,
                city: districtName,
                country,
              },
            };
          });
        }
      } else Notification('info', 'Invalid Pincode');
    }
  };

  const setBillingAsShipping = () => {
    if (!setAsAbove) {
      setAddress((oldVal) => {
        return {
          ...oldVal,
          billingAddress: { ...shippingAddress },
        };
      });
    }
    setsetAsAbove(!setAsAbove);
  };
  return (
    <div className="Checkout-section">
      <div className="container">
        <div className="Checkout-header" style={{ zIndex: 1 }}>
          <h4>Address </h4>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="Checkout-left-body">
              <div className="Shipping-body">
                <div className=" d-flex justify-content-between">
                  <p className="billing-p">Shipping address</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!Object.values(address).includes('" "')) {
                      saveAddress(
                        {
                          shippingAddress,
                          billingAddress,
                          addressType,
                          _id,
                        },
                        history
                      );
                    }
                  }}
                >
                  <div className="col-12 d-flex justify-content-between">
                    <input
                      type="text"
                      required
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
                      required
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
                    required
                    className="col-12"
                    type="text"
                    placeholder="Flat, house no, Building, company, Apartment"
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
                    required
                    className="col-12"
                    type="text"
                    placeholder="Area , street, sector ,village "
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
                    required
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
                      required
                      type="number"
                      placeholder="Pincode"
                      className="checkout-input-wid"
                      value={shippingAddress.pinCode}
                      onChange={(e) => {
                        if (e.target.value.length < 7) {
                          changeDetails(
                            'shippingAddress',
                            'pinCode',
                            e.target.value
                          );
                          updateDetailsBasedOnPin(
                            e.target.value,
                            'shippingAddress'
                          );
                        }
                      }}
                    />

                    <input
                      required
                      id=""
                      name="cars"
                      placeholder="State"
                      className="checkout-input-wid"
                      value={shippingAddress.state}
                      onChange={(e) =>
                        changeDetails(
                          'shippingAddress',
                          'state',
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <input
                      required
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
                      required
                      type="tel"
                      minlength="10"
                      maxlength="10"
                      placeholder="Number"
                      className="checkout-input-wid"
                      value={shippingAddress.phoneNo}
                      onChange={(e) => {
                        if (reg.test(Number(e.target.value))) {
                          changeDetails(
                            'shippingAddress',
                            'phoneNo',
                            e.target.value.trim()
                          );
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ opacity: 0 }}
                    id="shipping_btn"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="billing-body">
              <div className=" d-flex justify-content-between">
                <p className="billing-p">Billing addresss</p>
                <div className="Left-contain">
                  <form action="" method="post">
                    <p>
                      <input
                        type="checkbox"
                        className="check"
                        id="same as"
                        value="same as"
                        style={{
                          cursor: 'pointer',
                          marginRight: 5,
                          accentColor: '#f7a742',
                        }}
                        checked={setAsAbove}
                        onClick={() => setBillingAsShipping()}
                      />
                      <label for="same as">Same As Shipping</label>{' '}
                    </p>
                  </form>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="col-12 d-flex justify-content-between">
                  <input
                    type="text"
                    required
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
                    required
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
                  required
                  className="col-12"
                  type="text"
                  placeholder="Flat, house no, Building, company, Apartment"
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
                  required
                  className="col-12"
                  type="text"
                  placeholder="Area , street, sector ,village "
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
                  required
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
                    required
                    type="number"
                    placeholder="Pincode"
                    className="checkout-input-wid"
                    value={billingAddress.pinCode}
                    onChange={(e) => {
                      if (e.target.value.length < 7) {
                        changeDetails(
                          'billingAddress',
                          'pinCode',
                          e.target.value
                        );
                        updateDetailsBasedOnPin(
                          e.target.value,
                          'billingAddress'
                        );
                      }
                    }}
                  />

                  <input
                    required
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
                    required
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
                    required
                    type="tel"
                    placeholder="Number"
                    minlength="10"
                    maxlength="10"
                    className="checkout-input-wid"
                    value={billingAddress.phoneNo}
                    onChange={(e) =>
                      reg.test(Number(e.target.value)) &&
                      changeDetails(
                        'billingAddress',
                        'phoneNo',
                        e.target.value.trim()
                      )
                    }
                  />
                </div>
                <div className="address-types-body">
                  <p>Address type</p>
                  {/* <div className="d-flex">
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
                  </div> */}
                </div>
                <input
                  required
                  type="button"
                  value="Home"
                  className={classNames(
                    'shipping-btn  btn-views-active',
                    addressType === 'home' && 'activeAddressType'
                  )}
                  style={{ height: 35.5, padding: '0 30px', borderRadius: 0 }}
                  onClick={() => changeAddressType('home')}
                />
                <input
                  type="button"
                  value="Office"
                  className={classNames(
                    'shipping-btn  btn-views-active',
                    addressType === 'office' && 'activeAddressType'
                  )}
                  style={{
                    margin: '0 10px',
                    height: 35.5,
                    padding: '0 30px',
                    borderRadius: 0,
                  }}
                  onClick={() => changeAddressType('office')}
                />
                <input
                  type="button"
                  value="Other"
                  className={classNames(
                    'shipping-btn  btn-views-active',
                    addressType === 'other' && 'activeAddressType'
                  )}
                  style={{ height: 35.5, padding: '0 30px', borderRadius: 0 }}
                  onClick={() => changeAddressType('other')}
                />
                <div className="d-flex justify-content-end my-3">
                  <input
                    type="submit"
                    value="Save & Continue"
                    className="shipping-btn"
                    onClick={() => {
                      const btn = document.getElementById('shipping_btn');
                      btn.click();
                    }}
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
