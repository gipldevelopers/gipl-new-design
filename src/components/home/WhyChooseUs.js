"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Business-First Approach",
    description: [
      "We understand your business model and build software that actually supports your operations.",
    ],
  },
  {
    number: "02",
    title: "Cost-Effective Development",
    description: [
      "Get high-quality software solutions that fit your budget without compromising performance.",
    ],
  },
  {
    number: "03",
    title: "Fully Custom Solutions",
    description: [
      "Every system is built from scratch based on your exact business requirements.",
    ],
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: [
      "We provide continuous support, updates, and improvements as your business grows.",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-[510px] flex items-center justify-center bg-[#F7F9FE] py-12 md:py-0 overflow-hidden">
      <motion.div
        className="mx-auto w-[calc(100%-3rem)] md:w-full max-w-[1440px] rounded-[32px] bg-[linear-gradient(180deg,#0A2347_0%,#0A2346_100%)] px-6 md:px-12 py-10 md:py-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="text-center text-3xl md:text-[42px] font-bold leading-tight tracking-tight text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="mt-4 text-center text-base md:text-[18px] font-normal leading-relaxed text-white/80 max-w-[700px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We specialize in building reliable IT solutions for small and medium businesses.
        </motion.p>

        <motion.div
          className="mt-12 w-full relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[25px] left-[40px] right-[10px] h-[1px] bg-white/40 z-0" />
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

                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#3F5682] text-[18px] font-bold leading-none text-white shadow-lg relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {reason.number}
                </motion.div>
                <h3 className="mt-6 text-[22px] font-bold leading-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[16px] font-normal leading-relaxed text-white/50">
                  {reason.description.join(" ")}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>

  );
}
