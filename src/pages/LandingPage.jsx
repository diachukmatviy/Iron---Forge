import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Transformation from "../components/Transformation";
import Pricing from "../components/Pricing";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div style={{ background: "#080808" }}>
      <Navbar />
      <Hero />
      <Benefits />
      <Transformation />
      <Pricing />
      <Trainers />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
