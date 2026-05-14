"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Web Development", slug: "web-development" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "DevOps", slug: "devops" },
  { label: "Cloud Solutions", slug: "cloud-solutions" },
  { label: "Platforms", slug: "platforms" },
  { label: "Database", slug: "database" },
  { label: "Big Data", slug: "big-data" },
  { label: "Machine Learning", slug: "machine-learning" },
];

const tabContent = {
  "web-development": {
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance websites and web applications using the latest frameworks and technologies.",
    keyFeatures: [
      "Responsive Design",
      "Performance Optimization",
      "SEO-Friendly",
      "Security-First Approach",
    ],
    technologies: ["React", "Node.js", "Next.js", "Python", "AWS"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Requirements Analysis" },
      { number: "2", title: "Phase 2", description: "Design & Prototyping" },
      { number: "3", title: "Phase 3", description: "Development & Testing" },
      { number: "4", title: "Phase 4", description: "Deployment & Maintenance" },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Crafting intuitive and feature-rich mobile applications for iOS and Android platforms to deliver seamless user experiences.",
    keyFeatures: [
      "Cross-Platform Apps",
      "Native Development",
      "Custom UI/UX",
      "Scalable Architecture",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Market Research" },
      { number: "2", title: "Phase 2", description: "UX/UI Design" },
      { number: "3", title: "Phase 3", description: "Development & Testing" },
      { number: "4", title: "Phase 4", description: "App Store Deployment" },
    ],
  },
  devops: {
    title: "DevOps",
    description:
      "Streamlining software delivery processes by integrating development and operations to ensure faster, more reliable releases.",
    keyFeatures: [
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Cloud Integration",
      "Monitoring & Logging",
    ],
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Workflow Assessment" },
      { number: "2", title: "Phase 2", description: "Tooling Selection" },
      { number: "3", title: "Phase 3", description: "Pipeline Implementation" },
      { number: "4", title: "Phase 4", description: "Ongoing Optimization" },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Migrating and managing business operations on the cloud for enhanced scalability, security, and cost-efficiency.",
    keyFeatures: [
      "Cloud Migration",
      "IaaS",
      "PaaS",
      "Cloud Security",
    ],
    technologies: ["AWS", "Google Cloud Platform (GCP)", "Microsoft Azure", "Docker", "Heroku"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Assessment" },
      { number: "2", title: "Phase 2", description: "Architecture Design" },
      { number: "3", title: "Phase 3", description: "Migration & Implementation" },
      { number: "4", title: "Phase 4", description: "Monitoring & Support" },
    ],
  },
  platforms: {
    title: "Platforms",
    description:
      "Designing and developing robust digital platforms that serve as a foundation for marketplaces, e-commerce, and other scalable solutions.",
    keyFeatures: [
      "Custom Platform",
      "Multi-Vendor",
      "E-commerce Solutions",
      "API Integration",
    ],
    technologies: ["WordPress", "Shopify", "Magento", "Ruby on Rails", "Django"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Concept & Strategy" },
      { number: "2", title: "Phase 2", description: "Architectural Design" },
      { number: "3", title: "Phase 3", description: "Platform Development" },
      { number: "4", title: "Phase 4", description: "Launch & Evolution" },
    ],
  },
  database: {
    title: "Database",
    description:
      "Implementing and managing high-performance database systems to ensure data integrity, security, and efficient retrieval for all applications.",
    keyFeatures: [
      "Database Design",
      "Data Migration",
      "Performance Tuning",
      "Disaster Recovery",
    ],
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Microsoft SQL Server", "Redis"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Requirements Gathering" },
      { number: "2", title: "Phase 2", description: "Data Modeling" },
      { number: "3", title: "Phase 3", description: "Implementation" },
      { number: "4", title: "Phase 4", description: "Maintenance & Optimization" },
    ],
  },
  "big-data": {
    title: "Big Data",
    description:
      "Harnessing the power of large datasets to uncover insights and drive business decisions through advanced analytics and data processing.",
    keyFeatures: [
      "Data Warehousing",
      "Data Lake",
      "ETL Pipelines",
      "Real-Time Analytics",
    ],
    technologies: ["Hadoop", "Spark", "Kafka", "Hive", "Tableau"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Data Strategy" },
      { number: "2", title: "Phase 2", description: "Data Engineering" },
      { number: "3", title: "Phase 3", description: "Data Analysis" },
      { number: "4", title: "Phase 4", description: "Insight Delivery" },
    ],
  },
  "machine-learning": {
    title: "Machine Learning",
    description:
      "Developing intelligent systems that learn from data to automate tasks, predict outcomes, and enhance business processes.",
    keyFeatures: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Engines",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "R"],
    processSteps: [
      { number: "1", title: "Phase 1", description: "Problem Definition" },
      { number: "2", title: "Phase 2", description: "Data Preparation" },
      { number: "3", title: "Phase 3", description: "Model Development" },
      { number: "4", title: "Phase 4", description: "Deployment & Monitoring" },
    ],
  },
};

