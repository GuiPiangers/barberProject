import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/a11y';


export default function HeroInfoSlideContainer({children}){
    return(
        <div className='hero__info-bg'>
            <Swiper
                modules={[Autoplay, Pagination, A11y]}
                pagination={{ 
                    clickable: true, 
                    bulletClass:"customBullet", 
                    bulletActiveClass:'customBullet--active'
                }}
                spaceBetween={50}
                slidesPerView={1}
                grabCursor={true}
                a11y={true}
                loop={true}
                autoplay={{delay:3000, pauseOnMouseEnter:true, disableOnInteraction: false}}
                >
                    
                {children.props.children.map((child, index)=>
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                    
                )}
            </Swiper>
        </div>
    )
}