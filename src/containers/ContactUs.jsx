import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-header  ">
          <div className="col-lg-3 col-md-3 text-center">
            <div className="contact">
              Contact <span /> us{' '}
            </div>
          </div>
        </div>
        <div className="row from-contact-body">
          <div className="col-lg-6 col-md-6 ">
            <div
              className="col-lg-10  contact-body"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="contact-box ">
                <h4 className="pb-3 ">Contact Way</h4>
                <div className="d-flex">
                  <div className="col-1 align-items-center justify-content-center d-flex">
                    <div className=" icon-box ">
                      <i className="fas fa-phone-alt" />
                    </div>
                  </div>
                  <div className="col-10 contact-detailes ">
                    <div className="ps-3 py-2">
                      <p>
                        Tel:
                        <span className="num-email-colour">
                          {' '}
                          877-67-88-99
                        </span>
                      </p>
                      <p>
                        E-Mail:{' '}
                        <span className="num-email-colour">
                          {' '}
                          shop@store.com{' '}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-1 align-items-center justify-content-center d-flex">
                    <div className=" icon-box">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="col-10  contact-detailes">
                    <div className="ps-3 py-2">
                      <p>20 Margaret st, London</p>
                      <p>Great britain, 3NM98-LK</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-1 align-items-center justify-content-center d-flex ">
                    <div className="text-center icon-box">
                      <i className="far fa-question-circle" />
                    </div>
                  </div>
                  <div className="col-10 contact-detailes">
                    <div className="ps-3 py-2">
                      <p>Support Forum</p>
                      <p>For over 24hr</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-1 align-items-center justify-content-center d-flex">
                    <div className="text-center icon-box">
                      <i className="fas fa-tag" />
                    </div>
                  </div>
                  <div className="col-10 ">
                    <div className="ps-3 py-3">
                      <p>Free standard shipping</p>
                      <p>on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="get-touch-body">
              <h4>Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
              <form>
                <div className="d-flex justify-content-between">
                  <div className="first-name">
                    <input type="text" placeholder="Your Name*" required />
                  </div>
                  <div className="email-name">
                    <input type="email" placeholder="Your E-mail" required />
                  </div>
                </div>
                <div className="number">
                  <input type="number" placeholder="Contact Number" required />
                </div>
                <div className="Subject">
                  <input type="text" placeholder="Subject*" required />
                </div>
                <div className="message">
                  <textarea
                    name="message"
                    rows="5"
                    cols=""
                    placeholder="Type Your Messege*"
                    required
                  />
                </div>
                <div className=" text-end col-12 d-flex  justify-content-end">
                  <div className="submit-btn">
                    <input type="submit" placeholder="Submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
