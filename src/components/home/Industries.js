"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const columns = [
  [
    {
      title: "Government",
      icon: "/home/home_images/government-icon.png",
      image: "/home/home_images/government-bg.jpg",
      className: "mt-[126px]",
    },
    {
      title: "Finance &\nBanking",
      icon: "/home/home_images/Finance-Banking-icon.png",
      image: "/home/home_images/finance-bg.jpg",
      className: "mt-[25px]",
    },
  ],
  [
    {
      title: "Insurance",
      icon: "/home/home_images/insurance-icon.png",
      image: "/home/home_images/insurance-1-bg.jpg",
      className: "",
    },
    {
      title: "Hotels, Travels &\nHolidays",
      icon: "/home/home_images/hotel-icon.png",
      image: "/home/home_images/hotel-bg.jpg",
      className: "mt-[25px]",
    },
    {
      title: "Education",
      icon: "/home/home_images/education-icon.png",
      image: "/home/home_images/education-bg.jpg",
      className: "mt-[27px]",
    },
  ],
  [
    {
      title: "Retail",
      icon: "/home/home_images/retail-icon.png",
      image: "/home/home_images/retail-bg.jpg",
      className: "mt-[126px]",
    },
    {
      title: "Internet of\nThings",
      icon: "/home/home_images/iot-icon.png",
      image: "/home/home_images/iot-bg.jpg",
      className: "mt-[25px]",
    },
  ],
  [
    {
      title: "Healthcare &\nMedical",
      icon: "/home/home_images/health-icon.png",
      image: "/home/home_images/health-bg.jpg",
      className: "",
    },
    {
      title: "Real Estate",
      icon: "/home/home_images/realestate-icon.png",
      image: "/home/home_images/realestate-bg.jpg",
      className: "mt-[25px]",
    },
    {
      title: "Sports",
      icon: "/home/home_images/sports-icon.png",
      image: "/home/home_images/sports-bg.jpg",
      className: "mt-[25px]",
    },
  ],
];

function IndustryCard({ title, icon, image, className }) {
  const lines = title.split("\n");

  return (
    <motion.div
      className={`group relative w-[169px] h-[171px] overflow-hidden rounded-[12px] bg-[#3B537F] cursor-pointer ${className}`}
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
  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container flex w-full items-center justify-between gap-12">
        <motion.div 
          className="max-w-[500px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-[48px] font-semibold leading-tight tracking-[-0.055em] text-[#2D3342]">
            Industries We Help Grow
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-relaxed tracking-[-0.04em] text-[#3B4352]">
            From small shops to large manufacturers, we build IT solutions for every type of business in Gujarat and beyond. Our experience spans across various industries.
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {columns.map((column, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col gap-6"
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
                  <IndustryCard {...card} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
