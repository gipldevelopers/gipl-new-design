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
    switch(activeCategory) {
      case "ai":
        return {
          image: "/blog/91b824002c5b478d1fafc6a4a81d3e848e7a3342.png",
          title: "AI-Powered Business Solutions",
          excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
          author: "GIPL AI TEAM"
        };
      case "mobile-app-development":
        return {
          image: "/home/home_images/4904e6466549d651885efb22aae1321bd483d7aa.png",
          title: "Next-Gen Mobile Applications",
          excerpt: "Building powerful mobile experiences with cutting-edge technologies and user-centric design approaches.",
          author: "GIPL MOBILE TEAM"
        };
      case "development":
        return {
          image: "/home/home_images/320cf59abdb4f8edcf05a8c93d2555d725913c79.png",
          title: "Modern Development Practices",
          excerpt: "Exploring advanced development methodologies, clean code principles, and scalable architecture patterns.",
          author: "GIPL DEV TEAM"
        };
      default:
        return {
          image: "/blog/5dfc17f4d68f5f701ec8dc7de6475f65df490a95.png",
          title: "AkaNani [Daycare Management System]",
          excerpt: "AkaNani is a childcare management system designed to make daycare administration easier, smarter, and more reliable.",
          author: "GIPL EDITORIAL TEAM"
        };
    }
  };

  const featuredContent = getFeaturedContent();

  return (
    <main className="w-full bg-[#F5F7FB] overflow-x-hidden">
      {/* Hero Section with Dynamic Content */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-[34px] py-[60px]">
          <div className="flex items-end justify-between">
            {/* Left Content */}
            <motion.div 
              className="max-w-[600px]"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-[12px] font-[700] uppercase tracking-[2px] text-[#4F6EF7]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {currentCategory.subtitle}
              </motion.p>
              <motion.h1 
                className="mt-[16px] text-[48px] font-[700] leading-[1.12] tracking-[-0.03em] text-[#1F2937]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentCategory.title}
              </motion.h1>
              <motion.p 
                className="mt-[20px] text-[18px] font-[400] leading-[1.7] text-[#6B7280]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentCategory.description}
              </motion.p>
            </motion.div>

            {/* Category Tabs - Right Side */}
            <motion.div 
              className="flex items-center gap-[8px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-[20px] py-[10px] rounded-[8px] text-[14px] font-[500] transition-colors ${
                    activeCategory === category.slug
                      ? "bg-[#4F6EF7] text-white"
                      : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-[64px]">
        <div className="mx-auto w-full max-w-[1440px] px-[34px]">
          {/* Featured post - Dynamic based on selected category */}
          <motion.div 
            className="grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            key={`featured-${activeCategory}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="relative min-h-[360px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src={featuredContent.image}
                alt={featuredContent.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="px-[40px] py-[40px] flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex w-fit rounded-[999px] bg-[#EEF2FF] px-[14px] py-[6px] text-[12px] font-[600] leading-[1] text-[#4F6EF7]">
                Editor&apos;s Pick
              </span>
              <motion.h2 
                className="mt-[20px] text-[28px] font-[600] leading-[1.3] text-[#1F2937]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {featuredContent.title}
              </motion.h2>
              <motion.p 
                className="mt-[16px] text-[16px] font-[400] leading-[1.7] text-[#6B7280]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {featuredContent.excerpt}
              </motion.p>
              <div className="mt-[24px] flex items-center justify-between">
                <motion.p 
                  className="text-[13px] font-[700] uppercase tracking-[1px] text-[#4F6EF7]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  By {featuredContent.author}
                </motion.p>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link
                    href={`/blog/${activeCategory === 'all' ? blogPosts[0].slug : activeCategory}`}
                    className="inline-flex items-center gap-2 text-[14px] font-[600] text-[#4F6EF7] hover:underline"
                  >
                    Read More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Grid */}
          <motion.div 
            className="mt-[48px] grid grid-cols-3 gap-[24px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {blogPosts.concat(blogPosts).slice(0, 6).map((post, index) => (
              <motion.div
                key={`${post.slug}-${index}`}
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
