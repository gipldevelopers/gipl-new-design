"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";

function ServiceDetailCard({ title, index }) {
  return (
    <motion.article 
      className="rounded-[20px] bg-white px-[28px] pb-[28px] pt-[24px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#1E2A45]"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={siteData.serviceDetail.services.icon1}
          alt=""
          width={24}
          height={24}
          className="h-[24px] w-[24px]"
          style={{ width: "auto", height: "auto" }}
        />
      </motion.div>

      <h3 className="mt-[20px] text-[20px] font-[700] leading-[1.3] text-[#2E3642]">
        {title}
      </h3>
      <p className="mt-[12px] text-[15px] font-[400] leading-[1.7] text-[#414B57]">
        Our Software Engineering services help businesses build secure,
        scalable, and high-performance applications tailored to their needs.
        From custom solutions to enterprise platforms.
      </p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/service"
          className="mt-[20px] inline-flex items-center gap-[8px] text-[14px] font-[600] leading-[1] text-[#2D5BE3] hover:underline"
        >
          View all services
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#2D5BE3] text-[12px] leading-none">
            →
          </span>
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default function ServiceDetailServicesSection({ items }) {
  return (
    <section className="w-full bg-[#EEF1F6] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
          {items.map((item, index) => (
            <ServiceDetailCard key={item} title={item} index={index} />
          ))}
        </div>
      </div>
    </section>

  );
}
