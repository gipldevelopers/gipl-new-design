import Navbar from "@/components/common/Navbar";
import FooterHome from "@/components/common/FooterHome";
import BlogListingPage from "@/components/blog/BlogListingPage";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogListingPage />
      <FooterHome />
    </>
  );
}
