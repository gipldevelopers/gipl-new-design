"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
        className="relative mx-[4px] overflow-hidden rounded-t-[120px] bg-[linear-gradient(90deg,#12284A_0%,#08224A_52%,#003A61_100%)] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_76%_16%,rgba(25,184,230,0.14),transparent_22%),radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.03),transparent_18%)]" />

        <div className="relative z-10 px-[75px] pb-[25px] pt-[70px]">
          <motion.div 
            className="mx-auto flex max-w-[820px] flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-[60px] font-semibold leading-[75px] tracking-[-2.0px] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Ready to Start Your
              <br />
              IT Project?
            </motion.h2>

            <motion.p 
              className="mt-[20px] text-[17px] font-normal leading-[30px] tracking-[-0.18px] text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Let&apos;s discuss your business needs and build the perfect IT solution together.
              <br />
              We make complex technology simple for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="mt-[30px] inline-flex h-[65px] w-[280px] items-center justify-center rounded-[11px] bg-[#F3F4F8] text-[16px] font-semibold leading-none tracking-[-0.18px] text-[#005676]"
              >
                Discussion your project
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-[80px] grid grid-cols-[369px_202px_260px_381px] gap-[37px]"
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
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/" className="inline-flex items-center gap-[12px]">
                  <Image
                    src="/home/home_images/Group_1688_(2).svg"
                    alt="Gohil Infotech"
                    width={42}
                    height={45}
                    className="h-[45px] w-[42px]"
                  />
                  <div className="flex flex-col leading-none text-white">
                    <span className="text-[21px] font-semibold uppercase tracking-[-0.5px]">
                      GOHIL
                    </span>
                    <span className="mt-[1px] text-[13px] font-normal uppercase tracking-[-0.1px]">
                      INFOTECH
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.p 
                className="mt-[22px] max-w-[350px] text-[16px] font-normal leading-[26px] tracking-[-0.14px] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                We build powerful digital experiences that
                <br />
                drive growth and innovation for businesses
                <br />
                worldwide. Creating tomorrow&apos;s solutions
                <br />
                today.
              </motion.p>

              <motion.div 
                className="mt-[20px] flex h-[50px] w-[368px] overflow-hidden rounded-[5px] bg-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  id="footer-email"
                  className="h-full w-[249px] bg-transparent px-[20px] text-[15px] font-normal text-[#70798E] outline-none placeholder:text-[#70798E]"
                />
                <motion.button
                  type="button"
                  onClick={() => {
                    const emailInput = document.getElementById("footer-email");
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

            {/* Quick Links Column */}
            <motion.div 
              className="pt-[8px]"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[17px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                QUICK LINKS
              </h3>
              <ul className="mt-[28px] space-y-[18px]">
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
                      className="text-[16px] font-normal leading-[24px] tracking-[-0.14px] text-white"
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
              <h3 className="text-[17px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                SERVICES
              </h3>
              <ul className="mt-[28px] space-y-[18px]">
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
                      className="text-[16px] font-normal leading-[24px] tracking-[-0.14px] text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div 
              className="pt-[8px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-[17px] font-semibold uppercase leading-none tracking-[-0.18px] text-white">
                CONTACT US
              </h3>

              <ul className="mt-[25px]">
                <motion.li 
                  className="flex items-start gap-[20px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src="/contact/Frame (3).svg"
                    alt=""
                    width={22}
                    height={22}
                    className="mt-[2px] h-[22px] w-[22px] shrink-0"
                  />
                  <p className="text-[16px] font-normal leading-[24px] tracking-[-0.14px] text-white">
                    Aamrakunj Business Centre, 209, nr.
                    <br />
                    PANCHSHLOK RESIDENCY, Zundal,
                    <br />
                    Ahmedabad, Gujarat 382424
                  </p>
                </motion.li>

                <motion.li 
                  className="mt-[20px] flex items-center gap-[20px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src="/contact/Frame (2).svg"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] shrink-0"
                  />
                  <p className="text-[16px] font-normal leading-[24px] tracking-[-0.14px] text-white">
                    +91 8866009512
                  </p>
                </motion.li>

                <motion.li 
                  className="mt-[20px] flex items-center gap-[20px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                >
                  <Image
                    src="/contact/Frame (1).svg"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] shrink-0"
                  />
                  <p className="text-[16px] font-normal leading-[24px] tracking-[-0.14px] text-white">
                    info@gohilinfotech.com
                  </p>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-[20px] border-t border-white/20 pt-[18px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center justify-between">
              <motion.p 
                className="text-[14px] font-normal leading-none tracking-[-0.08px] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: false }}
              >
                © 2026 <span className="font-medium text-white">Gohil Infotech Private Limited</span> . All rights reserved.
              </motion.p>

              <motion.div 
                className="flex items-center gap-[12px] text-[14px] font-normal leading-none tracking-[-0.08px] text-white"
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
