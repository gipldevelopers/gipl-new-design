"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Gvoice POS",
    description: "A revolutionary point-of-sale system that integrated voice commands and AI inventory management for 5,000+ retail outlets.",
    image: "/hire-us/6560e2566312a55b7797604a34bcdfe060398449.png",
    stats: [
      { value: "40%", label: "Efficiency Gain" },
      { value: "2.4M", label: "Monthly Trans." }
    ]
  },
  {
    id: 2,
    title: "EduTech Platform", 
    description: "Revolutionary online learning platform that connects students with expert instructors worldwide with AI-powered progress tracking.",
    image: "/hire-us/3b0f421f76d85ef2751a9a388ba2e5801db159d6.jpg",
    stats: [
      { value: "85%", label: "User Retention" },
      { value: "50K+", label: "Active Students" }
    ]
  },
  {
    id: 3,
    title: "HealthCare App",
    description: "Comprehensive healthcare management app that enables patients to book appointments and consult with doctors through secure video calls.",
    image: "/hire-us/d38a7fe648846fac21bcac9c7f47b0df8c15fa07.jpg", 
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
    <section className="w-full min-h-screen flex items-center bg-[#F7F9FE] py-[80px]">
      <div className="w-full mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="flex w-full items-end justify-between mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-[48px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#0F172A]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            Exploring Case Studies
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
              className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E8E5FF] text-[#3E3DA8] transition-colors hover:bg-[#DED9FF]"
              aria-label="Previous case study"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              type="button"
              onClick={handleNext}
              className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E8E5FF] text-[#3E3DA8] transition-colors hover:bg-[#DED9FF]"
              aria-label="Next case study"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={project.id}
            className="bg-[#1A1A1A] rounded-[24px] overflow-hidden relative min-h-[450px]"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={project.image}
                alt={`${project.title} Background`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </motion.div>
            
            <div className="relative z-10 p-[60px] flex items-center min-h-[450px]">
              <div className="max-w-[520px]">
                <motion.div 
                  className="text-[12px] font-[600] text-[#5B7CFF] uppercase tracking-[0.15em] mb-[20px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  FEATURED PROJECT
                </motion.div>
                <motion.h3 
                  className="text-[56px] font-[700] leading-[1.1] mb-[20px] text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-[16px] font-[400] leading-[1.6] text-white/70 mb-[40px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex gap-[80px] mb-[40px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-[40px] font-[700] text-white mb-[4px]">{stat.value}</div>
                      <div className="text-[13px] font-[400] text-white/50">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button 
                  className="bg-white text-[#000000] px-[28px] py-[14px] rounded-full text-[15px] font-[600] flex items-center gap-[10px] hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Case Study
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
