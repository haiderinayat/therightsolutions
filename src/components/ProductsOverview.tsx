import { motion } from "framer-motion";
import { Droplets, Sparkles, Baby, Waves, FlaskConical, Heart } from "lucide-react";

const products = [
  {
    icon: Droplets,
    title: "Shampoos & Hair Care",
    description: "Premium formulations for all hair types, from daily cleansing to specialty treatments.",
  },
  {
    icon: Sparkles,
    title: "Hair Gels & Styling",
    description: "Professional-grade styling products with long-lasting hold and natural shine.",
  },
  {
    icon: Waves,
    title: "Shower Gels & Body Wash",
    description: "Luxurious cleansing experiences with moisturizing formulas and captivating fragrances.",
  },
  {
    icon: FlaskConical,
    title: "Foam Baths & Liquid Soaps",
    description: "Gentle, effective cleansing solutions for the whole family.",
  },
  {
    icon: Heart,
    title: "Lotions & Skin Care",
    description: "Nourishing moisturizers and treatments for healthy, radiant skin.",
  },
  {
    icon: Baby,
    title: "Baby Products",
    description: "Gentle, hypoallergenic formulations specially designed for delicate baby skin.",
  },
];

const ProductsOverview = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Complete Personal Care Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From shampoos to baby oils, we manufacture a comprehensive range of personal care 
            products designed to meet the highest quality standards while remaining competitively priced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;