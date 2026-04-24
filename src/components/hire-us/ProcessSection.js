"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const processes = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="#2F2C8F" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Discovery",
      description: "Deep-dive into business logic, user persona mapping, and competitive analysis."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Design",
      description: "User-centric UX frameworks and high-end visual systems aligned with brand identity."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16,18 22,12 16,6" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8,6 2,12 8,18" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Develop",
      description: "Clean code architecture, robust backend APIs, and seamless frontend integration."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Deploy",
      description: "CI/CD pipelines, cloud orchestration, and rigorous post-launch monitoring."
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] py-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-[48px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#0F172A] mb-[16px]">
            Our Proven Process
          </h2>
          <p className="text-[18px] font-[400] leading-[1.7] text-[#64748B] max-w-[800px] mx-auto whitespace-nowrap">
            We follow a structured methodology to ensure successful project delivery every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-[40px]">
          {processes.map((process, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-[16px] p-[32px] text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-[56px] h-[56px] bg-[#EEF2FF] rounded-[12px] flex items-center justify-center mx-auto mb-[24px]">
                {process.icon}
              </div>
              <h3 className="text-[20px] font-[600] text-[#0F172A] mb-[12px]">
                {process.title}
              </h3>
              <p className="text-[14px] font-[400] leading-[1.6] text-[#64748B]">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
