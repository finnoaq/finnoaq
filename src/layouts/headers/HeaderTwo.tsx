'use client';

import PopUpModal from '@/components/common/Modal';
import Offcanvas from '@/components/common/Offcanvas';
import SearchBar from '@/components/common/SearchBar';
import useSticky from '@/hooks/use-sticky';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavMenu from './menu/NavMenu';

export default function HeaderTwo() {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [serchOpen, setSearchOpen] = useState(false);
  const [show, setShow] = useState(false);

  function toggleCanvas() {
    setOpen((prev) => !prev);
  }

  function toggleModal() {
    return setShow((prev) => !prev);
  }

  return (
    <>
      <div className='header-top-section style-v01 d-lg-block d-none'>
        <div className='container'>
          <div className='header-top-wrapper'>
            <Link href='#' className='location-area'>
              <i className='fa-solid fa-location-dot'></i> India, West Bengal,
              Howrah - 711101
            </Link>
            <ul className='contact-list'>
              <li>
                <Link href={'tel:8100533280'}>
                  <i className='fa-solid fa-phone'></i>
                  +91 8100533280
                </Link>
              </li>
              <li>
                <Link href='mailto:finnoaq@gmail.com' className='link'>
                  <i className='fa-solid fa-envelope'></i>
                  finnoaq@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        id='header-sticky'
        className={`header-2 ${sticky ? 'sticky' : ''}`}>
        <div className='container-fluid'>
          <div className='mega-menu-wrapper'>
            <div className='header-main'>
              <div className='header-left'>
                <div className={'d-none d-lg-block'}>
                  <div className='logo w-100 h-100'>
                    <Link href='#header-sticky' className='header-logo'>
                      <Image
                        src='/assets/img/logo/Logo_t.png'
                        // src='/assets/img/logo/logo-f.webp'
                        alt='logo-img'
                        width={300}
                        height={80}
                        className='w-50 h-50 ratio ratio-16x9'
                        priority={true}
                      />
                    </Link>
                  </div>
                </div>

                <div className='d-md-block d-lg-none w-100 h-100'>
                  <Link href='#header-sticky' className='header-logo'>
                    <Image
                      // src='/assets/img/logo/Logo_t.png'
                      src='/assets/img/logo/logo-f.webp'
                      alt='logo-img'
                      width={300}
                      height={80}
                      className='w-50 h-50 ratio ratio-16x9'
                      priority={true}
                    />
                  </Link>
                </div>
              </div>
              <div className='header-right d-flex justify-content-end align-items-center'>
                <div className='mean__menu-wrapper d-none d-xl-block'>
                  <div className='main-menu'>
                    <nav id='mobile-menu'>
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className='search-adjust'>
                  <Link
                    href='#'
                    className='search-trigger d-center'
                    onClick={() => setSearchOpen(!serchOpen)}
                    style={{ background: '#002ad5' }}>
                    <i className='fa-solid fa-magnifying-glass text-light'></i>
                  </Link>
                  <div className='header-button d-sm-block d-none'>
                    <button
                      type='button'
                      className='cmn-btn round100'
                      onClick={toggleModal}>
                      Book a call
                      <i className='fa-solid fa-phone'></i>
                    </button>
                  </div>
                </div>
                <div className='header__hamburger d-xl-none my-auto'>
                  <div className='sidebar__toggle' onClick={toggleCanvas}>
                    <i className='fas fa-bars'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas
        open={open}
        onToogleCanvas={toggleCanvas}
        onToggleModal={toggleModal}
      />
      <SearchBar serchOpen={serchOpen} setSearchOpen={setSearchOpen} />
      <PopUpModal isOpen={show} onToggleModal={toggleModal} />
    </>
  );
}
