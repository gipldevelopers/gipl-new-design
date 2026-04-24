"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Elena Vance",
    role: "Chief Technology Officer",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Chief Product Officer",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Head of Design",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "VP Engineering",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "Head of Operations",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 7,
    name: "David Kumar",
    role: "Lead Architect",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    role: "Director of Sales",
    image: "/about/9a2c8e6fa5d620f403c9b2a6c2a0397fae9a2828.png",
  },
];

const beliefs = [
  {
    id: 1,
    title: "Uncompromising\nSecurity",
    description:
      "In a world of evolving threats, security\nis not a feature-it is the bedrock of\neverything we deploy.",
  },
  {
    id: 2,
    title: "Scalable\nInnovation",
    description:
      "We build solutions that grow with your\nbusiness, designed to handle tomorrow's\nchallenges today.",
  },
  {
    id: 3,
    title: "User-Centric\nDesign",
    description:
      "Every pixel, every interaction is crafted\nwith the end user in mind, creating\nexperiences that delight.",
  },
  {
    id: 4,
    title: "Continuous\nImprovement",
    description:
      "We never stop learning, evolving, and\nrefining our craft to deliver excellence\nin everything we do.",
  },
  {
    id: 5,
    title: "Transparent\nCommunication",
    description:
      "We believe in clear, honest dialogue with\nour clients, keeping you informed every\nstep of the journey.",
  },
  {
    id: 6,
    title: "Quality Over\nQuantity",
    description:
      "We prioritize delivering exceptional\nresults rather than rushing through\nprojects with mediocre outcomes.",
  },
  {
    id: 7,
    title: "Collaborative\nPartnership",
    description:
      "Your success is our success. We work\ntogether as true partners to achieve\nshared goals and vision.",
  },
  {
    id: 8,
    title: "Sustainable\nGrowth",
    description:
      "We build solutions designed for long-term\nsuccess, not quick fixes, ensuring\nlasting value for your business.",
  },
];

function ShieldIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#3530A2]">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L18 5.5V11.2C18 15.15 15.44 18.83 12 20C8.56 18.83 6 15.15 6 11.2V5.5L12 3Z"
          stroke="white"
          strokeWidth="1.6"
        />
        <path
          d="M10.4 11.9L11.5 13L13.9 10.6"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function AboutTeamBeliefsSection() {
  const [beliefSlide, setBeliefSlide] = useState(0);
  const [teamSlide, setTeamSlide] = useState(0);

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
    <section className="w-full bg-[#E9EAEE] pt-[2px]">
      <div className="flex items-start justify-between">
        <motion.h2 
          className="text-[57px] font-[600] leading-[57px] tracking-[-1.71px] text-[#1C232B]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          The Gohil Infotech Team
        </motion.h2>

        <motion.div 
          className="mt-[12px] flex gap-[12px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <button
            type="button"
            onClick={handlePrevTeam}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDD8FF] text-[#5B4ED6] hover:bg-[#c8c0ff] transition-colors"
            aria-label="Previous team members"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M6.5 1.5L1.5 7L6.5 12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextTeam}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDD8FF] text-[#5B4ED6] hover:bg-[#c8c0ff] transition-colors"
            aria-label="Next team members"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1.5 1.5L6.5 7L1.5 12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <div className="mt-[42px] overflow-hidden">
        <motion.div 
          className="flex transition-transform duration-300 ease-out gap-[48px]" 
          style={{ transform: `translateX(-${teamSlide * 326}px)` }}
        >
          {teamMembers.map((member, index) => (
            <motion.article 
              key={member.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-[278px] shrink-0"
            >
              <motion.div 
                className="relative h-[405px] w-[278px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={278}
                  height={405}
                  className="h-full w-full object-contain grayscale"
                />
              </motion.div>
              <h3 className="mt-[11px] text-[16px] font-[600] leading-[19px] tracking-[-0.16px] text-[#1C232B]">
                {member.name}
              </h3>
              <p className="mt-[3px] text-[10px] font-[500] leading-[12px] tracking-[-0.1px] text-[#244EE4]">
                {member.role}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="mt-[22px] flex items-center justify-center gap-[6px]">
        {Array.from({ length: Math.max(0, teamMembers.length - 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setTeamSlide(index)}
            className={`h-[7px] rounded-full transition-all ${
              index === teamSlide
                ? "w-[33px] bg-[#403CB2]"
                : "w-[7px] bg-[#D7D9E4] hover:bg-[#b8bcc8]"
            }`}
            aria-label={`Go to team slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-[96px] flex items-center justify-between">
        <motion.h2 
          className="text-[57px] font-[600] leading-[57px] tracking-[-1.71px] text-[#1C232B]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Beliefs
        </motion.h2>

        <motion.div 
          className="flex gap-[12px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <button
            type="button"
            onClick={handlePrevBelief}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDD8FF] text-[#5B4ED6] hover:bg-[#c8c0ff] transition-colors"
            aria-label="Previous belief"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M6.5 1.5L1.5 7L6.5 12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextBelief}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDD8FF] text-[#5B4ED6] hover:bg-[#c8c0ff] transition-colors"
            aria-label="Next belief"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1.5 1.5L6.5 7L1.5 12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <div className="mt-[46px] overflow-hidden">
        <motion.div 
          className="flex transition-transform duration-300 ease-out" 
          style={{ transform: `translateX(-${beliefSlide * 366}px)` }}
        >
          {beliefs.map((belief, index) => (
            <motion.article
              key={belief.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-[329px] w-[348px] shrink-0 rounded-[12px] bg-[#F1F2F5] px-[30px] pt-[30px] mr-[18px]"
            >
              <ShieldIcon />
              <h3 className="mt-[28px] whitespace-pre-line text-[20px] font-[600] leading-[25px] tracking-[-0.4px] text-[#2A313B]">
                {belief.title}
              </h3>
              <p className="mt-[14px] whitespace-pre-line text-[14px] font-[400] leading-[22px] tracking-[0px] text-[#555C67]">
                {belief.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="mt-[22px] flex items-center justify-center gap-[6px]">
        {beliefs.map((_, index) => (
          <button
            key={index}
            onClick={() => setBeliefSlide(index)}
            className={`h-[7px] rounded-full transition-all ${
              index === beliefSlide
                ? "w-[33px] bg-[#403CB2]"
                : "w-[7px] bg-[#D7D9E4] hover:bg-[#b8bcc8]"
            }`}
            aria-label={`Go to belief ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
