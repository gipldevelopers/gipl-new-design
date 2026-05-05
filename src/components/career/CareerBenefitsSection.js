"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const benefitCards = [
  {
    icon: siteData.career.benefits.career1,
    title: "Development of Professionals",
    copy: "Through ongoing instruction, hands-on courses, and certifications, we make an investment in your education. You'll have the chance to hone your abilities and keep up with emerging technologies.",
  },
  {
    icon: siteData.career.benefits.career2,
    title: "An Environment Focused on Growth",
    copy: "Through ongoing instruction, hands-on courses, and certifications, we make an investment in your education. You'll have the chance to hone your abilities and keep up with emerging technologies.",
  },
  {
    icon: siteData.career.benefits.internet,
    title: "Global Exposure",
    copy: "Work on projects for a diverse client base and collaborate with teams and partners from around the world. Gain invaluable experience in a global business landscape.",
  },
  {
    icon: siteData.career.benefits.internet,
    title: "Worldwide Exposure",
    copy: "Work on projects for customers in various sectors and geographical areas. Gain practical experience in a global workplace by working with teams and partners throughout the globe.",
  },
  {
    icon: siteData.career.benefits.career5,
    title: "Cooperation Team",
    copy: "The foundation of our work is teamwork. We support one another, exchange ideas, and think that teamwork yields the finest outcomes.",
  },
  {
    icon: siteData.career.benefits.career6,
    title: "Self-determination and Empowerment",
    copy: "We have faith in our people. With the backing of a helpful team, you will be able to take responsibility for your work, make decisions, and confidently lead your tasks.",
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
          <p className="text-[15px] leading-[1.6] tracking-[-0.2px] text-[#4E565C] font-[400]">
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
              className="mt-4 md:mt-[20px] text-base md:text-[18px] leading-relaxed md:leading-[1.6] tracking-tight md:tracking-[-0.3px] text-[#4E565C] font-[400]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              We take care of our people so they can take
              care of the world&apos;s biggest challenges.
            </motion.p>

            <motion.div
              className="relative mt-8 md:mt-[28px] w-full overflow-hidden rounded-[16px] bg-[#0E1116] hidden lg:block"
              style={{ aspectRatio: "9/10" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={siteData.home.serviceGrid.network}
                alt="Global exposure graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
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
