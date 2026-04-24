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
    <section className="w-full bg-[#F7F9FE] pb-[80px]">
      <div className="mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="bg-[#0A2347] rounded-[20px] px-[60px] py-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-4 gap-[60px]">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="text-[48px] font-[700] text-white mb-[8px]">
                  {stat.number}
                </div>
                <div className="text-[14px] font-[400] text-white/60">
                  {stat.label}
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-[1px] h-[60px] bg-white/20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
