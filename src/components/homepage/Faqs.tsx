'use client';

import faq_data from '@/data/faq_data';
import VideoPopup from '@/modals/VideoPopup';
import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';

export default function Faqs() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(0);

  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  };

  return (
    <>
      <section id={'faq'} className='faq-section section-padding p100-bg'>
        <div className='container'>
          <div className='row g-md-4 g-2 align-items-center justify-content-between'>
            <div className='col-lg-5 col-md-6'>
              <div className='faq-content-left'>
                <div className='section-title mb-40'>
                  <h5
                    className='p1-clr wow fadeInLeft text-uppercase'
                    data-wow-delay='0.4s'>
                    FAQ
                  </h5>
                  <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                    Ready to Transform Your Farm ?
                  </h2>

                  <div>
                    <p className={'mb-2'}>
                      Partner with Finno AQ today to explore our{' '}
                      <strong> full-stack phygital farm-tech solutions</strong>.
                    </p>

                    <p className={'mb-2'}>
                      {' '}
                      Don’t wait for the future; embrace it today!
                    </p>

                    <p className={'mb-2'}>
                      Together, we can create a sustainable, productive farming
                      ecosystem that benefits your farm, your community, and the
                      planet.
                    </p>
                    <p className={'mb-2'}>
                      <strong>
                        <em>
                          Get in touch with us today and let’s cultivate success
                          together!
                        </em>
                      </strong>
                    </p>
                  </div>

                  {/* <div className='faq-watch'>
                    <Link
                      href='#faq'
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: 'pointer' }}
                      className='video-cmn d-center video-popup'>
                      <span className={'visually-hidden'}>faq-video</span>
                      <i className='fa-solid fa-play'></i>
                    </Link>
                    <h5>Watch Video</h5>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 order-md-0 order-1'>
              <div className='tab-faq faq'>
                <div className='accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2'>
                  {faq_data.map((item, i) => (
                    <div
                      key={i}
                      className={`accordion-single ${
                        isOpen === i ? 'active' : ''
                      }`}>
                      <h5 className='header-area' onClick={() => toggle(i)}>
                        <button
                          className='accordion-btn d-flex align-items-center d-flex position-relative w-100'
                          type='button'>
                          {item.question}
                          {/* <i className='fa-solid fa-plus text-light'></i> */}
                        </button>
                      </h5>
                      <div
                        className='content-area'
                        style={{ display: isOpen === i ? 'block' : 'none' }}>
                        <div className='content-body'>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src='/assets/img/element/faq-element.png'
          alt='img'
          className='faq-element h-25 w-auto'
          width={294}
          height={399}
        />
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'-hTVNidxg2s'}
      />
      {/* video modal end  */}
    </>
  );
}
