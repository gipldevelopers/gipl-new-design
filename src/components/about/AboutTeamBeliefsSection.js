"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

const teamMembers = [
  {
    id: 1,
    name: "Sanket Virani",
    role: "Chief Operation Officer",
    image: siteData.about.team.placeholder1,
  },
  {
    id: 2,
    name: "Chandrakant Rathod",
    role: "Chief Technical Officer",
    image: siteData.about.team.placeholder2,
  },
  {
    id: 3,
    name: "Jigar Chavada",
    role: "HR Head",
    image: siteData.about.team.placeholder3,
  },
  {
    id: 4,
    name: "Aayush Solanki",
    role: "Technical Head",
    image: siteData.about.team.placeholder4,
  },
  {
    id: 5,
    name: "Kinjal Pambhar",
    role: "Sales Head",
    image: siteData.about.team.placeholder5,
  },
  {
    id: 6,
    name: "Vraj Darji",
    role: "Marketing Head",
    image: siteData.about.team.placeholder6,
  }

];

const beliefs = [
  {
    id: 1,
    title: "We Constantly Innovate",
    description:
      "It's important to communicate clearly. You will always be aware of the status of your project, the rationale behind decisions, and the future steps. There is no complicated jargon. No unanticipated surprises. Just direct communication and honest updates.",
    icon: "heart"
  },
  {
    id: 2,
    title: "Transparency is important to us.",
    description:
      "Continuous improvement is the only constant. Our motto fuels our drive to always stay ahead of the curve. We are a team of lifelong learners, constantly exploring new technologies and fresh ideas to deliver groundbreaking solutions that set you apart.",
    icon: "lightbulb"
  },
  {
    id: 3,
    title: "We Promote Original Thought",
    description:
      "We don't rely on one-size-fits-all solutions because every business is unique. We investigate concepts, challenge presumptions, and seek out more intelligent approaches to issues. We are able to provide outcomes that truly meet your needs thanks to our innovative method.",
    icon: "shield"
  },
  {
    id: 4,
    title: "Our Commitment to Results",
    description:
      "Our ultimate goal is to deliver tangible value. We focus on outcomes that move the needle for your business, ensuring that every project we undertake results in measurable success and long-term satisfaction.",
    icon: "target"
  },
];

function ShieldIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#3530A2]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#3530A2]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  );
}

function LightbulbIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#3530A2]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M15.09 14c.18-.19.33-.4.46-.62a6 6 0 1 0-7.1 0c.13.22.28.43.46.62L10 16h4l1.09-2z" />
      </svg>
    </div>
  );
}

function TargetIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#3530A2]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    </div>
  );
}

const renderBeliefIcon = (icon) => {
  switch (icon) {
    case 'heart': return <HeartIcon />;
    case 'lightbulb': return <LightbulbIcon />;
    case 'shield': return <ShieldIcon />;
    case 'target': return <TargetIcon />;
    default: return <ShieldIcon />;
  }
};

export default function AboutTeamBeliefsSection() {
  const [beliefSlide, setBeliefSlide] = useState(0);
  const [teamSlide, setTeamSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrevBelief = () => {
    setBeliefSlide((prev) => (prev === 0 ? beliefs.length - 1 : prev - 1));
  };

  const handleNextBelief = () => {
    setBeliefSlide((prev) => (prev === beliefs.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTeam = () => {
    setTeamSlide((prev) => (prev === 0 ? Math.max(0, teamMembers.length - 4) : prev - 1));
  };

  const handleNextTeam = () => {
    const maxSlide = Math.max(0, teamMembers.length - 4);
    setTeamSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-12 md:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h2
            className="text-3xl xs:text-4xl md:text-[57px] font-[600] leading-tight md:leading-[57px] tracking-[-0.03em] md:tracking-[-1.71px] text-[#1C232B] text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            The Gohil Infotech Team
          </motion.h2>


        </div>

        <div className="mt-8 md:mt-[42px]">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-8 md:gap-[48px] md:transition-transform md:duration-300 md:ease-out"
            style={{
              transform: isMounted && typeof window !== 'undefined' && window.innerWidth >= 768
                ? `translateX(-${teamSlide * 326}px)`
                : 'none'
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-full md:w-[278px] shrink-0"
              >
                <motion.div
                  className="relative h-[300px] xs:h-[360px] md:h-[405px] w-full overflow-hidden rounded-[20px] bg-white/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 278px"
                    className="object-cover transition-all duration-500"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <h3 className="mt-4 md:mt-[16px] text-[18px] md:text-[16px] font-[700] leading-tight text-[#1C232B]">
                    {member.name}
                  </h3>
                  <p className="mt-[4px] text-[11px] font-[600] leading-tight uppercase tracking-[1.5px] text-[#244EE4]">
                    {member.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 md:mt-[22px] hidden md:flex items-center justify-center gap-[6px]">
          {Array.from({ length: Math.max(0, teamMembers.length - 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setTeamSlide(index)}
              className={`h-[7px] rounded-full transition-all ${index === teamSlide
                ? "w-[33px] bg-[#403CB2]"
                : "w-[7px] bg-[#D7D9E4] hover:bg-[#b8bcc8]"
                }`}
              aria-label={`Go to team slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-[96px] flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h2
            className="text-[32px] sm:text-[40px] md:text-[57px] font-[700] leading-tight md:leading-[1.1] tracking-tight text-[#1C232B] text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Our Beliefs
          </motion.h2>


        </div>

        <div className="mt-8 md:mt-[46px]">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-6 md:transition-transform md:duration-300 md:ease-out"
            style={{
              transform: isMounted && typeof window !== 'undefined' && window.innerWidth >= 768
                ? `translateX(-${beliefSlide * 366}px)`
                : 'none'
            }}
          >
            {beliefs.map((belief, index) => (
              <motion.article
                key={belief.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="h-auto min-h-[280px] w-full md:w-[348px] shrink-0 rounded-[20px] bg-[#F1F2F5] p-8 md:p-[32px] mr-0 md:mr-[18px]"
              >
                {renderBeliefIcon(belief.icon)}
                <h3 className="mt-6 md:mt-[28px] whitespace-pre-line text-[20px] md:text-[20px] font-[700] leading-tight text-[#2A313B]">
                  {belief.title}
                </h3>
                <p className="mt-4 md:mt-[14px] whitespace-pre-line text-[15px] md:text-[14px] font-[400] leading-relaxed text-[#555C67]">
                  {belief.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 md:mt-[22px] hidden md:flex items-center justify-center gap-[6px]">
          {beliefs.map((_, index) => (
            <button
              key={index}
              onClick={() => setBeliefSlide(index)}
              className={`h-[7px] rounded-full transition-all ${index === beliefSlide
                ? "w-[33px] bg-[#403CB2]"
                : "w-[7px] bg-[#D7D9E4] hover:bg-[#b8bcc8]"
                }`}
              aria-label={`Go to belief ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

  );
}
