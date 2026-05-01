"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
              src="/Group 1688 (1).svg"
              alt="Gohil Infotech logo"
              width={35}
              height={38}
              priority
              className="object-contain"
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
                    className={`text-[15px] font-semibold transition-colors relative pb-1 flex items-center gap-1 h-[20px] ${
                      ["/about", "/career", "/work"].includes(pathname)
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
                          className={`block px-4 py-2 text-[14px] font-medium transition-colors ${
                            pathname === subItem.href
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
                  className={`text-[15px] font-semibold transition-colors relative pb-1 h-[20px] flex items-center ${
                    pathname === item.href
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
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-40 border-t border-gray-100 flex flex-col items-center py-6 gap-6"
          >
            {navItems.map((item, index) => (
              <div key={item.label} className="w-full text-center flex flex-col items-center">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`text-[18px] font-semibold flex items-center gap-2 ${
                        ["/about", "/career", "/work"].includes(pathname) ? "text-[#2F2C8E]" : "text-[#475569]"
                      }`}
                    >
                      {item.label}
                      <svg 
                        className={`w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="flex flex-col gap-4 mt-4 bg-gray-50 w-full py-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`text-[16px] font-medium ${
                              pathname === subItem.href ? "text-[#2F2C8E]" : "text-[#64748B]"
                            }`}
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
                    className={`text-[18px] font-semibold ${
                      pathname === item.href ? "text-[#2F2C8E]" : "text-[#475569]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex h-[48px] items-center justify-center rounded-full bg-[#2F2C8E] px-8 text-[16px] font-bold text-white shadow-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
