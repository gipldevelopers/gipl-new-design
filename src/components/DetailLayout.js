"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { siteData } from "@/data/siteData";

export default function DetailLayout({
  title,
  heroDescription,
  heroImage,
  heroImageAlt,
  sections,
  relatedItems,
  relatedPathPrefix,
  relatedHeading = "RELATED STORIES",
  tech = [],
  liveLink,
  author,
}) {
  return (
    <section className="w-full bg-[#F5F7FB] overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[34px] pb-12 md:pb-[60px] pt-8 md:pt-12">

        {/* Hero Section */}
        <motion.div
          className="relative bg-[#031744] rounded-[20px] overflow-visible"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Background decorative elements */}
          <div className="pointer-events-none absolute top-[60px] right-[80px] h-[120px] w-[120px] rounded-full bg-white/5 hidden md:block" />
          <div className="pointer-events-none absolute bottom-[40px] left-[60px] h-[80px] w-[80px] rounded-full bg-white/3 hidden md:block" />

          {/* Content Container */}
          <div className="relative z-10 px-6 md:px-[48px] pt-12 md:pt-[60px] pb-0 text-center">
            <motion.h1
              className="text-2xl xs:text-3xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-white max-w-[900px] mx-auto mb-4 md:mb-[16px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[1200px] text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.5] tracking-[-0.01em] text-[#D8E4F3]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {heroDescription}
            </motion.p>
          </div>

          {/* Hero Image - Responsive Positioning */}
          {heroImage && (
            <motion.div
              className="relative px-6 md:px-[48px] pb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="relative max-w-[900px] mx-auto h-[240px] xs:h-[300px] md:h-[450px] overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform translate-y-[40px] md:translate-y-[100px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={heroImage}
                  alt={heroImageAlt || title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 900px, 900px"
                  className="object-cover"
                  priority
                  unoptimized={true}
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Article sections */}
        <div className="mx-auto mt-32 md:mt-[180px] max-w-[1440px] space-y-12 md:space-y-[60px]">
          {sections.map((section, sectionIndex) => {
            if (section.type === "imageText") {
              return (
                <motion.div
                  key={sectionIndex}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-[48px] items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className="relative h-[240px] xs:h-[300px] md:h-[380px] overflow-hidden rounded-[20px] bg-white shadow-sm border border-gray-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized={true}
                      className="object-contain p-4 md:p-8"
                    />
                  </motion.div>
                  <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {section.heading && (
                      <h2 className="text-xl md:text-[32px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.02em] text-[#1F2937]">
                        {section.heading}
                      </h2>
                    )}
                    <div className="mt-4 md:mt-[20px] space-y-4 md:space-y-[16px]">
                      {(section.paragraphs || []).map((paragraph, index) => (
                        <motion.p
                          key={`${sectionIndex}-${index}`}
                          className="text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.8] text-[#303742]"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.4 + index * 0.1 }}
                          viewport={{ once: false }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <motion.ul
                        className="mt-6 md:mt-[24px] space-y-3 md:space-y-[14px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.5 }}
                        viewport={{ once: false }}
                      >
                        {section.bullets.map((bullet, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3 text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.75] text-[#303742]"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.6 + index * 0.1 }}
                            viewport={{ once: false }}
                          >
                            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6EF7]" />
                            {bullet}
                          </motion.li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </motion.div>
                </motion.div>
              );
            }

            if (section.type === "fullImage") {
              return (
                <motion.div
                  key={`fullImage-${sectionIndex}`}
                  className="w-full relative h-[300px] md:h-[550px] rounded-[20px] overflow-hidden my-12 md:my-[60px] shadow-md border border-gray-100 bg-white"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: false }}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt || "Full width image"}
                    fill
                    sizes="100vw"
                    unoptimized={true}
                    className="object-contain p-4 md:p-10"
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={sectionIndex}
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: false }}
              >
                {section.heading && (
                  <motion.h2
                    className="text-xl md:text-[34px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.02em] text-[#1F2937] md:mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.1 }}
                    viewport={{ once: false }}
                  >
                    {section.heading}
                  </motion.h2>
                )}
                <div className="mt-4 md:mt-[15px] space-y-4 md:space-y-[18px]">
                  {(section.paragraphs || []).map((paragraph, index) => (
                    <motion.p
                      key={`${sectionIndex}-${index}`}
                      className="text-sm md:text-[17px] font-[400] leading-relaxed md:leading-[1.8] text-[#303742]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.2 + index * 0.05 }}
                      viewport={{ once: false }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <motion.ul
                    className="mt-6 md:mt-[20px] space-y-3 md:space-y-[12px] flex flex-col items-center md:items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {section.bullets.map((bullet, index) => (
                      <motion.li
                        key={bullet}
                        className="flex items-start gap-3 text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.75] text-[#303742] text-left"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.4 + index * 0.1 }}
                        viewport={{ once: false }}
                      >
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6EF7]" />
                        {bullet}
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}
              </motion.div>
            );
          })}
        </div>

        {/* Author Section */}
        {author && (
          <motion.div
            className="mx-auto mt-16 max-w-[100%] rounded-[24px] bg-[#FEF9F2] p-8 md:p-10 border border-[#E5D5C5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="relative w-35 h-35 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-contain "
                  unoptimized={true}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  {author.linkedin ? (
                    <Link href={author.linkedin} target="_blank" className="hover:text-[#0077B5] transition-colors">
                      <h4 className="text-xl md:text-2xl font-bold text-[#1F2937] hover:text-[#0077B5] transition-colors">{author.name}</h4>
                    </Link>
                  ) : (
                    <h4 className="text-xl md:text-2xl font-bold text-[#1F2937]">{author.name}</h4>
                  )}
                  {author.linkedin && (
                    <Link href={author.linkedin} target="_blank" className="text-[#0077B5] hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </Link>
                  )}
                </div>
                <p className="text-[#7C6E5F] font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">{author.role}</p>
                <p className="text-[#303742] leading-relaxed text-sm md:text-[17px] max-w-[800px]">
                  {author.bio}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Share Section */}
        <motion.div
          className=" mt-8 max-w-[1120px] flex items-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <span className="text-xl font-bold text-[#1F2937]">Share :</span>
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61578335311317&rdid=S9lL1bxWibuMNywX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CdY87RHCF%2F"
              target="_blank"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/gohil-infotech/posts/?feedView=all"
              target="_blank"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </Link>
            {/* Instagram */}
            <Link
              href="http://instagram.com/gohil.infotech/profilecard/?igsh=MXNyazllNGR3anh3ZQ%3D%3D"
              target="_blank"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-all duration-300"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.41a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
            </Link>
          </div>
        </motion.div>

        {/* Related items */}
        <motion.div
          className="mt-16 md:mt-[72px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h3
            className="text-center text-2xl md:text-[28px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.02em] text-[#2B3440]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {relatedHeading}
          </motion.h3>
          <motion.div
            className="mx-auto mt-8 md:mt-[36px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px] max-w-[1120px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {relatedItems.map((item, index) => (
              <motion.div
                key={item.slug}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <Card
                  href={`${relatedPathPrefix}/${item.slug}`}
                  image={item.image}
                  imageAlt={item.title || item.projectName}
                  category={item.category}
                  title={item.title || item.projectName}
                  description={item.excerpt || item.description}
                  liveLink={item.liveLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section >

  );
}

