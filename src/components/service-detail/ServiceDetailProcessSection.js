"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceDetailProcessSection({ items }) {
  return (
    <section className="w-full bg-[#EEF1F6] py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[34px]">
        <motion.div 
          className="rounded-[24px] bg-[#E2E8F4] px-[48px] pb-[56px] pt-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-center text-[40px] font-[700] leading-[1.2] tracking-[-0.03em] text-[#2E3642]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            className="mt-[12px] text-center text-[17px] font-[400] leading-[1.6] text-[#57606C]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            A systematic approach to deliver exceptional results
          </motion.p>

          <motion.div 
            className="relative mt-[56px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Connector line */}
            <motion.div 
              className="absolute left-0 right-0 top-[28px] h-[2px] bg-[#94F0F9]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            />
            <div className="grid grid-cols-4 gap-6">
              {items.map((item, index) => (
                <motion.div 
                  key={item.phase} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <motion.div 
                    className="relative z-10 mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.10)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src="/service-detailed/Icon (2).svg"
                      alt=""
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px]"
                    />
                  </motion.div>
                  <h3 className="mt-[20px] text-[18px] font-[700] leading-[1.2] text-[#2E3642]">
                    {item.title}
                  </h3>
                  <p className="mt-[8px] text-[12px] font-[700] leading-[1.2] tracking-[0.8px] uppercase text-[#4B64F0]">
                    {item.phase}
                  </p>
                  <p className="mt-[12px] text-[14px] font-[400] leading-[1.6] text-[#58616D]">
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
