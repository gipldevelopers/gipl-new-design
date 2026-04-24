"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

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

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container flex w-full items-center justify-between gap-12">
        <motion.div 
          className="max-w-[650px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.p 
            className="text-[14px] font-bold uppercase tracking-widest text-[#2F3AA8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            SMART IT SOLUTIONS FOR GROWING BUSINESSES
          </motion.p>

          <motion.h2 
            className="mt-6 text-[48px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="block">Your Trusted IT Development</span>
            <span className="block">
              Partner <span className="text-[#2F5AB0]">in Ahmedabad</span>
            </span>
          </motion.h2>

          <motion.p 
            className="mt-8 text-[20px] font-normal leading-relaxed tracking-[-0.038em] text-[#343B48]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            We help local businesses and companies worldwide grow with reliable IT solutions. From custom software to mobile apps, we build technology that works for your business. Based in Ahmedabad, we understand what Gujarat businesses need to succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/service"
              className="mt-10 inline-flex h-[56px] px-8 items-center justify-center gap-[12px] rounded-full bg-[#38339C] text-[17px] font-semibold text-white"
            >
              Our IT Service
              <ArrowUpRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative h-[500px] w-[500px] shrink-0 overflow-hidden rounded-[24px] shadow-[0_32px_65px_rgba(23,44,94,0.16)]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/home/home_images/f5f38511eb7c731ea5bf9585cfeaa19f8e628677.png"
            alt="Office interior"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
