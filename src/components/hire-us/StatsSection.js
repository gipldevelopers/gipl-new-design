"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      number: "200+",
      label: "Projects Completed"
    },
    {
      number: "95%",
      label: "Client Satisfaction"
    },
    {
      number: "5+",
      label: "Years Experience"
    },
    {
      number: "24/7",
      label: "Technical Support"
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] pb-12 md:pb-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="bg-[#0A2347] rounded-[20px] px-8 md:px-[60px] py-10 md:py-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-left relative px-4 md:px-[30px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="text-3xl xs:text-4xl md:text-[48px] font-[700] text-white mb-2 md:mb-[8px] font-poppins">
                  {stat.number}
                </div>
                <div className="text-xs md:text-[14px] font-[400] text-white font-manrope">
                  {stat.label}
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-8 md:h-[40px] bg-[#2F5ACB] hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  );
}
