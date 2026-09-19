import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesGrid from "@/components/ServicesGrid";
import ImplantSpotlight from "@/components/ImplantSpotlight";
import CostCalculator from "@/components/CostCalculator";
import SmileGallery from "@/components/SmileGallery";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import LocationHours from "@/components/LocationHours";
import BookingForm from "@/components/BookingForm";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TopBar />
        <Header />
      </div>

      {/* Main Content */}
      <main className="w-full pt-28 pb-20 md:pb-0 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* 1. Luxury Hero Experience */}
          <HeroSection />

          {/* 2. Doctor Profile & Clinical Guarantees */}
          <DoctorProfile />

          {/* 3. Dental Services Showcase */}
          <ServicesGrid />

          {/* 4. Featured Spotlight: Dental Implants */}
          <ImplantSpotlight />

          {/* 5. Treatment Cost Calculator */}
          <CostCalculator />

          {/* 6. Smile Transformation Slider */}
          <SmileGallery />

          {/* 7. Why Us & Comparison Matrix */}
          <WhyUs />

          {/* 8. Patient Reviews */}
          <Reviews />

          {/* 9. Hours & Location */}
          <LocationHours />

          {/* 10. Booking Form */}
          <BookingForm />
        </div>
      </main>

      {/* Mobile Bottom Bar */}
      <MobileBottomBar />

      {/* Footer */}
      <Footer />
    </>
  );
}
