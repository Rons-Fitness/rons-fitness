import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import Notification from 'components/Notification/Notification';

function AuthPopup({
  sendOtp,
  verifyUserOtp,
  authPopupState,
  changePopupState,
}) {
  const reg = new RegExp('^[0-9]*$');
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = () => {
    if (reg.test(Number(mobileNo)) && mobileNo.length === 10) {
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
                minLength="10"
                maxLength="10"
                placeholder="Contact Number"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) =>
                  reg.test(Number(e.target.value)) &&
                  setMobileNo(e.target.value.trim())
                }
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
                  className="number-to-text submit-profile"
                  onClick={handleSubmit}
                  value={otpSent ? 'Verify' : 'send OTP'}
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <a href="#" className="dont-act">
                Don’t have an Account? Create account
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthPopup;
