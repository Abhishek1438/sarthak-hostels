import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/hero/AboutSection";
import FeaturesSection from "@/components/hero/FeaturesSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import RoomsSection from "@/components/rooms/RoomsSection";
import AmenitiesSection from "@/components/amenities/AmenitiesSection";
import HostelLifeSection from "@/components/common/HostelLifeSection";
import FoodSection from "@/components/common/FoodSection";
import NearbySection from "@/components/contact/NearbySection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import CTASection from "@/components/common/CTASection";
import LocationSection from "@/components/contact/LocationSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GalleryGrid />
        <RoomsSection />
        <AmenitiesSection />
        <HostelLifeSection />
        <FoodSection />
        <NearbySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
