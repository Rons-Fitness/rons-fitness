/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getSingleProduct } from 'redux/actions';
import { addEditUserReview } from 'redux/auth/actions';

const EditReview = ({ getProductById, selectedProduct, updateReview }) => {
  const { id } = useParams();
  const history = useHistory();
  const image =
    (selectedProduct &&
      selectedProduct.image.find((el) => el.url !== '').url) ||
    '';

  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    if (id) getProductById(id);
  }, [id, getProductById]);

  useEffect(() => {
    if (selectedProduct)
      setReview({
        rating:
          (selectedProduct.userReview &&
            Number(selectedProduct.userReview.rating)) ||
          0,
        comment:
          (selectedProduct.userReview && selectedProduct.userReview.comment) ||
          '',
      });
  }, [selectedProduct]);

  const handleSubmit = () => {
    if (selectedProduct)
      updateReview({ ...review, _id: selectedProduct._id }, history);
  };
  return (
    <div className="User-rating-review-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 com-md-9 col-sm-12">
            <div className="Rating-Review-body">
              <div className="Rating-Review-head">
                <h1>Rating & Review</h1>
              </div>
              <div className="user-rating-review-contain">
                <div className="row">
                  <div className="col-lg-2 col-md-3  d-flex align-items-center justify-content-center m-0 p-0">
                    <div className="user-rating-review-img-box">
                      <Link
                        to={`/product/${
                          selectedProduct && selectedProduct._id
                        }`}
                      >
                        <a>
                          {' '}
                          <img src={image} alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 ">
                    <div className="user-rating-review-list">
                      <Link
                        to={`/product/${
                          selectedProduct && selectedProduct._id
                        }`}
                      >
                        <a>
                          <h5>{selectedProduct && selectedProduct.name} </h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="star-rating">
                      <a>
                        {' '}
                        {[...Array(review.rating)].map((active, i) => (
                          <i
                            className="fas fa-star active "
                            key={active}
                            onClick={() =>
                              setReview((oldVal) => {
                                return { ...oldVal, rating: i + 1 };
                              })
                            }
                            style={{ cursor: 'pointer' }}
                          />
                        ))}
                        {[...Array(5 - review.rating)].map((inActive, i) => (
                          <i
                            className="fas fa-star"
                            key={inActive}
                            onClick={() =>
                              setReview((oldVal) => {
                                return {
                                  ...oldVal,
                                  rating: Number(review.rating + i + 1),
                                };
                              })
                            }
                            style={{ cursor: 'pointer' }}
                          />
                        ))}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rating-from">
                <h5>Review this product</h5>
                <form>
                  <textarea
                    name=""
                    id=""
                    rows="7"
                    className="w-100 p-2  "
                    placeholder="How is Your Product,   what  is you like or What is you hate"
                    value={review.comment}
                    onChange={(e) =>
                      setReview((oldVal) => {
                        return { ...oldVal, comment: e.target.value };
                      })
                    }
                  />
                  <div className="d-flex justify-content-end my-2">
                    <a className="submit-from" onClick={() => handleSubmit()}>
                      Submit Review
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { selectedProduct, loading } = product;
  const { keyword } = user;

  return { selectedProduct, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getProductById: (id) => dispatch(getSingleProduct(id)),
  updateReview: (review, history) =>
    dispatch(addEditUserReview(review, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);
