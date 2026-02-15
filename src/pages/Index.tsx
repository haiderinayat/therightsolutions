import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";
import Services from "@/components/Services";
import AboutSummary from "@/components/AboutSummary";
import WhyUs from "@/components/WhyUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Right Solutions | Private Label Personal Care Manufacturing</title>
        <meta 
          name="description" 
          content="Premium private label manufacturer of personal care products. Shampoos, lotions, baby products & more. 400% growth, trusted by major retailers." 
        />
        <meta name="keywords" content="private label manufacturing, personal care products, shampoo manufacturer, lotion manufacturer, baby products, wholesale cosmetics" />
        <link rel="canonical" href="https://therightsolutions.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ProductsOverview />
          <Services />
          <AboutSummary />
          <WhyUs />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;