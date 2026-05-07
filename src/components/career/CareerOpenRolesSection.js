"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteData } from "@/data/siteData";

const categories = [
  "All Roles",
  "Engineering",
  "Marketing",
  "Product",
  "Design",
  "Sales",
];

const roles = [
  {
    category: "Engineering",
    title: "Senior Fullstack Engineer",
    location: "Remote / NYC",
    time: "Full-time",
    badge: null,
  },
  {
    category: "Design",
    title: "Lead Product Designer",
    location: "London / Remote",
    time: "Full-time",
    badge: null,
  },
  {
    category: "Marketing",
    title: "Growth Marketing Manager",
    location: "San Francisco",
    time: "Full-time",
    badge: null,
  },
];

function RoleMeta({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-[8px]">
      <Image src={icon} alt="" width={16} height={16} className="h-[16px] w-[16px]" />
      <span>{text}</span>
    </span>
  );
}

export default function CareerOpenRolesSection() {
  const [activeCategory, setActiveCategory] = useState("All Roles");
  const [query, setQuery] = useState("");

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesCategory =
        activeCategory === "All Roles" || role.category === activeCategory;
      const search = query.trim().toLowerCase();
      const matchesQuery =
        !search ||
        role.title.toLowerCase().includes(search) ||
        role.category.toLowerCase().includes(search);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="open-roles" className="w-full py-12 md:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[34px]">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-3xl xs:text-4xl md:text-[52px] font-[600] leading-tight md:leading-none tracking-tight md:tracking-[-2px] text-[#1F2A44]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Open Roles
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-[16px] text-base md:text-[20px] font-[400] leading-relaxed md:leading-[1.5] tracking-tight md:tracking-[-0.3px] text-[#374151]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Help us shape the next generation of curated experiences.
            </motion.p>
          </motion.div>

          <motion.label
            className="flex h-12 md:h-[56px] w-full lg:w-[420px] shrink-0 items-center gap-[14px] rounded-full bg-white px-5 md:px-[20px] shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={siteData.career.openRoles.icon7}
              alt=""
              width={0}
              height={0}
              className="h-[18px] w-[18px] shrink-0"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role or keyword"
              className="w-full bg-transparent text-sm md:text-[16px] font-[400] tracking-tight text-[#6D7285] outline-none placeholder:text-[#6D7285]"
            />
          </motion.label>
        </div>

        {/* Category filters */}
        <motion.div
          className="mt-8 md:mt-[40px] flex flex-wrap justify-center lg:justify-start gap-3 md:gap-[12px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {categories.map((category, index) => {
            const active = category === activeCategory;
            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`h-9 md:h-[42px] rounded-full px-5 md:px-[24px] text-sm md:text-[15px] font-[600] tracking-tight transition-colors ${active
                  ? "bg-[#4F6EF7] text-white"
                  : "bg-[#EEF2FF] text-[#4F6EF7] hover:bg-[#E0E7FF]"
                  }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Role cards */}
        <motion.div
          className="mt-8 md:mt-[40px] space-y-4 md:space-y-[16px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {filteredRoles.length === 0 ? (
            <motion.p
              className="py-[40px] text-center text-[18px] text-[#6B7280]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No roles found matching your search.
            </motion.p>
          ) : (
            filteredRoles.map((role, index) => (
              <motion.article
                key={role.title}
                className="flex flex-col md:flex-row items-center justify-between rounded-[24px] bg-white px-6 md:px-[36px] py-8 md:py-[32px] shadow-[0_2px_12px_rgba(15,23,42,0.05)] gap-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-[12px]">
                    <p className="text-[11px] md:text-[13px] font-[600] uppercase tracking-[2px] text-[#4F6EF7]">
                      {role.category}
                    </p>
                    {role.badge && (
                      <motion.span
                        className="inline-flex h-[22px] items-center rounded-[6px] bg-[#EEF2FF] px-[10px] text-[10px] md:text-[12px] font-[700] leading-none text-[#4F6EF7]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: false }}
                      >
                        {role.badge}
                      </motion.span>
                    )}
                  </div>

                  <h3 className="mt-3 md:mt-[12px] text-xl xs:text-2xl md:text-[28px] font-[600] leading-tight md:leading-none tracking-tight text-[#1E252B]">
                    {role.title}
                  </h3>

                  <div className="mt-4 md:mt-[14px] flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-[24px] text-sm md:text-[16px] leading-none text-[#505860]">
                    <RoleMeta icon={siteData.career.openRoles.location} text={role.location} />
                    <RoleMeta icon={siteData.career.openRoles.time} text={role.time} />
                  </div>
                </div>

                <motion.div
                  className="w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/contact?position=${encodeURIComponent(role.title)}`}
                    className="inline-flex h-[48px] md:h-[52px] w-full md:min-w-[160px] items-center justify-center gap-[10px] rounded-[16px] border-[2px] border-[#4F6EF7] px-[24px] text-sm md:text-[16px] font-[600] tracking-tight text-[#4F6EF7] hover:bg-[#4F6EF7] hover:text-white transition-colors group"
                  >
                    <span>Apply Now</span>
                    <div className="h-[16px] w-[16px] transition-all">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="h-full w-full">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}

