import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AboutPageSections from "@/components/about/AboutPageSections";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#E9EAEE]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px] px-[34px] py-[26px]">
          <AboutPageSections />
        </div>
      </main>
      <Footer />
    </>
  );
}
