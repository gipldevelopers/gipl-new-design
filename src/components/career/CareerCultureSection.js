"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

          {/* Left — image collage */}
          <motion.div 
            className="relative shrink-0 w-full xs:w-[400px] lg:w-[480px] h-[360px] xs:h-[400px] lg:h-[480px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="absolute left-0 top-0 h-[200px] xs:h-[280px] w-[160px] xs:w-[220px] overflow-hidden rounded-[16px] shadow-[0_18px_50px_rgba(17,24,39,0.10)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Image
                src="/career/1877c8ffc4eb50d23988e285e17a6c9610d3b1ce.png"
                alt="GIPL workspace"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute right-0 top-[32px] xs:top-[48px] h-[280px] xs:h-[380px] w-[160px] xs:w-[230px] overflow-hidden rounded-[16px] shadow-[0_18px_50px_rgba(17,24,39,0.10)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Image
                src="/career/19e45c51077943ef79bb30f2b8ca27af65faf874.png"
                alt="GIPL engineering workspace"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

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
