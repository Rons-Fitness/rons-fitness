import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';

function AuthPopup({ verifyUserOtp, authPopupState, changePopupState }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    verifyUserOtp({ email, password });
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => changePopupState(false)}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Login
                </h4>
                <p>Please login using your account details.</p>
              </div>
            </div>
            <div className="modal-body">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Login"
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthPopup;
