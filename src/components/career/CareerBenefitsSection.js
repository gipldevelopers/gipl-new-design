"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefitCards = [
  {
    icon: "/career/Icon (6).svg",
    title: "Development of Professionals",
    copy: "Through ongoing instruction, hands-on courses, and certifications, we make an investment in your education. You'll have the chance to hone your abilities and keep up with emerging technologies.",
  },
  {
    icon: "/career/Icon (5).svg",
    title: "An Environment Focused on Growth",
    copy: "Through ongoing instruction, hands-on courses, and certifications, we make an investment in your education. You'll have the chance to hone your abilities and keep up with emerging technologies.",
  },
  {
    icon: "/career/Icon (4).svg",
    title: "Global Exposure",
    copy: "Work on projects for a diverse client base and collaborate with teams and partners from around the world. Gain invaluable experience in a global business landscape.",
  },
  {
    icon: "/career/Icon (1).svg",
    title: "Worldwide Exposure",
    copy: "Work on projects for customers in various sectors and geographical areas. Gain practical experience in a global workplace by working with teams and partners throughout the globe.",
  },
  {
    icon: "/career/Icon (2).svg",
    title: "Cooperation Team",
    copy: "The foundation of our work is teamwork. We support one another, exchange ideas, and think that teamwork yields the finest outcomes.",
  },
  {
    icon: "/career/Icon (1).svg",
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
          <Image src={icon} alt="" width={28} height={28} className="mt-[4px] shrink-0" />
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
    <section className="w-full bg-white py-[72px]">
      <div className="w-full px-[34px]">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[24px] items-start">

          {/* Column 1 */}
          <div className="flex flex-col gap-[20px] h-full">
            <BenefitCard {...benefitCards[0]} index={0} />
            <BenefitCard {...benefitCards[2]} index={2} />
            <BenefitCard {...benefitCards[4]} index={4} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[20px] h-full">
            <BenefitCard {...benefitCards[1]} index={1} />
            <BenefitCard {...benefitCards[3]} index={3} />
            <BenefitCard {...benefitCards[5]} index={5} />
          </div>

          {/* Column 3 — heading + image */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-[52px] font-[600] leading-[1.1] tracking-[-2px] text-[#1E252B]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Working At GIPL
            </motion.h2>
            <motion.p 
              className="mt-[20px] text-[18px] leading-[1.6] tracking-[-0.3px] text-[#4E565C] font-[400]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              We take care of our people so they can take
              care of the world&apos;s biggest challenges.
            </motion.p>

            <motion.div 
              className="relative mt-[28px] w-full overflow-hidden rounded-[16px] bg-[#0E1116]" 
              style={{aspectRatio: "9/10"}}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/career/bf7783e7afd3bc0d69cd067a36fda981882aabce.png"
                alt="Global exposure graphic"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
