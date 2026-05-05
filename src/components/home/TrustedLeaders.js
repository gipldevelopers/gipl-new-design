"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const leaders = [
  { name: "Houspire", icon: siteData.home.trustedLeaders.houspire },
  { name: "Novotion", icon: siteData.home.trustedLeaders.novotion },
  { name: "Security Service", icon: siteData.home.trustedLeaders.security },
  { name: "Asknani", icon: siteData.home.trustedLeaders.asknani },
  { name: "Vadilal", icon: siteData.home.trustedLeaders.vadilal },
  { name: "Open Heart", icon: siteData.home.trustedLeaders.openHeart },
  { name: "Global", icon: siteData.home.trustedLeaders.global },
  { name: "A140", icon: siteData.home.trustedLeaders.a140 },
  { name: "Healthcare", icon: siteData.home.trustedLeaders.healthcare },
  { name: "Real Estate", icon: siteData.home.trustedLeaders.realEstate },
];

export default function TrustedLeaders() {
  const tripleLeaders = [...leaders, ...leaders, ...leaders];

  return (
    <section className="w-full bg-[#F7F9FE] py-16 md:py-20 flex flex-col items-center overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-ticker {
          animation: scrollTicker 40s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="home-section-container flex w-full flex-col items-center gap-10 md:gap-16 px-6 md:px-0">
        <h2 className="text-center text-2xl md:text-[38px] font-bold text-[#1E293B] tracking-tight">
          Trusted by 100+ Leading Companies
        </h2>

        <div className="relative w-full flex items-center overflow-hidden">
          {/* Gradient Overlays for smooth fading */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-r from-[#F7F9FE] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-l from-[#F7F9FE] to-transparent" />

          <div className="flex items-center gap-12 md:gap-24 whitespace-nowrap animate-ticker py-4">
            {tripleLeaders.map((leader, idx) => (
              <div
                key={idx}
                className="relative h-8 md:h-12 w-32 md:w-40 flex-shrink-0 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={leader.icon}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

