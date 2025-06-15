
import { Linkedin, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Linkedin, text: "linkedin.com/in/aashishsec", href: "https://www.linkedin.com/in/aashishsec", target: "_blank" },
  { icon: MapPin, text: "Hyderabad, Telangana, India" },
];

const Contact = () => {
  return (
    <section id="contact" className="text-center">
      <h3 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h3>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        {contactInfo.map(({ icon: Icon, text, href, target }) => (
          <a key={text} href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary transition-colors group">
            <Icon className="h-6 w-6 text-primary group-hover:animate-glitch" />
            <span>{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
