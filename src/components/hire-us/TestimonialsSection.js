"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-[38px] font-semibold text-[#0F172A] leading-tight tracking-tight">
              What Our Clients Say About Us
            </h2>
            <p className="text-[18px] text-slate-500 font-normal tracking-tight">
              Real feedback from businesses we&apos;ve helped grow with our IT solutions.
            </p>
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
                  className="bg-white rounded-[24px] p-8 flex flex-col h-full min-h-[320px] gap-6 shadow-sm border border-slate-50 hover:shadow-md transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-8 right-8 text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V11C6.017 11.5523 5.5693 12 5.017 12H4.017V21H6.017Z" /></svg>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>

                  <p className="text-[16px] text-[#475569] font-normal leading-relaxed italic relative z-10">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#2F2C8F] font-bold text-[14px] shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-[15px] font-semibold text-[#0F172A] truncate">{item.name}</p>
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                         <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Verified Review</p>
                      </div>
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
