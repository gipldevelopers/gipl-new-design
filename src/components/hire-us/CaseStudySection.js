"use client";

import { motion } from "framer-motion";

export default function CaseStudySection() {
  return (
    <section className="w-full bg-[#F7F9FE] py-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-[48px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#0F172A]">
            Exploring Case Studies
          </h2>
        </motion.div>

        <motion.div 
          className="bg-[#1A1A1A] rounded-[24px] overflow-hidden relative min-h-[450px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <div className="absolute inset-0">
            <img 
              src="/hire-us/6560e2566312a55b7797604a34bcdfe060398449.png"
              alt="Gvoice POS Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-[60px] flex items-center min-h-[450px]">
            <motion.div 
              className="max-w-[520px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.div 
                className="text-[12px] font-[600] text-[#5B7CFF] uppercase tracking-[0.15em] mb-[20px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                FEATURED PROJECT
              </motion.div>
              <motion.h3 
                className="text-[56px] font-[700] leading-[1.1] mb-[20px] text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                Gvoice POS
              </motion.h3>
              <motion.p 
                className="text-[16px] font-[400] leading-[1.6] text-white/70 mb-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                A revolutionary point-of-sale system that integrated voice commands and AI inventory management for 5,000+ retail outlets.
              </motion.p>
              
              <motion.div 
                className="flex gap-[80px] mb-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <div>
                  <div className="text-[40px] font-[700] text-white mb-[4px]">40%</div>
                  <div className="text-[13px] font-[400] text-white/50">Efficiency Gain</div>
                </div>
                <div>
                  <div className="text-[40px] font-[700] text-white mb-[4px]">2.4M</div>
                  <div className="text-[13px] font-[400] text-white/50">Monthly Trans.</div>
                </div>
              </motion.div>

              <motion.button 
                className="bg-white text-[#000000] px-[28px] py-[14px] rounded-full text-[15px] font-[600] flex items-center gap-[10px] hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
