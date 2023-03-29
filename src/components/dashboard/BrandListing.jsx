/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const BrandListing = ({ brands = [] }) => {
  return (
    <div className="brnad-home-section">
      <div className="container-fluid">
        <div className="brand-section">
          <div className=" trending-head">
            <h1 className="">BRAND RANGE</h1>
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
              {brands.map((elem) => (
                <SwiperSlide className="swiper-slide" key={elem._id}>
                  <div className="text-center mt-2 brand-img-box">
                    <img src={elem.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandListing;
