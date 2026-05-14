"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function FooterHome() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Technology", href: "/technology" },
    { label: "Contact Us", href: "/contact" },
  ];
  const services = [
    { label: "Web Development", href: "/service/web-development" },
    { label: "Software Engineering", href: "/service/software-engineering" },
    { label: "UI/UX Design", href: "/service/ui-ux-design" },
    { label: "Cloud Solutions", href: "/service/cloud-solutions" },
    { label: "Digital Marketing", href: "/service/digital-marketing" },
  ];

  return (
    <footer className="w-full bg-white pt-[4px]">
      <motion.div
        className="relative mx-[4px] overflow-hidden rounded-t-[40px] md:rounded-t-[80px] lg:rounded-t-[120px] bg-[linear-gradient(90deg,#12284A_0%,#08224A_52%,#003A61_100%)] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_76%_16%,rgba(25,184,230,0.14),transparent_22%),radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.03),transparent_18%)]" />

        <div className="relative z-10 px-6 md:px-[75px] pb-10 pt-12 md:pt-16">

          {/* CTA Section */}
          <motion.div
            className="mx-auto flex max-w-[1248px] flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-3xl md:text-[50px] font-bold leading-tight tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Let&apos;s Build the Right
              <br /> Software for Your Business
            </motion.h2>

            <motion.p
              className="mt-2 text-base max-w-[600px] md:text-[16px] font-normal leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Let&apos;s discuss your business needs and build the perfect IT solution together. <br />We make complex technology simple for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 md:h-[54px] px-10 items-center justify-center rounded-xl bg-white text-[16px] font-bold text-[#08224A] shadow-lg transition-all hover:bg-slate-50"
              >
                Discuss your project
              </Link>
            </motion.div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-[37px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Company Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <Link href="/" className="inline-flex items-center gap-[12px] group">
                <Image
                  src={siteData.footer.logo}
                  alt="Gohil Infotech"
                  width={40}
                  height={43}
                  unoptimized={true}
                  className="h-[43px] w-[40px] transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col leading-none text-white">
                  <span className="text-[20px] font-bold uppercase tracking-tight">
                    GOHIL
                  </span>
                  <span className="mt-[1px] text-[12px] font-semibold uppercase tracking-widest text-white/80">
                    INFOTECH
                  </span>
                </div>
              </Link>

              <motion.p
                className="mt-[22px] max-w-[350px] text-[16px] font-normal leading-[26px] tracking-[-0.14px] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                We build powerful digital experiences that drive growth and innovation for businesses worldwide. Creating tomorrow&apos;s solutions today.
              </motion.p>

              <motion.div
                className="mt-[20px] flex h-[50px] w-full max-w-[368px] overflow-hidden rounded-[5px] bg-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  id="footer-home-email"
                  className="h-full flex-1 min-w-0 bg-transparent px-[20px] text-[15px] font-normal text-[#70798E] outline-none placeholder:text-[#70798E]"
                />
                <motion.button
                  type="button"
                  onClick={() => {
                    const emailInput = document.getElementById("footer-home-email");
                    if (emailInput && emailInput.value) {
                      alert(`Thank you for subscribing with ${emailInput.value}!`);
                      emailInput.value = "";
                    } else {
                      alert("Please enter a valid email address");
                    }
                  }}
                  className="h-full w-[119px] bg-[#11C7F4] text-[15px] font-semibold tracking-[-0.08px] text-white hover:bg-[#0db3e0] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Quick Links + Services: side-by-side on mobile, individual cols on desktop */}
            <div className="grid grid-cols-2 gap-6 sm:col-span-1 lg:contents">
              {/* Quick Links Column */}
              <motion.div
                className="pt-[8px] lg:pl-[60px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <h3 className="text-[15px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                  QUICK LINKS
                </h3>
                <ul className="mt-[20px] space-y-[12px]">
                  {quickLinks.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        className="text-[14px] font-normal leading-[22px] tracking-[-0.14px] text-white"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services Column */}
              <motion.div
                className="pt-[8px]"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
              >
                <h3 className="text-[15px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                  SERVICES
                </h3>
                <ul className="mt-[20px] space-y-[12px]">
                  {services.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        className="text-[14px] font-normal leading-[22px] tracking-[-0.14px] text-white"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Column */}
            <motion.div
              className="pt-[8px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[15px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                CONTACT US
              </h3>

              <ul className="mt-[20px]">
                <motion.li
                  className="flex items-start gap-[15px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src={siteData.footer.addressIcon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized={true}
                    className="mt-[2px] h-[18px] w-[18px] shrink-0"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <p className="text-[14px] font-normal leading-[22px] tracking-[-0.14px] text-white">
                    Dwarkesh Business Hub,
                    <br />
                    Motera, Ahmedabad,
                    <br />
                    Gujarat 380005
                  </p>
                </motion.li>

                <motion.li
                  className="mt-[15px] flex items-center gap-[15px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src={siteData.footer.phoneIcon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized={true}
                    className="h-[18px] w-[18px] shrink-0"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <a
                    href="tel:+918866009512"
                    className="text-[14px] font-normal leading-[22px] tracking-[-0.14px] text-white hover:text-[#11C7F4] transition-colors"
                  >
                    +91 8866009512
                  </a>
                </motion.li>

                <motion.li
                  className="mt-[15px] flex items-center gap-[15px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src={siteData.footer.emailIcon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized={true}
                    className="h-[18px] w-[18px] shrink-0"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <a
                    href="mailto:info@gohilinfotech.com"
                    className="text-[14px] font-normal leading-[22px] tracking-[-0.14px] text-white hover:text-[#11C7F4] transition-colors"
                  >
                    info@gohilinfotech.com
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-[15px] border-t border-white/20 pt-[15px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-center md:text-left">
              <motion.p
                className="text-[13px] font-normal leading-none tracking-[-0.08px] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: false }}
              >
                © 2026 <span className="font-medium text-white">Gohil Infotech Private Limited</span>. All rights reserved.
              </motion.p>

              <motion.div
                className="flex items-center gap-[12px] text-[13px] font-normal leading-none tracking-[-0.08px] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: false }}
              >
                <motion.div whileHover={{ y: -2 }}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </footer>
  );
}