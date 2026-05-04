"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "David Chen",
    role: "CTO, FinStream Inc.",
    text: "GohillInfotech transformed our legacy system into a modern cloud-native application. Their developers are truly top-tier.",
    rating: 5,
    image: "/hire-us/p1.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, HealthLogix",
    text: "The communication was seamless. It felt like they were in the next room, even though they were halfway across the globe.",
    rating: 5,
    image: "/hire-us/p2.jpg"
  },
  {
    name: "Marcus Thorne",
    role: "VP Engineering, ScaleUp",
    text: "Their technical leadership helped us pivot our entire product strategy in just three months. Highly recommended.",
    rating: 5,
    image: "/hire-us/p3.jpg"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = testimonials.length - itemsPerView + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full bg-[#F7F9FE] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="home-section-container flex w-full flex-col gap-12">
        <motion.div
          className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col gap-4 max-w-[700px] text-center md:text-left">
            <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[800] text-[#0F172A] leading-tight tracking-tight font-poppins">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm active:scale-95 group"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm active:scale-95 group"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </motion.button>
          </div>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="bg-white rounded-[24px] p-8 md:p-[40px] flex flex-col h-full min-h-[360px] gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-md transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#2563EB" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>

                  <p className="text-[16px] text-[#475569] font-[400] leading-relaxed font-manrope relative z-10">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-4">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="52px"
                        className="object-cover grayscale"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-[17px] font-[700] text-[#0F172A] truncate font-poppins">{item.name}</p>
                      <p className="text-[13px] text-[#64748B] font-[500] font-manrope truncate">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-[#2F2C8F] w-6' : 'bg-slate-200'}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
