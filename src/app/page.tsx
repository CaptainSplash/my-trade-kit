import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load components below the fold for faster initial page load
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: true });
const HowItWorks = dynamic(() => import('../components/HowItWorks'), { ssr: true });
const GetStarted = dynamic(() => import('../components/GetStarted'), { ssr: true });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: true });
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'), { ssr: false });

const Page = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '0px', marginTop: '0px' }}>
        <Hero />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <GetStarted />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Page;