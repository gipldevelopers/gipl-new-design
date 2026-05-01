"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Discovery",
    description:
      "Deep-dive into business logic, user pain points, and competitive analysis.",
    icon: "/technology/discovery.png",
  },
  {
    title: "Design",
    description:
      "User-centric UI frameworks and high-end visual systems aligned with brand identity.",
    icon: "/technology/design.png",
  },
  {
    title: "Develop",
    description:
      "Clear code architecture, robust backend APIs, and seamless frontend integration.",
    icon: "/technology/develop.png",
  },
  {
    title: "Deploy",
    description:
      "CI/CD pipelines, cloud orchestration, and rigorous post-launch monitoring.",
    icon: "/technology/deploy.png",
  },
];

export default function TechnologyProcessSection() {
  return (
    <section className="w-full bg-[#F3F5F9] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <motion.h2
          className="text-center text-2xl xs:text-3xl md:text-[40px] font-[700] leading-tight md:leading-[1.2] tracking-[-0.03em] text-[#1F2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Proven Process
        </motion.h2>
        <motion.p
          className="mt-4 md:mt-[16px] text-center text-base md:text-[18px] font-[400] leading-relaxed md:leading-[1.6] text-[#7B8794] max-w-[560px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          We follow a structured methodology to ensure successful project
          delivery every time.
        </motion.p>

        <div className="mt-10 md:mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px]">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="rounded-[20px] bg-white px-6 md:px-[28px] pb-8 md:pb-[28px] pt-7 md:pt-[24px] shadow-[0_6px_20px_rgba(15,23,42,0.06)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#DDF1FF]"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-[28px] w-[28px] object-contain"
                />
              </motion.div>

              <h3 className="mt-5 md:mt-[20px] text-lg md:text-[22px] font-[700] leading-tight md:leading-[1.2] text-[#1F2937]">
                {card.title}
              </h3>
              <p className="mt-3 md:mt-[12px] text-sm md:text-[15px] font-[400] leading-relaxed md:leading-[1.6] text-[#7B8794]">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

  );
}
