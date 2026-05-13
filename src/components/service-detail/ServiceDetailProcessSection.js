"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function ServiceDetailProcessSection({ items, subtitle }) {
  if (!items) return null;

  return (
    <section className="w-full bg-[#EEF1F6] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="rounded-[24px] bg-[#E2E8F4] px-6 md:px-[48px] pb-10 md:pb-[56px] pt-10 md:pt-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-center text-2xl xs:text-3xl md:text-[40px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-[#2E3642]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Our Development Process
          </motion.h2>
          <motion.p
            className="mt-3 md:mt-[12px] text-center text-base md:text-[17px] font-[400] leading-relaxed md:leading-[1.6] text-[#57606C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {subtitle || "A systematic approach to deliver exceptional results"}
          </motion.p>

          <motion.div
            className="relative mt-10 md:mt-[56px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Connector line - Spanning across 6 items in one row */}
            <motion.div
              className="absolute left-[8.3%] right-[8.3%] top-[28px] h-[2px] bg-[#94F0F9] hidden lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-4 md:gap-x-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.phase}
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.10)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={siteData.serviceDetail.process[`icon${index + 1}`] || siteData.serviceDetail.process.icon1}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px]"
                      style={{ width: "auto", height: "auto" }}
                      unoptimized={true}
                    />
                  </motion.div>
                  <h3 className="mt-5 md:mt-[20px] text-lg md:text-[16px] font-[700] leading-tight md:leading-[1.2] text-[#2E3642]">
                    {item.title}
                  </h3>
                  <p className="mt-2 md:mt-[8px] text-[10px] md:text-[11px] font-[700] leading-[1.2] tracking-[0.8px] uppercase text-[#4B64F0]">
                    {item.phase}
                  </p>
                  <p className="mt-3 md:mt-[12px] text-xs md:text-[13px] font-[400] leading-relaxed md:leading-[1.5] text-[#58616D]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
