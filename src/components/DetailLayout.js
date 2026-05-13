"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
}) {
  return (
    <section className="w-full bg-[#F5F7FB] overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[34px] pb-12 md:pb-[60px] pt-[8px]">

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
          <div className="relative z-10 px-6 md:px-[48px] pt-12 md:pt-[50px] pb-0 text-center">
            <motion.h1
              className="text-2xl xs:text-3xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-white max-w-[900px] mx-auto mb-4 md:mb-[16px]"
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

            {/* Technology Used in Detail Layout */}
            {tech && tech.length > 0 && (
              <motion.div
                className="mt-8 flex flex-col items-center pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <p className="text-[10px] md:text-[11px] font-bold text-[#4F6EF7] uppercase tracking-[0.15em] mb-4">
                  TECHNOLOGY USED:
                </p>
                <div className="flex flex-wrap justify-center gap-5 md:gap-8">
                  {tech.map((t, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-[14px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 group hover:shadow-[0_12px_24px_rgba(79,110,247,0.15)] transition-all duration-300 overflow-hidden" title={t}>
                        {siteData.work.techIcons[t] ? (
                          <Image
                            src={siteData.work.techIcons[t]}
                            alt={`${t} logo`}
                            width={32}
                            height={32}
                            unoptimized={true}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        ) : (
                          <div className="text-[9px] md:text-[10px] font-[800] text-[#4F6EF7] text-center leading-tight uppercase break-words tracking-tight">
                            {t}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] md:text-[11px] font-[600] text-[#94A3B8] uppercase tracking-[0.1em]">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Hero Image - Responsive Positioning */}
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
        </motion.div>

        {/* Article sections */}
        <div className="mx-auto mt-24 md:mt-[240px] max-w-[1440px] space-y-12 md:space-y-[40px]">
          {sections.map((section, sectionIndex) => {
            if (section.type === "imageText") {
              return (
                <motion.div
                  key={section.heading}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-[32px] items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className="relative h-[240px] xs:h-[300px] md:h-[320px] overflow-hidden rounded-[16px]"
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
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    <h2 className="text-xl md:text-[26px] font-[700] leading-tight md:leading-[1.3] tracking-[-0.02em] text-[#1F2937]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 md:mt-[16px] space-y-3 md:space-y-[14px]">
                      {(section.paragraphs || []).map((paragraph, index) => (
                        <motion.p
                          key={`${section.heading}-${index}`}
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
                  </motion.div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={section.heading}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: false }}
              >
                <motion.h2
                  className="text-xl md:text-[28px] font-[700] leading-tight md:leading-[1.3] tracking-[-0.02em] text-[#1F2937]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.1 }}
                  viewport={{ once: false }}
                >
                  {section.heading}
                </motion.h2>
                <div className="mt-4 md:mt-[16px] space-y-3 md:space-y-[14px]">
                  {(section.paragraphs || []).map((paragraph, index) => (
                    <motion.p
                      key={`${section.heading}-${index}`}
                      className="text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.8] text-[#303742]"
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
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}

