import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

const footerLinks = {
  Products: [
    { name: "Shampoos & Hair Care", href: "#" },
    { name: "Shower Gels & Body Wash", href: "#" },
    { name: "Lotions & Skin Care", href: "#" },
    { name: "Baby Products", href: "#" },
    { name: "Liquid Soaps", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Quality Assurance", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
  ],
  Resources: [
    { name: "Product Catalog", href: "#" },
    { name: "Technical Specs", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "News & Updates", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="The Right Solutions Corporation" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 mb-4 max-w-sm">
              A premium developer of private label health and beauty care products, 
              serving major retailers and distributors with quality solutions since 1995.
            </p>
            <div className="text-sm text-background/60 space-y-1 mb-4">
              <p>100 Delta Park Blvd, Brampton, ON L6T 5E7</p>
              <p>Phone: (289) 499-7832</p>
              <p>customerservice@therightsolutions.ca</p>
            </div>
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} The Right Solutions Corporation. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-background/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
          <p>Designed for excellence in the value market</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;