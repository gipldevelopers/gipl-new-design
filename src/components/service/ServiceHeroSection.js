"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceHeroSection() {
  return (
    <section className="w-full bg-[#031744]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-[34px] py-[96px] text-center">
        <motion.h1 
          className="max-w-[900px] text-[56px] font-[700] leading-[1.15] tracking-[-0.03em] text-[#F5F7FB]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          End-to-End IT Services That
          <br />
          <span className="text-[#2357C7]">Power Modern Businesses</span>
        </motion.h1>
        <motion.p 
          className="mt-[24px] max-w-[800px] text-[18px] font-[400] leading-[1.7] text-[#E8EEF8]"
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
