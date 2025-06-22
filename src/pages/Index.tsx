
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
// import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    console.log('Index page loaded');
    console.log('Current hash:', window.location.hash);
    
    // Handle hash-based navigation on load
    const hash = window.location.hash;
    if (hash && hash !== '#/' && hash !== '#') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          console.log('Auto-scrolled to:', hash);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <AnimatedSection>
          <div id="about">
            <About />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="skills">
            <Skills />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="projects">
            <Projects />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="experience">
            <Experience />
          </div>
        </AnimatedSection>
        {/* <AnimatedSection>
          <div id="testimonials">
            <Testimonials />
          </div>
        </AnimatedSection> */}
        <AnimatedSection>
          <div id="contact">
            <Contact />
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
