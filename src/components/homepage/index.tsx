//////////////// unnessecary sections start
// import CounterHomeOne from '../home/CounterHomeOne';
// import BlogHomeTwo from './BlogHomeTwo';
import FeatureHomeTwo from './FeatureHomeTwo';
import ProjectHomeTwo from './ProjectHomeTwo';
// import TeamHomeTwo from './TeamHomeTwo';
import WorkProcessHomeTwo from './WorkProcessHomeTwo';
//////////////// unnessecary sections end

import FooterOne from '@/layouts/footers/FooterOne';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
// import Link from 'next/link';
import AboutHomeTwo from './AboutHomeTwo';
import AboutUs from './AboutUs';
import ContactHomeTwo from './ContactHomeTwo';
import Faqs from './Faqs';
import HeroHomeTwo from './HeroHomeTwo';
import ServiceHomeTwo from './ServiceHomeTwo';
import SubscribeHomeTwo from './SubscribeHomeTwo';
// import TestimonialHomeTwo from './TestimonialHomeTwo';
// import SubscribeModal from '../common/SubscribeModal';
// import dynamic from 'next/dynamic';
import CounterHomeOne from './CounterHomeOne';
import TrustedPartners from './TrustedPartners';
// import FaqHomeThree from '../home-3/FaqHomeThree';
// import BrandHomeOne from '../home/BrandHomeOne';
// import AboutHomeTwo from './AboutHomeTwo';
// import ContactHomeTwo from './ContactHomeTwo';
// import HeroHomeTwo from './HeroHomeTwo';
// import ServiceHomeTwo from './ServiceHomeTwo';
// import SubscribeHomeTwo from './SubscribeHomeTwo';
// import TestimonialHomeTwo from './TestimonialHomeTwo';

// const SubscribeModal = dynamic(
//   () => import('@/components/common/SubscribeModal'),
//   { ssr: false }
// );

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeTwo />
      <AboutUs />
      <AboutHomeTwo />
      <ServiceHomeTwo />
      <WorkProcessHomeTwo />

      {/* <HowItWorks /> */}

      {/* nessecary part */}
      {/* <TestimonialHomeTwo /> */}
      <ProjectHomeTwo />

      {/* nessecary part */}
      <TrustedPartners style_2={true} />
      <CounterHomeOne style_2={true} />
      <FeatureHomeTwo />

      {/* nessecary part */}
      <ContactHomeTwo />

      {/* nessecary part */}
      <Faqs />

      {/* nessecary part */}
      <SubscribeHomeTwo />
      <FooterOne />

      {/* <SubscribeModal /> */}

      {/* unnessecary sections */}
      {/* <TeamHomeTwo /> */}
      {/* <BlogHomeTwo /> */}
    </>
  );
}

// type Props = {
//   style_2?: boolean;
// };

