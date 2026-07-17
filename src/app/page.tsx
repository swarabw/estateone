import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Highlights from "@/components/Highlights";
import Configurations from "@/components/Configurations";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Builder from "@/components/Builder";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Highlights />
      <Configurations />
      <Amenities />
      <Gallery />
      <Builder />
      <Location />
      <FAQ />
      <CTA />
      <Footer />

      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}