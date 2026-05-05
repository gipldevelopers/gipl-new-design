"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function CareerCultureSection() {
  return (
    <section className="w-full bg-[#F5F7FB] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[48px] rounded-[24px] bg-[#F4F6FA] px-6 md:px-[56px] py-10 md:py-[64px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Left Images */}
          <div className="flex flex-row gap-4 md:gap-[24px] w-full lg:w-auto items-start">
            {/* Left Image - Greenhouse Office */}
            <motion.div
              className="relative h-[180px] xs:h-[350px] md:h-[400px] w-full lg:w-[320px] overflow-hidden rounded-[20px] shadow-lg"
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
                sizes="(max-width: 1024px) 100vw, 320px"
                unoptimized={true}
                className="object-cover"
              />
            </motion.div>
            {/* Right Image - Code Monitors (Shifted Down) */}
            <motion.div
              className="relative h-[180px] xs:h-[300px] md:h-[400px] w-full lg:w-[320px] overflow-hidden rounded-[20px] shadow-lg mt-8 md:mt-[64px]"
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
                sizes="(max-width: 1024px) 100vw, 320px"
                unoptimized={true}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right — text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-3xl xs:text-4xl md:text-[52px] font-[600] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-2px] text-[#1E252B]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              GIPL Life:
              <br className="hidden md:block" />
              Concerning Our Culture
            </motion.h2>

            <motion.p
              className="mt-6 md:mt-[32px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] tracking-tight md:tracking-[-0.3px] text-[#495066]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              We think that cooperation, respect, and trust are the cornerstones
              of a successful workplace. Honest criticism, new ideas, and candid
              discussions are all encouraged in our culture. Every voice counts
              here, and we make sure everyone is respected and feels heard.
            </motion.p>

            <motion.p
              className="mt-4 md:mt-[24px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] tracking-tight md:tracking-[-0.3px] text-[#495066]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              We believe in sustainable growth and continuous learning. Our
              environment is designed to foster innovation while maintaining a
              healthy work-life balance for all our team members.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
