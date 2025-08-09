import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Qualifications from '@/components/sections/Qualifications';
import Experience from '@/components/sections/Experience';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function PainterPortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Qualifications />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
