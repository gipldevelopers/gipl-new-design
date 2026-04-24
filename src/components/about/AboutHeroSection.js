"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="w-full rounded-none bg-[#E9EAEE]">
      <div className="flex w-full items-start justify-between">
        <motion.div 
          className="max-w-[760px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.p 
            className="text-[14px] font-[600] uppercase leading-[14px] tracking-[3.92px] text-[#2D57E7]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            ABOUT US
          </motion.p>
          <motion.h1 
            className="mt-[14px] text-[44px] font-[600] leading-[53px] tracking-[-1.32px] text-[#1E293B]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            We Are Gohil Infotech:
            <br />
            Developing Technology That
            <br />
            Benefits You
          </motion.h1>
          <motion.p 
            className="mt-[24px] text-[16px] font-[400] leading-[26px] tracking-[-0.16px] text-[#4B5563]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Architecting a decentralized security framework for global
            <br />
            financial nodes, achieving sub-millisecond latency under
            <br />
            extreme load.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-[162px] flex h-[152px] w-[244px] gap-[14px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="w-[2px] bg-[#22D3EE]" />
          <div className="flex flex-col justify-between py-[2px]">
            {[
              { label: "PROJECTS COMPLETED", value: "200+" },
              { label: "CLIENT SATISFACTION", value: "95%" },
              { label: "YEARS EXPERIENCE", value: "5+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: false }}
              >
                <p className="text-[10px] font-[500] uppercase leading-[12px] tracking-[1.7px] text-[#1F2937]">
                  {stat.label}
                </p>
                <p className="mt-[4px] text-[24px] font-[500] leading-[24px] tracking-[-0.48px] text-[#111827]">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-[34px] h-[420px] w-full overflow-hidden rounded-[14px] shadow-[0_20px_45px_rgba(15,23,42,0.14)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/about/3b0f421f76d85ef2751a9a388ba2e5801db159d6.jpg"
          alt="Gohil Infotech team"
          width={1372}
          height={420}
          className="h-full w-full object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
