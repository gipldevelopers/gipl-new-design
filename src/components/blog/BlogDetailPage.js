import DetailLayout from "@/components/DetailLayout";

export default function BlogDetailPage({ post, relatedPosts }) {
  // Generate dynamic sections based on post content
  const sections = [
    {
      heading: post.title,
      paragraphs: post.content ? [post.content[0], post.content[1]].filter(Boolean) : []
    }
  ];

  // Add more sections if there's more content
  if (post.content && post.content.length > 2) {
    sections.push({
      heading: "Key Insights",
      paragraphs: post.content.slice(2)
    });
  }

  // Add a final image/text section for visual interest if detail image exists
  if (post.detailImage || post.image) {
    sections.push({
      type: "imageText",
      heading: "Strategy & Execution",
      image: post.detailImage || post.image,
      imageAlt: post.title,
      paragraphs: [
        "Our approach to digital product engineering focuses on long-term scalability and user-centric design. This implementation demonstrates our commitment to delivering high-performance solutions that align with modern business needs.",
        "From the initial architecture to the final deployment, every decision is made with the user's experience and the business's goals in mind."
      ]
    });
  }

  return (
    <DetailLayout
      title={post.title}
      heroDescription={post.summary || post.excerpt}
      heroImage={post.detailImage || post.image}
      heroImageAlt={post.title}
      relatedItems={relatedPosts}
      relatedPathPrefix="/blog"
      tech={post.tech}
      sections={sections}
    />
  );
}
