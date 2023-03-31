/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ProductsFilters = () => {
  return (
    <div
      className="col-lg-3 col-md-12 col-sm-12  order-lg-1 order-2 order-md-2"
      style={{ borderRight: '1px solid #DEE2E7' }}
    >
      <div className="product-grid-left-section">
        <div className="product-grid-left-box">
          <div className="left-box-main">
            <p className="main-white">Sort By</p>
            <div className="Left-contain">
              <p className="High-light-p">
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Popularity</span>
              </p>
              <p className="High-light-p">
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Rating: Low To High</span>
              </p>
              <p className="High-light-p">
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Cost: High to Low</span>
              </p>
              <p className="High-light-p">
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Cost: Low To High</span>
              </p>
            </div>
          </div>
        </div>

        <div className="product-grid-left-box">
          <div className="left-box-main">
            <p className="main-white">Brands</p>
            <div className="Left-contain">
              <form action="" method="post">
                <p>
                  <input type="checkbox" className="check" id="Complain" />
                  <label for="Complain">Complain</label>{' '}
                </p>
                <p>
                  <input type="checkbox" className="check" id="Horlicks" />
                  <label for="Horlicks">Horlicks</label>{' '}
                </p>
                <p>
                  <input type="checkbox" className="check" id="Vanilla" />{' '}
                  <label for="Vanilla">Vanilla</label>{' '}
                </p>
                <p>
                  <input type="checkbox" className="check" id="Chocos" />
                  <label for="Chocos">Chocos</label>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="product-grid-left-box">
          <div className="left-box-main">
            <p className="main-white">Rating</p>
            <div className="Left-contain">
              <p>
                <input type="checkbox" className="check" id="star5" />
                <label for="star5" className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </label>{' '}
              </p>
              <p>
                <input type="checkbox" className="check" id="star4" />
                <label for="star4" className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star no-colour" />
                </label>{' '}
              </p>
              <p>
                <input type="checkbox" className="check" id="star3" />
                <label for="star3" className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                </label>{' '}
              </p>
              <p>
                <input type="checkbox" className="check" id="star2" />
                <label for="star2" className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                </label>{' '}
              </p>
              <p>
                <input type="checkbox" className="check" id="star1" />
                <label for="star1" className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                </label>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
