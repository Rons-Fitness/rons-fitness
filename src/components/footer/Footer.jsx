/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-left-body ">
            <div className="footer-icon-box">
              <img src="asstes/img/logo/logo.png" alt="" />
            </div>
            {/* <p className="gym-icon-size">
              2023 <i className="far fa-copyright" />
              GymCart <br />
              All Right Reserved
            </p> */}
            {/* <div className="icon-footer-box">
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
            </div> */}
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12">
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
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list">
              <li className="list-group-item">
                <a href="#" className="active">
                  Company
                </a>
              </li>
              <li className="list-group-item">
                <Link className="nav-link " to="/contact-us">
                  Contact us
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/about-us" className="d-flex ">
                  About us
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list ">
              <li className="list-group-item">
                <a href="#" className="active">
                  Quick Link
                </a>
              </li>
              <li className="list-group-item">
                <Link to="/terms-of-use" className="d-flex ">
                  Terms of use{' '}
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/privacy-n-policy" className="d-flex ">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/refund-policy" className="">
                  Refund Policy
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/shipping-policy" className="">
                  Shipping policy
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <Link
              className="icon-footer-box "
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/espacecarrelb?igshid=OGQ5ZDc2ODk2ZA=="
            >
              Instagram <i className="fab fa-instagram" />
            </Link>
            <Link
              className="icon-footer-box mt-2 "
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/EspaceCarreLb?mibextid=LQQJ4d"
            >
              Whatsapp <i className="fab fa-whatsapp" />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <p className="copy-right-text">
            Copyrights &copy; {currentYear} All Rights Reserved |{' '}
            <a
              href="http://creativecartel.me/"
              target="_blank"
              rel="noreferrer"
              className="copy-right-text"
            >
              Creative Cartel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
