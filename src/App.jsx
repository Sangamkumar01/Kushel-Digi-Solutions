import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import WorkingProcess from "./components/WorkingProcess";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import ConsultationCTA from "./components/ConsultationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <WorkingProcess />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <ConsultationCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;