"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceHeroSection() {
  return (
    <section className="w-full bg-[#031744]">
      <div className="mx-auto min-h-screen flex w-full max-w-[1440px] flex-col items-center justify-center px-6 md:px-[34px] py-16 md:py-[96px] text-center">
        <motion.h1
          className="max-w-[900px] text-3xl xs:text-4xl sm:text-5xl md:text-[68px] font-[800] leading-[1.2] md:leading-[1.15] tracking-[-0.03em] text-[#F5F7FB] font-poppins"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          End-to-End I Services That
          <br className="hidden md:block" />
          <span className="block bg-[linear-gradient(180deg,#2F5ACB_0%,#2C43B4_100%)] bg-clip-text text-transparent "> Power Modern Businesses</span>
        </motion.h1>
        <motion.p
          className="mt-4 md:mt-[24px] max-w-[800px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#E8EEF8] font-manrope"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Transform your business with our expertise in software, data, and digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="mt-[40px] inline-flex h-[52px] items-center gap-[10px] rounded-[999px] bg-[#3E67F6] px-[28px] text-[16px] font-[600] leading-[1] text-white hover:bg-[#2f56e0] transition-colors"
          >
            Start your project
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M5.83398 14.1667L14.1673 5.83337M14.1673 5.83337H5.83398M14.1673 5.83337V14.1667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
