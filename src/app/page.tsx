// import HomeOne from '@/components/homes/home';
// import HomeTwo from '@/components/homes/home-2';
import HomeTwo from '@/components/homepage';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finnoaq - Climate-smart sustainable farming',
  description:
    'Introducing Finnoaq - Achieve sustainable biofarming success with our innovative phygital farmtech solutions designed for resilience and efficiency. Book a free call to discover how',
  keywords: [
    'Smart biofarm technology',
    'Sustainable farming solutions',
    'Climate-smart farming',
    'Full-stack phygital farmtech solutions',
    'Data-driven farming',
    'How to start a sustainable farming',
  ],
};

export default function index() {
  return (
    <Wrapper>
      {/* <HomeOne /> */}
      <HomeTwo />
    </Wrapper>
  );
}
