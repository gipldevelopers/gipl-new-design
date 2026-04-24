"use client";

import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Proven Expertise",
      description: "Access a team with deep domain knowledge and technical mastery across industries."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16M8 8H16M8 16H12M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Clear Comms",
      description: "Transparent, real-time updates through dedicated slack channels and weekly sprints."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM21 8V14M18 11H24" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Client-Centric",
      description: "Your business goals drive our technical decisions. We prioritize your success."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#2F2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Rapid Delivery",
      description: "Agile methodologies that cut development time by 40% without compromising quality."
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
            Benefits of Partnering with Us
          </h2>
          <p className="text-[18px] font-[400] leading-[1.7] text-[#64748B] max-w-[600px] mx-auto">
            We don't just build software; we build the future of your business through strategic technical partnership.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-[40px]">
          {benefits.map((benefit, index) => (
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
                {benefit.icon}
              </div>
              <h3 className="text-[20px] font-[600] text-[#0F172A] mb-[12px]">
                {benefit.title}
              </h3>
              <p className="text-[14px] font-[400] leading-[1.6] text-[#64748B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
