"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

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

const statistics = [
  { number: "200+", label: "Projects Completed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Technical Support" },
];

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#F7F9FE] py-20 md:py-20 flex items-center justify-center overflow-hidden">
      <div className="home-section-container w-full flex flex-col gap-16 md:gap-20 px-6 md:px-0 ">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 lg:gap-20">
          <motion.div
            className="max-w-[720px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <p className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.15em] text-[#2F3AA8] mb-6">
              SMART IT SOLUTIONS FOR GROWING BUSINESSES
            </p>

            <h2 className="text-3xl md:text-[52px] font-bold leading-[1.1] tracking-tight text-[#1E293B]">
              Your Trusted IT Development<br />
              Partner <span className="text-[#2F5AB0]">in Ahmedabad</span>
            </h2>

            <p className="mt-8 text-base md:text-[19px] font-normal leading-relaxed text-[#475569] max-w-[650px]">
              We help local businesses and companies worldwide grow with reliable IT solutions. From custom software to mobile apps, we build technology that works for your business. Based in Ahmedabad, we understand what Gujarat businesses need to succeed.
            </p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/service"
                className="inline-flex h-[56px] px-10 items-center justify-center gap-[12px] rounded-full bg-[#2F2C8E] text-[17px] font-bold text-white shadow-xl transition-all hover:bg-[#26247a]"
              >
                Our IT Service
                <ArrowUpRightIcon />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square shrink-0 overflow-hidden rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] rotate-2 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <Image
              src={siteData.home.partner.office}
              alt="Office interior"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Statistics Bar integrated */}
        <motion.div
          className="w-full rounded-[32px] bg-[#0A1628] p-8 md:p-12 shadow-2xl border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center relative px-4 md:px-8">
                {/* Blurred Blue Divider */}
                {index < statistics.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 h-12 w-[2px] bg-[#2F5AB0] shadow-[0_0_8px_#2F5AB0] transform -translate-y-1/2 opacity-60" />
                )}

                <div className="flex flex-col text-left">
                  <div className="text-3xl md:text-[44px] font-bold text-white tracking-tight leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="font-manrope text-[13px] md:text-[15px] font-medium text-slate-300/80 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

