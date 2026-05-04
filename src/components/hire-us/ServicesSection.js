"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F7F9FE] py-12 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 md:mb-[60px] text-center md:text-left gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div>
            <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px]">
              Our Services
            </h2>
            <p className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B]">
              Comprehensive technology solutions tailored to your unique business challenges.
            </p>
          </div>
          <button className="bg-[#5B73F7] text-white px-6 md:px-[28px] py-3 md:py-[14px] rounded-full text-sm md:text-[16px] font-[600] flex items-center gap-[8px] hover:bg-[#4F6EF7] transition-colors shrink-0">
            Start your project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

        {/* Top Row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-[24px] mb-6 md:mb-[24px]">
          {/* Custom Software Development - Takes 3 columns */}
          <motion.div
            className="md:col-span-3 bg-[#1A2332] rounded-[20px] p-8 md:p-[40px] text-white relative overflow-hidden min-h-[220px] md:h-[240px] flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0">
              <Image
                src="/hire-us/243bbc3eaf9933e3a8dfd6eb280e396df46e86d1.png"
                alt="Code background"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-50"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-[32px] font-[700] mb-3 md:mb-[16px]">
                Custom Software Development
              </h3>
              <p className="text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.6] text-white/80">
                Scalable backend architectures and intuitive interfaces built from the ground up.
              </p>
            </div>
          </motion.div>

          {/* Mobile Apps - Takes 2 columns */}
          <motion.div
            className="md:col-span-2 bg-[#5B73F7] rounded-[20px] p-8 md:p-[40px] text-white min-h-[220px] md:h-[240px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 md:w-[48px] md:h-[48px] bg-white/20 rounded-[12px] flex items-center justify-center mb-6 md:mb-[24px]">
              <Image src="/hire-us/mobile.png" alt="Mobile Apps" width={24} height={24} className="object-contain brightness-0 invert" style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="text-2xl md:text-[32px] font-[700] mb-3 md:mb-[16px]">
              Mobile Apps
            </h3>
            <p className="text-sm md:text-[16px] font-[400] leading-relaxed md:leading-[1.6] text-white/80">
              iOS, Android & Cross-platform excellence.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-[24px]">
          {/* Cloud Solutions - Takes 2 columns */}
          <motion.div
            className="md:col-span-2 bg-[#E6EAFF] rounded-[20px] p-8 md:p-[40px] min-h-[220px] md:h-[280px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 md:w-[48px] md:h-[48px] bg-[#5B73F7]/20 rounded-[12px] flex items-center justify-center mb-6 md:mb-[24px]">
              <Image src="/hire-us/cloud.png" alt="Cloud Solutions" width={24} height={24} className="object-contain" style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="text-xl md:text-[24px] font-[700] text-[#0F172A] mb-3 md:mb-[12px]">
              Cloud Solutions
            </h3>
            <p className="text-sm md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-[#64748B]">
              AWS, Azure & Google Cloud migration and management.
            </p>
          </motion.div>

          {/* UI/UX Strategy - Takes 2 columns */}
          <motion.div
            className="md:col-span-2 bg-white rounded-[20px] p-8 md:p-[40px] min-h-[220px] md:h-[280px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl md:text-[24px] font-[700] text-[#0F172A] mb-3 md:mb-[12px]">
              UI/UX Strategy
            </h3>
            <p className="text-sm md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-[#64748B] mb-5 md:mb-[20px]">
              User-first designs that drive engagement and conversion through scientific research and aesthetic mastery.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-[8px]">
              <span className="bg-[#E6EAFF] text-[#5B73F7] px-3 md:px-[12px] py-1 md:py-[4px] rounded-[6px] text-[10px] md:text-[12px] font-[500]">
                PROTOTYPING
              </span>
              <span className="bg-[#E6EAFF] text-[#5B73F7] px-3 md:px-[12px] py-1 md:py-[4px] rounded-[6px] text-[10px] md:text-[12px] font-[500]">
                WIREFRAMING
              </span>
            </div>
          </motion.div>

          {/* UI/UX Image - Takes 1 column */}
          <motion.div
            className="md:col-span-1 bg-[#6B8E7F] rounded-[20px] flex items-center justify-center h-[240px] md:h-[280px] overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/hire-us/d38a7fe648846fac21bcac9c7f47b0df8c15fa07.jpg"
              alt="UI/UX Design"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}