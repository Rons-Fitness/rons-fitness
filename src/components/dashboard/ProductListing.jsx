/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link, useHistory } from 'react-router-dom';

const ProductListing = ({
  type,
  products = [],
  addtoCart,
  addToWishlist,
  isMobile = false,
  isTablet,
}) => {
  const history = useHistory();
  return (
    <section id="trendinslider-cardg-sec">
      <div className="container-fluid">
        <div className="slider-card">
          <div className=" trending-head">
            <h1>{type}</h1>
          </div>
          <div className="swiper slider-cat">
            <Swiper
              className="swiper-wrapper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={isTablet ? 3 : isMobile ? 1 : 5}
              spaceBetween={25}
            >
              {products.map((elem) => (
                <SwiperSlide className="swiper-slide  box-card " key={elem._id}>
                  <Product
                    product={elem}
                    addToWishlist={addToWishlist}
                    addtoCart={addtoCart}
                    history={history}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

const Product = ({ product, addToWishlist, addtoCart, history }) => {
  const [wishList, setWishlist] = useState(product.inWishlist);
  return (
    <>
      <div className=" head-stars">
        <sapn className=" reviews">
          {' '}
          <i className="fas fa-star  me-1" />
          {product.rating}
        </sapn>
        <sapn
          className="false-seal "
          onClick={() => {
            addToWishlist(product._id, wishList);
            setWishlist(!wishList);
          }}
          style={{ cursor: 'pointer' }}
        >
          <svg
            className={wishList ? 'activeHeart' : 'heart'}
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0162 2.62457L11.733 3.36138L12.4498 2.62457C15.1694 -0.171114 20.0664 0.825498 21.8274 4.2646C22.6749 5.91956 22.8251 8.24441 21.368 11.1192C19.9471 13.9225 17.0001 17.228 11.7329 20.7968C6.46578 17.2284 3.51885 13.923 2.09797 11.1198C0.640872 8.24511 0.791039 5.92021 1.63851 4.26513C3.39962 0.825768 8.29658 -0.171037 11.0162 2.62457Z"
              fill="#000000"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </sapn>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="card-img">
          <a>
            <img
              src={product.image.find((el) => el.url !== '').url}
              alt=""
              className=""
            />
          </a>
        </div>
      </Link>

      <div className="card-body">
        <div className="card-con" style={{ position: 'relative' }}>
          <a>
            <h1
              className="align-items-center"
              style={{
                whiteSpace: 'nowrap',
                /* width: 50px; */
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {product.name} {/* {product.flavour !== '' && ( */}
              {/* )} */}
            </h1>
            {product.flavour !== '' && (
              <span className="text-end">
                <iconify-icon
                  icon="mdi:lacto-vegetarian"
                  className="veg-icon"
                  style={
                    product.nonVeg
                      ? { color: 'red', position: 'absolute', right: 17 }
                      : { color: 'green', position: 'absolute', right: 17 }
                  }
                />
              </span>
            )}
          </a>
          <h6>The specific products included</h6>
          <p>
            <a className="card-price">
              <span className="px-1">₹{product.price}</span>
              <span className="px-1">
                MRP<del>:₹{product.mrp}</del>
              </span>
            </a>
          </p>
          <a
            className=""
            style={{ cursor: 'pointer' }}
            onClick={() =>
              addtoCart(
                {
                  _id: product._id,
                  qty: 1,
                },
                history
              )
            }
          >
            <p className="shpoing-btn">
              <i className="bi bi-cart2" />
              Add to Cart
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
