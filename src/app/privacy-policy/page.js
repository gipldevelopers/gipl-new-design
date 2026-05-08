import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | GIPL Website",
  description: "Privacy Policy for Gohil Infotech - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F5F7FB]">
        <PrivacyPolicyContent />
      </main>
      <FooterHome />
    </>
  );
}