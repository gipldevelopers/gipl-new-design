"use client";

import { motion } from "framer-motion";

function ServiceDetailCard({ title, description, index }) {
  return (
    <motion.article
      className="flex h-full min-h-[200px] flex-col rounded-[20px] bg-white px-[28px] pb-[32px] pt-[32px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-[24px] font-[700] font-bold text-roboto leading-[1.3] text-[#2E3642]">
        {title}
      </h3>
      <p className="mt-[12px] flex-grow text-[16px] font-[400] font-inter leading-[1.7] text-[#57606C]">
        {description}
      </p>
    </motion.article>
  );
}

export default function ServiceDetailServicesSection({ items }) {
  return (
    <section id="services" className="w-full bg-[#EEF1F6] py-12 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
          {items.map((service, index) => (
            <div key={service.title} className="flex">
              <ServiceDetailCard
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
