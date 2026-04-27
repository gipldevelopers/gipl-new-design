import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import TechnologyPageSections from "@/components/technology/TechnologyPageSections";

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F3F5F9] overflow-x-hidden">
        <TechnologyPageSections />
      </main>
      <Footer />
    </>
  );
}
