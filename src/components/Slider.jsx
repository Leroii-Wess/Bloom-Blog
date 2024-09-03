// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiperStyles.css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import run1 from "../assets/Run-1.jpg";
import run2 from "../assets/Run-2.jpg";
import run3 from "../assets/Run-3.jpg";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={run1} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={run2} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={run3} alt="running" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
