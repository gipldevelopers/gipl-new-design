"use client";

import { motion } from "framer-motion";

const statistics = [
  {
    number: "200+",
    label: "Projects Completed",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Technical Support",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full bg-[#F7F9FE] pt-8 pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="rounded-[24px] bg-[#1E2A45] px-6 md:px-16 py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-8 gap-x-4 md:gap-x-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="text-center relative"
              >
                {/* Divider line - show for all except the last item on desktop, hide for 2nd and 4th on mobile */}
                {index < statistics.length - 1 && (
                  <div className={`absolute right-0 top-1/2 h-16 w-[1px] bg-white/20 transform -translate-y-1/2 ${index % 2 === 1 ? 'hidden md:block' : ''}`} />
                )}

                <motion.h3
                  className="text-3xl md:text-[48px] font-bold leading-tight text-white mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                >
                  {stat.number}
                </motion.h3>

                <motion.p
                  className="text-[16px] font-medium text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  );
}