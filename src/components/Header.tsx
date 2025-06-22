
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  // { name: 'Testimonials', href: '#testimonials' }, // Commented out as requested
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update URL hash without triggering navigation
    window.history.replaceState(null, '', href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-primary font-bold text-lg hover:animate-glitch"
        >
          AASHISH BANDE<span className="animate-caret">_</span>
        </a>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
