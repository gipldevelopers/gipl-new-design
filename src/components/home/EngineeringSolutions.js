"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Customer Management",
    icon: "/home/home_images/customer-management-icon.png",
  },
  {
    title: "Sales Management",
    icon: "/home/home_images/sales-management-icon.png",
  },
  {
    title: "Business Intelligence",
    icon: "/home/home_images/business-intelligence-icon.png",
  },
  {
    title: "Accounting Integration",
    icon: "/home/home_images/accounting-integration-icon.png",
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
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container w-full">
        <motion.div
          className="flex w-full items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="max-w-[800px]">
            <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.055em] text-[#2D3342]">
              Engineering Solutions That Solve Your Biggest Challenges
            </h2>
            <p className="mt-6 text-[20px] font-normal leading-relaxed tracking-[-0.042em] text-[#3B4352]">
              <span className="block">
                We don&apos;t just write code; we engineer value. Our services are tailored to solve specific business bottlenecks through high-fidelity technology.
              </span>
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/service"
              className="inline-flex h-[56px] px-8 items-center justify-center gap-[12px] rounded-full bg-[#38339C] text-[17px] font-semibold text-white"
            >
              Explore All Services
              <ArrowUpRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid w-full grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className="rounded-[20px] bg-white p-8 shadow-[0_2px_0_rgba(233,237,245,0.7)] flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#F5F7FB]">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />
              </div>
              <h3 className="mt-10 text-[22px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342]">
                {solution.title}
              </h3>
              <p className="mt-4 text-[16px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352]">
                Track sales performance, manage leads, and grow your revenue.
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
