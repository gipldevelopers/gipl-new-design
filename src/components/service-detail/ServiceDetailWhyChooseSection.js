"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceDetailWhyChooseSection({ items }) {
  return (
    <section className="w-full bg-[#EEF1F6] py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[34px]">
        <motion.h2 
          className="text-center text-[40px] font-[700] leading-[1.2] tracking-[-0.03em] text-[#2E3642]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Why Choose Our Software Engineering?
        </motion.h2>

        <div className="mt-[48px] grid grid-cols-3 gap-[24px]">
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="rounded-[20px] bg-white px-[32px] pb-[32px] pt-[28px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
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
                  src="/service-detailed/Frame (5).svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />
              </motion.div>
              <h3 className="mt-[20px] text-[20px] font-[700] leading-[1.2] text-[#2E3642]">
                {item.title}
              </h3>
              <p className="mt-[12px] text-[15px] font-[400] leading-[1.7] text-[#414B57]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
