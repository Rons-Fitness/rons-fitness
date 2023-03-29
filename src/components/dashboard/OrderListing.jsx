/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const OrderListing = ({ type }) => {
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
              slidesPerView={5}
              spaceBetween={25}
            >
              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/2.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/4.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/3.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="noveg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/3.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="noveg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/3.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/4.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="noveg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide  box-card ">
                <div className=" head-stars">
                  <sapn className=" reviews">
                    {' '}
                    <i className="fas fa-star  me-1" />
                    4.5
                  </sapn>
                  <sapn className="false-seal ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
                        width="17"
                        height="20"
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
                    </a>
                  </sapn>
                </div>
                <div className="card-img">
                  <a href="productsviewdetailes.html">
                    <img src="asstes/img/tranding/4.png" alt="" className="" />
                  </a>
                </div>

                <div className="card-body">
                  <div className="card-con">
                    <a href="productsviewdetailes.html">
                      <h1 className="align-items-center">
                        Health Essential{' '}
                        <span className="text-end">
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                          />
                        </span>{' '}
                      </h1>
                    </a>
                    <h6>The specific products included</h6>
                    <p>
                      <a
                        href="productsviewdetailes.html"
                        className="card-price"
                      >
                        <span className="px-1">&#8377 3389</span>
                        <span className="px-1">
                          MRP<del>:&#8377 3699</del>
                        </span>
                      </a>
                    </p>
                    <a href="cart-page.html" className="">
                      <p className="shpoing-btn">
                        <i className="bi bi-cart2" />
                        Add to Cart
                      </p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderListing;
