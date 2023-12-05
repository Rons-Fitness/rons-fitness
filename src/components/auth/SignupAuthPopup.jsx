import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import Notification from 'components/Notification/Notification';
import API from 'helpers/API';

const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+91';

function SignupPopup({ signupPopupState, changeSignupPopupState }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: countryCode,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    const errorsData = {};

    // Validation logic
    if (!name.trim()) {
      errorsData.name = 'Name is required';
    }

    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorsData.email = 'Enter a valid email address';
    }

    if (password.length < 6) {
      errorsData.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      errorsData.confirmPassword = 'Passwords do not match';
    }

    setErrors(errorsData);
    return Object.keys(errorsData).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await API.post('/user/signup', formData);
        const { data, status } = response;
        console.log('data', data);
        if (status === 201) {
          // Handle successful signup
          Notification('success', 'Signup successful!');
          changeSignupPopupState(false); // Close the signup modal or perform any other action
          localStorage.setItem('userData', JSON.stringify(formData));
          // Additional logic if needed
        } else {
          // Handle signup failure
          Notification('error', 'Signup failed. Please try again.');
          // Additional logic if needed
        }
      } catch (error) {
        // Handle error from API request
        Notification('error', 'Error during signup. Please try again.');
        // Additional logic if needed
      }
    } else {
      Notification('error', 'Please fill in the required fields correctly');
    }
  };

  return (
    <div>
      <Modal show={signupPopupState}>
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
                onClick={() => changeSignupPopupState(false)}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Sign Up
                </h4>
                <p>Please fill in your details to create an account.</p>
              </div>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
              <input
                type="tel"
                placeholder="Contact Number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
              />
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Sign Up"
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

export default SignupPopup;
