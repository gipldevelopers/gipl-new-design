"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounderQuoteSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col lg:flex-row min-h-auto lg:h-[554px] w-full items-center justify-between bg-[#072248] rounded-[32px] overflow-hidden p-6 sm:p-10 lg:px-[60px] lg:py-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="w-full lg:max-w-[720px] text-center lg:text-left pt-6 lg:pt-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.p
              className="text-[18px] xs:text-[22px] sm:text-[26px] md:text-[32px] font-[600] uppercase leading-[1.3] md:leading-[1.4] tracking-tight text-[#D7DCE9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              &quot;THE MIND IS NOT A VESSEL TO BE FILLED, BUT A
              FIRE TO BE KINDLED, AND IN THAT FIRE-OF THOUGHT,
              OF REFLECTION, OF INTENT GREATNESS IS QUIETLY
              BORN.&quot;
            </motion.p>
            <motion.p
              className="mt-6 md:mt-[24px] text-[16px] sm:text-[18px] md:text-[22px] font-[600] leading-tight text-[#94A3B8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              - Darshan Gohil, CEO &amp; Founder
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mt-10 lg:mt-0 h-[300px] xs:h-[380px] sm:h-[450px] lg:h-[480px] w-full lg:w-[420px] overflow-hidden rounded-[24px] bg-slate-900 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/about/49dca38b973a71a8a8837f0ef112d084d4a32fc9.png"
              alt="Darshan Gohil - CEO & Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
