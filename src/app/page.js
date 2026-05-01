import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import TrustedLeaders from "@/components/home/TrustedLeaders";
import PartnerSection from "@/components/home/PartnerSection";

import ServiceGrid from "@/components/home/ServiceGrid";
import EngineeringSolutions from "@/components/home/EngineeringSolutions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Technologies from "@/components/home/Technologies";
import CaseStudies from "@/components/home/CaseStudies";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page flex w-full flex-col items-center overflow-x-hidden">
        <Hero />
        <TrustedLeaders />
        <PartnerSection />

        <ServiceGrid />
        <EngineeringSolutions />
        <WhyChooseUs />
        <Technologies />
        <CaseStudies />
        <Industries />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
