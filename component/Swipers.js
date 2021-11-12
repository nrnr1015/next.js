import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation"
import "swiper/css/thumbs"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';


// install Swiper modules
// SwiperCore.use([EffectCards,Pagination,Navigation, FreeMode,Navigation,Thumbs]);
SwiperCore.use([Pagination]);

export default function Swipers() {

  return (
    <div class="swiperContent">
        <Swiper 
        slidesPerView={3} spaceBetween={30} 
        pagination={{
  "type": "progressbar",
  "clickable": true
}}className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>

        {/* <Swiper 
          slidesPerView={1} 
          spaceBetween={1000} 
          loop={true} 
          pagination={{"clickable": true}} 
          navigation={true}
          effect={'cards'} 
          grabCursor={true} 
          thumbs={{ swiper: thumbsSwiper }} className="mySwiper2"
          >
          <SwiperSlide className="Appssss">Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
        </Swiper>

        <Swiper onSwiper={setThumbsSwiper}
        slidesPerView={10} freeMode={true} watchSlidesProgress={true} className="mySwiper">
        
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
        </Swiper> */}
      

    </div>
  )
}
