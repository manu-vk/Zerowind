import AboutSection from "./components/home/AboutSection";
import TechnologyCard from "./components/home/TechnologyCards";
import Hero from "./components/layout/Hero";
import NewsletterSection from "./components/home/NewsletterSection";
import ProductShowcase from "./components/home/ProductShowcase";




function App() {
  return (
    <>
     
      <Hero />
      <TechnologyCard/>
      <AboutSection />
       <ProductShowcase/>
       <NewsletterSection />
      
    </>
  );
}

export default App;