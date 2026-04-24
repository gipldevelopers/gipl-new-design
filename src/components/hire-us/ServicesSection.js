"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F7F9FE] py-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="flex justify-between items-start mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div>
            <h2 className="text-[48px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#0F172A] mb-[16px]">
              Our Services
            </h2>
            <p className="text-[18px] font-[400] leading-[1.7] text-[#64748B]">
              Comprehensive technology solutions tailored to your unique business challenges.
            </p>
          </div>
          <button className="bg-[#5B73F7] text-white px-[28px] py-[14px] rounded-full text-[16px] font-[600] flex items-center gap-[8px] hover:bg-[#4F6EF7] transition-colors">
            Start your project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>

        {/* Top Row - 2 cards */}
        <div className="grid grid-cols-5 gap-[24px] mb-[24px]">
          {/* Custom Software Development - Takes 3 columns */}
          <motion.div 
            className="col-span-3 bg-[#1A2332] rounded-[20px] p-[40px] text-white relative overflow-hidden h-[240px] flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0">
              <img 
                src="/hire-us/243bbc3eaf9933e3a8dfd6eb280e396df46e86d1.png" 
                alt="Code background" 
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-[32px] font-[700] mb-[16px]">
                Custom Software Development
              </h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-white/80">
                Scalable backend architectures and intuitive interfaces built from the ground up.
              </p>
            </div>
          </motion.div>

          {/* Mobile Apps - Takes 2 columns */}
          <motion.div 
            className="col-span-2 bg-[#5B73F7] rounded-[20px] p-[40px] text-white h-[240px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[48px] h-[48px] bg-white/20 rounded-[12px] flex items-center justify-center mb-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[32px] font-[700] mb-[16px]">
              Mobile Apps
            </h3>
            <p className="text-[16px] font-[400] leading-[1.6] text-white/80">
              iOS, Android & Cross-platform excellence.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row - 3 cards */}
        <div className="grid grid-cols-5 gap-[24px]">
          {/* Cloud Solutions - Takes 2 columns */}
          <motion.div 
            className="col-span-2 bg-[#E6EAFF] rounded-[20px] p-[40px] h-[280px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[48px] h-[48px] bg-[#5B73F7]/20 rounded-[12px] flex items-center justify-center mb-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#5B73F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[24px] font-[700] text-[#0F172A] mb-[12px]">
              Cloud Solutions
            </h3>
            <p className="text-[14px] font-[400] leading-[1.6] text-[#64748B]">
              AWS, Azure & Google Cloud migration and management.
            </p>
          </motion.div>

          {/* UI/UX Strategy - Takes 2 columns */}
          <motion.div 
            className="col-span-2 bg-white rounded-[20px] p-[40px] h-[280px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-[24px] font-[700] text-[#0F172A] mb-[12px]">
              UI/UX Strategy
            </h3>
            <p className="text-[14px] font-[400] leading-[1.6] text-[#64748B] mb-[20px]">
              User-first designs that drive engagement and conversion through scientific research and aesthetic mastery.
            </p>
            <div className="flex gap-[8px]">
              <span className="bg-[#E6EAFF] text-[#5B73F7] px-[12px] py-[4px] rounded-[6px] text-[12px] font-[500]">
                PROTOTYPING
              </span>
              <span className="bg-[#E6EAFF] text-[#5B73F7] px-[12px] py-[4px] rounded-[6px] text-[12px] font-[500]">
                WIREFRAMING
              </span>
            </div>
          </motion.div>

          {/* UI/UX Image - Takes 1 column */}
          <motion.div 
            className="col-span-1 bg-[#6B8E7F] rounded-[20px] flex items-center justify-center h-[280px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/hire-us/d38a7fe648846fac21bcac9c7f47b0df8c15fa07.jpg" 
              alt="UI/UX Design" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}