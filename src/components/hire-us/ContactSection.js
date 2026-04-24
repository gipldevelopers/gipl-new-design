"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="w-full min-h-screen flex items-center bg-[#F7F9FE] py-[80px]">
      <div className="w-full mx-auto max-w-[1440px] px-[34px]">
        <motion.div 
          className="bg-[#0A2347] rounded-[20px] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-2 items-stretch">
            {/* Left Side - Contact Info */}
            <motion.div 
              className="p-[60px] text-white flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h2 className="text-[48px] font-[700] leading-[1.2] mb-[16px]">
                Get a Free Quote
              </h2>
              <p className="text-[16px] font-[400] leading-[1.6] text-white/60 mb-[40px]">
                Fill out the form and our solutions architect will get back to you within 24 hours with a personalized proposal.
              </p>

              <div className="space-y-[24px]">
                <motion.div 
                  className="flex items-center gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <div className="w-[48px] h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 4L9 9L15 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 4H18V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[16px] font-[600] mb-[4px]">Email Us</div>
                    <div className="text-[14px] text-white/60">hello@gohilinfotech.com</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="w-[48px] h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3H6L8 8L5.5 9.5C6.57096 11.6715 8.32855 13.429 10.5 14.5L12 12L17 14V18C17 18.5304 16.7893 19.0391 16.4142 19.4142C16.0391 19.7893 15.5304 20 15 20C11.4 20 8.1 18.6 5.6 16.1C3.4 13.9 2 10.6 2 7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[16px] font-[600] mb-[4px]">Call Anytime</div>
                    <div className="text-[14px] text-white/60">+91 987 654 3210</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="w-[48px] h-[48px] bg-[#2F2C8F] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 1C7.79086 1 6 2.79086 6 5C6 8 10 14 10 14S14 8 14 5C14 2.79086 12.2091 1 10 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[16px] font-[600] mb-[4px]">Office Location</div>
                    <div className="text-[14px] text-white/60 leading-[1.5]">
                      209, Aamrakunj Business Centre, Near Panchelok,<br />
                      Chandkheda Ahmedabad, Gujarat, India 382424
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              className="bg-white p-[60px] flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-[24px]">
                <div className="grid grid-cols-2 gap-[16px]">
                  <div>
                    <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                    Service Type
                  </label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent bg-white"
                  >
                    <option>Custom Software Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Cloud Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2F2C8F] text-white py-[16px] rounded-[8px] text-[16px] font-[600] hover:bg-[#2F2C8F]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>

                {submitMessage && (
                  <div className={`text-center text-[14px] font-[500] ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
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
