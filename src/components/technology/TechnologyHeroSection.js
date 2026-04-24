"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyHeroSection() {
  return (
    <section className="w-full bg-[#031744]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-8 px-[34px] py-20">
        <motion.div 
          className="flex-1 max-w-[560px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h1 
            className="text-[56px] font-[700] leading-[1.15] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Growth and Digital
            <br />
            Transformation
          </motion.h1>

          <motion.p 
            className="mt-[24px] text-[20px] font-[400] leading-[1.6] tracking-[-0.02em] text-[#C8D6EE]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Comprehensive solutions designed to accelerate your business growth
            and digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="mt-[40px] inline-flex h-[52px] items-center gap-[10px] rounded-[999px] bg-[#3E67F6] px-[28px] text-[16px] font-[600] leading-[1] tracking-[0px] text-white"
            >
              Start your project
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </motion.div>

        <motion.div 
          className="relative shrink-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="overflow-hidden rounded-[20px] bg-black"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/technology/35426d19ba38a55a742624ed86c4f5d95b7506e1 (1).png"
              alt="Growth and digital transformation visual"
              width={480}
              height={400}
              className="h-[400px] w-[480px] object-cover"
            />
          </motion.div>

          <motion.div 
            className="absolute bottom-[-20px] left-[-20px] flex h-[72px] w-[220px] items-center gap-[14px] rounded-[14px] border border-[#BEC8D6] bg-[#E9EDF3] px-[16px] shadow-[0_8px_24px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#4B64F0]"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/technology/Icon (3).svg"
                alt=""
                width={20}
                height={20}
                className="h-[20px] w-[20px]"
              />
            </motion.div>
            <div className="leading-[1]">
              <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#6C7A89]">
                SYSTEM STATUS
              </p>
              <p className="mt-[4px] text-[14px] font-[600] text-[#1F2937]">
                100% Operational
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
