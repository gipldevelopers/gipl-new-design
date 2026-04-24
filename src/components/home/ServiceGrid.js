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
    icon: "/home/home_images/Icon_(1).svg",
  },
  {
    title: "Business Automation",
    description: [
      "Highly responsive, SEO-optimized",
      "web platforms built with modern",
      "stacks.",
    ],
    icon: "/home/home_images/automation_1.svg",
  },
  {
    title: "ERP Solutions",
    description: [
      "Zero-trust security frameworks",
      "integrated at every layer of",
      "development.",
    ],
    icon: "/home/home_images/Icon_(3).svg",
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
    <section className="w-full bg-[#EDF1F7] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container w-full">
        <motion.div 
          className="flex w-full items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="max-w-[700px]">
            <h2 className="text-[42px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342]">
              Complete IT Development Services
            </h2>
            <p className="mt-6 text-[20px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352]">
              <span className="block">
                Professional IT solutions designed to help your business grow faster and work smarter in today&apos;s digital world.
              </span>
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/service"
              className="inline-flex h-[56px] px-8 items-center justify-center gap-[12px] rounded-full bg-[#38339C] text-[17px] font-semibold text-white"
            >
              View all services
              <ArrowUpRightIcon />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid w-full grid-cols-3 gap-6">
          <motion.article 
            className="col-span-2 rounded-[24px] bg-white p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <div>
              <Image
                src="/home/home_images/Icon_(2).svg"
                alt="Web development"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="mt-8 text-[32px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342]">
                Web Development
              </h3>
              <p className="mt-4 text-[18px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352]">
                <span className="block">
                  Professional websites that look great and help you get more
                </span>
                <span className="block">customers. Mobile-friendly and easy to manage</span>
              </p>
            </div>
            <div className="relative mt-8 h-[200px] w-full overflow-hidden rounded-[12px]">
              <Image
                src="/home/home_images/bf7783e7afd3bc0d69cd067a36fda981882aabce.png"
                alt="Global network map"
                fill
                className="object-cover"
              />
            </div>
          </motion.article>

          <motion.article 
            className="col-span-1 rounded-[24px] bg-[linear-gradient(180deg,#0F2B57_0%,#08234A_100%)] p-10 text-white flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <Image
              src="/home/home_images/software-development_1.svg"
              alt="Custom software development"
              width={32}
              height={32}
              className="h-8 w-8 brightness-0 invert"
            />
            <h3 className="mt-8 text-[32px] font-semibold leading-tight tracking-[-0.05em]">
              <span className="block">Custom Software</span>
              <span className="block">Development</span>
            </h3>
            <p className="mt-6 text-[18px] font-normal leading-relaxed tracking-[-0.04em] text-white/70">
              <span className="block">Build software that fits your exact business</span>
              <span className="block">needs. From billing systems to inventory</span>
              <span className="block">management - we create solutions that</span>
              <span className="block">work.</span>
            </p>
            <div className="mt-auto pt-10">
              <Link
                href="/service"
                className="inline-flex items-center gap-[12px] text-[17px] font-semibold text-[#3E67FF]"
              >
                Learn More
                <ArrowUpRightIcon />
              </Link>
            </div>
          </motion.article>

          {miniServices.map((service, index) => (
            <motion.article
              key={service.title}
              className="rounded-[24px] bg-white p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="mt-8 text-[28px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342]">
                {service.title}
              </h3>
              <p className="mt-4 text-[18px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352]">
                {service.description.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
