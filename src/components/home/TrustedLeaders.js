"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const leaders = [
  { name: "Houspire", icon: "/home/home_images/logo_final.svg" },
  { name: "Novotion", icon: "/home/home_images/7f1863397780af7f5e9e74643c9b7c643ac49867.png" },
  { name: "Security Service", icon: "/home/home_images/f6b64672120b618212e8c06a63eee54647947a20.png" },
  { name: "Asknani", icon: "/home/home_images/320cf59abdb4f8edcf05a8c93d2555d725913c79.png" },
  { name: "Vadilal", icon: "/home/home_images/0ff353fe1efa261839bc0dbb95ecb183b6380600.png" },
  { name: "Open Heart", icon: "/home/home_images/47c487286549e202819fb0b9208c57a748719512.png" },
  { name: "Global", icon: "/home/home_images/4904e6466549d651885efb22aae1321bd483d7aa.png" },
  { name: "A140", icon: "/home/home_images/a140556f9bbe37bf598be7381d5086d92d0df4be.png" },
  { name: "Healthcare", icon: "/home/home_images/bacc2ca4fb8671777a04a9a5fc79f9d3fda1e195.png" },
  { name: "Real Estate", icon: "/home/home_images/c86f3a155da69ce8f4c4bf2f43d99585bc85c4d2.png" },

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

