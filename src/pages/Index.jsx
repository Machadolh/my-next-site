import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { CVDownload } from '@/components/CVDownload';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <CVDownload />
      <Footer />
    </div>
  );
};

export default Index;
