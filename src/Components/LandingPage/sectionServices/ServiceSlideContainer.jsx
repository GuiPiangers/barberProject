import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/a11y';

export default function ServiceSlideContainer({children}){

    return(
        <Swiper className='service-slider'
            modules={[ Pagination, A11y]}
            pagination={{ clickable: true, bulletClass:"customBullet customBullet--dark",  bulletActiveClass:'customBullet--active'}}
            spaceBetween={20}
            slidesPerView={'auto'}
            grabCursor={true}
            a11y={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            
        >
                
            {children?.map((child, index)=>
                <SwiperSlide 
                    key={index}
                    style={{maxWidth: '320px'}}
                >
                    {child}
                </SwiperSlide>                
            )}
         </Swiper>
    )
}