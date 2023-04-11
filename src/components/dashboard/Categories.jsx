/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const Categories = ({ category = [], isMobile }) => {
  return (
    <div className="cat-round">
      <div className="container">
        <div className="carte-body">
          <div className="swiper carte-slider">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={isMobile ? 1 : 5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={125}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
            >
              {category.map((elem) => (
                <SwiperSlide className="swiper-slide" key={elem._id}>
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a>
                        {' '}
                        <img src={elem.image} alt={elem.name} />
                      </a>
                    </div>
                    <p className="text-center">
                      <a> {elem.name}</a>
                    </p>
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

export default Categories;
