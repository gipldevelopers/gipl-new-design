"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const projects = [
  {
    id: 1,
    title: "Gvoice POS",
    description: "A smart POS system with voice-enabled billing and automated inventory management, built to streamline operations across multi-location retail businesses.",
    image: siteData.home.caseStudies.pos,
    stats: [
      { value: "40%", label: "Efficiency Gain" },
      { value: "2.4M", label: "Monthly Trans." }
    ],
    liveLink: "https://pos.gvoice.app/",
  },
  {
    id: 2,
    title: "EduTech Platform",
    description: "Revolutionary online learning platform that connects students with expert instructors worldwide with AI-powered progress tracking.",
    image: siteData.home.caseStudies.edutech,
    stats: [
      { value: "85%", label: "User Retention" },
      { value: "50K+", label: "Active Students" }
    ]
  },
  {
    id: 3,
    title: "HealthCare App",
    description: "Comprehensive healthcare management app that enables patients to book appointments and consult with doctors through secure video calls.",
    image: siteData.home.caseStudies.healthcare,
    stats: [
      { value: "95%", label: "Patient Satisfaction" },
      { value: "10K+", label: "Consultations" }
    ]
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return null;
  }

  const safeIndex = Math.max(0, Math.min(currentIndex, projects.length - 1));
  const project = projects[safeIndex];

  if (!project) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F7F9FE] py-12 md:py-0 overflow-hidden">
      <div className="w-full mx-auto max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="flex flex-col md:flex-row w-full items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-3xl md:text-[40px] font-bold leading-[1.2] tracking-tight text-[#1E293B]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            From Challenge to Victory: Exploring Case Studies of <br />Innovation and Excellence
          </motion.h2>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.button
              type="button"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-[#E5E9F2] flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm"
              aria-label="Previous case study"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </motion.button>
            <motion.button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#E5E9F2] flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm"
              aria-label="Next case study"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            className="bg-[#0F172A] rounded-[32px] overflow-hidden relative h-[450px] md:h-[500px] shadow-2xl"
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} Background`}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
            </motion.div>

            <div className="relative z-10 p-6 md:p-12 lg:p-16 flex items-center h-full">
              <div className="max-w-[600px]">

                <motion.h3
                  className="text-3xl md:text-[48px] lg:text-[56px] font-bold leading-tight mb-4 md:mb-6 text-white tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm md:text-base lg:text-[18px] font-normal leading-relaxed text-slate-300 mb-8 md:mb-10 max-w-[500px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex gap-8 md:gap-16 mb-8 md:mb-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl md:text-[40px] font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                      <div className="text-[12px] md:text-[14px] font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-4 items-center">
                  <motion.button
                    className="bg-white text-[#0F172A] px-8 py-4 rounded-full text-base font-bold flex items-center gap-3 hover:bg-slate-100 transition-all shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Case Study
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white/20 text-white px-8 py-[14px] rounded-full text-base font-bold flex items-center gap-3 hover:bg-white/10 hover:border-white transition-all shadow-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Live Site
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
