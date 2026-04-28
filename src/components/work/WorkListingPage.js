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
    <main className="w-full bg-[#F5F7FB] py-[64px] overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-[34px]">

        {/* Header */}
        <motion.p
          className="text-[12px] font-[700] uppercase tracking-[2px] text-[#4F6EF7]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Work
        </motion.p>
        <motion.h1
          className="mt-[16px] max-w-[640px] text-[48px] font-[700] leading-[1.12] tracking-[-0.03em] text-[#1F2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          Crafting Digital Solutions,
          <br />
          Delivering Excellence
        </motion.h1>
        <motion.p
          className="mt-[20px] max-w-[680px] text-[18px] font-[400] leading-[1.7] text-[#6B7280]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Discover our journey through successful projects, from concept to
          deployment. Each case study represents a unique challenge solved with
          our expertise, creative solutions, and a passion for excellence.
        </motion.p>

        {/* Featured project */}
        <motion.div
          className="mt-[48px] grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="relative min-h-[360px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image
              src={featured.image}
              alt={featured.projectName}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="px-[40px] py-[40px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <span className="inline-flex w-fit rounded-[999px] bg-[#EEF2FF] px-[14px] py-[6px] text-[12px] font-[600] leading-[1] text-[#4F6EF7]">
              Case Study Preview
            </span>
            <h2 className="mt-[20px] text-[28px] font-[600] leading-[1.3] text-[#1F2937]">
              {featured.projectName}
            </h2>
            <p className="mt-[16px] text-[16px] font-[400] leading-[1.7] text-[#6B7280]">
              {featured.description}
            </p>
            <div className="mt-[24px]">
              <p className="text-[13px] font-[700] uppercase tracking-[1px] text-[#4F6EF7] mb-[12px]">
                Technology Stack
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/our work/vscode-icons_file-type-reactjs.svg"
                  alt="React"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px]"
                />
              </div>
            </div>
            <div className="mt-[28px]">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={`/work/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-[600] text-[#4F6EF7] hover:underline"
                >
                  View Case Study →
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {workItems.concat(workItems, workItems).slice(0, 6).map((item, index) => (
            <motion.div
              key={`${item.slug}-${index}`}
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
