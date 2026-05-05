"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Technologies", href: "/technology" },
  { label: "Blog", href: "/blog" },
  {
    label: "Company",
    href: "#",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Our Work", href: "/work" }
    ]
  },
  { label: "Hire Us", href: "/hire-us" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  // Close mobile menu on route change and handle scroll lock
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className="h-20 w-full bg-white shadow-sm sticky top-0 z-50 flex justify-center border-b border-gray-100"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[1440px] h-full flex items-center justify-between px-6 md:px-[34px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <Image
              src={siteData.logos.main}
              alt="Gohil Infotech logo"
              width={35}
              height={38}
              priority
              unoptimized={true}
              className="object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="flex flex-col leading-none text-[#0F172A]">
              <span className="text-[15px] font-extrabold uppercase tracking-tight">
                Gohil
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.12em]">
                Infotech
              </span>
            </div>
          </Link>
        </motion.div>


        <motion.div
          className="hidden md:flex items-center gap-8"
          onClick={handleClickOutside}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownToggle(index);
                    }}
                    className={`text-[15px] font-semibold transition-colors relative pb-1 flex items-center gap-1 h-[20px] ${["/about", "/career", "/work"].includes(pathname)
                      ? "text-[#2F2C8E] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[#2F2C8E]"
                      : "text-[#475569] hover:text-[#2F2C8E]"
                      }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-4 py-2 text-[14px] font-medium transition-colors ${pathname === subItem.href
                            ? "text-[#2F2C8E] bg-[#F8F9FF]"
                            : "text-[#475569] hover:text-[#2F2C8E] hover:bg-[#F8F9FF]"
                            }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-[15px] font-semibold transition-colors relative pb-1 h-[20px] flex items-center ${pathname === item.href
                    ? "text-[#2F2C8E] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[#2F2C8E]"
                    : "text-[#475569] hover:text-[#2F2C8E]"
                    }`}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#2F2C8E] px-6 text-[14px] font-bold text-white transition-all hover:bg-[#26247a] shadow-sm"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0F172A] p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white md:hidden z-[100] flex flex-col"
          >
            {/* Header in Overlay */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <Image
                  src={siteData.logos.main}
                  alt="Gohil Infotech logo"
                  width={35}
                  height={38}
                  unoptimized={true}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="flex flex-col leading-none text-[#0F172A]">
                  <span className="text-[15px] font-extrabold uppercase tracking-tight">
                    Gohil
                  </span>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.12em]">
                    Infotech
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0F172A] p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Centered Menu Items */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-10 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="w-full text-center flex flex-col items-center px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className={`text-[24px] font-bold flex items-center gap-3 transition-colors ${["/about", "/career", "/work"].includes(pathname) ? "text-[#2F2C8E]" : "text-[#1E293B]"
                          }`}
                      >
                        {item.label}
                        <svg
                          className={`w-6 h-6 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 mt-6 overflow-hidden w-full"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-[18px] font-semibold transition-colors ${pathname === subItem.href ? "text-[#2F2C8E]" : "text-[#64748B] hover:text-[#2F2C8E]"
                                  }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[24px] font-bold transition-colors ${pathname === item.href ? "text-[#2F2C8E]" : "text-[#1E293B] hover:text-[#2F2C8E]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-[56px] items-center justify-center rounded-full bg-[#2F2C8E] px-10 text-[18px] font-bold text-white shadow-lg hover:bg-[#26247a] transition-all active:scale-95"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
