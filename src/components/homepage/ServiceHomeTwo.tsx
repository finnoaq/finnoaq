import Image from 'next/image';
import Link from 'next/link';

export default function ServiceHomeTwo() {
  return (
    <>
      <section
        id='services'
        className='servicev2-section overflow-hidden white-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xxl-6 col-xl-7 col-md-8 col-sm-11'>
              <div className='section-title mb-60 text-center'>
                <h5
                  className='p1-clr wow fadeInLeft text-uppercase'
                  data-wow-delay='0.4s'>
                  OUR PRODUCT & SERVICES
                </h5>
                <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                  Nourishing the world from seed to table
                </h2>
              </div>
            </div>
          </div>

          <div className='row g-xl-4 g-3 justify-content-center'>
            <div
              className='col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp'
              data-wow-delay='.3s'>
              <div className='service-itemsv02 h-100'>
                <div className='thumb w-100 ratio ratio-1x1'>
                  <Image
                    // src='/assets/img/service/service1.jpg'
                    src='/P&s1.jpg'
                    alt='img'
                    className='w-100 mimg h-100'
                    width={410}
                    height={291}
                  />
                </div>
                <div className='content'>
                  <div className='iocns-box d-center'>
                    <Image
                      src='/assets/img/icon/desert.svg'
                      alt='svg'
                      width={75}
                      height={75}
                      className='w-auto h-auto'
                    />
                  </div>
                  <Link href='/#' className='title'>
                    Horticulture & Aquaculture Bio-farming Solutions
                  </Link>
                  <p>
                    Establish ecological, aquaculture and CEA farms that promote
                    sustainability and productivity.
                  </p>
                  {/* <ul className='about-list2'>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-2 align-items-center'}>
                        <i className='fa-solid fa-check d-block'></i>
                        <strong className={'text-light fs-6'}>
                          Ecological & Sustainable Farming Setup
                        </strong>
                      </span>
                      <p className={'fs-6 display-6'}>
                        Establish organic, natural, residual free farms that
                        support soil health and biodiversity.
                      </p>
                    </li>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-2 align-items-center'}>
                        <i className='fa-solid fa-check d-block'></i>
                        <strong className={'text-light fs-6'}>
                          Ecological & Sustainable Farming Setup
                        </strong>
                      </span>
                      <p className={'fs-6 display-6'}>
                        Establish organic, natural, residual free farms that
                        support soil health and biodiversity.
                      </p>
                    </li>
                  </ul> */}
                  {/* <Link href='/#' className='arrows'>
                    Read More <i className='fa-solid fa-angle-right'></i>
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className='col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp'
              data-wow-delay='.5s'>
              <div className='service-itemsv02 h-100'>
                <div className='thumb w-100 ratio ratio-1x1'>
                  <Image
                    src='/p&s2.jpg'
                    // src='/assets/img/service/service2.jpg'
                    alt='img'
                    className='w-100 mimg h-100'
                    width={410}
                    height={291}
                  />
                </div>
                <div className='content'>
                  <div className='iocns-box d-center'>
                    <Image
                      src='/assets/img/icon/fence.svg'
                      alt='svg'
                      width={75}
                      height={75}
                      className='w-auto h-auto'
                    />
                  </div>
                  <Link href='/#' className='title'>
                    Farming 4.0, FaaS Platform
                  </Link>
                  <p>
                    Leverage IoT and data-driven insights for smarter farming
                    decisions. Our platform offers a range of services from
                    weather forecasting to soil health monitoring.
                  </p>
                  {/* <Link href='/#' className='arrows'>
                    Read More <i className='fa-solid fa-angle-right'></i>
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className='col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp'
              data-wow-delay='.7s'>
              <div className='service-itemsv02 h-100'>
                <div className='thumb w-100 ratio ratio-1x1'>
                  <Image
                    // src='/assets/img/service/service3.jpg'
                    src='/p&s3.jpg'
                    alt='img'
                    className='w-100 mimg h-100'
                    width={410}
                    height={291}
                  />
                </div>
                <div className='content'>
                  <div className='iocns-box d-center'>
                    <Image
                      src='/assets/img/icon/tree.svg'
                      alt='svg'
                      width={75}
                      height={75}
                      className='w-auto h-auto'
                    />
                  </div>
                  <Link href='/#' className='title'>
                    Modern Agronomy Consulting
                  </Link>
                  <p>
                    {/* Tailored strategies to implement impactful ESG, carbon
                    credit and CSR projects to enhance your social
                    responsibility with our expert guidance */}
                    Tailored strategies and enhanced guidance to implement
                    impactful ESG, carbon credit and CSR projects with us.
                  </p>
                  {/* <Link href='/#' className='arrows'>
                    Read More <i className='fa-solid fa-angle-right'></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
