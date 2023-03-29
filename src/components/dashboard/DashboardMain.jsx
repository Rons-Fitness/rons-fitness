/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import OrderListing from './OrderListing';
import BrandListing from './BrandListing';
import Blogs from './Blogs';

const DashboardMain = () => {
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

      <div className="cat-round">
        <div className="container">
          <div className="carte-body">
            <div className="swiper carte-slider">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={5}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a href="product grid page.html">
                        {' '}
                        <img src="asstes/img/carte/1.png" alt="" />
                      </a>
                    </div>
                    <p className="text-center">
                      <a href="product grid page.html"> Gym Supplementary</a>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a href="product grid page.html">
                        {' '}
                        <img src="asstes/img/carte/2.png" alt="" />
                      </a>
                    </div>
                    <p className="text-center">
                      <a href="product grid page.html"> Vitamin Capsul</a>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <img src="asstes/img/carte/3.png" alt="" />
                    </div>
                    <p className="text-center">Gym Equipments</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a href="product grid page.html">
                        {' '}
                        <img src="asstes/img/carte/2.png" alt="" />
                      </a>
                    </div>
                    <p className="text-center">
                      <a href="product grid page.html"> Vitamin Capsul</a>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a href="product grid page.html">
                        {' '}
                        <img src="asstes/img/carte/4.png" alt="" />
                      </a>
                    </div>
                    <p className="text-center">
                      <a href="product grid page.html"> Gym Outfits </a>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="carte-contain">
                    <div className="carte carte-img-box ">
                      <a href="product grid page.html">
                        {' '}
                        <img src="asstes/img/carte/5.png" alt="" />
                      </a>
                    </div>
                    <p className="text-center">
                      <a href="product grid page.html"> Ayurvadic Product </a>
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <OrderListing type="TRENDING NOW" />
      <div className="container ">
        <div className=" col-lg-12  col-md-12 col-sm-12 ">
          <div className="img-bg-box">
            <img src="asstes/img/saveupto brand/Group 35703.png" alt="" />
          </div>
        </div>
      </div>
      <OrderListing type="NEW ARRIVAL" />
      <BrandListing />
      <Blogs />
    </>
  );
};

export default DashboardMain;
