"use client";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import { getAllWorkItems } from "@/data/workData";
import Image from "next/image";
import Link from "next/link";

const workItems = getAllWorkItems();

export default function WorkListingPage() {
  const featured = workItems[0];

  return (
    <main className="w-full bg-[#F5F7FB] pt-10 md:pt-[40px] pb-12 md:pb-[80px] overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">

        {/* Header */}
        <div className="mb-10 md:mb-[60px] text-left">
          <motion.p
            className="text-[11px] md:text-[14px] font-[500] text-[#2F2C8F] uppercase tracking-[0.1em] mb-3 md:mb-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            OUR WORK
          </motion.p>
          <h1 className="text-[28px] xs:text-4xl md:text-[56px] font-[700] leading-tight md:leading-[1.1] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px] max-w-[800px]">
            Crafting Digital Solutions, Delivering Excellence
          </h1>
          <motion.p
            className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[900px] md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Discover our journey through successful projects, from concept to
            deployment. Each case study represents a unique challenge solved with
            our expertise, creative solutions, and a passion for excellence.
          </motion.p>
        </div>

        {/* Featured project */}
        <motion.div
          className="mt-10 md:mt-[100px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="relative min-h-[280px] md:min-h-[360px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image
              src={featured.image}
              alt={featured.projectName}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="px-6 md:px-[40px] py-8 md:py-[40px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <span className="inline-flex w-fit rounded-[999px] bg-[#EEF2FF] px-[14px] py-[6px] text-[12px] font-[600] leading-[1] text-[#4F6EF7]">
              Case Study Preview
            </span>
            <h2 className="mt-4 md:mt-[20px] text-xl md:text-[28px] font-[600] leading-tight md:leading-[1.3] text-[#1F2937]">
              {featured.projectName}
            </h2>
            <p className="mt-3 md:mt-[16px] text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.7] text-[#6B7280]">
              {featured.description}
            </p>
            <div className="mt-6 md:mt-[24px]">
              <p className="text-[11px] md:text-[13px] font-[700] uppercase tracking-[1px] text-[#4F6EF7] mb-3 md:mb-[12px]">
                Technology Stack
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/our work/vscode-icons_file-type-reactjs.svg"
                  alt="React"
                  width={32}
                  height={32}
                  className="h-7 md:h-[32px] w-7 md:w-[32px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            <div className="mt-8 md:mt-[28px]">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={`/work/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm md:text-[14px] font-[600] text-[#4F6EF7] hover:underline"
                >
                  View Case Study →
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {workItems.concat(workItems, workItems).slice(0, 6).map((item, index) => (
            <motion.div
              key={`${item.slug}-${index}`}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Card
                href={`/work/${item.slug}`}
                image={item.image}
                imageAlt={item.projectName}
                category={item.category}
                title={item.projectName}
                description={item.excerpt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

