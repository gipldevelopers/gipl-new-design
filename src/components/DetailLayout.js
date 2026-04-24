"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/Card";

export default function DetailLayout({
  title,
  heroDescription,
  heroImage,
  heroImageAlt,
  sections,
  relatedItems,
  relatedPathPrefix,
  relatedHeading = "RELATED STORIES",
}) {
  return (
    <section className="w-full bg-[#F5F7FB]">
      <div className="mx-auto max-w-[1440px] px-[34px] pb-[60px] pt-[8px]">

        {/* Hero Section */}
        <motion.div 
          className="relative bg-[#031744] rounded-[20px] overflow-visible"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Background decorative elements */}
          <div className="pointer-events-none absolute top-[60px] right-[80px] h-[120px] w-[120px] rounded-full bg-white/5" />
          <div className="pointer-events-none absolute bottom-[40px] left-[60px] h-[80px] w-[80px] rounded-full bg-white/3" />

          {/* Content Container */}
          <div className="relative z-10 px-[48px] pt-[50px] pb-[0px] text-center">
            <motion.h1 
              className="text-[48px] font-[700] leading-[1.2] tracking-[-0.03em] text-white max-w-[900px] mx-auto mb-[16px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-[1200px] text-[16px] font-[400] leading-[1.5] tracking-[-0.01em] text-[#D8E4F3]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {heroDescription}
            </motion.p>
          </div>

          {/* Hero Image - Positioned at bottom, extending outside */}
          <motion.div 
            className="relative px-[48px] pb-[0px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="relative max-w-[900px] mx-auto h-[450px] overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform translate-y-[100px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={heroImage}
                alt={heroImageAlt || title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Article sections */}
        <div className="mx-auto mt-[240px] max-w-[1440px] space-y-[40px]">
          {sections.map((section, sectionIndex) => {
            if (section.type === "imageText") {
              return (
                <motion.div
                  key={section.heading}
                  className="grid grid-cols-[1fr_1.1fr] gap-[32px] items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: false }}
                >
                  <motion.div 
                    className="relative h-[320px] overflow-hidden rounded-[16px]"
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
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    <h2 className="text-[26px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#1F2937]">
                      {section.heading}
                    </h2>
                    <div className="mt-[16px] space-y-[14px]">
                      {section.paragraphs.map((paragraph, index) => (
                        <motion.p
                          key={`${section.heading}-${index}`}
                          className="text-[16px] font-[400] leading-[1.8] text-[#303742]"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.4 + index * 0.1 }}
                          viewport={{ once: false }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: false }}
              >
                <motion.h2 
                  className="text-[28px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#1F2937]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.1 }}
                  viewport={{ once: false }}
                >
                  {section.heading}
                </motion.h2>
                <div className="mt-[16px] space-y-[14px]">
                  {section.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={`${section.heading}-${index}`}
                      className="text-[16px] font-[400] leading-[1.8] text-[#303742]"
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
                    className="mt-[20px] space-y-[12px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {section.bullets.map((bullet, index) => (
                      <motion.li
                        key={bullet}
                        className="flex items-start gap-3 text-[16px] font-[400] leading-[1.75] text-[#303742]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.4 + index * 0.1 }}
                        viewport={{ once: false }}
                      >
                        <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#4F6EF7]" />
                        {bullet}
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}
              </motion.div>
            );
          })}
        </div>

        {/* Related items */}
        <motion.div 
          className="mt-[72px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-center text-[28px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#2B3440]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {relatedHeading}
          </motion.h3>
          <motion.div 
            className="mx-auto mt-[36px] grid max-w-[1120px] grid-cols-3 gap-[24px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {relatedItems.map((item, index) => (
              <motion.div
                key={item.slug}
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
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
