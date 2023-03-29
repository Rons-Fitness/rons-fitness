/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const BrandListing = () => {
  return (
    <div className="brnad-home-section">
      <div className="container-fluid">
        <div className="brand-section">
          <div className=" ">
            <h1 className="">BRAND RANGE</h1>
            <span />
          </div>
          <div className="swiper brandslider">
            <Swiper
              className="swiper-wrapper"
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={5}
            >
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/2.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/3.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="text-center mt-2 brand-img-box">
                  <img src="asstes/img/brand/3.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandListing;
