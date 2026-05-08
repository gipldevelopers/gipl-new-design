import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import AboutPageSections from "@/components/about/AboutPageSections";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full  overflow-x-hidden">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[56px]  md:py-[26px]">
          <AboutPageSections />
        </div>
      </main>
      <FooterHome />
    </>
  );
}
