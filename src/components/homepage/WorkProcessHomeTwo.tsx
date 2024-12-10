import Link from 'next/link';
import { Image } from 'react-bootstrap';

export default function WorkProcessHomeTwo() {
  return (
    <>
      <section className='Working-section section-padding p900-bg'>
        <div className='container'>
          <div className='working-common-head'>
            <div className='section-title'>
              <h5
                className='p1-clr wow fadeInLeft text-uppercase'
                data-wow-delay='0.4s'>
                {/* Work Process */}
                How it works ?
              </h5>
              <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                {/* Shape your garden <br /> into a work of art */}
                Shape your sustainable farming future
              </h2>
            </div>
            <div>
              <p className='working-pra wow fadeInLeft' data-wow-delay='.3s'>
                We start by understanding your farm’s unique needs and goals and
                design a tailored plan based on your assessment. Post discussion
                of the plan our experts work with you to bring the plan to life
                on your farm and also empower you with all the modern farming
                skills needed to succeed.
              </p>
              <p className='working-pra wow fadeInLeft' data-wow-delay='.3s'>
                Our partnership doesn’t end after setup – we’re here for the
                long run and will continuously help you analyze outcomes and
                explore growth opportunities.
              </p>
            </div>
          </div>
          <div className='row g-xl-4 g-3 justify-content-center position-relative mb-60'>
            <div
              className='col-lg-3 col-md-6 col-sm-6 wow fadeInDown'
              data-wow-delay='.3s'>
              <div className='working-proces-items01 h-100'>
                <h3 className='white-clr me-5 fs-6'>
                  Fill up the google form so, <br /> we can assess your unique
                  needs and goals
                  {/* Prepare <br /> the soil */}
                </h3>
                {/* <Image
                  src='/assets/img/element/step-shape.png'
                  alt='img'
                  className='step-working w-auto h-auto object-fit-contain'
                  width={80}
                  height={80}
                /> */}
                <span
                  className='step-text rounded round100 p-2'
                  style={{ background: '#fdd61f' }}>
                  01
                </span>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 col-sm-6 wow fadeInDown'
              data-wow-delay='.5s'>
              <div className='working-proces-items01 h-100'>
                <h3 className='white-clr me-5 fs-6'>
                  {/* Farm the <br /> seeds */}
                  Customized Solution Design is developed by our expertise
                  according to your unique requirements and shared over
                  mail/whatsapp
                </h3>
                {/* <Image
                  src='/assets/img/element/step-shape.png'
                  alt='img'
                  className='step-working w-auto h-auto object-fit-contain'
                  width={80}
                  height={80}
                /> */}
                <span
                  className='step-text rounded round100 p-2'
                  style={{ background: '#fdd61f' }}>
                  02
                </span>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 col-sm-6 wow fadeInDown'
              data-wow-delay='.7s'>
              <div className='working-proces-items01 h-100'>
                <h3 className='white-clr me-5 fs-6'>
                  {/* Water the <br /> plants */}
                  Plan Bio-farming Installation, Setup & Training to optimise
                  your farm for maximum productivity and sustainability
                </h3>
                {/* <Image
                  src='/assets/img/element/step-shape.png'
                  alt='img'
                  className='step-working w-auto h-auto object-fit-contain'
                  width={80}
                  height={80}
                /> */}
                <span
                  className='step-text rounded round100 p-2'
                  style={{ background: '#fdd61f' }}>
                  03
                </span>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 col-sm-6 wow fadeInDown'
              data-wow-delay='.8s'>
              <div className='working-proces-items01 h-100'>
                <h3 className='white-clr me-5 fs-6'>
                  {/* Fertilize <br /> the Farm */}
                  Enjoy Continuous Support & Optimization via our AI powered
                  FaaS Platform to keep your farm resilient and thriving.
                </h3>
                {/* <Image
                  src='/assets/img/element/step-shape.png'
                  alt='img'
                  className='step-working w-auto h-auto object-fit-contain'
                  width={80}
                  height={80}
                /> */}
                <span
                  className='step-text rounded round100 p-2'
                  style={{ background: '#fdd61f' }}>
                  04
                </span>
              </div>
            </div>

            <Image
              src='/assets/img/element/arro-round-top.png'
              alt='img'
              className='working-arrows-one'
              width={135}
              height={36}
            />
            <Image
              src='/assets/img/element/arro-round-bottom.png'
              alt='img'
              className='working-arrows-two d-lg-block d-none'
              width={135}
              height={36}
            />
            <Image
              src='/assets/img/element/arro-round-bottom.png'
              alt='img'
              className='working-arrows-three d-lg-block d-none'
              width={135}
              height={36}
            />
          </div>

          <div
            className={'d-flex align-items-center justify-content-center my-5'}>
            <div
              className='col-lg-3 col-md-6 col-sm-6 wow fadeInDown'
              data-wow-delay='.8s'>
              <div className='working-proces-items01 h-100'>
                <h3 className='white-clr me-5 fs-6'>
                  {/* Fertilize <br /> the Farm */}
                  We review outcomes annually and help you explore growth
                  expansion opportunities for your long-term farming success.
                </h3>
                {/* <Image
                  src='/assets/img/element/step-shape.png'
                  alt='img'
                  className='step-working w-auto h-auto object-fit-contain'
                  width={80}
                  height={80}
                /> */}
                <span
                  className='step-text rounded round100 p-2'
                  style={{ background: '#fdd61f' }}>
                  05
                </span>
              </div>
            </div>
          </div>

          <p className='processs-text flex-column'>
            Start Your Biofarming Journey Today
            <Link
              href='https://forms.gle/JNjoKb5ejRL25qjc9'
              target='_blank'
              className='cmn-btn round100 cmn-primary2 text-white'
              rel='noopener noreferrer'>
              Click here to start
              {/* <svg
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                className='text-white'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.8145 7.27931L12.75 5.21484L8.22656 9.73828C7.44531 10.5195 6.67772 11.0195 5.89844 10.2383C5.11719 9.45703 5.61719 8.69141 6.39844 7.91016L10.9219 3.38672L8.88866 1.35253C8.44528 0.909156 8.82616 0.167969 9.48241 0.167969H14.8144C15.4688 0.167969 16 0.69825 16 1.35253V6.68653C16 7.34081 15.2598 7.72363 14.8145 7.27931ZM2 14.168H12V8.28712L14 10.2871V14.168C14 15.2734 13.1055 16.168 12 16.168H2C0.894531 16.168 0 15.2734 0 14.168V4.16797C0 3.06347 0.894531 2.16797 2 2.16797H5.88088L7.88088 4.16797H2V14.168Z'
                  fill='#2AB939'
                />
              </svg> */}
            </Link>
          </p>
        </div>

        <Image
          src='/assets/img/element/sylli.png'
          alt='img'
          className='working-slilli'
          width={182}
          height={195}
        />
        <Image
          src='/assets/img/element/green-area.png'
          alt='img'
          className='working-green'
          width={1920}
          height={63}
        />
      </section>
    </>
  );
}
