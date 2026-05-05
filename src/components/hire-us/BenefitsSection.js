"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team consists of highly skilled developers and designers with years of industry experience.",
      imgSrc: siteData.hireUs.benefits.expertise
    },
    {
      title: "Seamless Communication",
      description: "We maintain transparent and regular communication to keep you updated on project progress.",
      imgSrc: siteData.hireUs.benefits.comms
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize your business goals and work closely with you to deliver tailored solutions.",
      imgSrc: siteData.hireUs.benefits.clientCentric
    },
    {
      title: "Rapid Delivery",
      description: "We use agile methodologies to ensure timely delivery of high-quality products.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[40px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[16px] p-6 md:p-[32px] text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-12 h-12 md:w-[56px] md:h-[56px] bg-[#EEF2FF] rounded-[12px] flex items-center justify-center mx-auto mb-5 md:mb-[24px] overflow-hidden p-3 md:p-4">
                {benefit.imgSrc ? (
                  <Image 
                    src={benefit.imgSrc} 
                    alt={benefit.title} 
                    fill 
                    sizes="(max-width: 768px) 48px, 56px"
                    className="object-contain p-2" 
                    unoptimized={true}
                  />
                ) : null}
              </div>
              <h3 className="text-lg md:text-[20px] font-[600] text-[#0F172A] mb-2 md:mb-[12px]">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-[#64748B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
