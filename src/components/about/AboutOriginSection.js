"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutOriginSection() {
  return (
    <section className="w-full bg-[#E9EAEE] px-[8px] py-[12px]">
      <div className="flex items-start gap-[92px]">
        <motion.div 
          className="flex gap-[16px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col gap-[16px]">
            <motion.div 
              className="h-[298px] w-[275px] overflow-hidden rounded-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/about/1877c8ffc4eb50d23988e285e17a6c9610d3b1ce.png"
                alt="Office interior"
                width={275}
                height={298}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="h-[298px] w-[275px] overflow-hidden rounded-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/about/8efe826265f68394faf2b2c5af18423970e6351a.png"
                alt="Team meeting"
                width={275}
                height={298}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-[16px] pt-[47px]">
            <motion.div 
              className="h-[398px] w-[275px] overflow-hidden rounded-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/about/19e45c51077943ef79bb30f2b8ca27af65faf874.png"
                alt="Code monitors"
                width={275}
                height={398}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="h-[180px] w-[275px] overflow-hidden rounded-[14px] shadow-[0_10px_24px_rgba(15,23,42,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/about/8c80d8d4accb43b7daa96cf4c4e634bc01848e93.png"
                alt="City office view"
                width={275}
                height={180}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-[682px] pt-[58px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-[54px] font-[600] leading-[68px] tracking-[-1.35px] text-[#1B2129]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            How Everything Began:
            <br />
            From a Basic Concept to
            <br />
            Robust Basis
          </motion.h2>
          <motion.p 
            className="mt-[24px] text-[16px] font-[400] leading-[28px] tracking-[0px] text-[#3F4753]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Gohil Infotech began with the straightforward notion that there had
            <br />
            to be an improved method for providing IT services. All too
            frequently,
            <br />
            companies had to deal with poor communication, hurried work, and
            <br />
            overly complicated solutions. We thought that technology ought to
            <br />
            be sincere, useful, and purpose-driven. Although the aim was clear,
            <br />
            the early days were modest. Create a business that prioritizes
            long-
            <br />
            term value, excellence, and openness. a business that gives each
            <br />
            job, regardless of size, careful consideration. The influence grew,
            the
            <br />
            crew grew, and the obstacles increased over time. Our dedication to
            <br />
            doing things well and creating solutions that genuinely aid in our
            <br />
            clients&apos; development has not altered.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
