import { siteData } from "./siteData";

export const workItems = [
  {
    slug: "gvoice-hr-software",
    projectName: "GVoice HR Software",
    category: "CASE STUDY",
    client: "GVoice",
    image: siteData.work.projects.gvoice.main,
    detailImage: siteData.work.projects.gvoice.detail,
    description:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management.",
    excerpt:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management.",
    images: [
      siteData.work.projects.gvoice.detail,
      siteData.blogDetails.posts.webSystems.detail,
    ],
    content: [
      "GVoice HR Software was created to modernize core HR operations for organizations that need better visibility, stronger workflows, and more reliable day-to-day execution.",
      "The platform brings together employee records, attendance, performance, and administrative tools into one connected product experience, helping teams move faster with less manual coordination.",
      "From a delivery perspective, this project focused on clarity, system cohesion, and operational simplicity so clients could scale confidently with a dependable digital foundation.",
    ],
  },
  {
    slug: "aknani-daycare-management-system",
    projectName: "AkaNani [Daycare Management System]",
    category: "WEB DEVELOPMENT",
    client: "AkaNani",
    image: siteData.work.projects.aknani.main,
    detailImage: siteData.work.projects.aknani.detail,
    description:
      "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
    excerpt:
      "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
    images: [
      siteData.work.projects.aknani.detail,
      siteData.work.projects.gvoice.detail,
    ],
    content: [
      "AkaNani was built for childcare providers who need a cleaner, more connected system for operations, communication, and reporting.",
      "The product centralizes key functions and helps administrators reduce repetitive work while maintaining stronger visibility across staff and parents.",
      "Its delivery focused on usability, reliability, and operational flow, making the platform practical for busy care environments with real-world constraints.",
    ],
  },
];

export function getAllWorkItems() {
  return workItems;
}

export function getWorkItemBySlug(slug) {
  return workItems.find((item) => item.slug === slug);
}
