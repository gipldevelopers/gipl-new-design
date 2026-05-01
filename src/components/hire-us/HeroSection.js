"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Delivered" },
  { number: "100+", label: "Expert Team" },
  { number: "50+", label: "Global Clients" },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F7F9FE] pt-24 md:pt-[120px] pb-12 md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div 
          className="mb-10 md:mb-[60px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="text-[11px] md:text-[14px] font-[500] text-[#2F2C8F] uppercase tracking-[0.1em] mb-3 md:mb-[16px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            HIRE US
          </motion.div>
          <motion.h1 
            className="text-[28px] xs:text-4xl md:text-[56px] font-[700] leading-tight md:leading-[1.1] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px] max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Hire World-Class Developers
            <br className="hidden md:block" />
            and Designers at GIPL
          </motion.h1>
          <motion.p 
            className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[900px] mx-auto md:mx-0"
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
            className="w-full h-[240px] xs:h-[300px] md:h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>

  );
}
