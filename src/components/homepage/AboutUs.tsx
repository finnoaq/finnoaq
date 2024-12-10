'use client';

import Image from 'next/image';
import { useState } from 'react';
import PopUpModal from '../common/Modal';

export default function AboutUs() {
  const [show, setShow] = useState(false);

  function toggleModal() {
    return setShow((prev) => !prev);
  }

  return (
    <>
      <section
        id='about'
        className='about-section style-v01 section-padding white-bg'>
        <div className='container'>
          <div className='row g-4 align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='about-contentv1'>
                <div className='section-title mb-40'>
                  <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
                    About Us
                  </h5>
                  <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                    {/* Bringing natures bounty to your plate */}
                    Farming with Passion, <br /> The Feeding Purpose
                  </h2>
                  <p className='wow fadeInUp' data-wow-delay='.4s'>
                    At Finno AQ, we envision a world of sustainable smart farms
                    where food farming is both productive, profitable and
                    sustainable. Our mission is to empower farmers by providing
                    customised <strong>climate-smart, data-driven tools</strong>{' '}
                    and <strong>innovative biofarming solutions</strong> they
                    need to thrive in a changing climate, ensuring quality food
                    and nutritional security for everyone.
                  </p>
                  <div className='progress_bar d-grid gap-xxl-4 gap-4'>
                    <div className='progress_bar_item'>
                      <div
                        className='per-title d-flex align-items-center justify-content-between'
                        style={{ width: '70%' }}>
                        <div className='item_label p900-clr'>
                          {/* Next-Gen Farming, Healthy Food */}
                          Next-Gen Sustainable Farming, Healthy Food
                        </div>
                        {/* <div className='item_value p900-clr'>70%</div> */}
                      </div>
                      <div className='item_bar'>
                        <div
                          className='progress'
                          data-progress='70'
                          style={{ width: '70%', background: '#002ad5' }}></div>
                      </div>
                    </div>
                    <div className='progress_bar_item'>
                      <div
                        className='per-title d-flex align-items-center justify-content-between'
                        style={{ width: '80%' }}>
                        <div className='item_label p900-clr'>
                          Full Stack Phygital Model, Smart Village Agripreneur
                          {/* Full stack Phygital Model, Smart Villages */}
                        </div>
                        {/* <div className='item_value p900-clr'>80%</div> */}
                      </div>
                      <div className='item_bar'>
                        <div
                          className='progress'
                          data-progress='80'
                          style={{ width: '80%', background: '#002ad5' }}></div>
                      </div>
                    </div>
                  </div>
                  <button
                    // href='https://calendly.com/finnoaq/30min'
                    // target='_blank'
                    // rel='noopener noreferrer'
                    onClick={toggleModal}
                    className='cmn-btn round100 cmn-primary2'>
                    Book a call
                  </button>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-6 col-md-6 col-sm-8 order-md-0 order-1'>
              <div className='about-thumv01 position-relative'>
                <Image
                  src='/assets/img/about/choose-man.png'
                  alt='img'
                  className='mimg w-100 h-100 object-fit-cover'
                  width={546}
                  height={546}
                />
                <Image
                  src='/assets/img/about/f-food.png'
                  alt='img'
                  className='f-food w-auto h-auto'
                  width={162}
                  height={162}
                />
                <Image
                  src='/assets/img/about/l-food.png'
                  alt='img'
                  className='l-food wow fadeInLeft w-auto h-auto'
                  data-wow-delay='.5s'
                  width={130}
                  height={130}
                />
                <Image
                  src='/assets/img/about/t-food.png'
                  alt='img'
                  className='t-food wow fadeInLeft w-auto h-auto'
                  data-wow-delay='.7s'
                  width={130}
                  height={130}
                />
              </div>
            </div> */}
            <div className='col-lg-6 col-md-6 col-sm-8 order-md-0 order-1'>
              <div className='about-thumv01 position-relative ratio ratio-1x1'>
                <Image
                  src='/About us.jpg'
                  alt='img'
                  className='mimg w-100 h-100 object-fit-cover'
                  width={1224}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopUpModal isOpen={show} onToggleModal={toggleModal} />
    </>
  );
}
