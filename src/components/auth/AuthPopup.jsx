/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';

const AuthPopup = ({
  sendOtp,
  verifyUserOtp,
  authPopupState,
  changePopupState,
}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = () => {
    if (mobileNo !== '') {
      if (otpSent) {
        verifyUserOtp({ otp, mobileNo });
      } else {
        setOtpSent(true);
        sendOtp(mobileNo);
      }
    }
  };
  return (
    <>
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
                  type="number"
                  placeholder="Contact Number"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={(e) =>
                    e.target.value.length < 13 && setMobileNo(e.target.value)
                  }
                  maxLength={12}
                />
                {otpSent ? (
                  <>
                    <input
                      className="number-to-text"
                      type="number"
                      placeholder="OTP"
                      name="otp"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <p className="resend-p ">
                      Didn’t Receive?{' '}
                      <span onClick={() => sendOtp(mobileNo)}>Resend</span>
                    </p>
                  </>
                ) : (
                  ''
                )}
                <div className="col-12 d-flex justify-content-center">
                  <input
                    className="number-to-text submit-profile"
                    onClick={handleSubmit}
                    value={otpSent ? 'Verify' : 'send OTP'}
                    onChange={() => console.log()}
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AuthPopup;
