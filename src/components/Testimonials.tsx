import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Brand Director, PureGlow Beauty",
    image: testimonial1,
    quote:
      "The Right Solutions transformed our private label vision into reality. Their attention to formulation quality and packaging is unmatched. We've seen a 60% increase in repeat customers since switching to them.",
  },
  {
    name: "Arjun Patel",
    role: "CEO, FreshStart Naturals",
    image: testimonial2,
    quote:
      "From concept to shelf, the TRS team delivered beyond our expectations. Their R&D expertise helped us launch an organic baby care line that became our best-selling category within three months.",
  },
  {
    name: "Diana Okafor",
    role: "VP Operations, Luxe Essentials",
    image: testimonial3,
    quote:
      "Reliability and consistency are everything in our industry, and The Right Solutions delivers on both. Their scalable manufacturing capabilities have supported our 200% year-over-year growth seamlessly.",
  },
  {
    name: "James Calloway",
    role: "Founder, Everyday Wellness Co.",
    image: testimonial4,
    quote:
      "Working with TRS has been a game-changer for our brand. Their team is responsive, innovative, and genuinely invested in helping us succeed. I recommend them to anyone serious about private label.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by brands across North America for quality and reliability.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-8 md:p-10 text-center"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-primary/20"
                />
                <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-6">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
