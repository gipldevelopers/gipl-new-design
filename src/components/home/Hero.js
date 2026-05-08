"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.83398 14.166L14.1673 5.83268"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.83301H14.1667V12.4997"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(93.36deg,#0A1F3B_0.52%,#08254D_54.86%,#07234A_100%)] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px] py-16 md:py-[90px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:flex-1 max-w-[640px] text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h1 className="text-4xl xs:text-5xl md:text-[60px] font-[800] leading-tight md:leading-[1.15] tracking-tight md:tracking-[-2px] text-white font-poppins">
              <span className="block">Build Better Software.</span>
              <span className="block">

                <span className="bg-[linear-gradient(90deg,#2B99F0_0%,#1F65C2_100%)] bg-clip-text text-transparent">
                  Grow Without
                </span>
              </span>
              <span className="block bg-[linear-gradient(180deg,#2F5ACB_0%,#2C43B4_100%)] bg-clip-text text-transparent">
                Technical Limits
              </span>
            </h1>

            <motion.p
              className="mt-6 md:mt-[28px] text-base md:text-[18px] leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.3px] text-white/80 font-[400] font-manrope"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              We build reliable software, scalable apps, and smart digital systems that help businesses grow faster and work more efficiently.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-[36px] flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px] justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/service"
                  className="inline-flex w-full sm:w-auto h-[52px] md:h-[56px] px-8 items-center justify-center gap-[12px] rounded-full bg-[linear-gradient(90deg,#426AF2_0%,#416BF4_100%)] text-[16px] md:text-[17px] font-semibold text-white"
                >
                  Explore Products
                  <ArrowUpRightIcon />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto h-[52px] md:h-[56px] px-8 items-center justify-center rounded-full border border-white/70 text-[16px] md:text-[17px] font-medium text-white"
                >
                  Contact Us
                </Link>
              </motion.div>
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
                src={siteData.home.hero.visual}
                alt="Home hero visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized={true}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-[-16px] left-[-16px] md:bottom-[-24px] md:left-[-100px] flex h-[72px] md:h-[88px] w-[220px] md:w-[220px] items-center rounded-[16px] bg-[#CFCFD0] pl-4 md:pl-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
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
                  src={siteData.home.hero.statusIcon}
                  alt=""
                  width={22}
                  height={22}
                  unoptimized={true}
                  className="h-5 md:h-[22px] w-5 md:w-[22px]"
                />
              </motion.div>
              <div className="ml-3 md:ml-[12px]">
                <p className="text-[9px] md:text-[11px] font-[600] uppercase tracking-[1px] md:tracking-[1.4px] text-[#28344D]">
                  Project Success
                </p>
                <p className="mt-[2px] md:mt-[3px] text-sm md:text-[15px] font-[600] text-white">
                  250+
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

