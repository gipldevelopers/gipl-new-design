import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ServiceDetailPageSections from "@/components/service-detail/ServiceDetailPageSections";
import {
  getAllServiceDetails,
  getServiceDetailBySlug,
} from "@/data/serviceDetailData";

export function generateStaticParams() {
  return getAllServiceDetails().map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="w-full bg-[#EEF1F6]">
        <ServiceDetailPageSections service={service} />
      </main>
      <Footer />
    </>
  );
}
