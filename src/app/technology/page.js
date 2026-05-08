import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import TechnologyPageSections from "@/components/technology/TechnologyPageSections";

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F3F5F9] overflow-x-hidden">
        <TechnologyPageSections />
      </main>
      <FooterHome />
    </>
  );
}
