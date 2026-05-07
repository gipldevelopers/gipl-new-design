"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Mehul Desai, Clinic owner",
    text: "Patient management became so much easier after their system. Appointments, records, and patient history are all organized now.",
    rating: 5,
  },
  {
    name: "Priya Shah, Retail Owner",
    text: "The billing software they built is exactly what our stores needed. It's simple to use and our staff learned it quickly.",
    rating: 5,
  },
  {
    name: "Kiran Enterprise, Trading Enterprise",
    text: "Best decision we made was getting our inventory system from them. No more stock confusion and better profit tracking.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar, Manufacturing Hub",
    text: "The automation solutions provided by GIPL have drastically reduced our production downtime. Highly professional team.",
    rating: 5,
  },
  {
    name: "Sanjay Patel, Logistics Plus",
    text: "Seamless integration of our supply chain management system. We can now track everything in real-time with ease.",
    rating: 5,
  },
  {
    name: "Anita Sharma, Design Studio",
    text: "Their UI/UX expertise transformed our client portal. User engagement has increased by 40% since the launch.",
    rating: 5,
  },
];

import { siteData } from "@/data/siteData";

export default function Testimonials() {
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
      <div className="home-section-container w-full px-6 lg:px-0">
        <motion.div
          className="flex w-full items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="max-w-[700px]">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#1E293B] leading-tight tracking-tight">
              What Our Clients Say About Us
            </h2>
            <p className="mt-4 text-base md:text-[18px] text-[#475569] font-normal leading-relaxed">
              Real feedback from businesses we&apos;ve helped grow with our IT solutions.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#E5E9F2] flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#E5E9F2] flex items-center justify-center text-[#2F2C8F] hover:bg-[#2F2C8F] hover:text-white transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </motion.div>

        <div className="relative w-full">
          <motion.div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col h-full min-h-[450px] shadow-sm border border-slate-50 transition-all duration-300 hover:shadow-md">
                  <div className="mb-8">
                    <Image
                      src={siteData.home.testimonials.quoteIcon}
                      alt="Quote"
                      width={48}
                      height={48}
                      unoptimized={true}
                      className="opacity-100"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>


                  <p className="text-base md:text-[18px] text-[#475569] font-normal leading-relaxed mb-12">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="mt-auto">
                    <p className="text-[17px] font-bold text-[#1E293B] mb-3">
                      {item.name}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile pagination dots */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-[#2F2C8F] w-6' : 'bg-slate-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

