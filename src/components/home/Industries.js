"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const columns = [
  [
    {
      title: "Government",
      icon: "/home/home_images/Group_1000015609.svg",
      image: "/home/home_images/c0a3750f9b05abdc3452b9609ce714e39ab100d7.jpg",
      className: "mt-[126px]",
    },
    {
      title: "Finance &\nBanking",
      icon: "/home/home_images/Group_1000015610.svg",
      image: "/home/home_images/85746e540dcb355ba7ff61b8b81baae5a949d125.jpg",
      className: "mt-[25px]",
    },
  ],
  [
    {
      title: "Insurance",
      icon: "/home/home_images/578416bfa8be8265220396f2e3a18cf2c9663ca9.png",
      image: "/home/home_images/c0a3750f9b05abdc3452b9609ce714e39ab100d7.jpg",
      className: "",
    },
    {
      title: "Hotels, Travels &\nHolidays",
      icon: "/home/home_images/d0c5220359d1893dcfb2553c13a8baa20299260d.png",
      image: "/home/home_images/449bd56243d24ed438bbb4ff4e9e8e9d2311225a.jpg",
      className: "mt-[25px]",
    },
    {
      title: "Education",
      icon: "/home/home_images/f7669b76c5b70438fbd3be9689e21b094c7990c1.png",
      image: "/home/home_images/4e40428470e625da0d470356a988ed8ca3679456.jpg",
      className: "mt-[27px]",
    },
  ],
  [
    {
      title: "Retail",
      icon: "/home/home_images/79135b8f76bda005ff0491ad27eb9bf54cea522b.png",
      image: "/home/home_images/51986212c332f267b7e3faf8a09c6ce8fe52493a.jpg",
      className: "mt-[126px]",
    },
    {
      title: "Internet of\nThings",
      icon: "/home/home_images/50a1dca6fd2fc86b08072b41ded46532700a7ced.png",
      image: "/home/home_images/5e07691f0b4146d14940aae639df3e4c18afa0ec.jpg",
      className: "mt-[25px]",
    },
  ],
  [
    {
      title: "Healthcare &\nMedical",
      icon: "/home/home_images/b8f88b670b24001e26c73547bce34bcb8c1efd0f.png",
      image: "/home/home_images/a7838073cfb01a24f974663c38e23530d27453e3.jpg",
      className: "",
    },
    {
      title: "Real Estate",
      icon: "/home/home_images/c4863aa2a84d70878967b114a238d5f8023322c1.png",
      image: "/home/home_images/b29ba2218253429ed91ed1af28ae88af88340575.jpg",
      className: "mt-[25px]",
    },
    {
      title: "Sports",
      icon: "/home/home_images/fea57a7c50e78ac8b1942c417a63694a7441cd4a.png",
      image: "/home/home_images/e04da3fd3ddc3348a82dd6322f65e35cb098bff3.jpg",
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
