"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounderQuoteSection() {
  return (
    <section className="w-full bg-[#E9EAEE] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col lg:flex-row min-h-auto lg:h-[554px] w-full items-center justify-between bg-[#072248] rounded-[24px] overflow-hidden p-8 md:p-12 lg:px-[47px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="w-full lg:max-w-[780px] text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.p
              className="text-xl xs:text-2xl md:text-[30px] font-[600] uppercase leading-tight md:leading-[46px] tracking-tight md:tracking-[-0.75px] text-[#D7DCE9]"
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
              className="mt-6 md:mt-[16px] text-lg md:text-[22px] font-[600] leading-tight md:leading-[34px] tracking-tight md:tracking-[-0.55px] text-[#D7DCE9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              - Darshan Gohil, CEO &amp; Founder
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 lg:mt-0 lg:mr-[29px] h-[300px] xs:h-[380px] md:h-[435px] w-full lg:w-[428px] overflow-hidden rounded-[14px] bg-[#040404]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/about/49dca38b973a71a8a8837f0ef112d084d4a32fc9.png"
              alt="Founder concept artwork"
              width={428}
              height={435}
              className="h-full w-full object-cover grayscale"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
