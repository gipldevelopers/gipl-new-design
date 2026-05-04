"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "Custom Software Development",
    projectDetails: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        fullName: "",
        email: "",
        serviceType: "Custom Software Development",
        projectDetails: ""
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center bg-[#F7F9FE] py-12 md:py-[80px]">
      <div className="w-full mx-auto max-w-[1440px] px-6 md:px-[34px]">
        <motion.div
          className="bg-[#0A2347] rounded-[20px] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Side - Contact Info */}
            <motion.div
              className="p-8 md:p-[60px] text-white flex flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl xs:text-4xl md:text-[48px] font-[700] leading-tight md:leading-[1.2] mb-4 md:mb-[16px]">
                Get a Free Quote
              </h2>
              <p className="text-base md:text-[16px] font-[400] leading-relaxed md:leading-[1.6] text-white/60 mb-8 md:mb-[40px]">
                Fill out the form and our solutions architect will get back to you within 24 hours with a personalized proposal.
              </p>

              <div className="space-y-6 md:space-y-[24px]">
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-4 md:gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <div className="w-12 h-12 md:w-[48px] md:h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Image src="/hire-us/contact.png" alt="Email Us" width={20} height={20} className="object-contain brightness-0 invert" style={{ width: "auto", height: "auto" }} />
                  </div>
                  <div>
                    <div className="text-base md:text-[16px] font-[600] mb-1 md:mb-[4px]">Email Us</div>
                    <div className="text-sm md:text-[14px] text-white/60">hello@gohilinfotech.com</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col md:flex-row items-center gap-4 md:gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="w-12 h-12 md:w-[48px] md:h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Image src="/hire-us/phone.png" alt="Call Anytime" width={20} height={20} className="object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-base md:text-[16px] font-[600] mb-1 md:mb-[4px]">Call Anytime</div>
                    <div className="text-sm md:text-[14px] text-white/60">+91 987 654 3210</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-12 h-12 md:w-[48px] md:h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Image src="/hire-us/location.png" alt="Office Location" width={20} height={20} className="object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-base md:text-[16px] font-[600] mb-1 md:mb-[4px]">Office Location</div>
                    <div className="text-sm md:text-[14px] text-white/60 leading-relaxed md:leading-[1.5]">
                      209, Aamrakunj Business Centre, Near Panchelok,<br className="hidden md:block" />
                      Chandkheda Ahmedabad, Gujarat, India 382424
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="bg-white p-8 md:p-[60px] flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-[24px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[16px]">
                  <div>
                    <label className="block text-sm md:text-[14px] font-[500] text-[#0F172A] mb-2 md:mb-[8px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 border border-[#D1D5DB] rounded-[8px] text-base md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-[14px] font-[500] text-[#0F172A] mb-2 md:mb-[8px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 border border-[#D1D5DB] rounded-[8px] text-base md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-[14px] font-[500] text-[#0F172A] mb-2 md:mb-[8px]">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D1D5DB] rounded-[8px] text-base md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent bg-white"
                  >
                    <option>Custom Software Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Cloud Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm md:text-[14px] font-[500] text-[#0F172A] mb-2 md:mb-[8px]">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-3 border border-[#D1D5DB] rounded-[8px] text-base md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2F2C8F] text-white py-4 rounded-[8px] text-base md:text-[16px] font-[600] hover:bg-[#2F2C8F]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>

                {submitMessage && (
                  <div className={`text-center text-sm md:text-[14px] font-[500] ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

  );
}
