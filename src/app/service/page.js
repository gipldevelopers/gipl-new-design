import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import ServicePageSections from "@/components/service/ServicePageSections";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#ECEEF2] overflow-x-hidden">
        <ServicePageSections />
      </main>
      <FooterHome />
    </>
  );
}
