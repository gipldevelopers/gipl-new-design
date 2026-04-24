"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounderQuoteSection() {
  return (
    <section className="w-full bg-[#E9EAEE] px-[7px] py-[6px]">
      <motion.div 
        className="flex h-[554px] w-full items-center justify-between bg-[#072248] px-[47px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <motion.div 
          className="max-w-[780px] pl-[2px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.p 
            className="text-[30px] font-[600] uppercase leading-[46px] tracking-[-0.75px] text-[#D7DCE9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            &quot;THE MIND IS NOT A VESSEL TO BE FILLED, BUT A
            <br />
            FIRE TO BE KINDLED, AND IN THAT FIRE-OF THOUGHT,
            <br />
            OF REFLECTION, OF INTENT GREATNESS IS QUIETLY
            <br />
            BORN.&quot;
          </motion.p>
          <motion.p 
            className="mt-[16px] text-[22px] font-[600] leading-[34px] tracking-[-0.55px] text-[#D7DCE9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            - Darshan Gohil, CEO &amp; Founder
          </motion.p>
        </motion.div>

        <motion.div 
          className="mr-[29px] h-[435px] w-[428px] overflow-hidden rounded-[14px] bg-[#040404]"
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
    </section>
  );
}
