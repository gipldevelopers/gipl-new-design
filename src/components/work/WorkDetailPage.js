import DetailLayout from "@/components/DetailLayout";

export default function WorkDetailPage({ item, relatedItems }) {
  return (
    <DetailLayout
      title={item.projectName}
      heroDescription={item.description}
      heroImage={item.detailImage || item.images[0]}
      heroImageAlt={item.projectName}
      relatedItems={relatedItems}
      relatedPathPrefix="/work"
      tech={item.tech}
      liveLink={item.liveLink}
      sections={item.sections || []}
    />
  );
}
