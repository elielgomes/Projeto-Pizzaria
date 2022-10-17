import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/assets/home/banner-1.jpg" alt="Banner-1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="src/assets/home/banner-2.jpg" alt="Banner-2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="src/assets/home/banner-3.jpg" alt="Banner-3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="src/assets/home/banner-4.jpg" alt="Banner-4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
