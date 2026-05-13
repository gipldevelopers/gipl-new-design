"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";

import { siteData } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-[#F7F9FE] pt-10 md:pt-[10px] pb-12 md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mb-12 md:mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:max-w-[760px] text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="text-[12px] md:text-[14px] font-[600] text-[#2F2C8F] uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              ABOUT US
            </motion.div>
            <motion.h1
              className="text-[32px] sm:text-[40px] md:text-[56px] font-[700] leading-tight md:leading-[1.1] tracking-tight text-[#0F172A] mb-6 md:mb-[24px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Gohil Infotech: Building
              <br className="hidden md:block" />
              Software That Solves Real Business Problems
            </motion.h1>
            <motion.p
              className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[600px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              We design and develop custom software solutions that help businesses scale faster, improve operations, and stay competitive in a digital-first world.
            </motion.p>
          </motion.div>

          {/* Right Side - Statistics with Cyan Line */}
          <motion.div
            className="flex h-auto w-full lg:w-auto items-center justify-start lg:justify-end lg:pr-10 xl:pr-45 lg:pt-[140px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="flex gap-6 md:gap-[20px]">
              {/* Vertical Cyan Line */}
              <div className="w-[3px] bg-[#00E5FF] rounded-full" />

              <div className="flex flex-col gap-8 md:gap-[25px] py-1">
                {[
                  { label: "PROJECTS COMPLETED", value: "200+" },
                  { label: "CLIENT SATISFACTION", value: "95%" },
                  { label: "YEARS EXPERIENCE", value: "5+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <p className={`text-[11px] md:text-[12px] font-[700] uppercase tracking-[1.5px] text-[#475569] ${inter.className}`}>
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

        {/* Hero Image */}
        <motion.div
          className="relative w-full rounded-[24px] overflow-hidden h-[280px] xs:h-[350px] md:h-[480px] shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Image
            src={siteData.about.hero.teamImage}
            alt="Gohil Infotech team"
            fill
            sizes="100vw"
            unoptimized={true}
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
