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
import StickyCTA from "@/components/StickyCTA";
import HeroNew from "@/components/Hero/HeroNew";
import OfferRibbon from "@/components/OfferRibbon";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
    <OfferRibbon />
      <Navbar />
      <HeroNew />
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
      <FloatingCall />
      <StickyCTA />
    </>
  );
}