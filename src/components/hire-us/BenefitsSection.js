"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Proven Technical Expertise",
      description: "Work with experienced professionals skilled in software development, digital products, and scalable business solutions.",
      imgSrc: siteData.hireUs.benefits.expertise
    },
    {
      title: "Transparent Communication",
      description: "Stay updated through structured communication, regular progress tracking, and collaborative development workflows.",
      imgSrc: siteData.hireUs.benefits.comms
    },
    {
      title: "Business-Focused Approach",
      description: "Every solution is aligned with your business goals, operational needs, and long-term growth strategy.",
      imgSrc: siteData.hireUs.benefits.clientCentric
    },
    {
      title: "Faster Project Delivery",
      description: "Agile development processes help reduce timelines while maintaining quality, performance, and scalability.",
      imgSrc: siteData.hireUs.benefits.rapidDelivery
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] py-12 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="text-center mb-10 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px]">
            Benefits of Partnering with Us
          </h2>
          <p className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[600px] mx-auto">
            We don't just build software; we build the future of your business through strategic technical partnership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[24px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[24px] p-6 md:p-[32px] text-left shadow-sm border border-[#E2E8F0]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}
            >
              <div className="relative w-12 h-12 md:w-[52px] md:h-[52px] bg-[#EAF2FF] rounded-[12px] flex items-center justify-center mb-6 md:mb-[28px] overflow-hidden">
                {benefit.imgSrc ? (
                  <Image
                    src={benefit.imgSrc}
                    alt={benefit.title}
                    width={24}
                    height={24}
                    className="object-contain"
                    unoptimized={true}
                  />
                ) : null}
              </div>
              <h3 className="text-xl md:text-[22px] font-[700] text-[#0F172A] mb-3 md:mb-[16px] leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-[400] leading-relaxed text-[#64748B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
