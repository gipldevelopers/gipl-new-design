"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Local Business Focus",
    description: [
      "We know Gujarat market requirements",
      "and build solutions that work for local",
      "businesses.",
    ],
  },
  {
    number: "02",
    title: "Affordable Solutions",
    description: [
      "Quality IT development without heavy",
      "costs. Perfect for growing businesses",
      "with smart budgets.",
    ],
  },
  {
    number: "03",
    title: "Complete Customization",
    description: [
      "Every business is different. We build",
      "software that matches your exact way of",
      "working.",
    ],
  },
  {
    number: "04",
    title: "Reliable Support",
    description: [
      "Based in Ahmedabad, we provide quick",
      "support when you need it. Your success",
      "is our priority.",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <motion.div 
        className="mx-auto w-full max-w-[1440px] rounded-[32px] bg-[linear-gradient(180deg,#0A2347_0%,#0A2346_100%)] px-12 py-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <motion.h2 
          className="text-center text-[48px] font-semibold leading-tight tracking-[-0.05em] text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p 
          className="mt-4 text-center text-[20px] font-normal leading-relaxed tracking-[-0.04em] text-white/90 max-w-[800px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We specialize in building reliable IT solutions for small and medium businesses.
        </motion.p>

        <motion.div 
          className="mt-16 w-full relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8 relative">
            {reasons.map((reason, index) => (
              <motion.article 
                key={reason.number} 
                className="flex flex-col relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                {/* Connecting Line - only show for first 3 steps */}
                {index < 3 && (
                  <motion.div
                    className="absolute top-[30px] left-[60px] w-[calc(100%+32px-60px)] h-[2px] bg-gradient-to-r from-[#3F5682] to-[#5A7BA8] z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: false }}
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <motion.div 
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-[12px] bg-[#3F5682] text-[22px] font-semibold leading-none text-white shadow-[0_18px_30px_rgba(38,136,214,0.2)] relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {reason.number}
                </motion.div>
                <h3 className="mt-8 text-[22px] font-semibold leading-tight tracking-[-0.05em] text-white">
                  {reason.title}
                </h3>
                <p className="mt-4 text-[16px] font-normal leading-relaxed tracking-[-0.04em] text-white/40">
                  {reason.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
