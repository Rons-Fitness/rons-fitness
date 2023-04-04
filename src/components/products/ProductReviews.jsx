/* eslint-disable no-underscore-dangle */
import moment from 'moment/moment';
import React from 'react';

const ProductReviews = ({ reviews = [] }) => {
  return (
    <section className="container">
      <div className="all-revies-body">
        <h4>Customer Reviews ({reviews.length})</h4>
        {reviews.map((elem) => (
          <div className="customer-body" key={elem._id}>
            <div className="row">
              <div className="col-md-1">
                <div className="profile-face">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-11 comant-body">
                <h5>{elem.name}</h5>
                <p>{elem.comment}</p>
                <div className="like-star">
                  <div className="star-color">
                    <p>
                      <i className="fas fa-star  me-1" />
                      {elem.rating} |{' '}
                      {moment(elem.createdAt).format('YYYY-MM-DD')}
                    </p>
                  </div>
                  <div className="thumbs-up-like-unlike-body">
                    <i className="far fa-thumbs-up">
                      <span className="mx-2">{elem.likeCount}</span>{' '}
                    </i>
                    <i className="far fa-thumbs-down">
                      <span className="mx-2">{elem.disLikeCount}</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
