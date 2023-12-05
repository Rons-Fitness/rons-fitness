import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import API from 'helpers/API';
import Notification from 'components/Notification/Notification';

function ForgotAuthPopup({ userDetails, authPopupState, changePopupState }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changePassword = async (req) => {
    try {
      const res = await API.post('/user/change-password', req);
      const { status } = res; // Make API call
      console.log(res.data); // Log the response
      if (status === 200) {
        // Handle successful signup
        Notification('success', 'Change successful!');

        changePopupState(false);
      } else {
        // Handle signup failure
        Notification('error', 'Change failed. Please try again.');
        // Additional logic if needed
      }
      // Handle success or other logic based on the response
    } catch (error) {
      Notification('Error:', error.response.data);
      console.error('Error:', error.response.data); // Log any errors
      // Handle errors or display error messages to the user
    }
  };
  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      changePassword({ oldPassword, newPassword, email: userDetails.email });
      // Clear the form fields after submission
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      // Handle password mismatch error
      // You can display an error message or perform any other action here
    }
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
            <div className="modal-body">
              <input
                type="password"
                placeholder="Old Password"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Change Password"
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

export default ForgotAuthPopup;
