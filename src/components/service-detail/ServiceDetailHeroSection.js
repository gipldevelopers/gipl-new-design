"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function ServiceDetailHeroSection({ service }) {
  return (
    <section className="relative w-full bg-[#031744] overflow-hidden min-h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.heroBg || siteData.serviceDetail.hero.softwareEngineering}
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#031744]/60 via-transparent to-[#031744]/60" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-[34px] py-20 md:py-[100px] text-center z-10">
        <motion.h1
          className="text-3xl xs:text-4xl md:text-[56px] font-[800] leading-tight md:leading-[1.1] tracking-[-0.03em] text-white max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {service.title}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 md:mt-[32px] max-w-[900px] text-base md:text-[19px] font-[400] leading-relaxed md:leading-[1.7] text-[#E7EDF7] font-manrope"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {service.description}
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
            className="inline-flex h-[56px] items-center gap-[12px] rounded-full bg-[#3A63F3] px-[36px] text-[17px] font-[600] text-white hover:bg-[#2f56e0] transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Start your project
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83398 14.1667L14.1673 5.83337M14.1673 5.83337H5.83398M14.1673 5.83337V14.1667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}