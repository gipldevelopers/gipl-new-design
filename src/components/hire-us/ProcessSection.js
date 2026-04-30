"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessSection() {
  const processes = [
    {
      imgSrc: "/hire-us/discovery.png",
      title: "Discovery",
      description: "Deep-dive into business logic, user persona mapping, and competitive analysis."
    },
    {
      imgSrc: "/hire-us/design.png",
      title: "Design",
      description: "User-centric UX frameworks and high-end visual systems aligned with brand identity."
    },
    {
      imgSrc: "/hire-us/develop.png",
      title: "Develop",
      description: "Clean code architecture, robust backend APIs, and seamless frontend integration."
    },
    {
      imgSrc: "/hire-us/deploy.png",
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
                {process.imgSrc && (
                  <Image src={process.imgSrc} alt={process.title} width={24} height={24} className="object-contain" />
                )}
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
