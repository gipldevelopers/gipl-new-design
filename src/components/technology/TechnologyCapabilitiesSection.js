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
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Create powerful mobile applications for iOS and Android platforms using native and cross-platform technologies.",
    keyFeatures: [
      "Native Performance",
      "Cross-Platform Support",
      "User-Centric Design",
      "App Store Optimization",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  devops: {
    title: "DevOps",
    description:
      "Streamline your development and operations with modern DevOps practices and tools for continuous integration and deployment.",
    keyFeatures: [
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Monitoring & Logging",
      "Container Orchestration",
    ],
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Migrate to the cloud and unlock scalability, reliability, and cost efficiency with our comprehensive cloud services.",
    keyFeatures: [
      "Cloud Migration",
      "Infrastructure Management",
      "Cost Optimization",
      "Security & Compliance",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
  },
  platforms: {
    title: "Platforms",
    description:
      "Build scalable platform solutions that connect users, services, and data in powerful ways.",
    keyFeatures: [
      "Microservices Architecture",
      "API-First Design",
      "Scalability",
      "Multi-Tenancy Support",
    ],
    technologies: ["Node.js", "Python", "Java", "PostgreSQL", "Redis"],
  },
  database: {
    title: "Database",
    description:
      "Design and manage robust database solutions optimized for performance, reliability, and scalability.",
    keyFeatures: [
      "Data Optimization",
      "High Availability",
      "Backup & Recovery",
      "Query Performance",
    ],
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  "big-data": {
    title: "Big Data",
    description:
      "Process and analyze massive datasets to unlock valuable insights and drive data-driven decision making.",
    keyFeatures: [
      "Data Processing",
      "Real-time Analytics",
      "Data Visualization",
      "Predictive Analytics",
    ],
    technologies: ["Hadoop", "Spark", "Kafka", "Hive", "Tableau"],
  },
  "machine-learning": {
    title: "Machine Learning",
    description:
      "Leverage artificial intelligence and machine learning to build intelligent systems that learn and improve over time.",
    keyFeatures: [
      "Model Development",
      "Data Science",
      "Neural Networks",
      "Predictive Models",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
  },
};

const processSteps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "Understand business goals and define scope, MVP, UX flow to finalize vision.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Creating high-fidelity prototypes and interface designs.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Build scalable systems with continuous feedback loops.",
  },
  {
    number: "04",
    title: "Deployment & Maintenance",
    description:
      "Launch your app services with continuous monitoring.",
  },
];

export default function TechnologyCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState("web-development");
  const content = tabContent[activeTab] || tabContent["web-development"];
  return (
    <section className="w-full bg-[#F3F5F9] py-12 md:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">

        {/* Tab bar - Responsive scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="rounded-[12px] bg-[#E7F0FB] px-4 md:px-[16px] py-3 md:py-[12px] flex justify-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[8px]">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`flex h-8 md:h-[36px] items-center justify-center rounded-[8px] px-4 md:px-[16px] text-xs md:text-[14px] font-[500] leading-[1] tracking-[0px] cursor-pointer transition-colors ${activeTab === tab.slug
                    ? "bg-[#4B64F0] text-white"
                    : "text-[#4E6073] hover:bg-white/60"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="mt-10 md:mt-[40px] flex flex-col lg:flex-row items-start justify-between gap-12"
        >
          <motion.div
            className="flex-1 w-full max-w-[600px] text-center md:text-left mx-auto md:mx-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl xs:text-3xl md:text-[36px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-[#1D3557]">
              {content.title}
            </h2>

            <p className="mt-4 md:mt-[16px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] tracking-[-0.01em] text-[#6B7280]">
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
                    <span className="h-[6px] w-[6px] rounded-full bg-[#4B64F0] shrink-0" />
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
            className="w-full lg:w-[400px] shrink-0"
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
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {/* Vertical line connector */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-[-28px] md:left-[-44px] top-[40px] md:top-[48px] h-[36px] md:h-[64px] w-[2px] bg-[#4B64F0]" />
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
