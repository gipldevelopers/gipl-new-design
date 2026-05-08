"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const industriesData = [
  {
    id: "government",
    title: "Government",
    description: "Secure and scalable software solutions for public services, data management, and digital transformation initiatives that improve efficiency, transparency, and citizen engagement.",
    icon: siteData.home.industries.government.icon,
    image: siteData.home.industries.government.bg,
  },
  {
    id: "finance",
    title: "Finance &\nBanking",
    description: "Reliable fintech software solutions including transaction systems, analytics dashboards, and secure platforms built for modern banking and financial operations.",
    icon: siteData.home.industries.finance.icon,
    image: siteData.home.industries.finance.bg,
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Custom insurance software for policy management, claims processing, and customer lifecycle automation to streamline operations and improve service delivery.",
    icon: siteData.home.industries.insurance.icon,
    image: siteData.home.industries.insurance.bg,
  },
  {
    id: "hotel",
    title: "Hotels, Travels &\nHolidays",
    description: "Booking engines, management systems, and digital platforms designed to enhance customer experience, automate operations, and increase direct bookings.",
    icon: siteData.home.industries.hotel.icon,
    image: siteData.home.industries.hotel.bg,
  },
  {
    id: "education",
    title: "Education",
    description: "E-learning platforms, student management systems, and digital tools built to simplify administration and improve learning experiences.",
    icon: siteData.home.industries.education.icon,
    image: siteData.home.industries.education.bg,
  },
  {
    id: "retail",
    title: "Retail",
    description: "POS systems, inventory management software, and eCommerce solutions built to optimize operations and support retail business growth.",
    icon: siteData.home.industries.retail.icon,
    image: siteData.home.industries.retail.bg,
  },
  {
    id: "iot",
    title: "Internet of\nThings",
    description: "Connected systems and smart device solutions to monitor, automate, and optimize business processes with real-time data and control.",
    icon: siteData.home.industries.iot.icon,
    image: siteData.home.industries.iot.bg,
  },
  {
    id: "health",
    title: "Healthcare &\nMedical",
    description: "Healthcare software for patient management, digital records, and operational efficiency designed for clinics, hospitals, and medical businesses.",
    icon: siteData.home.industries.health.icon,
    image: siteData.home.industries.health.bg,
  },
  {
    id: "realEstate",
    title: "Real Estate",
    description: "Property management systems, CRM platforms, and digital solutions to manage listings, leads, and sales efficiently.",
    icon: siteData.home.industries.realEstate.icon,
    image: siteData.home.industries.realEstate.bg,
  },
  {
    id: "sports",
    title: "Sports",
    description: "Custom software and applications for sports management, performance tracking, and fan engagement platforms.",
    icon: siteData.home.industries.sports.icon,
    image: siteData.home.industries.sports.bg,
  },
];

const columns = [
  [industriesData[0], industriesData[1]],
  [industriesData[2], industriesData[3], industriesData[4]],
  [industriesData[5], industriesData[6]],
  [industriesData[7], industriesData[8], industriesData[9]],
];

const defaultContent = {
  id: "default",
  title: "Industries We Work With",
  description: "From local startups to global enterprises, we deliver tailored IT solutions across multiple sectors, ensuring technology drives your business success."
};

function IndustryCard({ title, icon, image, className, isActive, onActive }) {
  const lines = title.split("\n");

  return (
    <motion.div
      className={`group relative w-full h-[140px] sm:h-[150px] lg:w-[155px] lg:h-[155px] xl:w-[169px] xl:h-[171px] overflow-hidden rounded-[12px] cursor-pointer transition-all duration-300 ${isActive ? "bg-transparent ring-2 ring-blue-500/20" : "bg-[#3B537F] hover:bg-[#4A6494]"
        } ${className}`}
      onMouseEnter={onActive}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image - Shown on hover OR if active */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <Image
          src={image}
          alt={title.replace("\n", " ")}
          fill
          sizes="(max-width: 1024px) 100vw, 170px"
          className="object-cover"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Icon + Content - Hidden on hover OR if active */}
      <div className={`absolute inset-0 flex h-full flex-col items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}>
        <div className="relative h-[48px] w-[48px] lg:h-[54px] lg:w-[54px] xl:h-[62px] xl:w-[62px]">
          <Image
            src={icon}
            alt={title.replace("\n", " ")}
            fill
            sizes="(max-width: 1024px) 100vw, 62px"
            className="object-contain"
            unoptimized={true}
          />
        </div>
        <div className="mt-[12px] xl:mt-[16px] text-center text-[16px] lg:text-[18px] xl:text-[20px] font-medium leading-tight tracking-[-0.02em] text-white px-2">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </div>
      </div>

      {/* Mini-Active Overlay (Title and Icon when active/hovered) */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-black/20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"}`}>
        <div className="relative h-[40px] w-[40px] opacity-80">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain invert brightness-0"
            unoptimized={true}
          />
        </div>
        <span className="mt-2 text-[14px] font-semibold text-white text-center px-2">{title.replace("\n", " ")}</span>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeIndustry = activeIndex !== null ? industriesData[activeIndex] : defaultContent;

  return (
    <section
      className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden relative"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="home-section-container flex flex-col lg:flex-row w-full items-center justify-between gap-12 xl:gap-20 px-6 lg:px-10 xl:px-0 relative z-10">

        {/* Left Side Content */}
        <div className="max-w-[550px] w-full text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-[50px] lg:text-[50px] font-bold leading-tight tracking-tight text-[#1E293B] mb-6 lg:mb-8">
                {activeIndustry.title.replace("\n", " ")}
              </h2>
              <p className="text-lg md:text-[20px] font-normal leading-relaxed text-[#475569] xl:max-w-[500px]">
                {activeIndustry.description}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 hidden lg:block"
              >
                <button className="px-8 py-3 bg-[#3B537F] hover:bg-[#4A6494] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Grid */}
        <div className="flex-1 flex items-center justify-center lg:justify-end w-full">
          {/* Desktop: Staggered columns */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex flex-col gap-4 xl:gap-6 ${colIndex % 2 === 0 ? 'mt-0' : 'mt-16'}`}
              >
                {column.map((card) => {
                  const dataIndex = industriesData.findIndex(item => item.id === card.id);
                  return (
                    <IndustryCard
                      key={card.id}
                      {...card}
                      isActive={activeIndex === dataIndex}
                      onActive={() => setActiveIndex(dataIndex)}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Grid layout */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-2xl">
            {industriesData.map((card, idx) => (
              <IndustryCard
                key={card.id}
                {...card}
                isActive={activeIndex === idx}
                onActive={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

