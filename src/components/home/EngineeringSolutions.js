"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const solutions = [
  {
    title: "Customer Management",
    icon: siteData.home.engineering.customer,
  },
  {
    title: "Sales Management",
    icon: siteData.home.engineering.sales,
  },
  {
    title: "Business Intelligence",
    icon: siteData.home.engineering.bi,
  },
  {
    title: "Accounting Integration",
    icon: siteData.home.engineering.accounting,
  },
];

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

export default function EngineeringSolutions() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F7F9FE] py-12 md:py-0 overflow-hidden">
      <div className="home-section-container w-full">
        <motion.div
          className="flex flex-col md:flex-row w-full items-center md:items-end justify-between px-6 md:px-0 text-center md:text-left gap-6 md:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="max-w-[800px]">

            <h2 className="text-3xl md:text-[38px] font-bold leading-tight tracking-tight text-[#1E293B]">
              Built to Solve Real Business Challenges
            </h2>
            <p className="mt-4 text-base md:text-[18px] font-normal leading-relaxed text-[#475569]">
              We focus on building systems that remove bottlenecks, improve workflows, and help businesses operate more efficiently.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/service"
              className="inline-flex h-12 md:h-[52px] px-8 items-center justify-center gap-[12px] rounded-full bg-[#38339C] text-[16px] md:text-[17px] font-semibold text-white shadow-lg"
            >
              Explore All Services
              <ArrowUpRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className="rounded-[24px] bg-white p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F7FB]">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h3 className="mt-6 text-[20px] font-bold text-[#1E293B]">
                {solution.title}
              </h3>
              <p className="mt-3 text-[15px] text-[#475569] leading-relaxed">
                Manage customer data, track interactions, and improve retention with CRM systems built for your workflow.
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

  );
}
