'use client';

import jsonp from 'jsonp';
import Image from 'next/image';
import React, { useState } from 'react';

const isDev = process.env.NODE_ENV === 'development' ? true : false;
const COMPANY_PROFILE_URL = 'https://preview--finnoaq-farmverse-profile.lovable.app/';

export default function SubscribeHomeTwo() {
  const postUrl =
    'https://gmail.us15.list-manage.com/subscribe/post?u=69b7cb14141130167ae56c5f5&amp;id=ba1be9304e&amp;f_id=00f293e0f0';

  const [showPopup, setShowPopup] = useState(false);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = e.currentTarget.EMAIL.value;

    // Call the n8n webhook to add email to sheet
    fetch(`https://n8n.finnofarms.in/webhook/499e85f6-320b-4f30-8c14-4ee90f811680?gmail=${encodeURIComponent(email)}`, {
      method: 'GET',
    }).catch(() => {});

    jsonp(`${postUrl}&EMAIL=${email}`, { param: 'c' }, function (_, data) {
      // Optionally handle response
    });

    setShowPopup(true);
    e.currentTarget.reset();
  }

  function handlePopupClose() {
    setShowPopup(false);
    window.open(COMPANY_PROFILE_URL, '_blank');
  }

  return (
    <>
      <div className='subscrbie-section p100-bg'>
        <div className='container'>
          <div className='subscribe-wrapper-v02'>
            <div className='container'>
              <div className='row g-4 align-items-center justify-content-between'>
                <div className='col-lg-6 col-md-5'>
                  <div className='subs-contentv2'>
                    {/* <h5>Subscribe our newsletter</h5> */}
                    <h5>“ Not ready to decide ?</h5>
                    {/* <h2>
                      <span>Subscribe</span> for any information
                    </h2> */}
                    <h2>
                      <span>Subscribe</span> for Free Farming Resource Guide
                    </h2>
                  </div>
                </div>
                <div className='col-lg-6 col-md-7'>
                  <form
                    onSubmit={handleSubscribe}
                    className='subscribe-form02 flex-sm-nowrap flex-wrap'
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                      width: '100%',
                    }}>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      name='EMAIL'
                      className='required email'
                      id='mce-EMAIL'
                      required
                      defaultValue={isDev ? 'someone@gmail.com' : ''}
                      style={{
                        flex: 1,
                        minWidth: '160px',
                        maxWidth: '100%',
                        marginBottom: '0.5rem',
                        padding: '0.75rem 1rem',
                        border: '1.5px solid #43a047',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        outline: 'none',
                        background: '#fff',
                        color: '#222',
                        boxShadow: '0 1px 4px rgba(67, 160, 71, 0.07)',
                        transition: 'border 0.2s, box-shadow 0.2s',
                        // Ensure placeholder is always visible and not cut off
                        width: '100%',
                      }}
                      aria-label='Email address for subscription'
                    />
                    <button
                      className='cmn-btn cmn-white p900-clr round100 text-capitalize subscribe-company-btn'
                      style={{
                        whiteSpace: 'normal',
                        flexShrink: 0,
                        minWidth: '140px',
                        maxWidth: '220px',
                        textAlign: 'center',
                        width: 'auto',
                        padding: '0.7rem 1.2rem',
                        fontSize: '1rem',
                        lineHeight: 1.2,
                        wordBreak: 'break-word',
                      }}>
                      Subscribe/<wbr />View Company Profile
                    </button>
                    <style>{`
                      @media (max-width: 576px) {
                        .subscribe-form02 {
                          flex-direction: column !important;
                          align-items: stretch !important;
                          gap: 0.5rem !important;
                        }
                        .subscribe-form02 input {
                          width: 100% !important;
                          min-width: 0 !important;
                          margin-bottom: 0.5rem;
                          font-size: 1rem;
                          padding: 0.7rem 1rem;
                        }
                        .subscribe-company-btn {
                          width: 100% !important;
                          min-width: 0 !important;
                          max-width: 100% !important;
                          font-size: 1rem !important;
                          padding: 0.7rem 1rem !important;
                          white-space: normal !important;
                        }
                      }
                      .subscribe-form02 input::placeholder {
                        color: #43a047 !important;
                        opacity: 1 !important;
                        font-weight: 500 !important;
                        letter-spacing: 0.01em !important;
                        font-size: 1rem !important;
                        white-space: normal !important;
                        text-overflow: ellipsis !important;
                        overflow: visible !important;
                      }
                    `}</style>
                  </form>
                  {showPopup && (
                    <div
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                      }}>
                      <div
                        style={{
                          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                          padding: '2rem 1.5rem',
                          borderRadius: '14px',
                          textAlign: 'center',
                          minWidth: '320px',
                          boxShadow: '0 4px 24px 0 rgba(56, 142, 60, 0.13)',
                          border: '1px solid #a5d6a7',
                        }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <svg width='40' height='40' fill='none' viewBox='0 0 24 24'>
                            <circle cx='12' cy='12' r='12' fill='#43a047' />
                            <path
                              d='M7 13l3 3 7-7'
                              stroke='#fff'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <p
                          style={{
                            marginBottom: '1.2rem',
                            fontSize: '1.1rem',
                            color: '#256029',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            lineHeight: 1.5,
                          }}>
                          Thank You for subscribing!<br />You will receive a mail shortly.
                        </p>
                        <button
                          className='cmn-btn cmn-white p900-clr round100 text-capitalize'
                          style={{
                            background: 'linear-gradient(90deg, #66bb6a 0%, #a5d6a7 100%)',
                            color: '#1b5e20',
                            fontWeight: 600,
                            fontSize: '1rem',
                            padding: '0.6rem 2rem',
                            border: 'none',
                            borderRadius: '50px',
                            boxShadow: '0 1px 4px rgba(56, 142, 60, 0.08)',
                            cursor: 'pointer',
                          }}
                          onClick={handlePopupClose}>
                          OK
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Image
              src='/assets/img/footer/subscribe-shapev2.png'
              alt='img'
              className='subscribe-shapev2 w-auto h-auto'
              width={235}
              height={252}
            />
          </div>
        </div>
      </div>
    </>
  );
}