const processSteps = [
  {
    number: "1",
    title: "Phase 1",
    description: "Requirements Analysis",
  },
  {
    number: "2",
    title: "Phase 2",
    description: "Design & Prototyping",
  },
  {
    number: "3",
    title: "Phase 3",
    description: "Development & Testing",
  },
  {
    number: "4",
    title: "Phase 4",
    description: "Deployment & Maintenance",
  },
];

export default function TechnologyCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState("web-development");
  const content = tabContent[activeTab] || tabContent["web-development"];
  return (
    <section className="w-full bg-[#F3F5F9] py-12 md:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">

        {/* Tab bar - Responsive & Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="rounded-[14px] bg-[#EAF3FF] p-[4px] flex justify-start md:justify-center w-full max-w-full md:max-w-fit mx-auto shadow-sm overflow-hidden"
        >
          <div className="flex flex-nowrap items-center gap-1 overflow-x-auto no-scrollbar px-2 md:px-0 w-full md:w-auto">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileTap={{ scale: 0.98 }}
                className={`flex h-[40px] md:h-[44px] items-center justify-center px-5 md:px-8 rounded-[10px] text-[13px] md:text-[14px] font-[600] leading-[1] tracking-[-0.01em] cursor-pointer transition-all duration-300 whitespace-nowrap ${activeTab === tab.slug
                  ? "bg-[#3D7BFF] text-white shadow-[0_4px_12px_rgba(61,123,255,0.2)]"
                  : "text-[#2F3E5A] hover:text-[#3D7BFF] hover:bg-white/40"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Section - Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="mt-10 md:mt-[48px] flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-16 lg:gap-12"
        >
          <motion.div
            className="flex-1 w-full max-w-full lg:max-w-[640px] text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl xs:text-3xl md:text-[40px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-[#1D3557]">
              {content.title}
            </h2>

            <p className="mt-4 md:mt-[16px] text-[15px] md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] tracking-[-0.01em] text-[#6B7280]">
              {content.description}
            </p>

            <div className="mt-8 md:mt-[32px]">
              <h3 className="text-base md:text-[16px] font-[700] leading-[1.2] text-[#1F2937]">
                Key Features
              </h3>
              <ul className="mt-4 md:mt-[14px] space-y-2 md:space-y-[10px] flex flex-col items-center md:items-start">
                {content.keyFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-2 text-[14px] md:text-[15px] font-[400] leading-[1.4] text-[#4B5563]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-[#3D7BFF] shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 md:mt-[32px]">
              <h3 className="text-base md:text-[16px] font-[700] leading-[1.2] text-[#1F2937]">
                Technologies We Use
              </h3>
              <div className="mt-4 md:mt-[14px] flex flex-wrap justify-center md:justify-start gap-2 md:gap-[10px]">
                {content.technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    className="rounded-[8px] bg-[#E3F1FF] px-3 md:px-[16px] py-2 md:py-[8px] text-xs md:text-[14px] font-[600] leading-[1] text-[#506072]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            className="w-full lg:w-[420px] shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl md:text-[24px] font-[700] leading-[1.2] text-[#1F2937] text-center lg:text-left">
              Our Process
            </h3>

            {/* Single White Box containing all steps */}
            <motion.div
              className="mt-6 md:mt-[32px] bg-white rounded-[12px] p-6 md:p-[32px] shadow-sm border border-[#E5E7EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <div className="relative flex flex-col gap-6 md:gap-[32px] pl-10 md:pl-[60px]">
                {(content.processSteps || processSteps).map((step, index, arr) => (
                  <motion.div
                    key={step.number}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {/* Vertical line connector */}
                    {index < arr.length - 1 && (
                      <div className="absolute left-[-24px] md:left-[-37px] top-[40px] md:top-[48px] h-[36px] md:h-[64px] w-[2px] bg-[#3D7BFF]" />
                    )}

                    {/* Circle number */}
                    <motion.div
                      className="absolute left-[-40px] md:left-[-60px] top-0 flex h-8 md:h-[48px] w-8 md:w-[48px] items-center justify-center rounded-full bg-[#4B64F0] text-sm md:text-[16px] font-[700] leading-[1] text-white z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="text-left">
                      <h4 className="text-base md:text-[18px] font-[700] leading-[1.2] text-[#1F2937]">
                        {step.title}
                      </h4>
                      <p className="mt-2 md:mt-[8px] text-[13px] md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-[#7B8794]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
