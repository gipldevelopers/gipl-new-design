"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full px-4 md:px-[60px] pb-16 md:pb-24">
      <motion.div
        className="relative w-full overflow-hidden rounded-[40px] bg-[#0F172A] py-20 px-8 flex flex-col items-center gap-8 text-center shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        {/* Background gradient effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full" />

        <motion.div
          className="relative z-10 flex flex-col gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-3xl md:text-[48px] lg:text-[64px] font-black text-white leading-tight tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Ready to Start Your <br /> <span className="text-white">IT Project?</span>
          </motion.h2>
          <motion.p
            className="text-[16px] text-slate-400 font-medium max-w-[600px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Let&apos;s discuss your business needs and build the perfect IT solution together.
            We make complex technology simple for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex h-[56px] items-center justify-center rounded-xl bg-white px-10 text-[16px] font-bold text-[#0F172A] transition-all hover:bg-slate-100 shadow-lg mt-4"
            >
              Discussion your project
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
