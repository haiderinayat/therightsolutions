import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchImg from "@/assets/research.jpg";

const services = [
  {
    title: "Private Label Manufacturing",
    description: "Our private label program is designed to give you the competitive edge you seek. Promote your own exclusive brand, drive professional product sales, and build lasting customer loyalty.",
    image: manufacturingImg,
    features: [
      "Custom formulation development",
      "Flexible order quantities",
      "Brand-exclusive packaging",
      "Competitive pricing for value market",
    ],
  },
  {
    title: "Research & Development",
    description: "Our dedicated R&D team works closely with you to develop formulations that match or exceed national brand quality, tailored to your specific market requirements.",
    image: researchImg,
    features: [
      "National brand-equivalent products",
      "Trend-responsive formulations",
      "Quality assurance testing",
      "Regulatory compliance support",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Private Label Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage unique expertise and experience in developing national brand-equivalent 
            products that help your business grow.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="default" size="lg">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;