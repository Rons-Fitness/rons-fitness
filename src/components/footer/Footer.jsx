/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-left-body ">
            <div className="footer-icon-box">
              <img src="asstes/img/logo/Vector.png" alt="" />
              <span>GymCart</span>
            </div>
            <p className="gym-icon-size">
              2023 <i className="far fa-copyright" />
              GymCart <br />
              All Right Reserved
            </p>
            <div className="icon-footer-box">
              <div>
                <i className="fab fa-facebook-f" />
              </div>
              <div>
                <i className="fab fa-instagram" />
              </div>
              <div>
                <i className="fab fa-twitter" />
              </div>
              <div>
                <i className="fab fa-linkedin-in" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-group footer-list">
              <li className="list-group-item">
                <a href="#" className="active">
                  Category
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Sports Nutrition
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Vitamins & Supplements
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Fitness
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Health Food & Drinks
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list">
              <li className="list-group-item">
                <a href="#" className="active">
                  Company
                </a>
              </li>
              <li className="list-group-item">
                <a href="Contact-us-page.html" className="">
                  Contact us
                </a>
              </li>
              <li className="list-group-item">
                <a href="About-us-page.html" className="">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list ">
              <li className="list-group-item">
                <a href="#" className="active">
                  Quick Link
                </a>
              </li>
              <li className="list-group-item">
                <a href="terms-of-use-policy.html" className="">
                  Terms of use{' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href="Privacy-Policy.html" className="">
                  Privacy Policy
                </a>
              </li>
              <li className="list-group-item">
                <a href="Refund-Policy.html" className="">
                  Refund Policy
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="shipping-cancellation-return-dispute-resolution-policy.html"
                  className=""
                >
                  Shipping policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
