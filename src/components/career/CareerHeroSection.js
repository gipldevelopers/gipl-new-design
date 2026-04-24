"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CareerHeroSection() {
  return (
    <section className="w-full bg-[linear-gradient(90deg,#071321_0%,#0C2850_100%)]">
      <div className="w-full px-[34px] py-[80px] flex items-center justify-between gap-12">

        {/* Left content */}
        <motion.div 
          className="flex-1 max-w-[640px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h1 
            className="text-[64px] font-[600] leading-[1.15] tracking-[-2px] text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Gohil Infotech will
            <br />
            help you shape your
            <br />
            future
          </motion.h1>

          <motion.p 
            className="mt-[28px] text-[20px] leading-[1.6] tracking-[-0.3px] text-white/80 font-[400]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Our group of builders, thinkers, and problem solvers takes
            pleasure in producing significant digital solutions. Here your
            work matters and your development is handled seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#open-roles"
              className="mt-[36px] inline-flex h-[56px] items-center gap-[12px] rounded-full bg-[#4267EE] px-[28px] text-[17px] font-[600] text-white hover:bg-[#3558d4] transition-colors"
            >
              <span>Openings Available</span>
              <Image
                src="/career/Frame (3).svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div 
          className="relative shrink-0 w-[520px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="overflow-hidden rounded-[24px] bg-black h-[480px] w-full"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/career/35426d19ba38a55a742624ed86c4f5d95b7506e1.png"
              alt="Career hero visual"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            className="absolute bottom-[-24px] left-[-24px] flex h-[88px] w-[260px] items-center rounded-[16px] bg-[#CFCFD0] pl-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#18C3F1_0%,#2B3DAA_100%)]"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/career/Icon (9).svg"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </motion.div>
            <div className="ml-[12px]">
              <p className="text-[11px] font-[600] uppercase tracking-[1.4px] text-[#28344D]">
                System Status
              </p>
              <p className="mt-[3px] text-[15px] font-[600] text-[#1F2937]">
                100% Operational
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
