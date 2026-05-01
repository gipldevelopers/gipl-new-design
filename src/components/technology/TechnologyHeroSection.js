"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.83398 14.166L14.1673 5.83268"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.83301H14.1667V12.4997"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(93.36deg,#0A1F3B_0.52%,#08254D_54.86%,#07234A_100%)] min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="home-section-container w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-0 ">
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] font-[800] leading-[1.2] md:leading-[1.1] tracking-[-0.04em] text-white font-poppins">
            <span className="block">Growth and Digital</span>
            <span className="block">
              Transformation
            </span>
          </h1>

          <motion.p
            className="mt-6 md:mt-[30px] max-w-[650px] text-base sm:text-lg md:text-[20px] lg:text-[22px] font-normal leading-[1.6] tracking-[-0.02em] text-white/90 font-manrope"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Comprehensive solutions designed to accelerate your business growth and digital transformation.
          </motion.p>

          <motion.div
            className="mt-8 md:mt-[40px] flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto h-12 md:h-[56px] px-10 items-center justify-center gap-[12px] rounded-full bg-[linear-gradient(90deg,#426AF2_0%,#416BF4_100%)] text-[16px] md:text-[17px] font-semibold text-white font-manrope"
              >
                Start your project
                <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>



        <motion.div
          className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square shrink-0 mx-auto mt-12 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-black shadow-[0_32px_64px_rgba(0,0,0,0.3)]">
            <Image
              src="/home/home_images/35426d19ba38a55a742624ed86c4f5d95b7506e1.png"
              alt="Abstract digital structure"
              fill
              priority
              className="object-cover"
            />
          </div>

          <motion.div
            className="absolute bottom-[-20px] md:bottom-[-30px] left-4 md:left-[-30px] flex h-[70px] md:h-[90px] w-[200px] md:w-[260px] items-center gap-[12px] md:gap-[18px] rounded-[24px] bg-[#C9CDD3] px-4 md:px-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)] z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex h-10 w-10 md:h-[52px] md:w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#1EB6EC_0%,#2D348F_100%)]">
              <Image
                src="/career/Icon (9).svg"
                alt="Rocket status icon"
                width={26}
                height={26}
                className="h-5 w-5 md:h-[26px] md:w-[26px]"
              />
            </div>
            <div>
              <p className="text-[9px] md:text-[11px] font-[700] uppercase tracking-[1px] md:tracking-[1.6px] text-[#28344D] font-manrope">
                System Status
              </p>
              <p className="mt-[2px] md:mt-[4px] text-sm md:text-[16px] font-[700] text-[#111827] font-poppins">
                100% Operational
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
