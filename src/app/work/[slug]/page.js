import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import WorkDetailPage from "@/components/work/WorkDetailPage";
import { getAllWorkItems, getWorkItemBySlug } from "@/data/workData";

export function generateStaticParams() {
  return getAllWorkItems().map((item) => ({
    slug: item.slug,
  }));
}

export default async function WorkSlugPage({ params }) {
  const { slug } = await params;
  const item = getWorkItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getAllWorkItems()
    .filter((work) => work.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <WorkDetailPage item={item} relatedItems={relatedItems} />
      <FooterHome />
    </>
  );
}
