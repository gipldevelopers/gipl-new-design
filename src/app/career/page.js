import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import CareerPageSections from "@/components/career/CareerPageSections";

export const metadata = {
  title: "Career | GIPL Website",
  description: "Join Gohil Infotech and help shape your future.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F5F7FB] overflow-x-hidden">
        <CareerPageSections />
      </main>
      <FooterHome />
    </>
  );
}
