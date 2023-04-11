import React from 'react';

const OrderList = () => {
  return (
    <div className="my-order-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 com-md-9 col-sm-12">
            <div className="my-order-body">
              <div className="my-order-head">
                <h1>My Order</h1>
              </div>
              <div className="my-order-contain">
                <div className="row">
                  <div className="col-lg-2 col-md-3    m-0 p-0">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="my-order-img-box">
                        <a href="Order-Details-traking-page.html">
                          {' '}
                          <img
                            src="/asstes/img/order-logo/package.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9  ">
                    <div className="my-order-list">
                      <a href="Order-Details-traking-page.html">
                        <h5>7 April 2023, 05:06:00 PM</h5>
                      </a>
                      <div>
                        MuscleBlaze Test Pro & Ashwagandha 60 Tab Combo{' '}
                        <span className="fw-semibold "> +3 more </span>
                      </div>
                      <p className="fw-semibold">&#8377 4000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-order-contain">
                <div className="row">
                  <div className="col-lg-2 col-md-3    m-0 p-0">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="my-order-img-box-green">
                        <a href="Order-Details-traking-page.html">
                          {' '}
                          <img
                            src="/asstes/img/order-logo/package 1.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9  ">
                    <div className="my-order-list">
                      <a href="Order-Details-traking-page.html">
                        <h5>5 April 2023, 05:06:00 PM</h5>
                      </a>
                      <div>
                        MuscleBlaze Test Pro & Ashwagandha 60 Tab Combo{' '}
                        <span className="fw-semibold "> +3 more </span>
                      </div>
                      <p className="fw-semibold">&#8377 4000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-order-contain">
                <div className="row">
                  <div className="col-lg-2 col-md-3    m-0 p-0">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="my-order-img-box-red">
                        <a href="Order-Details-traking-page.html">
                          {' '}
                          <img
                            src="/asstes/img/order-logo/package 1.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9  ">
                    <div className="my-order-list">
                      <a href="Order-Details-traking-page.html">
                        <h5>3 April 2023, 05:06:00 PM</h5>
                      </a>
                      <div>
                        MuscleBlaze Test Pro & Ashwagandha 60 Tab Combo{' '}
                        <span className="fw-semibold "> +3 more </span>
                      </div>
                      <p className="fw-semibold">&#8377 4000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
