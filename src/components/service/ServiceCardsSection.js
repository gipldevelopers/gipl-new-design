"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceCards = [
  { title: "Software Engineering", href: "/service/software-engineering", imgSrc: "/service/software.png" },
  { title: "Web Development", href: "/service/web-development", imgSrc: "/service/web.png" },
  { title: "AI & Automation", href: "/service/ai-automation", imgSrc: "/service/ai.png" },
  { title: "Data Solutions", href: "/service/data-solutions", imgSrc: "/service/data-solution.png" },
  { title: "Digital Marketing", href: "/service/digital-marketing", imgSrc: "/service/digital-marketing.png" },
  { title: "UI/UX Design", href: "/service/ui-ux-design", imgSrc: "/service/ui-ux.png" },
  { title: "Cloud Solutions", href: "/service/cloud-solutions", imgSrc: "/service/cloud.png" },
  { title: "eCommerce Solutions", href: "/service/ecommerce-solutions", imgSrc: "/service/ecommerce.png" },
  { title: "Mobile App Development", href: "/service/mobile-app-development", imgSrc: "/service/mobile-icon.png", imgClassName: "brightness-0 invert" },
];

function ServiceCardIcon() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#1E2A45]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.2V7.2M13.5 19.8V22.8M22.8 13.5H19.8M7.2 13.5H4.2M19.2 7.8L17.1 9.9M9.9 17.1L7.8 19.2M19.2 19.2L17.1 17.1M9.9 9.9L7.8 7.8M16.5 13.5C16.5 15.1569 15.1569 16.5 13.5 16.5C11.8431 16.5 10.5 15.1569 10.5 13.5C10.5 11.8431 11.8431 10.5 13.5 10.5C15.1569 10.5 16.5 11.8431 16.5 13.5Z"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ArrowCircleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="6.5" cy="6.5" r="5" stroke="#2D5BE3" strokeWidth="1.5" />
      <path
        d="M4.7 6.5H8.1M8.1 6.5L6.8 5.2M8.1 6.5L6.8 7.8"
        stroke="#2D5BE3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCardsSection() {
  return (
    <section className="w-full bg-[#ECEEF2] py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
          {serviceCards.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
              className="rounded-[24px] bg-white px-6 md:px-[32px] pb-8 md:pb-[32px] pt-7 md:pt-[28px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#1E2A45]">
                  {item.imgSrc ? (
                  <div className="relative w-6 h-6">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      sizes="24px"
                      className={`object-contain ${item.imgClassName || ""}`}
                    />
                  </div>
                  ) : (
                    <ServiceCardIcon />
                  )}
                </div>
              </motion.div>
              <h3 className="mt-5 md:mt-[20px] text-lg md:text-[20px] font-[700] leading-tight md:leading-[1.25] tracking-[-0.02em] text-[#2F3641]">
                {item.title}
              </h3>
              <p className="mt-3 md:mt-[12px] text-sm md:text-[15px] font-[400] leading-relaxed md:leading-[1.6] text-[#4E5663]">
                Our {item.title} services help businesses build secure,
                scalable, and high-performance applications tailored to their
                needs. From custom solutions to enterprise platforms.
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="mt-5 md:mt-[20px] inline-flex items-center gap-[8px] text-[14px] font-[600] leading-[1.2] text-[#2D5BE3] hover:underline"
                >
                  Learn More
                  <ArrowCircleIcon />
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

  );
}
