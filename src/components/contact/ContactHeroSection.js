"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactDetails = [
  {
    title: "Our Office Location",
    icon: "/contact/location.png",
    lines: [
      "209, Aamrakunj Business Centre",
      "Near Panchshlok, Chandkheda",
      "Ahmedabad, Gujarat, India - 382424",
    ],
  },
  {
    title: "Phone",
    icon: "/contact/phone.png",
    lines: ["+91 8866009512"],
  },
  {
    title: "Email",
    icon: "/contact/email.png",
    lines: ["info@gohilinfotech.com"],
  },
];

export default function ContactHeroSection() {
  return (
    <section className="w-full min-h-[183px] flex items-center bg-[#F2F4F8] ">
      <div className="w-full mx-auto max-w-[1440px] px-[34px]">

        {/* Hero banner */}
        <motion.div
          className="relative overflow-hidden rounded-[20px] bg-[#031744] px-6 md:px-[48px] pb-12 md:pb-[64px] pt-16 md:pt-[72px] text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src="/contact/Group 1689.svg"
            alt=""
            width={120}
            height={80}
            className="pointer-events-none absolute left-[40px] top-[60px] opacity-20 hidden md:block"
          />
          <Image
            src="/contact/Group 1688 (3).svg"
            alt=""
            width={48}
            height={48}
            className="pointer-events-none absolute right-[60px] top-[80px] opacity-20 hidden md:block"
          />

          <motion.h1
            className="text-3xl xs:text-4xl md:text-[52px] font-[800] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.03em] text-white font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 md:mt-[20px] max-w-[560px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            We&apos;d love to hear from you! Whether you have a project idea, a
            question, or just want to say hello, our team is ready to connect.
          </motion.p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          className="mt-8 md:mt-[40px] pb-2 md:pb-[8px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                className={`px-8 py-8 md:px-[36px] md:py-[36px] ${index !== contactDetails.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#E2E8F0]"
                  : ""
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#EEF2FF] mx-auto md:mx-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={detail.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </motion.div>
                <h2 className="mt-4 md:mt-[16px] text-lg md:text-[18px] font-[700] leading-tight text-[#1F2937] text-center md:text-left">
                  {detail.title}
                </h2>
                <div className="mt-2 md:mt-[10px] space-y-1 md:space-y-[4px] text-center md:text-left">
                  {detail.lines.map((line, lineIndex) => (
                    <motion.p
                      key={line}
                      className={`text-sm md:text-[15px] font-[400] leading-relaxed md:leading-[1.6] text-[#475569] ${detail.title === "Email" ? "underline text-[#4F6EF7]" : ""
                        }`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + lineIndex * 0.05 }}
                      viewport={{ once: false }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
