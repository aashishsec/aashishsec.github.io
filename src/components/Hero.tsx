
import { useTypewriter } from '@/hooks/useTypewriter';
import { Download, Linkedin } from 'lucide-react';

const Hero = () => {
  const title = useTypewriter("Hello, I’m Aashish Bande", 50);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-wider">
        {title}
        <span className="inline-block w-2 h-10 bg-primary animate-caret ml-1"></span>
      </h1>
      <h2 className="mt-4 text-xl sm:text-2xl text-foreground">
        Security Analyst | Tech Alchemist | Cybersecurity Explorer
      </h2>
      <p className="mt-6 text-lg text-muted-foreground italic">“Transforming Challenges into Solutions”</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="/Aashish_Bande_Resume.pdf" download="Aashish_Bande_Resume.pdf" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-primary-foreground transition-all group">
          Download Resume <Download className="h-5 w-5 group-hover:animate-glitch" />
        </a>
        <a href="https://www.linkedin.com/in/aashishsec" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-muted-foreground text-muted-foreground font-bold rounded-md hover:border-primary hover:text-primary transition-all group">
          LinkedIn <Linkedin className="h-5 w-5 group-hover:animate-glitch" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