// function HowItWorks({ style_2 }: Props) {
//   return (
//     <>
//       {/* service-section white-bg */}
//       <section
//         className={`service-section white-bg ${style_2 ? '' : 'space-top'}`}>
//         <div className='container'>
//           <div className='row justify-content-center'>
//             <div className='col-xxl-6 col-xl-7 col-md-8 col-sm-11'>
//               <div className='section-title mb-60 text-center'>
//                 <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
//                   How It Works
//                 </h5>
//                 <h2 className='wow fadeInDown' data-wow-delay='.3s'>
//                   Your Path to Success with Finno AQ
//                 </h2>
//                 <p className={'text-black mt-2'}>
//                   We start by understanding your farm’s unique needs and goals
//                   and design a tailored plan based on your assessment. Post
//                   discussion of the plan our experts work with you to bring the
//                   plan to life on your farm and also empower you with all the
//                   modern farming skills needed to succeed.
//                 </p>
//                 <p className={'text-black mt-2'}>
//                   Our partnership doesn’t end after setup – we’re here for the
//                   long run and will continuously help you analyze outcomes and
//                   explore growth opportunities.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className='row g-xl-4 g-3 justify-content-center'>
//             <div
//               className='col-lg-4 col-md-6 col-sm-6 wow fadeInUp w-100 h-100'
//               data-wow-delay='.3s'>
//               <div className='service-itemsv1'>
//                 {/* <img
//                   src='assets/img/icon/count1.svg'
//                   alt='svg'
//                   className='icons'
//                 /> */}
//                 <div className={'text-black'}>
//                   <i className='fa-solid fa-arrow-right fs-3'></i>
//                 </div>
//                 <div className='content'>
//                   <Link href='#' className='title'>
//                     Step 1
//                   </Link>
//                   <p>
//                     Fill up the google form so we can assess your unique needs
//                     and goals
//                   </p>
//                   {/* <Link href='/service-details' className='arrows'>
//                     Read More <i className='fa-solid fa-arrow-right'></i>
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//             <div
//               className='col-lg-4 col-md-6 col-sm-6 wow fadeInUp w-100 h-100'
//               data-wow-delay='.5s'>
//               <div className='service-itemsv1'>
//                 {/* <img
//                   src='assets/img/icon/wheat-sesh.svg'
//                   alt='svg'
//                   className='icons'
//                 /> */}
//                 <div className={'text-black'}>
//                   <i className='fa-solid fa-arrow-right fs-3'></i>
//                 </div>
//                 <div className='content'>
//                   <Link href='/service-details' className='title'>
//                     Step 2
//                   </Link>
//                   <p>
//                     Customized Solution Design is developed by our expertise
//                     according to your unique requirements and shared over
//                     mail/whatsapp
//                   </p>
//                   {/* <Link href='/service-details' className='arrows'>
//                     Read More <i className='fa-solid fa-arrow-right'></i>
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//             <div
//               className='col-lg-4 col-md-6 col-sm-6 wow fadeInUp w-100 h-100'
//               data-wow-delay='.7s'>
//               <div className='service-itemsv1'>
//                 {/* <img
//                   src='assets/img/icon/smart-flower.svg'
//                   alt='svg'
//                   className='icons'
//                 /> */}
//                 <div className={'text-black'}>
//                   <i className='fa-solid fa-arrow-right fs-3'></i>
//                 </div>
//                 <div className='content'>
//                   <Link href='/service-details' className='title'>
//                     Step 3
//                   </Link>
//                   <p>
//                     Plan Bio-farming Installation, Setup & Training to optimise
//                     your farm for maximum productivity and sustainability
//                   </p>
//                   {/* <Link href='/service-details' className='arrows'>
//                     Read More <i className='fa-solid fa-arrow-right'></i>
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//             <div
//               className='col-lg-4 col-md-6 col-sm-6 wow fadeInUp w-100 h-100'
//               data-wow-delay='.7s'>
//               <div className='service-itemsv1'>
//                 {/* <img
//                   src='assets/img/icon/smart-flower.svg'
//                   alt='svg'
//                   className='icons'
//                 /> */}
//                 <div className={'text-black'}>
//                   <i className='fa-solid fa-arrow-right fs-3'></i>
//                 </div>
//                 <div className='content'>
//                   <Link href='/service-details' className='title'>
//                     Step 4
//                   </Link>
//                   <p>
//                     Enjoy Continuous Support & Optimization via our AI powered
//                     FaaS Platform to keep your farm resilient and thriving.
//                   </p>
//                   {/* <Link href='/service-details' className='arrows'>
//                     Read More <i className='fa-solid fa-arrow-right'></i>
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//             <div
//               className='col-lg-4 col-md-6 col-sm-6 wow fadeInUp w-100 h-100'
//               data-wow-delay='.7s'>
//               <div className='service-itemsv1'>
//                 {/* <img
//                   src='assets/img/icon/smart-flower.svg'
//                   alt='svg'
//                   className='icons'
//                 /> */}
//                 <div className={'text-black'}>
//                   <i className='fa-solid fa-arrow-right fs-3'></i>
//                 </div>
//                 <div className='content'>
//                   <Link href='/service-details' className='title'>
//                     Step 5
//                   </Link>
//                   <p>
//                     We review outcomes annually and help you explore growth
//                     expansion opportunities for your long-term farming success.
//                   </p>
//                   {/* <Link href='/service-details' className='arrows'>
//                     Read More <i className='fa-solid fa-arrow-right'></i>
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className={
//               'space-bottom space-top d-flex align-items-center justify-content-center'
//             }>
//             <Link
//               href='https://forms.gle/JNjoKb5ejRL25qjc9'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='cmn-btn primary-border'>
//               Start Your Biofarming Journey Today
//               <i className='fa-solid fa-arrow-right p1-clr'></i>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
