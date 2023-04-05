/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import ProductListing from './ProductListing';
import BrandListing from './BrandListing';
import Blogs from './Blogs';
import Categories from './Categories';

const DashboardMain = ({ homeScreenData, addtoCart, addToWishlist }) => {
  return (
    <>
      <section className="banner-wrapper ">
        <div className=" banner">
          <div className="swiper mySwiper-1">
            <Swiper
              className="swiper-wrapper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={60}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide className=" swiper-slide">
                <img
                  src="asstes/img/hero/5.png"
                  className="img-fluied banner-img"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide className=" swiper-slide">
                <img
                  src="asstes/img/hero/5.png"
                  className="img-fluied banner-img"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide className=" swiper-slide">
                <img
                  src="asstes/img/hero/5.png"
                  className="img-fluied banner-img"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide className=" swiper-slide">
                <img
                  src="asstes/img/hero/5.png"
                  className="img-fluied banner-img"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Categories category={homeScreenData.category} />
      <ProductListing
        type="TRENDING NOW"
        products={homeScreenData.trendingProducts}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
      />
      <div className="container ">
        <div className=" col-lg-12  col-md-12 col-sm-12 ">
          <div className="img-bg-box">
            <img src="asstes/img/saveupto brand/Group 35703.png" alt="" />
          </div>
        </div>
      </div>
      <ProductListing
        type="NEW ARRIVAL"
        products={homeScreenData.newArrivals}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
      />
      <BrandListing brands={homeScreenData.brands} />
      <Blogs />
    </>
  );
};

export default DashboardMain;
