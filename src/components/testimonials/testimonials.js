import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


export const Testimonialss = () => {
  return (
    <section className="testimonials">
          <div>
          <h3 style={{margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 500}}>Reviewed by People</h3>
          <h1 style={{fontSize: "45px", margin: "5px 0 10px 0"}}>Clients' Testimonials</h1>
          <p style={{width: "55%", textAlign: "center", lineHeight: "1.55rem"}}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
          </p>
          <div className="testimonial-cards"style={{height: "50vh !important", position: "relative"}}>
          <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="tCard1">
              <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</h3>
              <div className="tcard-text">
                <img src="images/testimonials/user-1.png" alt=""/>
                <div className="tCardName">
                  <h3>Kim Higgins</h3>
                  <p>Boston</p>
                </div>
              </div>
              <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        <SwiperSlide className="tCard1">
              <h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
                    <div className="tcard-text">
                      <img src="images/testimonials/user-2.png" alt=""/>
                      <div className="tCardName">
                        <h3>Jim Hike</h3>
                        <p>France</p>
                      </div>
                    </div>
                    <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        <SwiperSlide className="tCard1">
        <h3>"This is the best available car service in the world, They have a quick response time and a very positive Ecosystem."</h3>
              <div className="tcard-text">
                <img src="images/testimonials/user-3.png" alt=""/>
                <div className="tCardName">
                  <h3>Anna Belle</h3>
                  <p>Ibiza</p>
                </div>
              </div>
              <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        <SwiperSlide className="tCard1">
              <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</h3>
              <div className="tcard-text">
                <img src="images/testimonials/user-1.png" alt=""/>
                <div className="tCardName">
                  <h3>Kim Higgins</h3>
                  <p>Boston</p>
                </div>
              </div>
              <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        <SwiperSlide className="tCard1">
              <h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
                    <div className="tcard-text">
                      <img src="images/testimonials/user-2.png" alt=""/>
                      <div className="tCardName">
                        <h3>Jim Hike</h3>
                        <p>France</p>
                      </div>
                    </div>
                    <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        <SwiperSlide className="tCard1">
        <h3>"This is the best available car service in the world, They have a quick response time and a very positive Ecosystem."</h3>
              <div className="tcard-text">
                <img src="images/testimonials/user-3.png" alt=""/>
                <div className="tCardName">
                  <h3>Anna Belle</h3>
                  <p>Ibiza</p>
                </div>
              </div>
              <FontAwesomeIcon className='tc_icon' icon={faQuoteRight} />
        </SwiperSlide>
        
      </Swiper>

          </div>
          
          </div>
          
        </section>
  )
}
