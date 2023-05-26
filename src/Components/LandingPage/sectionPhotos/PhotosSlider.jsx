import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import { Navigation ,Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/a11y';
import "swiper/css/pagination";

export default function PhotoSlider({children}){
  return(
    <Swiper
      modules={[Pagination, Navigation, A11y]}
      slidesPerView={1.4}
      spaceBetween={20}
      centeredSlides={true}
      grabCursor={true}
      a11y={true}
      loop={true}
      loopedSlides={4}
      pagination={{
        type: "fraction",
      }}
      navigation={{
        nextEl: '.next-button',
        prevEl: '.prev-button'
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {children.map((child, index)=>
          <SwiperSlide key={index}>{child}</SwiperSlide>                
      )}
      <div className='prev-button'>
      <RiArrowLeftSLine
          size={38}
        />

      </div>
      <div className='next-button'>
      <RiArrowRightSLine
          size={38}
        />
      </div>
    </Swiper>
  )
}