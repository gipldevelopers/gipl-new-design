"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function ProcessSection() {
  const processes = [
    {
      imgSrc: siteData.hireUs.process.discovery,
      title: "Discovery",
      description: "Deep-dive into business logic, user persona mapping, and competitive analysis."
    },
    {
      imgSrc: siteData.hireUs.process.design,
      title: "Design",
      description: "User-centric UX frameworks and high-end visual systems aligned with brand identity."
    },
    {
      imgSrc: siteData.hireUs.process.develop,
      title: "Develop",
      description: "Clean code architecture, robust backend APIs, and seamless frontend integration."
    },
    {
      imgSrc: siteData.hireUs.process.deploy,
      title: "Deploy",
      description: "CI/CD pipelines, cloud orchestration, and rigorous post-launch monitoring."
    }
  ];

  return (
    <section className="w-full bg-[#F7F9FE] py-12 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="text-center mb-10 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.02em] text-[#0F172A] mb-4 md:mb-[16px]">
            Our Proven Process
          </h2>
          <p className="text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.7] text-[#64748B] max-w-[800px] mx-auto">
            We follow a structured methodology to ensure successful project delivery every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[40px]">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[16px] p-6 md:p-[32px] text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 md:w-[56px] md:h-[56px] bg-[#EEF2FF] rounded-[12px] flex items-center justify-center mx-auto mb-5 md:mb-[24px]">
                {process.imgSrc && (
                  <Image src={process.imgSrc} alt={process.title} width={24} height={24} className="object-contain" unoptimized={true} style={{ width: "auto", height: "auto" }} />
                )}
              </div>
              <h3 className="text-lg md:text-[20px] font-[600] text-[#0F172A] mb-2 md:mb-[12px]">
                {process.title}
              </h3>
              <p className="text-sm md:text-[14px] font-[400] leading-relaxed md:leading-[1.6] text-[#64748B]">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
