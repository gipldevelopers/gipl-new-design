"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const miniServices = [
  {
    title: "Mobile App Development",
    description: [
      "Robust blueprinting for microservices",
      "and distributed systems.",
    ],
    icon: "/home/home_images/mobile-icon.png",
  },
  {
    title: "Business Automation",
    description: [
      "Highly responsive, SEO-optimized",
      "web platforms built with modern",
      "stacks.",
    ],
    icon: "/home/home_images/automation-icon.png",
  },
  {
    title: "ERP Solutions",
    description: [
      "Zero-trust security frameworks",
      "integrated at every layer of",
      "development.",
    ],
    icon: "/home/home_images/erp-icon.png",
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

export default function ServiceGrid() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#EDF1F7] py-12 md:py-0 overflow-hidden">
      <div className="home-section-container w-full py-8 md:py-12">
        <motion.div
          className="flex flex-col md:flex-row w-full items-center md:items-end justify-between gap-6 md:gap-8 px-6 md:px-0 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="max-w-full md:max-w-[75%] text-center md:text-left">
            <h2 className="text-3xl md:text-[38px] font-medium leading-tight tracking-tight text-[#1E293B]">
              Complete IT Development Services
            </h2>
            <p className="mt-3 text-base md:text-[17px] font-normal leading-relaxed text-[#475569] max-w-[600px]">
              Professional IT solutions designed to help your business grow faster and work smarter in today&apos;s digital landscape.
            </p>
          </div>

          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/service"
              className="inline-flex h-11 md:h-[52px] px-8 items-center justify-center gap-[10px] rounded-full bg-[#38339C] text-[15px] md:text-[16px] font-bold text-white shadow-lg transition-all"
            >
              View all services
              <ArrowUpRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0">
          <motion.article
            className="col-span-1 md:col-span-2 rounded-[24px] bg-white p-6 md:p-8 flex flex-col justify-between shadow-sm border border-slate-100 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <div>
              <Image
                src="/home/home_images/web-icon.png"
                alt="Web development"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <h3 className="mt-4 text-xl md:text-[28px] font-medium text-[#1E293B]">
                Web Development
              </h3>
              <p className="mt-3 text-sm md:text-[16px] text-[#475569] leading-relaxed">
                Professional websites that look great and help you get more customers. Mobile-friendly and easy to manage.
              </p>
            </div>
            <div className="relative mt-6 h-[140px] md:h-[180px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/home/home_images/bf7783e7afd3bc0d69cd067a36fda981882aabce.png"
                alt="Global network map"
                fill
                className="object-cover"
              />
            </div>
          </motion.article>

          <motion.article
            className="col-span-1 rounded-[24px] bg-[linear-gradient(180deg,#0F2B57_0%,#08234A_100%)] p-6 md:p-8 text-white flex flex-col shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <Image
              src="/home/home_images/custom-icon.png"
              alt="Custom software development"
              width={28}
              height={28}
              className="h-7 w-7 brightness-0 invert"
            />
            <h3 className="mt-4 text-xl md:text-[28px] font-medium">
              Custom Software Development
            </h3>
            <p className="mt-4 text-sm md:text-[16px] text-white/80 leading-relaxed">
              Build software that fits your exact business needs. From billing systems to inventory management.
            </p>
            <div className="mt-auto pt-6">
              <Link
                href="/service"
                className="inline-flex items-center gap-[10px] text-[15px] md:text-[16px] font-bold text-[#426AF2]"
              >
                Learn More
                <ArrowUpRightIcon />
              </Link>
            </div>
          </motion.article>

          {miniServices.map((service, index) => (
            <motion.article
              key={service.title}
              className="rounded-[24px] bg-white p-6 md:p-8 shadow-sm border border-slate-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <h3 className="mt-4 text-lg md:text-[22px] font-medium text-[#1E293B]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-[#475569] leading-relaxed">
                {service.description.join(" ")}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

