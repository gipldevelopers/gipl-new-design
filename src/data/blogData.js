export const blogPosts = [
  {
    slug: "gvoice-hr-software",
    title: "GVoice HR Software",
    category: "PRODUCT ENGINEERING",
    date: "April 15, 2026",
    author: "GIPL Editorial Team",
    image: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    detailImage: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    summary:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management.",
    excerpt:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management. With a dashboard-driven design, it brings together employee data, attendance, and performance metrics in one place.",
    tech: ["React"],
    content: [
      "GVoice HR Software was built to bridge the gap between complex HR processes and daily operational efficiency. By centralizing employee data, payroll triggers, and performance tracking, it allows leadership to make informed decisions faster.",
      "The platform features a clean, intuitive dashboard that reduces training time for new users while providing deep drill-down capabilities for HR professionals. Automation is at the core, handling everything from attendance logs to compliance alerts.",
      "This implementation highlights GIPL's ability to turn complex business requirements into high-performance, user-friendly digital tools that scale with the organization.",
    ],
  },
  {
    slug: "aknani-daycare-management-system",
    title: "AkaNani [Daycare Management System]",
    category: "WEB DEVELOPMENT",
    date: "March 12, 2026",
    author: "GIPL Editorial Team",
    image: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    detailImage: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    summary:
      "Exploring how childcare management platforms streamline operations, parent communication, and day-to-day visibility for growing centers.",
    excerpt:
      "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
    content: [
      "AkaNani was designed to help daycare operators simplify their daily workflows while improving visibility across the entire organization. From admissions and attendance to billing and parent updates, the platform centralizes critical tasks in one place.",
      "The system supports smoother staff coordination, clearer communication with families, and more accurate operational reporting. By reducing manual effort, teams can spend more time focusing on care quality and child development.",
      "This project demonstrates how thoughtful product strategy and execution can transform a high-touch service business into a more efficient, scalable digital operation.",
    ],
  },
  {
    slug: "modern-web-systems-for-growing-teams",
    title: "Modern Web Systems for Growing Teams",
    category: "WEB DEVELOPMENT",
    date: "March 3, 2026",
    author: "GIPL Editorial Team",
    image: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    detailImage: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073 (1).png",
    summary:
      "What scalable product architecture looks like when speed, maintainability, and clarity all matter at once.",
    excerpt:
      "A closer look at building resilient digital products for businesses that need flexibility and speed.",
    content: [
      "As organizations grow, their internal tools and customer-facing products need stronger foundations. Modern web systems are no longer just about interface polish, they are about long-term adaptability.",
      "By focusing on maintainable architecture, role-based workflows, and modular UI systems, teams can ship faster without creating operational drag later.",
      "This article breaks down the decisions that matter most when businesses move from simple websites to structured digital platforms.",
    ],
  },
  {
    slug: "building-better-digital-experiences",
    title: "Building Better Digital Experiences",
    category: "WEB DEVELOPMENT",
    date: "February 18, 2026",
    author: "GIPL Editorial Team",
    image: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    detailImage: "/blog/blog-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    summary:
      "How product teams align UX, engineering, and business goals without sacrificing speed.",
    excerpt:
      "The strongest digital experiences come from aligning user needs with technical clarity.",
    content: [
      "Successful product delivery depends on more than shipping features. It requires alignment between business goals, user journeys, and engineering implementation.",
      "Teams that invest in clear process and design systems reduce rework, improve release quality, and create more confidence across stakeholders.",
      "This post highlights the operational and technical habits that help digital products feel intentional from the first interaction onward.",
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
