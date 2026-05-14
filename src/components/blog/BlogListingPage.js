"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { getAllBlogPosts } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const blogPosts = getAllBlogPosts();

const categories = [
  {
    slug: "all",
    label: "All",
    title: "Insights, Trends & Digital Perspectives",
    subtitle: "MEDIA",
    description: "Explore expert insights, practical guides, and industry updates on software development, digital strategy, design systems, and modern technology solutions.",
    heroImage: siteData.blog.heroAll
  },
  {
    slug: "ai",
    label: "AI",
    title: "AI & Machine Learning",
    subtitle: "ARTIFICIAL INTELLIGENCE",
    description: "Explore the latest in AI technology, machine learning algorithms, and intelligent automation solutions.",
    heroImage: siteData.blog.heroAI
  },
  {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    title: "Mobile Development",
    subtitle: "MOBILE TECHNOLOGY",
    description: "Native and cross-platform mobile app development insights, best practices, and emerging trends.",
    heroImage: siteData.blog.heroMobile
  },
  {
    slug: "development",
    label: "Development",
    title: "Software Development",
    subtitle: "DEVELOPMENT",
    description: "Code quality, architecture patterns, development methodologies, and programming best practices.",
    heroImage: siteData.blog.heroDev
  }
];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const currentCategory = categories.find(cat => cat.slug === activeCategory) || categories[0];

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category.toUpperCase().includes(activeCategory.toUpperCase()) || post.slug.includes(activeCategory));

  // Dynamic featured content based on selected category
  const getFeaturedContent = () => {
    const featured = filteredPosts[0] || blogPosts[0];

    return {
      slug: featured.slug,
      image: featured.image,
      badge: featured.category,
      title: featured.title,
      excerpt: featured.excerpt,
      author: featured.author,
      tech: featured.tech || []
    };
  };

  const featuredContent = getFeaturedContent();

  return (
    <main className="w-full bg-[#F5F7FB] overflow-x-hidden">
      {/* Hero Section with Dynamic Content */}
      <section className="w-full bg-white pt-10 md:pt-[40px] pb-12 md:pb-[80px]">
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

            {/* Category Tabs */}
            <motion.div
              className="flex w-full md:w-auto items-center overflow-x-auto no-scrollbar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center bg-[#F1F5F9] p-1 rounded-full w-full md:w-auto overflow-x-auto no-scrollbar">
                {categories.map((category, index) => (
                  <button
                    key={category.slug}
                    onClick={() => setActiveCategory(category.slug)}
                    className={`whitespace-nowrap h-[40px] md:h-[44px] px-5 md:px-[24px] rounded-full text-[13px] md:text-[14px] font-[600] transition-all duration-300 ${activeCategory === category.slug
                      ? "bg-white text-[#4F6EF7] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                      : "text-[#64748B] hover:text-[#4F6EF7]"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magazine Feature Section */}
      <section className="w-full py-8 md:py-[40px] bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
          <motion.div
            className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#E0F2FE]/50 to-white border border-[#BAE6FD]/30 p-8 md:p-[60px] shadow-[0_20px_50px_rgba(186,230,253,0.15)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col text-left">
                <motion.h2
                  className="text-2xl md:text-[36px] font-[700] text-[#0F172A] tracking-tight leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Featured in Business Connect Magazine
                </motion.h2>
                <motion.p
                  className="mt-2 text-sm md:text-[16px] font-[600] text-[#0EA5E9] uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  February Special Edition 2026 | Cover Story
                </motion.p>

                <motion.div
                  className="mt-6 md:mt-[24px] space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-sm md:text-[17px] font-[400] leading-relaxed text-[#475569]">
                    We are proud to share that <span className="font-[600] text-[#0F172A]">Darshan R Gohil</span>, CEO & Founder of Gohil Infotech Private Limited, has been featured as the Cover Story in Business Connect Magazine's February Special Edition 2026. The feature, titled "From Childhood Hustles to Building Scalable Digital Futures," covers Darshan's entrepreneurial journey, the vision behind Gohil Infotech, and how the company is delivering scalable digital solutions to businesses across India.
                  </p>
                </motion.div>

                {/* Quote Box */}
                <motion.div
                  className="mt-8 md:mt-[32px] pl-6 border-l-[4px] border-[#0EA5E9] bg-[#F0F9FF] py-6 pr-8 rounded-r-xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-[15px] md:text-[18px] font-[500] italic text-[#1E293B] leading-relaxed">
                    "Business isn't separate from how we live. Both need balance, patience, and adaptability."
                  </p>
                  <p className="mt-3 text-[13px] md:text-[14px] font-[600] text-[#64748B]">
                    - Darshan R Gohil, CEO & Founder, Gohil Infotech Pvt. Ltd.<br />
                    <span className="font-[400] text-[#94A3B8]">(As featured in Business Connect Magazine)</span>
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="mt-10 md:mt-[40px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <a
                    href="https://businessconnectmagazine.in/2026/February-Special-Edition-2026-Vol-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[54px] px-10 items-center justify-center gap-3 rounded-full bg-[#0EA5E9] text-[16px] font-[600] text-white shadow-lg shadow-sky-200 hover:bg-[#0284C7] transition-all group"
                  >
                    Read Full Feature
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Right Side - Magazine Cover */}
              <motion.div
                className="relative mx-auto lg:ml-auto w-full max-w-[340px] aspect-[1/1.3]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                  <Image
                    src="https://www.gohilinfotech.com/about/mediapress.png" // Temporary placeholder until I get the cover URL or generate one
                    alt="Business Connect Magazine - Darshan R Gohil"
                    fill
                    className="object-contain bg-white p-4"
                    unoptimized={true}
                  />
                  {/* Since I don't have the exact image URL yet, I'll use a placeholder or generate one */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Decorative elements behind image */}
                <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-2xl" />
                <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-[#0EA5E9]/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-12 md:py-[64px] bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
          {/* Featured post */}
          {featuredContent && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
              key={`featured-${featuredContent.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/blog/${featuredContent.slug}`} className="relative min-h-[280px] md:min-h-[360px] block overflow-hidden group">
                <Image
                  src={featuredContent.image}
                  alt={featuredContent.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  unoptimized={true}
                />
              </Link>
              <div className="px-6 md:px-[40px] py-8 md:py-[40px] flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-[999px] bg-[#EEF2FF] px-[14px] py-[6px] text-[12px] font-[600] leading-[1] text-[#4F6EF7]">
                  {featuredContent.badge}
                </span>
                <Link href={`/blog/${featuredContent.slug}`}>
                  <h2 className="mt-4 md:mt-[20px] text-xl md:text-[28px] font-[600] leading-tight md:leading-[1.3] text-[#1F2937] hover:text-[#4F6EF7] transition-colors">
                    {featuredContent.title}
                  </h2>
                </Link>
                <p className="mt-3 md:mt-[16px] text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.7] text-[#6B7280]">
                  {featuredContent.excerpt}
                </p>

                <div className="mt-6 md:mt-[24px] flex items-center justify-between">
                  <p className="text-[11px] md:text-[13px] font-[700] uppercase tracking-[1px] text-[#4F6EF7]">
                    {featuredContent.author}
                  </p>
                  <Link
                    href={`/blog/${featuredContent.slug}`}
                    className="flex items-center gap-2 text-[13px] md:text-[14px] font-[600] text-[#4F6EF7] hover:underline group"
                  >
                    Read More
                    <div className="w-[15px] h-[15px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <Image
                        src={siteData.common.icons.cardArrow}
                        alt=""
                        width={15}
                        height={15}
                        className="object-contain"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          <div className="mt-10 md:mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={`${post.slug}-${index}`}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index % 3) * 0.1 }}
                viewport={{ once: true }}
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
          </div>
        </div>
      </section>
    </main>
  );
}
