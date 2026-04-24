import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CareerPageSections from "@/components/career/CareerPageSections";

export const metadata = {
  title: "Career | GIPL Website",
  description: "Join Gohil Infotech and help shape your future.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F5F7FB]">
        <CareerPageSections />
      </main>
      <Footer />
    </>
  );
}
