
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Linkedin, MapPin, Send, Github, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const contactInfo = [
  { icon: Linkedin, text: "linkedin.com/in/aashishsec", href: "https://www.linkedin.com/in/aashishsec", target: "_blank" },
  { icon: Github, text: "github.com/aashishsec", href: "https://github.com/aashishsec", target: "_blank" },
  { icon: FileText, text: "aashishsec.medium.com", href: "https://aashishsec.medium.com/", target: "_blank" },
  { icon: MapPin, text: "Hyderabad, Telangana, India" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // IMPORTANT: Replace "YOUR_FORM_ID" with your actual Formspree form ID.
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Your Email" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Your Message" {...field} className="bg-background/50" rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-4 w-4 group-hover:animate-glitch" />
              </Button>
            </form>
          </Form>
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
