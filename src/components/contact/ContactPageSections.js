import { Suspense } from "react";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function ContactPageSections() {
  return (
    <>
      <ContactHeroSection />
      <Suspense fallback={<div className="h-[600px]" />}>
        <ContactFormSection />
      </Suspense>
    </>
  );
}
