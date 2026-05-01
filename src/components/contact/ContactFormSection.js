"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactFormSection() {
  const searchParams = useSearchParams();
  const [positionParam, setPositionParam] = useState("");

  useEffect(() => {
    setPositionParam(searchParams.get("position") || "");
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    position: positionParam,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      position: positionParam,
    }));
  }, [positionParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // You can replace this with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
          position: positionParam,
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center bg-[#F2F4F8] py-12 md:py-[72px]">
      <div className="w-full mx-auto max-w-[1440px] px-6 md:px-[34px]">
        <motion.h2
          className="text-center text-3xl xs:text-4xl md:text-[40px] font-[700] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.03em] text-[#1D3557]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Get in Touch With Us
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 md:mt-[16px] max-w-[520px] text-center text-base md:text-[17px] font-[400] leading-relaxed md:leading-[1.6] text-[#6B7280]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          Fill out the form below and our team will get back to you within 24 hours.
        </motion.p>

        <div className="mx-auto mt-10 md:mt-[48px] grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 md:gap-[32px] items-start max-w-[1200px]">

          {/* Form card */}
          <motion.div
            className="rounded-[20px] border border-[#D7DEE8] bg-white px-6 md:px-[40px] pb-10 md:pb-[40px] pt-8 md:pt-[36px] shadow-[0_4px_24px_rgba(15,23,42,0.06)] min-h-auto md:h-[480px] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.h3
              className="text-xl md:text-[22px] font-[700] leading-tight text-[#1D3557]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Have some questions?
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-6 md:mt-[24px] flex-1 flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[16px]">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 md:h-[48px] rounded-[10px] bg-[#F4F6FA] px-4 md:px-[16px] text-[15px] font-[400] text-[#475569] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#4F6EF7]/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 md:h-[48px] rounded-[10px] bg-[#F4F6FA] px-4 md:px-[16px] text-[15px] font-[400] text-[#475569] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#4F6EF7]/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="sm:col-span-2 h-12 md:h-[48px] rounded-[10px] bg-[#F4F6FA] px-4 md:px-[16px] text-[15px] font-[400] text-[#475569] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#4F6EF7]/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: false }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="text"
                  name="address"
                  placeholder="Your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="sm:col-span-2 h-12 md:h-[48px] rounded-[10px] bg-[#F4F6FA] px-4 md:px-[16px] text-[15px] font-[400] text-[#475569] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#4F6EF7]/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false }}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-4 md:mt-[16px] flex-1 w-full min-h-[120px] resize-none rounded-[10px] bg-[#F4F6FA] px-4 md:px-[16px] py-3 md:py-[14px] text-[15px] font-[400] leading-relaxed md:leading-[1.6] text-[#475569] outline-none placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#4F6EF7]/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: false }}
                whileFocus={{ scale: 1.02 }}
              />

              {submitStatus === "success" && (
                <motion.p
                  className="mt-4 md:mt-[16px] text-sm font-[500] text-green-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  className="mt-4 md:mt-[16px] text-sm font-[500] text-red-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ✗ Error sending message. Please try again.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 md:mt-[20px] h-12 md:h-[48px] w-full rounded-[999px] bg-[#3A38A8] text-sm md:text-[15px] font-[700] uppercase tracking-wider text-white hover:bg-[#2f2d8e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-[300px] md:h-[480px] overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(15,23,42,0.10)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/contact/0ec4f49c17482fbf44680e05ea42a4257b9dee06.jpg"
              alt="Office interior"
              fill
              className="object-cover"
            />
            {/* Decorative pin */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 md:h-[64px] md:w-[64px] items-center justify-center rounded-full bg-[rgba(95,110,255,0.25)]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.1 // Start loop after entry animation
                }
              }}
              viewport={{ once: false }}
              animate={{
                scale: [1, 1.1, 1],
              }}
            >
              <div className="flex h-8 w-8 md:h-[36px] md:w-[36px] items-center justify-center rounded-full bg-[rgba(95,110,255,0.85)]">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
