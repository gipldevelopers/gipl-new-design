"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function AboutOriginSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
          {/* Staggered Image Collage */}
          <motion.div
            className="flex flex-row gap-4 md:gap-[24px] w-full lg:w-auto items-start justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* Left Image - Greenhouse Office */}
            <motion.div
              className="relative h-[200px] xs:h-[280px] md:h-[400px] w-[150px] xs:w-[220px] md:w-[320px] overflow-hidden rounded-[20px] shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={siteData.about.origin.office}
                alt="Modern office with plants"
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 220px, 320px"
                unoptimized={true}
                className="object-cover"
              />
            </motion.div>

            {/* Right Image - Code Monitors (Shifted Down) */}
            <motion.div
              className="relative h-[200px] xs:h-[280px] md:h-[400px] w-[150px] xs:w-[220px] md:w-[320px] overflow-hidden rounded-[20px] shadow-lg mt-8 md:mt-[64px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={siteData.about.origin.workspace}
                alt="Developer workspace"
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 220px, 320px"
                unoptimized={true}
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:max-w-[580px] text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-[28px] xs:text-[36px] md:text-[44px] font-[700] leading-tight md:leading-[1.1] tracking-tight text-[#1B2129] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              How It Started: From a <br />
              Simple Idea to a Strong Foundation
            </motion.h2>
            <motion.p
              className="text-[15px] md:text-[18px] font-[400] leading-relaxed md:leading-[1.6] text-[#3F4753]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Gohil Infotech was started with a clear goal to simplify how businesses build and use technology. Too often, companies struggle with poor communication, delayed delivery, and over-complicated systems. We focus on building practical, reliable software that solves real business problems. What began as a small step has grown into a trusted software development partner for businesses looking to scale with the right technology.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
