"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutOriginSection() {
  return (
    <section className="w-full bg-[#E9EAEE] py-12 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[92px]">
          <motion.div 
            className="flex flex-row gap-3 md:gap-[16px] w-full lg:w-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col gap-3 md:gap-[16px] flex-1">
              <motion.div 
                className="h-[180px] xs:h-[240px] md:h-[298px] w-full lg:w-[275px] overflow-hidden rounded-[14px]"
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
                className="h-[180px] xs:h-[240px] md:h-[298px] w-full lg:w-[275px] overflow-hidden rounded-[14px]"
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

            <div className="flex flex-col gap-3 md:gap-[16px] pt-8 md:pt-[47px] flex-1">
              <motion.div 
                className="h-[220px] xs:h-[300px] md:h-[398px] w-full lg:w-[275px] overflow-hidden rounded-[14px]"
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
                className="h-[140px] xs:h-[180px] md:h-[180px] w-full lg:w-[275px] overflow-hidden rounded-[14px] shadow-[0_10px_24px_rgba(15,23,42,0.2)]"
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
            className="w-full lg:max-w-[682px] pt-0 lg:pt-[58px] text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-3xl xs:text-4xl md:text-[54px] font-[600] leading-tight md:leading-[68px] tracking-[-0.03em] md:tracking-[-1.35px] text-[#1B2129]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              How Everything Began:
              <br className="hidden md:block" />
              From a Basic Concept to
              <br className="hidden md:block" />
              Robust Basis
            </motion.h2>
            <motion.p 
              className="mt-6 md:mt-[24px] text-base md:text-[16px] font-[400] leading-relaxed md:leading-[28px] tracking-tight text-[#3F4753]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Gohil Infotech began with the straightforward notion that there had
              to be an improved method for providing IT services. All too
              frequently, companies had to deal with poor communication, hurried work, and
              overly complicated solutions. We thought that technology ought to
              be sincere, useful, and purpose-driven. Although the aim was clear,
              the early days were modest. Create a business that prioritizes long-term
              value, excellence, and openness. a business that gives each job, regardless
              of size, careful consideration. The influence grew, the crew grew, and the
              obstacles increased over time. Our dedication to doing things well and
              creating solutions that genuinely aid in our clients&apos; development has
              not altered.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
