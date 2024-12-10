import Image from 'next/image';
import Link from 'next/link';

export default function FooterOne() {
  return (
    <>
      <footer className='footer-section overflow-hidden position-relative footer-style1'>
        <div className='footer-widgets-wrapper footer-widget-wrapperv01'>
          <div className='container'>
            <div className='row g-md-4 g-4 justify-content-between'>
              <div
                className='col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp'
                data-wow-delay='.3s'>
                <div className='single-footer-widget'>
                  <div className='widget-head w-50 h-25'>
                    <Link href='/' className='footer-logo'>
                      <Image
                        src='/assets/img/logo/Logo_t-transparent.png'
                        alt='logo-img'
                        className='w-100 h-100'
                        width={431}
                        height={154}
                      />
                    </Link>
                  </div>
                  <div className='footer-content'>
                    <p className='pre-pragraph'>
                      Join us in revolutionising the farming landscape with our
                      climate-smart innovations and sustainable practices.
                    </p>
                    <div className='social-wrapper social-empact d-flex align-items-center'>
                      <Link
                        href='https://www.facebook.com/finnoaq'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='white-clr'>
                        <span className={'visually-hidden'}>facebook</span>
                        <i className='white-clr fab fa-facebook-f'></i>
                      </Link>
                      <Link
                        href='https://www.instagram.com/finnofarms'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='white-clr'>
                        <span className={'visually-hidden'}>instagram</span>
                        <i className='white-clr fab fa-instagram'></i>
                      </Link>
                      <Link
                        href='https://www.linkedin.com/company/finnoaq'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='white-clr'>
                        <span className={'visually-hidden'}>linkedin</span>
                        <i className='white-clr fa-brands fa-linkedin-in'></i>
                      </Link>
                      {/* <Link
                        href='#hero'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='white-clr'>
                        <span className={'visually-hidden'}>pinterest</span>
                        <i className='white-clr fa-brands fa-pinterest-p'></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp'
                data-wow-delay='.5s'>
                <div className='single-footer-widget'>
                  <div className='widget-head'>
                    <h3 className='white-clr'>Solutions</h3>
                  </div>
                  <ul className='list-area'>
                    <li>
                      <Link href='#services'>
                        <i className='fa-solid fa-angle-right'></i>
                        Aquaculture & Horticulture Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href='#services'>
                        <i className='fa-solid fa-angle-right'></i>
                        Farm, Crop & Marketplace Digitalisation
                      </Link>
                    </li>
                    <li>
                      <Link href='#services'>
                        <i className='fa-solid fa-angle-right'></i>
                        Extension & Advisory Support Service
                      </Link>
                    </li>
                    <li>
                      <Link href='#services'>
                        <i className='fa-solid fa-angle-right'></i>
                        Farm Startup & Consultation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp'
                data-wow-delay='.5s'>
                <div className='single-footer-widget'>
                  <div className='widget-head'>
                    <h3 className='white-clr'>Link</h3>
                  </div>
                  <ul className='list-area'>
                    <li>
                      <Link href='#about'>About Us</Link>
                    </li>
                    <li>
                      <Link href='#services'>Product & Service</Link>
                    </li>
                    <li>
                      <Link href='#success-stories'>Success Stories</Link>
                    </li>
                    <li>
                      <Link href='#faq'>FAQ&apos;s</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp'
                data-wow-delay='.5s'>
                <div className='single-footer-widget'>
                  <div className='widget-head'>
                    <h3 className='white-clr'>Contact</h3>
                  </div>
                  <ul className='list-area list-contact'>
                    <li>
                      <Link href={`mailto:finnoaq@gmail.com`}>
                        <i className='fa-solid fa-envelope'></i>
                        finnoaq@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='link'>
                        <i className='fa-solid fa-location-dot'></i>
                        India, West Bengal, <br /> Howrah - 711101
                      </Link>
                    </li>
                    <li>
                      <Link href={`tel:${8100533280}`} className='link'>
                        <i className='fa-solid fa-phone'></i>
                        +91 8100533280
                      </Link>
                      {/* <Link href={`tel:${2705550118}`} className='link'>
                        <i className='fa-solid fa-phone'></i>
                        (270) 555-0118
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center'>
              <p className='wow fadeInLeft color-2' data-wow-delay='.3s'>
                © finnoaq {new Date().getFullYear()}. All Rights Reserved
              </p>
              <ul className='footer-menu wow fadeInRight' data-wow-delay='.5s'>
                <li>
                  <Link href='#contact'>Terms & Condition</Link>
                </li>
                <li>
                  <Link href='#contact'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='#contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Image
          src='/assets/img/footer/footer-wheat.png'
          alt='img'
          className='footer-wheat position-absolute'
          width={922}
          height={632}
        />
      </footer>
    </>
  );
}
