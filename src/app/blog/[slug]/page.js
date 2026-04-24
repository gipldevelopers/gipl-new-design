import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BlogDetailPage from "@/components/blog/BlogDetailPage";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blogData";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <BlogDetailPage post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}
