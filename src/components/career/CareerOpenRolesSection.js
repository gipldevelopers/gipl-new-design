"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
    badge: "NEW",
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
    <section id="open-roles" className="w-full bg-[#F5F7FB] py-[72px]">
      <div className="w-full px-[34px]">

        {/* Header row */}
        <div className="flex items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-[52px] font-[600] leading-none tracking-[-2px] text-[#1F2A44]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Open Roles
            </motion.h2>
            <motion.p 
              className="mt-[16px] text-[20px] font-[400] leading-[1.5] tracking-[-0.3px] text-[#374151]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Help us shape the next generation of curated experiences.
            </motion.p>
          </motion.div>

          <motion.label 
            className="flex h-[56px] w-[420px] shrink-0 items-center gap-[14px] rounded-full bg-white px-[20px] shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/career/Icon (7).svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] shrink-0"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role or keyword"
              className="w-full bg-transparent text-[16px] font-[400] tracking-[-0.2px] text-[#6D7285] outline-none placeholder:text-[#6D7285]"
            />
          </motion.label>
        </div>

        {/* Category filters */}
        <motion.div 
          className="mt-[40px] flex flex-wrap gap-[12px]"
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
                className={`h-[42px] rounded-full px-[24px] text-[15px] font-[600] tracking-[-0.2px] transition-colors ${
                  active
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
          className="mt-[40px] space-y-[16px]"
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
                className="flex items-center justify-between rounded-[24px] bg-white px-[36px] py-[32px] shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[13px] font-[600] uppercase tracking-[2px] text-[#4F6EF7]">
                      {role.category}
                    </p>
                    {role.badge && (
                      <motion.span 
                        className="inline-flex h-[22px] items-center rounded-[6px] bg-[#EEF2FF] px-[10px] text-[12px] font-[700] leading-none text-[#4F6EF7]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: false }}
                      >
                        {role.badge}
                      </motion.span>
                    )}
                  </div>

                  <h3 className="mt-[12px] text-[28px] font-[600] leading-none tracking-[-0.8px] text-[#1E252B]">
                    {role.title}
                  </h3>

                  <div className="mt-[14px] flex items-center gap-[24px] text-[16px] leading-none tracking-[-0.2px] text-[#505860]">
                    <RoleMeta icon="/career/Icon (8).svg" text={role.location} />
                    <RoleMeta icon="/career/Icon (10).svg" text={role.time} />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/contact?position=${encodeURIComponent(role.title)}`}
                    className="inline-flex h-[52px] min-w-[160px] items-center justify-center gap-[10px] rounded-[16px] border-[2px] border-[#4F6EF7] px-[24px] text-[16px] font-[600] tracking-[-0.3px] text-[#4F6EF7] hover:bg-[#4F6EF7] hover:text-white transition-colors group"
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
