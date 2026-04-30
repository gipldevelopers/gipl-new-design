"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    {
      imgSrc: "/hire-us/hire-1.png",
      title: "Proven Expertise",
      description: "Access a team with deep domain knowledge and technical mastery across industries."
    },
    {
      imgSrc: "/hire-us/hire-2.png",
      title: "Clear Comms",
      description: "Transparent, real-time updates through dedicated slack channels and weekly sprints."
    },
    {
      imgSrc: "/hire-us/hire-3.png",
      title: "Client-Centric",
      description: "Your business goals drive our technical decisions. We prioritize your success."
    },
    {
      imgSrc: "/hire-us/hire-4.png",
      title: "Rapid Delivery",
      description: "Agile methodologies that cut development time by 40% without compromising quality."
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] py-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-[48px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#0F172A] mb-[16px]">
            Benefits of Partnering with Us
          </h2>
          <p className="text-[18px] font-[400] leading-[1.7] text-[#64748B] max-w-[600px] mx-auto">
            We don't just build software; we build the future of your business through strategic technical partnership.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-[40px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[16px] p-[32px] text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-[56px] h-[56px] bg-[#EEF2FF] rounded-[12px] flex items-center justify-center mx-auto mb-[24px]">
                {benefit.imgSrc ? (
                  <Image src={benefit.imgSrc} alt={benefit.title} width={24} height={24} className="object-contain" />
                ) : null}
              </div>
              <h3 className="text-[20px] font-[600] text-[#0F172A] mb-[12px]">
                {benefit.title}
              </h3>
              <p className="text-[14px] font-[400] leading-[1.6] text-[#64748B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
