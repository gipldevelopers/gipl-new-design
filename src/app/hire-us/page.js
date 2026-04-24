import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/hire-us/HeroSection";
import StatsSection from "@/components/hire-us/StatsSection";
import BenefitsSection from "@/components/hire-us/BenefitsSection";
import ServicesSection from "@/components/hire-us/ServicesSection";
import WhyChooseUsSection from "@/components/hire-us/WhyChooseUsSection";
import ProcessSection from "@/components/hire-us/ProcessSection";
import CaseStudySection from "@/components/hire-us/CaseStudySection";
import TestimonialsSection from "@/components/hire-us/TestimonialsSection";
import ContactSection from "@/components/hire-us/ContactSection";

export const metadata = {
  title: "Hire Us | Gohil Infotech Private Limited",
  description: "Hire world-class developers and designers at GIPL. Transform your business with our expert team of developers, designers, and digital strategists.",
};

export default function HireUsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <CaseStudySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}