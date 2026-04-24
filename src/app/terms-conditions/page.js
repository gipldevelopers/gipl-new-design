import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import TermsConditionsContent from "@/components/legal/TermsConditionsContent";

export const metadata = {
  title: "Terms & Conditions | GIPL Website",
  description: "Terms & Conditions for Gohil Infotech - Learn about our terms of service and conditions of use.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F5F7FB]">
        <TermsConditionsContent />
      </main>
      <Footer />
    </>
  );
}