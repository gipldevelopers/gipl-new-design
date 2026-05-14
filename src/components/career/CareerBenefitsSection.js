"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const benefitCards = [
  {
    icon: siteData.career.benefits.career1,
    title: "Professional Growth & Learning",
    copy: "We support continuous learning through practical training, mentorship, certifications, and exposure to modern technologies.",
  },
  {
    icon: siteData.career.benefits.career2,
    title: "Growth-Driven Environment",
    copy: "Our culture encourages innovation, skill development, and career growth through real-world project experience.",
  },
  {
    icon: siteData.career.benefits.internet,
    title: "Global Project Exposure",
    copy: "Work on diverse projects and collaborate with businesses, teams, and clients across multiple industries and regions.",
  },
  {
    icon: siteData.career.benefits.internet,
    title: "Industry-Wide Experience",
    copy: "Gain hands-on experience across different sectors while working on scalable digital products and business solutions.",
  },
  {
    icon: siteData.career.benefits.career5,
    title: "Collaborative Team Culture",
    copy: "We believe strong teamwork, open communication, and shared ideas lead to better innovation and stronger outcomes.",
  },
  {
    icon: siteData.career.benefits.career6,
    title: "Ownership & Empowerment",
    copy: "Take ownership of your work, contribute ideas confidently, and grow within a supportive and collaborative environment.",
  },
];

function BenefitCard({ icon, title, copy, index }) {
  return (
    <motion.article
      className="rounded-[20px] bg-[#F0F0F0] px-[28px] py-[28px] flex-1 flex flex-col justify-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-[16px] h-full">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image src={icon} alt="" width={80} height={80} className="mt-[4px] shrink-0" />
        </motion.div>
        <div className="flex flex-col">
          <h3 className="text-[20px] font-[600] leading-[1.2] tracking-[-0.4px] text-[#1E252B] mb-[10px]">
            {title}
          </h3>
          <p className="text-[16px] leading-[1.6] tracking-[-0.2px] text-[#4E565C] font-[400]">
            {copy}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CareerBenefitsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">

          {/* Heading - Shows first on mobile */}
          <motion.div
            className="flex flex-col lg:order-3 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-3xl xs:text-4xl md:text-[52px] font-[600] leading-tight md:leading-[1.1] tracking-tight md:tracking-[-2px] text-[#1E252B]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Working At GIPL
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-[px] text-base md:text-[18px] leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.3px] text-[#4E565C] font-[400]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              We create an environment where talented people can grow, innovate, and contribute to meaningful technology solutions that solve real business challenges.
            </motion.p>

            <motion.div
              className="relative mt-8  w-full overflow-hidden rounded-[16px] bg-[#0E1116] hidden lg:block"
              style={{ aspectRatio: "9/10" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={siteData.career.benefits.growthChart}
                alt="Working At GIPL graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain"
                unoptimized={true}
              />
            </motion.div>
          </motion.div>

          {/* Column 1 */}
          <div className="flex flex-col gap-5 md:gap-[20px] h-full lg:order-1">
            <BenefitCard {...benefitCards[0]} index={0} />
            <BenefitCard {...benefitCards[2]} index={2} />
            <BenefitCard {...benefitCards[4]} index={4} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 md:gap-[20px] h-full lg:order-2">
            <BenefitCard {...benefitCards[1]} index={1} />
            <BenefitCard {...benefitCards[3]} index={3} />
            <BenefitCard {...benefitCards[5]} index={5} />
          </div>
        </div>
      </div>
    </section>

  );
}
