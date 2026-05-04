"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutHeroSection() {
  return (
    <section className="w-full pt-12 md:pt-[20px] pb-12 md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-12 md:gap-8 mb-10 ">
          <motion.div
            className="w-full lg:max-w-[760px] text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="text-[12px] md:text-[14px] font-[600] text-[#2F2C8F] uppercase tracking-[0.2em] mb-4 md:mb-[16px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              ABOUT US
            </motion.div>
            <motion.h1
              className="text-[28px] xs:text-4xl md:text-[56px] font-[700] leading-tight md:leading-[1.1] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px] max-w-[800px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              We Are Gohil Infotech:
              <br className="hidden md:block" />
              Developing Technology That Benefits You
            </motion.h1>
            <motion.p
              className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Architecting a decentralized security framework for global
              financial nodes, achieving sub-millisecond latency under
              extreme load.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex h-auto w-full lg:w-auto items-start justify-start lg:justify-end lg:pr-[200px] pt-4 lg:pt-[140px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="flex gap-6 md:gap-[24px]">
              <div className="w-[3px] bg-[#00E5FF] rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-6 md:gap-[15px] py-2">
                {[
                  { label: "PROJECTS COMPLETED", value: "200+" },
                  { label: "CLIENT SATISFACTION", value: "95%" },
                  { label: "YEARS EXPERIENCE", value: "5+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col gap-1 text-left"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <p className={`text-[10px] md:text-[12px] font-[700] uppercase tracking-[1.5px] text-[#64748B] ${inter.className}`}>
                      {stat.label}
                    </p>
                    <p className={`text-[24px] md:text-[18px] font-[700] leading-none text-[#0F172A] ${spaceGrotesk.className}`}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full rounded-[20px] overflow-hidden h-[240px] xs:h-[300px] md:h-[420px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Image
            src="/about/3b0f421f76d85ef2751a9a388ba2e5801db159d6.jpg"
            alt="Gohil Infotech team"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>

  );
}
