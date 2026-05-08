import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
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
      <FooterHome />
    </>
  );
}