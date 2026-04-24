"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F7F9FE] pt-[120px] pb-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="text-[14px] font-[500] text-[#2F2C8F] uppercase tracking-[0.1em] mb-[16px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            HIRE US
          </motion.div>
          <motion.h1 
            className="text-[56px] font-[700] leading-[1.1] tracking-[-0.02em] text-[#0F172A] mb-[16px] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Hire World-Class Developers
            <br />
            and Designers at GIPL
          </motion.h1>
          <motion.div 
            className="text-[16px] font-[400] leading-[1.6] text-[#64748B] mb-[16px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            at GIPL
          </motion.div>
          <motion.p 
            className="text-[18px] font-[400] leading-[1.7] text-[#64748B] max-w-[900px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Transform your business with our expert team of developers, designers, and digital strategists. From concept to deployment, we deliver exceptional results.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="w-full rounded-[20px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <img 
            src="/hire-us/3b0f421f76d85ef2751a9a388ba2e5801db159d6.jpg" 
            alt="GIPL Team" 
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
