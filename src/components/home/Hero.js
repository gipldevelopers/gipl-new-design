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
    <section className="w-full bg-[linear-gradient(93.36deg,#0A1F3B_0.52%,#08254D_54.86%,#07234A_100%)] min-h-screen flex items-center justify-center overflow-x-clip">
      <div className="home-section-container flex flex-wrap w-full items-center justify-between gap-12 py-20 ">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
            <span className="block">End-to-End IT</span>
            <span className="block">
              Services That{" "}
              <span className="bg-[linear-gradient(90deg,#2B99F0_0%,#1F65C2_100%)] bg-clip-text text-transparent">
                Power
              </span>
            </span>
            <span className="block bg-[linear-gradient(180deg,#2F5ACB_0%,#2C43B4_100%)] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          <motion.p
            className="mt-[30px] max-w-[600px] text-[22px] font-normal leading-[1.4] tracking-[-0.03em] text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="block">
              We build custom software, automate workflows, and design
            </span>
            <span className="block">
              digital experiences that help brands grow faster.
            </span>
          </motion.p>

          <motion.div
            className="mt-[40px] flex items-center gap-[20px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/service"
                className="inline-flex h-[56px] px-8 items-center justify-center gap-[12px] rounded-full bg-[linear-gradient(90deg,#426AF2_0%,#416BF4_100%)] text-[17px] font-semibold text-white"
              >
                Explore Products
                <ArrowUpRightIcon />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex h-[56px] px-8 items-center justify-center rounded-full border border-white/70 text-[17px] font-medium text-white"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[500px] w-[500px] shrink-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-black">
            <Image
              src="/home/home_images/35426d19ba38a55a742624ed86c4f5d95b7506e1.png"
              alt="Abstract digital structure"
              fill
              priority
              className="object-cover"
            />
          </div>

          <motion.div
            className="absolute bottom-[-30px] left-[-30px] flex h-[100px] w-[260px] items-center gap-[15px] rounded-[18px] bg-[#C9CDD3] px-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[6px] bg-[linear-gradient(180deg,#1EB6EC_0%,#2D348F_100%)]">
              <Image
                src="/icons/Icon.svg"
                alt="Status"
                width={24}
                height={24}
                className="h-[24px] w-[24px]"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-[#2F3850]">
                SYSTEM STATUS
              </p>
              <p className="mt-[1px] text-[15px] font-semibold leading-tight text-[#2F3850]">
                100% Operational
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
