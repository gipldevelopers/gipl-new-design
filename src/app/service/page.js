import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ServicePageSections from "@/components/service/ServicePageSections";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#ECEEF2]">
        <ServicePageSections />
      </main>
      <Footer />
    </>
  );
}
