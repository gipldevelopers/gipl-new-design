"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function ServiceHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteData.service.hero.bg}
          alt="Services Background"
          fill
          priority
          className="object-cover"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-[#031744]/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-[34px] py-16 md:py-[96px] text-center">
        <motion.h1
          className="max-w-[1000px] mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-[68px] font-[800] leading-[1.2] md:leading-[1.1] tracking-[-0.03em] text-white font-poppins"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          End-to-End I Services That
          <br className="hidden md:block" />
          Power Modern Businesses
        </motion.h1>
        <motion.p
          className="mt-6 md:mt-[32px] mx-auto max-w-[800px] text-base md:text-[19px] font-[400] leading-relaxed md:leading-[1.7] text-[#F1F5F9] font-manrope"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Transform your business with our expertise in software, data, and digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-10 md:mt-[48px]"
        >
          <Link
            href="/contact"
            className="inline-flex h-[56px] items-center gap-[12px] rounded-full bg-[#3E67F6] px-[36px] text-[17px] font-[600] text-white hover:bg-[#3258d9] transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Start your project
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M5.83398 14.1667L14.1673 5.83337M14.1673 5.83337H5.83398M14.1673 5.83337V14.1667"
                stroke="white"
                strokeWidth="2.5"
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
