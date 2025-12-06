import { motion } from "framer-motion";
import { Users, Target, Cog, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Partner-Focused",
    description: "We maintain an extremely close relationship with our customer community, understanding your unique needs.",
  },
  {
    icon: Target,
    title: "Value Market Experts",
    description: "Specialized expertise in serving the private label and value market segment with premium quality products.",
  },
  {
    icon: Cog,
    title: "Operational Excellence",
    description: "Updated equipment and enhanced tank capacities ensure reliable operations for large order quantities.",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth",
    description: "Our 400% growth over three years demonstrates our commitment to partnership and quality.",
  },
];

const AboutSummary = () => {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Your Trusted Partner in Personal Care Manufacturing
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6">
              The Right Solutions is a premium developer of private label health and beauty 
              care products, offering complete product categories designed to compete 
              equivalently with the most popular national brands.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Throughout our history, our positioning has progressively strengthened and 
              evolved with changes in the marketplace. We specialize in serving major 
              retailers and distributors in the value market segment.
            </p>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold">400%</p>
                <p className="text-sm text-primary-foreground/70">Growth in 3 Years</p>
              </div>
              <div className="w-px h-16 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-4xl font-serif font-bold">50+</p>
                <p className="text-sm text-primary-foreground/70">Product Lines</p>
              </div>
              <div className="w-px h-16 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-4xl font-serif font-bold">100+</p>
                <p className="text-sm text-primary-foreground/70">Partners</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
              >
                <value.icon className="w-8 h-8 mb-4 text-primary-foreground" />
                <h3 className="font-serif font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-primary-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;