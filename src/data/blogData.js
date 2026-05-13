import { siteData } from "./siteData";

export const blogPosts = [
  {
    slug: "why-every-business-must-invest-in-mobile-app-development-services-in-2026",
    title: "Why Every Business Must Invest in Mobile App Development Services in 2026",
    category: "Mobile App Development",
    date: "April 15, 2026",
    author: "GIPL Editorial Team",
    image: siteData.blogDetails.posts.mobileApp2026.main,
    detailImage: siteData.blogDetails.posts.mobileApp2026.detail,
    summary: "Running a successful business in 2026 means doing far more than just maintaining a website. The digital landscape has fundamentally shifted and mobile is now at the centre of it.",
    excerpt: "The digital landscape has fundamentally shifted and mobile is now at the centre of it. Learn why mobile apps are essential for business growth in 2026.",
    content: [
      "Running a successful business in 2026 means doing far more than just maintaining a website. The digital landscape has fundamentally shifted and mobile is now at the centre of it.",
      "Mobile applications offer a direct line to your customers, providing personalized experiences that websites simply cannot match. From push notifications to offline access, the advantages are clear.",
      "Investing in professional mobile app development services ensures your business stays competitive, accessible, and ready for the future of digital commerce."
    ],
  },
  {
    slug: "the-intelligence-revolution",
    title: "THE INTELLIGENCE REVOLUTION",
    category: "AI",
    date: "December 16, 2025",
    author: "GIPL Editorial Team",
    image: siteData.blogDetails.posts.aiRevolution.main,
    detailImage: siteData.blogDetails.posts.aiRevolution.detail,
    summary: "How generative AI is reshaping the IT service Industry.",
    excerpt: "Explore the impact of generative AI on IT services and how it's revolutionizing the way we build and manage technology.",
    content: [
      "Generative AI is not just a trend; it's a fundamental shift in how IT services are delivered. From automated coding to intelligent customer support, the revolution is here.",
      "Businesses that embrace AI-driven workflows are seeing significant improvements in efficiency, accuracy, and innovation speed.",
      "At Gohil Infotech, we are at the forefront of this revolution, integrating AI into our solutions to deliver smarter digital products for our clients."
    ],
  },
  {
    slug: "low-code-vs-full-code",
    title: "Low-Code vs. Full-Code",
    category: "DEVELOPMENT",
    date: "December 16, 2025",
    author: "GIPL Editorial Team",
    image: siteData.blogDetails.posts.lowCode.main,
    detailImage: siteData.blogDetails.posts.lowCode.detail,
    summary: "The 2025 Strategic Guide for Startups",
    excerpt: "Choosing between low-code and full-code development is a critical decision for startups. Here's a strategic guide to help you decide.",
    content: [
      "For startups, speed to market is often the highest priority. Low-code platforms offer rapid prototyping and deployment, but full-code provides the ultimate flexibility and scalability.",
      "Understanding your long-term goals is key to making the right choice. Are you building a simple MVP or a complex, highly specialized platform?",
      "We weigh the pros and cons of both approaches to help you build a foundation that supports your business growth."
    ],
  },
  {
    slug: "why-your-retail-store-needs-a-mobile-app",
    title: "Why Your Retail Store Needs a Mobile App",
    category: "APPLICATION",
    date: "December 16, 2025",
    author: "GIPL Editorial Team",
    image: siteData.blogDetails.posts.retailApp.main,
    detailImage: siteData.blogDetails.posts.retailApp.detail,
    summary: "And How to Make Customers Love It",
    excerpt: "Mobile apps are transforming the retail experience. Discover why your store needs one and how to design it for customer success.",
    content: [
      "The modern retail customer expects convenience and personalization. A mobile app bridges the gap between online and offline shopping, creating a seamless journey.",
      "Features like loyalty programs, easy checkout, and personalized recommendations keep customers engaged and coming back.",
      "We explore the essential elements of a successful retail app and how it can drive growth for your business."
    ],
  },
  {
    slug: "childhood-hustles-digital-futures",
    title: "From Childhood Hustles to Building Scalable Digital Futures",
    category: "MEDIA / FEATURED",
    date: "February 2026",
    author: "GIPL Editorial Team",
    image: siteData.blogDetails.posts.businessConnect.main,
    detailImage: siteData.blogDetails.posts.businessConnect.detail,
    summary: "Darshan R Gohil, CEO & Founder of Gohil Infotech, featured as the Cover Story in Business Connect Magazine's February Special Edition 2026.",
    excerpt: "A deep dive into the journey of Darshan R Gohil and the vision behind Gohil Infotech's success in the IT industry.",
    content: [
      "Darshan R Gohil's journey from early childhood hustles to founding a leading IT solutions company is a story of grit, vision, and relentless innovation.",
      "Featured on the cover of Business Connect Magazine, the story highlights the principles of quality and transparency that define Gohil Infotech.",
      "The vision for the future is clear: building scalable digital solutions that empower businesses worldwide."
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
