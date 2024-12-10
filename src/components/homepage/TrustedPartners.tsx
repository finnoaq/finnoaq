'use client';

// import brand_img_1 from '@/assets/img/sponsor/sp1.png';
// import brand_img_2 from '@/assets/img/sponsor/sp2.png';
// import brand_img_3 from '@/assets/img/sponsor/sp3.png';
// import brand_img_4 from '@/assets/img/sponsor/sp4.png';
// import {
//   default as brand_img_5,
//   default as brand_img_6,
// } from '@/assets/img/sponsor/sp5.png';

import brand_img_1 from '../../../public/partners/brand1.png';
import brand_img_2 from '../../../public/partners/brand2.jpg';
import brand_img_3 from '../../../public/partners/brand3.webp';
import brand_img_4 from '../../../public/partners/brand4.jpg';
import brand_img_5 from '../../../public/partners/brand5.jpg';
import brand_img_6 from '../../../public/partners/brand6.png';
import brand_img_7 from '../../../public/partners/brand7.webp';
import brand_img_8 from '../../../public/partners/brand8.png';
import brand_img_9 from '../../../public/partners/brand9.jpg';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const brand_data = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,
];

interface PropsType {
  style_2?: boolean;
  style_3?: boolean;
}

export default function TrustedPartners({ style_2, style_3 }: PropsType) {
  return (
    <>
      <section
        className={`sponsor-branding-section ${
          style_2 ? 'section-padding p100-bg' : 'space-top'
        } ${style_3 ? 'section-padding white-bg' : ''}`}>
        <div className='container'>
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            speed={1300}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            breakpoints={{
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            className='swiper brand-slider'>
            {brand_data.map((item, i) => (
              <SwiperSlide key={i} className='swiper-slide'>
                <div className='brand-image'>
                  <div className='ratio ratio-16x9'>
                    <Image
                      src={item}
                      alt='img'
                      width={200}
                      height={200}
                      className='w-100 h-100 object-fit-contain'
                      style={{ mixBlendMode: 'color-burn' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
