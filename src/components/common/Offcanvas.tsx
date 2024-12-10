import MobileMenu from '@/layouts/headers/menu/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onToogleCanvas: () => void;
  onToggleModal?: () => void;
};

export default function Offcanvas(props: Props) {
  const { open, onToogleCanvas, onToggleModal } = props;

  const toggleModal = onToggleModal ? onToggleModal : () => {};

  return (
    <>
      <div className='fix-area'>
        <div className={`offcanvas__info ${open ? 'info-open' : ''}`}>
          <div className='offcanvas__wrapper'>
            <div className='offcanvas__content'>
              <div className='offcanvas__top mb-4 d-flex justify-content-between align-items-center'>
                <div className='offcanvas__logo'>
                  <Link href='/'>
                    <Image
                      // src='/assets/img/logo/favcion.png'
                      src='/assets/img/logo/logo-f.webp'
                      alt='logo-img'
                      width={300}
                      height={40}
                      className='w-50 h-50 ratio ratio-16x9'
                    />
                  </Link>
                </div>
                <div className='offcanvas__close'>
                  <button onClick={onToogleCanvas}>
                    <span className={'visually-hidden'}>close canvas</span>
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
              <div className='mobile-menu fix mb-3 mean-container d-xl-none'>
                <MobileMenu />
              </div>
              <div className='offcanvas__contact'>
                <h4>Contact Info</h4>
                <ul>
                  <li className='d-flex align-items-center'>
                    <div className='offcanvas__contact-icon'>
                      <i className='fal fa-map-marker-alt'></i>
                    </div>
                    <div className='offcanvas__contact-text'>
                      <Link target='_blank' href='#' onClick={onToogleCanvas}>
                        India, West Bengal, Howrah - 711101
                      </Link>
                    </div>
                  </li>
                  <li className='d-flex align-items-center'>
                    <div className='offcanvas__contact-icon mr-15'>
                      <i className='fal fa-envelope'></i>
                    </div>
                    <div className='offcanvas__contact-text'>
                      <Link
                        className='text-lowercase'
                        href='mailto:finnoaq@gmail.com'
                        onClick={onToogleCanvas}>
                        finnoaq@gmail.com
                        {/* <span className=''>finnoaq@gmail.com</span> */}
                      </Link>
                    </div>
                  </li>
                  <li className='d-flex align-items-center'>
                    <div className='offcanvas__contact-icon mr-15'>
                      <i className='fal fa-clock'></i>
                    </div>
                    <div className='offcanvas__contact-text'>
                      <Link target='_blank' href='#' onClick={onToogleCanvas}>
                        Mon-friday, 08 am - 08 pm
                      </Link>
                    </div>
                  </li>
                  <li className='d-flex align-items-center'>
                    <div className='offcanvas__contact-icon mr-15'>
                      <i className='far fa-phone'></i>
                    </div>
                    <div className='offcanvas__contact-text'>
                      <Link href='tel:+918100533280' onClick={onToogleCanvas}>
                        +91 8100533280
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className='header-button mt-4 mb-4'>
                  <Link
                    href='#contact'
                    className='cmn-btn'
                    onClick={() => {
                      onToogleCanvas();
                      toggleModal();
                    }}>
                    Book a call
                    <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                </div>
                <h4>Social Media</h4>
                <div className='social-icon d-flex align-items-center'>
                  <Link
                    href='https://www.facebook.com/finnoaq'
                    target='_blank'
                    rel='noreferrer noopener'
                    onClick={onToogleCanvas}>
                    <span className={'visually-hidden'}>facebook</span>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                  <Link
                    href='https://www.instagram.com/finnofarms'
                    target='_blank'
                    rel='noreferrer noopener'
                    onClick={onToogleCanvas}>
                    <span className={'visually-hidden'}>instagram</span>
                    <i className='fab fa-instagram'></i>
                  </Link>
                  {/* <Link href='#'>
                    <i className='fab fa-youtube'></i>
                  </Link> */}
                  <Link
                    href='https://www.linkedin.com/company/finnoaq'
                    target='_blank'
                    rel='noreferrer noopener'
                    onClick={onToogleCanvas}>
                    <span className={'visually-hidden'}>linkedin</span>
                    <i className='fab fa-linkedin-in'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${open ? 'overlay-open' : ''}`}
        onClick={onToogleCanvas}></div>
    </>
  );
}
