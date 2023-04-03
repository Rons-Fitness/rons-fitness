/* eslint-disable react/no-danger */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

const ProductReviewsAndDes = ({ description = '', sellerInformation = '' }) => {
  return (
    <div className="container">
      <div className="reviews-body">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Description
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Rating
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div className="row">
              <div className="col-md-6  Description-body">
                <div className="Description-contain">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: sellerInformation,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <div className="star-body">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <div className="big-star-body">
                    <div>
                      <p className="text-center">
                        <i className="fas fa-star" />
                        <span className="ms-2">4.5</span>
                      </p>
                      <p className="Verified">
                        1627 Verified <br />
                        Buyers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="reviews-container">
                    <div className="review">
                      <span className="icon-container">
                        <i className="fas fa-star me-1" />5
                      </span>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="94"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: '94%' }}
                        />
                      </div>
                      <span className="percent">878</span>
                    </div>
                    <div className="review">
                      <span className="icon-container">
                        <i className="fas fa-star me-1" />4
                      </span>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: '75%' }}
                        />
                      </div>
                      <span className="percent">484</span>
                    </div>
                    <div className="review">
                      <span className="icon-container">
                        <i className="fas fa-star me-1" />3
                      </span>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: '55%' }}
                        />
                      </div>
                      <span className="percent">158</span>
                    </div>
                    <div className="review">
                      <span className="icon-container">
                        <i className="fas fa-star me-1" />2
                      </span>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar"
                          style={{ width: '22%' }}
                        />
                      </div>
                      <span className="percent">78</span>
                    </div>
                    <div className="review">
                      <span className="icon-container">
                        <i className="fas fa-star me-1" />1
                      </span>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar" style={{ width: '7%' }} />
                      </div>
                      <span className="percent">29</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" view-page">
              <a href="Rating-&-reveiws.html"> More Reviews</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewsAndDes;
