import DetailLayout from "@/components/DetailLayout";

export default function BlogDetailPage({ post, relatedPosts }) {
  // Generate dynamic sections based on post content
  let sections = [];
  
  if (post.sections) {
    sections = post.sections;
  } else {
    sections = [
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
