"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailHeroSection({ service }) {
  return (
    <section className="w-full bg-[#031744] overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-[34px] pb-16 md:pb-[64px] pt-16 md:pt-[80px] text-center">
        <Image
          src="/service-detailed/Group 1689.svg"
          alt=""
          width={120}
          height={120}
          className="pointer-events-none absolute bottom-[100px] left-[40px] opacity-20 hidden lg:block"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          src="/service-detailed/Group 1688 (3).svg"
          alt=""
          width={48}
          height={48}
          className="pointer-events-none absolute bottom-[140px] right-[60px] opacity-20 hidden lg:block"
          style={{ width: "auto", height: "auto" }}
        />

        <motion.h1 
          className="text-3xl xs:text-4xl md:text-[52px] font-[700] leading-tight md:leading-[1.15] tracking-[-0.03em] text-white max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {service.title}
        </motion.h1>
        <motion.p 
          className="mx-auto mt-4 md:mt-[24px] max-w-[1200px] text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#E7EDF7]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {service.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="mt-8 md:mt-[36px] inline-flex h-[52px] items-center gap-[10px] rounded-[999px] bg-[#3A63F3] px-[28px] text-[16px] font-[600] leading-[1] text-white hover:bg-[#2f56e0] transition-colors"
          >
            Start your project
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83398 14.1667L14.1673 5.83337M14.1673 5.83337H5.83398M14.1673 5.83337V14.1667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Collage images - Hidden on mobile/tablet to avoid overflow */}
        <motion.div 
          className="relative mx-auto mt-12 md:mt-[48px] h-[320px] w-full max-w-[700px] hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="absolute bottom-0 left-0 h-[190px] w-[23%] overflow-hidden rounded-[16px] border-[6px] border-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Image src={service.collageImages.leftBottom} alt="" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
          </motion.div>
          <motion.div 
            className="absolute left-[25.7%] top-0 h-[210px] w-[23%] overflow-hidden rounded-[16px] border-[6px] border-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Image src={service.collageImages.centerTop} alt="" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
          </motion.div>
          <motion.div 
            className="absolute left-[51.4%] top-0 h-[210px] w-[23%] overflow-hidden rounded-[16px] border-[6px] border-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Image src={service.collageImages.rightTop} alt="" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
          </motion.div>
          <motion.div 
            className="absolute right-0 bottom-0 h-[210px] w-[23%] overflow-hidden rounded-[16px] border-[6px] border-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Image src={service.collageImages.farRight} alt="" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
          </motion.div>
          <motion.div 
            className="absolute bottom-0 left-[25.7%] h-[140px] w-[49.3%] overflow-hidden rounded-[16px] border-[6px] border-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Image src={service.collageImages.bottomWide} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
