"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { getAllBlogPosts } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";

const blogPosts = getAllBlogPosts();

const categories = [
  {
    slug: "all",
    label: "All",
    title: "Insights & Ideas",
    subtitle: "MEDIA",
    description: "Updated articles, how-tos and deep dives on design, development and product thinking.",
    heroImage: "/blog/5dfc17f4d68f5f701ec8dc7de6475f65df490a95.png"
  },
  {
    slug: "ai",
    label: "AI",
    title: "AI & Machine Learning",
    subtitle: "ARTIFICIAL INTELLIGENCE",
    description: "Explore the latest in AI technology, machine learning algorithms, and intelligent automation solutions.",
    heroImage: "/blog/91b824002c5b478d1fafc6a4a81d3e848e7a3342.png"
  },
  {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    title: "Mobile Development",
    subtitle: "MOBILE TECHNOLOGY",
    description: "Native and cross-platform mobile app development insights, best practices, and emerging trends.",
    heroImage: "/home/home_images/4904e6466549d651885efb22aae1321bd483d7aa.png"
  },
  {
    slug: "development",
    label: "Development",
    title: "Software Development",
    subtitle: "DEVELOPMENT",
    description: "Code quality, architecture patterns, development methodologies, and programming best practices.",
    heroImage: "/home/home_images/320cf59abdb4f8edcf05a8c93d2555d725913c79.png"
  }
];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const currentCategory = categories.find(cat => cat.slug === activeCategory) || categories[0];

  // Dynamic featured content based on selected category
  const getFeaturedContent = () => {
    switch (activeCategory) {
      case "ai":
        return {
          image: "/blog/91b824002c5b478d1fafc6a4a81d3e848e7a3342.png",
          title: "AI-Powered Business Solutions",
          excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",

        };
      case "mobile-app-development":
        return {
          image: "/home/home_images/4904e6466549d651885efb22aae1321bd483d7aa.png",
          title: "Next-Gen Mobile Applications",
          excerpt: "Building powerful mobile experiences with cutting-edge technologies and user-centric design approaches.",

        };
      case "development":
        return {
          image: "/home/home_images/320cf59abdb4f8edcf05a8c93d2555d725913c79.png",
          title: "Modern Development Practices",
          excerpt: "Exploring advanced development methodologies, clean code principles, and scalable architecture patterns.",
        };
      default:
        return {
          slug: "gvoice-hr-software",
          image: "/blog/5dfc17f4d68f5f701ec8dc7de6475f65df490a95.png",
          badge: "Custom Software",
          title: "GVoice HR Software",
          excerpt: "GVoice HR Software is a comprehensive solution designed to simplify HR operations and empower organizations with smarter workforce management. With a dashboard-driven design, it brings together employee data, attendance, and performance metrics in one place.",
          author: "",
          tech: ["React"]
        };
    }
  };

  const featuredContent = getFeaturedContent();

  return (
    <main className="w-full bg-[#F5F7FB] overflow-x-hidden">
      {/* Hero Section with Dynamic Content */}
      <section className="w-full bg-white pt-24 md:pt-[40px] pb-12 md:pb-[80px]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
            {/* Left Content */}
            <motion.div
              className="w-full max-w-[800px] text-left"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-[11px] md:text-[14px] font-[500] text-[#2F2C8F] uppercase tracking-[0.1em] mb-3 md:mb-[16px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {currentCategory.subtitle}
              </motion.p>
              <motion.h1
                className="text-[28px] xs:text-4xl md:text-[56px] font-[700] leading-tight md:leading-[1.1] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px] max-w-[800px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentCategory.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[900px] md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentCategory.description}
              </motion.p>
            </motion.div>

            {/* Category Tabs - Scrollable on mobile */}
            <motion.div
              className="flex w-full md:w-auto items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mx-auto md:mx-0">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.slug}
                    onClick={() => setActiveCategory(category.slug)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`whitespace-nowrap px-4 md:px-[20px] py-2 md:py-[10px] rounded-[8px] text-xs md:text-[14px] font-[500] transition-colors ${activeCategory === category.slug
                      ? "bg-[#4F6EF7] text-white"
                      : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                      }`}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 md:py-[64px]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
          {/* Featured post - Dynamic based on selected category */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            key={`featured-${activeCategory}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="relative min-h-[280px] md:min-h-[360px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src={featuredContent.image}
                alt={featuredContent.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
                loading="eager"
              />
            </motion.div>
            <motion.div
              className="px-6 md:px-[40px] py-8 md:py-[40px] flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex w-fit rounded-[999px] bg-[#EEF2FF] px-[14px] py-[6px] text-[12px] font-[600] leading-[1] text-[#4F6EF7]">
                {featuredContent.badge || "Editor's Pick"}
              </span>
              <motion.h2
                className="mt-4 md:mt-[20px] text-xl md:text-[28px] font-[600] leading-tight md:leading-[1.3] text-[#1F2937]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {featuredContent.title}
              </motion.h2>
              <motion.p
                className="mt-3 md:mt-[16px] text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.7] text-[#6B7280] font-manrope"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {featuredContent.excerpt}
              </motion.p>

              {/* Technology Used Section */}
              <div className="mt-6 md:mt-8">
                <p className="text-[10px] md:text-[11px] font-bold text-[#4F6EF7] uppercase tracking-[0.15em] mb-3">
                  TECHNOLOGY USED:
                </p>
                <div className="flex gap-3">
                  {featuredContent.tech?.map((t, i) => (
                    <div key={i} className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm" title={t}>
                      {t === "React" && (
                        <Image
                          src="/blog/vscode-icons_file-type-reactjs.svg"
                          alt="React logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 md:mt-[24px] flex items-center justify-between">
                <motion.p
                  className="text-[11px] md:text-[13px] font-[700] uppercase tracking-[1px] text-[#4F6EF7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {featuredContent.author}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link
                    href={`/blog/${featuredContent.slug}`}
                    className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-[600] text-[#4F6EF7] hover:underline"
                  >
                    Read More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="mt-10 md:mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {blogPosts.concat(blogPosts).slice(0, 6).map((post, index) => (
              <motion.div
                key={`${post.slug}-${index}`}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <Card
                  href={`/blog/${post.slug}`}
                  image={post.image}
                  imageAlt={post.title}
                  category={post.category}
                  title={post.title}
                  description={post.excerpt}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

