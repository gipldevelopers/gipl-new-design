"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const technologies = [
  { name: "React", icon: "/home/home_images/vscode-icons_file-type-reactjs.svg" },
  { name: "Angular", icon: "/home/home_images/material-icon-theme_angular.svg" },
  { name: "Python", icon: "/home/home_images/material-icon-theme_python.svg" },
  { name: "Node.js", icon: "/home/home_images/logos_nodejs.svg" },
  { name: "aws", icon: "/home/home_images/logos_aws.svg" },
  { name: "java", icon: "/home/home_images/devicon_java-wordmark.svg" },
  { name: ".net", icon: "/home/home_images/14cb4549ad004bf3fda14e227c2f711c24783402.png" },
  { name: "MySQL", icon: "/home/home_images/23c3162dfa2e2934b4777c03b45f35ece28219ee.png" },
  { name: "PHP", icon: "/home/home_images/devicon_php.svg" },
  { name: "Laravel", icon: "/home/home_images/material-icon-theme_laravel.svg" },
  { name: "Android", icon: "/home/home_images/devicon_android.svg" },
  { name: "ios", icon: "/home/home_images/ic_round-apple.svg" },
];

export default function Technologies() {
  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container w-full">
        <motion.h2 
          className="text-center text-[38px] font-semibold leading-tight tracking-[-0.055em] text-[#2D3342]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          The Core Modern Technologies for Better Results
        </motion.h2>
        <motion.p 
          className="mt-8 text-center text-[20px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352] max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          We don&apos;t just write code; we engineer value. Our services are tailored to solve specific business bottlenecks through high-fidelity technology.
        </motion.p>

        <motion.div 
          className="mt-16 grid w-full grid-cols-6 overflow-hidden rounded-[24px] border border-[#E2E7F0] bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className={`flex h-[120px] flex-col items-center justify-center p-4 ${
                index < 6 ? "border-b border-[#E8EDF4]" : ""
              } ${index % 6 !== 5 ? "border-r border-[#E8EDF4]" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-8 w-10">
                <Image
                  src={technology.icon}
                  alt={technology.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-tight tracking-[-0.04em] text-[#9BA9BE] uppercase">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
