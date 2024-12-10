'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { Image, Ratio } from 'react-bootstrap';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const projectData = [
  {
    id: crypto.randomUUID(),
    title: 'Aqua Hatchery',
    image: '/Project/Aqua Hatchery/IMG_20220727_112550.jpg',
    link: '#',
    width: 3280,
    height: 1844,
  },
  {
    id: crypto.randomUUID(),
    title: 'Aqua Tank Farming',
    image:
      '/Project/Aqua Tank Farming/WhatsApp Image 2024-11-10 at 15.07.24 (1).jpeg',
    link: '#',
    width: 1280,
    height: 577,
  },
  {
    id: crypto.randomUUID(),
    title: 'Aqua RAS',
    image: '/Project/CEA/Aqua_RAS/WhatsApp Image 2024-11-10 at 14.14.12.jpeg',
    link: '#',
    width: 1024,
    height: 577,
  },
  {
    id: crypto.randomUUID(),
    title: 'Spirulina Farming',
    image: '/Project/CEA/Hydroponic/WhatsApp Image 2024-11-10 at 14.59.32.jpeg',
    link: '#',
    width: 1068,
    height: 749,
  },
  {
    id: crypto.randomUUID(),
    title: 'Hydroponic Farming',
    image: '/Project/CEA/Hydroponic/Microgreens.jpeg',
    link: '#',
    width: 1280,
    height: 720,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nursery Farming',
    image: '/Project/Nursery/WhatsApp Image 2024-11-10 at 14.49.04 (1).jpeg',
    link: '#',
    width: 1277,
    height: 901,
  },
  {
    id: crypto.randomUUID(),
    title: 'Agri Farming',
    image:
      '/Project/Open Field Modern Farming/Agri Farming/WhatsApp Image 2024-11-10 at 14.26.31 (1).jpeg',
    link: '#',
    width: 1280,
    height: 960,
  },
  {
    id: crypto.randomUUID(),
    title: 'Modern Farming',
    image:
      '/Project/Open Field Modern Farming/Agri Farming/WhatsApp Image 2024-11-10 at 20.31.54.jpeg',
    link: '#',
    width: 1600,
    height: 555,
  },
  {
    id: crypto.randomUUID(),
    title: 'Aqua Farming',
    image:
      '/Project/Open Field Modern Farming/Aqua Farming/Photo from Krish.jpg',
    link: '#',
    width: 1398,
    height: 1102,
  },
  {
    id: crypto.randomUUID(),
    title: 'Land Transformation',
    image:
      '/Project/Open Field Modern Farming/Land Transformation Project/WhatsApp Image 2024-11-10 at 14.22.11 (2).jpeg',
    link: '#',
    width: 1280,
    height: 720,
  },
  {
    id: crypto.randomUUID(),
    title: 'Seaweed Farming',
    image:
      '/Project/Open Field Modern Farming/Seaweed/WhatsApp Image 2024-11-10 at 14.49.04.jpeg',
    link: '#',
    width: 950,
    height: 1280,
  },
  {
    id: crypto.randomUUID(),
    title: 'Pond RS',
    image: '/Project/Pond_RS/IMG-20220419-WA0004.jpg',
    link: '#',
    width: 1156,
    height: 868,
  },
  // {
  //   id: crypto.randomUUID(),
  //   title: '',
  //   image: '',
  //   link: '#',
  //   width: 0,
  //   height: 0,
  // },
];

export default function ProjectHomeTwo() {
  return (
    <>
      <section
        id='success-stories'
        className='recent-project-section fix section-padding white-bg'>
        <div className='container'>
          <div className='recent-project-head d-md-flex d-grid gap-4 justify-content-between align-items-end mb-60'>
            <div className='section-title'>
              <h5
                className='p1-clr wow fadeInLeft text-uppercase'
                data-wow-delay='0.4s'>
                Recent projects
              </h5>
              <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                {/* Bringing nature bounty <br /> to your plate */}
                Empowering nature for a <br /> sustainable tomorrow
              </h2>
            </div>
            <div className='common-slidebtn d-flex align-items-center gap-xl-3 gap-2'>
              <button className='cmn-prev1 cust-swiper'>
                <span className={'visually-hidden'}>prev</span>
                <i className='fa-solid fa-arrow-left'></i>
              </button>
              <button className='cmn-next1 cust-swiper active'>
                <span className={'visually-hidden'}>next</span>
                <i className='fa-solid fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={24}
          speed={1500}
          loop={true}
          slidesPerView={4.5}
          centeredSlides={true}
          navigation={{
            nextEl: '.cmn-next1',
            prevEl: '.cmn-prev1',
          }}
          grabCursor={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            1199: {
              slidesPerView: 4.5,
            },
            767: {
              slidesPerView: 3.5,
              spaceBetween: 14,
            },
            575: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
          }}
          className='swiper recent-project-wrap'>
          {projectData.map((project, idx) => (
            <SwiperSlide key={project.id} className='swiper-slide'>
              <div className={''} style={{ aspectRatio: '1/1' }}>
                <div className='recent-project-item position-relative overflow-hidden w-100 h-100'>
                  <Image
                    src={project.image}
                    alt={`project image ${idx + 1}`}
                    width={project.width}
                    height={project.height}
                    className='w-100 h-100 object-fit-cover'
                  />
                  <Link href={project.link} className='arrow'>
                    <i className='fa-solid fa-link'></i>
                  </Link>
                </div>
                <h2 className={'fs-4 text-center mt-2 display-1'}>
                  {project.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

/*
<SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden w-100 h-100'>
             <img src='assets/img/blog/rp1.jpg' alt='img' /> 

             
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
               <img src='assets/img/blog/rp2.jpg' alt='img' /> 
              
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
               <img src='assets/img/blog/rp3.jpg' alt='img' /> 
              
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
              <img src='assets/img/blog/rp4.jpg' alt='img' />
              
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
               <img src='assets/img/blog/rp1.jpg' alt='img' /> 
              
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
              <img src='assets/img/blog/rp2.jpg' alt='img' />
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
              <img src='assets/img/blog/rp3.jpg' alt='img' />
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='recent-project-item position-relative overflow-hidden'>
              <img src='assets/img/blog/rp4.jpg' alt='img' />
              <Link href='/gallery-details' className='arrow'>
                <i className='fa-solid fa-link'></i>
              </Link>
            </div>
          </SwiperSlide>

*/
