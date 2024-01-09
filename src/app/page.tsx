import Header from "@/components/Header";
import Hero from "@/components/About";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Welcome />
      <Hero />
      <div className="divider"></div>
      <Gallery />
      <div className="divider"></div>
      <Faq />
      <div className="divider"></div>
      <Pricing />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
