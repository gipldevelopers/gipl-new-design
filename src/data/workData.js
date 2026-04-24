export const workItems = [
  {
    slug: "gvoice-hr-software",
    projectName: "GVoice HR Software",
    category: "CASE STUDY",
    client: "GVoice",
    image: "/our work/91b824002c5b478d1fafc6a4a81d3e848e7a3342.png",
    detailImage: "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
    description:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management.",
    excerpt:
      "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management.",
    images: [
      "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
      "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073 (1).png",
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
    image: "/our work/5dfc17f4d68f5f701ec8dc7de6475f65df490a95.png",
    detailImage: "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073 (1).png",
    description:
      "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
    excerpt:
      "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
    images: [
      "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073 (1).png",
      "/our work/ourwork-detail/cb1adf7635102eb66dffcef4f424a32cba202073.png",
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
