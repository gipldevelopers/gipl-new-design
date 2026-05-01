"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const columns = [
  [
    {
      title: "Government",
      icon: "/home/home_images/government-icon.png",
      image: "/home/home_images/government-bg.jpg",
    },
    {
      title: "Finance &\nBanking",
      icon: "/home/home_images/Finance-Banking-icon.png",
      image: "/home/home_images/finance-bg.jpg",
    },
  ],
  [
    {
      title: "Insurance",
      icon: "/home/home_images/insurance-icon.png",
      image: "/home/home_images/insurance-1-bg.jpg",
    },
    {
      title: "Hotels, Travels &\nHolidays",
      icon: "/home/home_images/hotel-icon.png",
      image: "/home/home_images/hotel-bg.jpg",
    },
    {
      title: "Education",
      icon: "/home/home_images/education-icon.png",
      image: "/home/home_images/education-bg.jpg",
    },
  ],
  [
    {
      title: "Retail",
      icon: "/home/home_images/retail-icon.png",
      image: "/home/home_images/retail-bg.jpg",
    },
    {
      title: "Internet of\nThings",
      icon: "/home/home_images/iot-icon.png",
      image: "/home/home_images/iot-bg.jpg",
    },
  ],
  [
    {
      title: "Healthcare &\nMedical",
      icon: "/home/home_images/health-icon.png",
      image: "/home/home_images/health-bg.jpg",
    },
    {
      title: "Real Estate",
      icon: "/home/home_images/realestate-icon.png",
      image: "/home/home_images/realestate-bg.jpg",
    },
    {
      title: "Sports",
      icon: "/home/home_images/sports-icon.png",
      image: "/home/home_images/sports-bg.jpg",
    },
  ],
];


function IndustryCard({ title, icon, image, className }) {
  const lines = title.split("\n");

  return (
    <motion.div
      className={`group relative w-full h-[150px] sm:h-[160px] lg:w-[169px] lg:h-[171px] overflow-hidden rounded-[12px] bg-[#3B537F] cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image - Hidden by default, shown ONLY on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image
          src={image}
          alt={title.replace("\n", " ")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(21,32,52,0.3)]" />
      </div>

      {/* Icon + Content - Shown by default, HIDDEN on hover */}
      <div className="absolute inset-0 flex h-full flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="relative h-[62px] w-[62px]">
          <Image
            src={icon}
            alt={title.replace("\n", " ")}
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-[16px] text-center text-[20px] font-normal leading-[32px] tracking-[-0.04em] text-white">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  // Flatten all cards for the mobile grid
  const allCards = columns.flat();

  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-12 md:py-0 overflow-hidden">
      <div className="home-section-container flex flex-col lg:flex-row w-full items-center justify-between gap-12 px-6 lg:px-0">
        <motion.div
          className="max-w-[500px] w-full text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >

          <h2 className="text-3xl md:text-[42px] lg:text-[48px] font-bold leading-tight tracking-tight text-[#1E293B]">
            Industries We Help Grow
          </h2>
          <p className="mt-6 md:mt-8 text-base md:text-[18px] font-normal leading-relaxed text-[#475569]">
            From local startups to global enterprises, we deliver tailored IT solutions across multiple sectors, ensuring technology drives your business success.
          </p>
        </motion.div>

        {/* Mobile/Tablet: simple 2-column grid */}
        <motion.div
          className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {allCards.map((card) => (
            <IndustryCard key={card.title} {...card} className="" />
          ))}
        </motion.div>

        {/* Desktop: original staggered columns but balanced */}
        <motion.div
          className="hidden lg:flex gap-6 items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-6 ${index % 2 === 0 ? 'mt-0' : 'mt-12'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: false }}
            >
              {column.map((card, cardIndex) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + cardIndex * 0.05 }}
                  viewport={{ once: false }}
                >
                  <IndustryCard {...card} className="mt-0" />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}
