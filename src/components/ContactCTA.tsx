import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let us help you build your private label personal care brand. 
                Contact our team today to discuss your product requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get a Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="heroOutline" size="xl">
                  View Our Catalog
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">Email Us</p>
                  <a href="mailto:customerservice@therightsolutions.ca" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    customerservice@therightsolutions.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">Call Us</p>
                  <a href="tel:+12894997832" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    (289) 499-7832
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground mb-1">Visit Us</p>
                  <p className="text-primary-foreground/80">
                    100 Delta Park Blvd<br />
                    Brampton, ON L6T 5E7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;