"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "/home/home_images/vscode-icons_file-type-reactjs.svg" },
  { name: "Angular", icon: "/home/home_images/material-icon-theme_angular.svg" },
  { name: "Python", icon: "/home/home_images/material-icon-theme_python.svg" },
  { name: "Node.js", icon: "/home/home_images/logos_nodejs.svg" },
  { name: "AWS", icon: "/home/home_images/logos_aws.svg" },
  { name: "Java", icon: "/home/home_images/devicon_java-wordmark.svg" },
  { name: ".NET", icon: "/home/home_images/asp.net-logo.png" },
  { name: "MySQL", icon: "/home/home_images/mysql-logo.png" },
  { name: "PHP", icon: "/home/home_images/devicon_php.svg" },
  { name: "Laravel", icon: "/home/home_images/material-icon-theme_laravel.svg" },
  { name: "Android", icon: "/home/home_images/devicon_android.svg" },
  { name: "iOS", icon: "/home/home_images/ic_round-apple.svg" },
];

export default function ServiceTechnologySection() {
  return (
    <section className="w-full bg-[#ECEEF2] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.h2
          className="text-center text-2xl xs:text-3xl md:text-[36px] font-[700] leading-tight md:leading-[1.25] tracking-[-0.03em] text-[#2F3641]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          The Core Modern Technologies for Better Results
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 md:mt-[16px] max-w-[680px] text-center text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.6] tracking-[-0.02em] text-[#4E5663]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          We don&apos;t just write code; we engineer value. Our services are
          tailored to solve specific business bottlenecks through high-fidelity
          technology.
        </motion.p>

        <motion.div
          className="mt-10 md:mt-[48px] overflow-hidden rounded-[20px] border border-[#DEE1E7] bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-3 py-6 md:py-8 border-b border-r border-[#DEE1E7] 
                           [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n)]:border-r md:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(4n)]:border-r lg:[&:nth-child(6n)]:border-r-0
                           [&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b-0 lg:[&:nth-last-child(-n+6)]:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-8 w-10 md:h-[40px] md:w-[48px]">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48px"
                    className="object-contain"
                  />
                </div>
                <p className="text-[13px] md:text-[14px] font-[500] leading-[1] tracking-[0px] text-[#4E5663]">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  );
}
