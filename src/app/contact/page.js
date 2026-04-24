import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactPageSections from "@/components/contact/ContactPageSections";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F2F4F8]">
        <ContactPageSections />
      </main>
      <Footer />
    </>
  );
}
