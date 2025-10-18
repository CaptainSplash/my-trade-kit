import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import GetStarted from '../components/GetStarted';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Gallery from '../components/Gallery';

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