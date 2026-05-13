"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function AboutFounderQuoteSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col lg:flex-row min-h-auto lg:h-[554px] w-full items-center justify-between bg-[#072248] rounded-[32px] overflow-hidden p-6 sm:p-10 lg:px-[60px] lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Quote Content */}
          <div className="w-full lg:max-w-[620px] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18.6667C0 8.36 8.36 0 18.6667 0V5.33333C11.3067 5.33333 5.33333 11.3067 5.33333 18.6667H13.3333V32H0V18.6667ZM26.6667 18.6667C26.6667 8.36 35.0267 0 45.3333 0V5.33333C37.9733 5.33333 32 11.3067 32 18.6667H40V32H26.6667V18.6667Z" fill="#00E5FF" fillOpacity="0.3" />
              </svg>
            </motion.div>
            <motion.h2
              className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-[500] leading-snug text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              &quot;THE MIND IS NOT A VESSEL TO BE FILLED, BUT A FIRE TO BE KINDLED, AND IN THAT FIRE-OF THOUGHT, OF REFLECTION, OF INTENT GREATNESS IS QUIETLY BORN.&quot;
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <p className="text-[18px] font-bold text-[#00E5FF]">Darshan Gohil</p>
              <p className="text-[14px] text-gray-400 tracking-wider">CEO &amp; FOUNDER</p>
            </motion.div>
          </div>

          {/* Founder Image Wrapper */}
          <motion.div
            className="relative mt-10 lg:mt-0 h-[300px] xs:h-[380px] sm:h-[450px] lg:h-[480px] w-full lg:w-[420px] overflow-hidden rounded-[24px] bg-slate-900 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={siteData.about.founder.portrait}
              alt="Darshan Gohil - CEO & Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover hover:grayscale-0 transition-all duration-700"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
