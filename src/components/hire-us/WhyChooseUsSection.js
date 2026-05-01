"use client";

import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      number: "01",
      title: "Local Business Focus",
      description: "We know Gujarat market requirements and build solutions that work for local businesses."
    },
    {
      number: "02", 
      title: "Affordable Solutions",
      description: "Quality IT development without heavy costs. Perfect for growing businesses with smart budgets."
    },
    {
      number: "03",
      title: "Complete Customization", 
      description: "Every business is different. We build software that matches your exact way of working."
    },
    {
      number: "04",
      title: "Reliable Support",
      description: "Based in Ahmedabad, we provide quick support when you need it. Your success is our priority."
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] py-12 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div 
          className="bg-[#0A2347] rounded-[20px] px-8 md:px-[60px] py-10 md:py-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="text-center mb-10 md:mb-[60px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.02em] text-white mb-4 md:mb-[16px]">
              Why Choose Us
            </h2>
            <p className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-white/60 max-w-[600px] mx-auto">
              We specialize in building reliable IT solutions for small and medium businesses.
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-[40px] relative">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index} 
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -5 }}
                >
                  {/* Connecting line from this circle to next circle */}
                  {index < 3 && (
                    <motion.div
                      className="absolute top-[32px] left-[calc(50%+32px)] w-[calc(100%+40px-64px)] h-[2px] bg-gradient-to-r from-[#3F5682] to-[#5A7BA8] z-0 hidden md:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: false }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}

                  <motion.div 
                    className="w-12 h-12 md:w-[64px] md:h-[64px] bg-[#3F5682] rounded-[16px] flex items-center justify-center mx-auto mb-5 md:mb-[24px] relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg md:text-[20px] font-[700] text-white/60">
                      {reason.number}
                    </span>
                  </motion.div>
                  <h3 className="text-lg md:text-[20px] font-[600] text-white mb-2 md:mb-[12px]">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-white/60">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}