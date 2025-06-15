import { useState } from 'react';
import { Linkedin, MapPin, Send, Github, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Linkedin, text: "linkedin.com/in/aashishsec", href: "https://www.linkedin.com/in/aashishsec", target: "_blank" },
  { icon: Github, text: "github.com/aashishsec", href: "https://github.com/aashishsec", target: "_blank" },
  { icon: FileText, text: "aashishsec.medium.com", href: "https://aashishsec.medium.com/", target: "_blank" },
  { icon: MapPin, text: "Hyderabad, Telangana, India" },
];

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a dummy handler. In a real app, you would integrate an email service.
    console.log({ name, email, message });
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h3>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out using the form below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div className="md:w-1/2 order-2 md:order-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-background/50"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full group">
              Send Message <Send className="ml-2 h-4 w-4 group-hover:animate-glitch" />
            </Button>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start order-1 md:order-2">
           <div className="flex flex-col items-start justify-center gap-6">
            {contactInfo.map(({ icon: Icon, text, href, target }) => (
              <a key={text} href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary transition-colors group">
                <Icon className="h-8 w-8 text-primary group-hover:animate-glitch" />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
