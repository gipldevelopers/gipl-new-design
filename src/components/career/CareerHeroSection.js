"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function CareerHeroSection() {
  return (
    <section className="w-full bg-[linear-gradient(90deg,#071321_0%,#0C2850_100%)] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px] py-16 md:py-[90px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left content */}
          <motion.div
            className="w-full lg:flex-1 max-w-[640px] text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h1
              className="text-4xl xs:text-5xl md:text-[64px] font-[800] leading-tight md:leading-[1.15] tracking-tight md:tracking-[-2px] text-white font-poppins"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Build Your Future
              <br className="hidden md:block" />
              with Gohil Infotech
            </motion.h1>

            <motion.p
              className="mt-6 md:mt-[28px] text-base md:text-[20px] leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.3px] text-white/80 font-[400] font-manrope"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Join a team of creators, developers, and problem solvers building meaningful digital products. At Gohil Infotech, your ideas matter, your growth is supported, and your work creates real impact.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-[36px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#open-roles"
                className="inline-flex h-[52px] md:h-[56px] items-center gap-[12px] rounded-full bg-[#4267EE] px-6 md:px-[28px] text-base md:text-[17px] font-[600] text-white hover:bg-[#3558d4] transition-colors"
              >
                <span>Openings Available</span>
                <Image
                  src={siteData.career.hero.frame3}
                  alt=""
                  width={0}
                  height={0}
                  className="h-[18px] w-[18px]"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative w-full lg:w-[520px] max-w-[520px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="relative overflow-hidden rounded-[24px] bg-black h-[320px] xs:h-[400px] md:h-[480px] w-full"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={siteData.technology.hero.visual}
                alt="Career hero visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-[-16px] left-[-16px] md:bottom-[-24px] md:left-[-24px] flex h-[72px] md:h-[88px] w-[220px] md:w-[260px] items-center rounded-[16px] bg-[#CFCFD0] pl-4 md:pl-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex h-10 md:h-[48px] w-10 md:w-[48px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#18C3F1_0%,#2B3DAA_100%)]"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={siteData.career.hero.statusIcon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 md:h-[22px] w-5 md:w-[22px]"
                />
              </motion.div>
              <div className="ml-3 md:ml-[12px]">
                <p className="text-[9px] md:text-[11px] font-[600] uppercase tracking-[1px] md:tracking-[1.4px] text-[#28344D]">
                  System Status
                </p>
                <p className="mt-[2px] md:mt-[3px] text-sm md:text-[15px] font-[600] text-white">
                  100% Operational
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
