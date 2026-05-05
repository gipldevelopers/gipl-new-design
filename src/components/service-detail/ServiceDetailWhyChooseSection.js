"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function ServiceDetailWhyChooseSection({ items }) {
  return (
    <section className="w-full bg-[#EEF1F6] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.h2
          className="text-center text-2xl xs:text-3xl md:text-[40px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-[#2E3642]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Why Choose Our Software Engineering?
        </motion.h2>

        <div className="mt-10 md:mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="rounded-[20px] bg-white px-6 md:px-[32px] pb-8 md:pb-[32px] pt-7 md:pt-[28px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#EEF2FF]"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={siteData.serviceDetail.whyChoose.main}
                  alt=""
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
              <h3 className="mt-5 md:mt-[20px] text-lg md:text-[20px] font-[700] leading-tight text-[#2E3642]">
                {item.title}
              </h3>
              <p className="mt-3 md:mt-[12px] text-sm md:text-[15px] font-[400] leading-relaxed md:leading-[1.7] text-[#414B57]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

  );
}
