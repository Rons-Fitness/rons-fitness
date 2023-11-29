import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import Notification from 'components/Notification/Notification';

const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+91';

function AuthPopup({
  sendOtp,
  verifyUserOtp,
  authPopupState,
  changePopupState,
}) {
  const reg = new RegExp('^[0-9]{0,10}$');

  const [mobileNo, setMobileNo] = useState(countryCode);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = () => {
    const numericPart = mobileNo.slice(3); // Get the part of the input excluding the country code
    if (reg.test(numericPart)) {
      if (otpSent) {
        verifyUserOtp({ otp, mobileNo });
      } else {
        setOtpSent(true);
        sendOtp(mobileNo);
      }
    } else Notification('error', 'Enter Valid Contact Number');
  };
  return (
    <div>
      <Modal show={authPopupState}>
        <div
          className="modal-dialog"
          style={{ margin: 0, padding: '13px 26px' }}
        >
          <div className="modal-content">
            <div className="text-end">
              {' '}
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => changePopupState(false)}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title  text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Login
                </h4>
                <p>Please login using account details below.</p>
              </div>
            </div>
            <div className="modal-body">
              <input
                className="number-to-text"
                type="tel"
                placeholder="Contact Number"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => {
                  const input = e.target.value;
                  const numericPart = input.slice(countryCode.length); // Get the part of the input excluding the country code

                  if (reg.test(numericPart)) {
                    setMobileNo(`${countryCode}${numericPart}`); // If it's only numbers, update the state
                  }
                }}
              />
              {otpSent ? (
                <>
                  <input
                    className="number-to-text"
                    type="number"
                    placeholder="OTP"
                    name="otp"
                    minLength="6" // Minimum length
                    maxLength="6" // Maximum length
                    value={otp}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      if (newValue.length <= 6) {
                        setOtp(newValue);
                      }
                    }}
                  />
                  <p className="resend-p ">
                    Didn’t Receive?{' '}
                    <span
                      onClick={() => sendOtp(mobileNo)}
                      style={{ cursor: 'pointer' }}
                    >
                      Resend
                    </span>
                  </p>
                </>
              ) : (
                ''
              )}
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="number-to-text submit-profile"
                  onClick={handleSubmit}
                  value={otpSent ? 'Verify' : 'Send OTP'}
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                />
              </div>
            </div>
            {/* <div className="text-center mt-2 ">
              <a href="#" className="dont-act">
                Don’t have an Account? Create account
              </a>
            </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthPopup;
