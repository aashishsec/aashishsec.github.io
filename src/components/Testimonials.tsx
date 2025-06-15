
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Aashish’s pentest report was the clearest and most actionable I’ve ever seen. His findings were crucial for our security roadmap.",
    author: "Jane Doe",
    title: "CTO at Pragma Edge",
  },
  {
    quote: "The OSINT automation tool Aashish built is a game-changer. It saved our team countless hours and improved the quality of our intel significantly.",
    author: "John Smith",
    title: "Lead Security Engineer",
  },
  {
    quote: "His dedication and ability to quickly grasp complex systems is impressive. Aashish is a valuable asset to any security team.",
    author: "Emily White",
    title: "Cybersecurity Mentor",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3 className="text-3xl font-bold text-center mb-12 text-primary">Testimonials</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1 h-full">
                <div className="bg-muted/20 p-6 rounded-lg h-full flex flex-col border border-primary/10">
                  <blockquote className="text-muted-foreground italic text-lg mb-6 flex-grow">
                    “{testimonial.quote}”
                  </blockquote>
                  <footer className="text-foreground font-bold">
                    – {testimonial.author}
                    <span className="block text-sm text-primary font-normal">{testimonial.title}</span>
                  </footer>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
