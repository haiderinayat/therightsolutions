import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, Truck } from "lucide-react";

const reasons = [
{
  icon: Shield,
  title: "Quality Assurance",
  description: "Every product meets stringent quality standards, designed to compete with leading national brands."
},
{
  icon: Zap,
  title: "Scalable Capacity",
  description: "Updated equipment and enhanced tank capacities handle large and increasing order quantities reliably."
},
{
  icon: HeartHandshake,
  title: "True Partnership",
  description: "We work closely with our customers, understanding your business needs and market positioning."
},
{
  icon: Truck,
  title: "Reliable Supply",
  description: "Consistent production capabilities ensure your products are always in stock when you need them."
}];


const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            The Right Choice for Your Brand
          </h2>
          <p className="text-lg text-muted-foreground">With proven 200% growth over three years, we have the expertise, capacity, and commitment to help your private label brand succeed in the value market.


          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) =>
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center">

              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyUs;