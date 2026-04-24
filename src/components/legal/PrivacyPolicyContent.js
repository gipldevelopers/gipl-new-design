"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyContent() {
  return (
    <div className="w-full bg-[#F5F7FB] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h1 className="text-[48px] font-semibold leading-tight tracking-[-0.05em] text-[#2D3342] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[18px] text-[#6B7280] max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="bg-white rounded-2xl p-8 shadow-sm space-y-8"
        >
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Information We Collect
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Business information and project requirements</li>
              <li>Communication preferences</li>
              <li>Technical information about your use of our services</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate about products, services, and events</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Information Sharing
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information in 
              the following circumstances:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4 mt-4">
              <li>With service providers who assist us in operating our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Data Security
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Your Rights
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              using the information provided below.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Contact Us
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-[16px] text-[#6B7280]">
              <p>Email: info@gohilinfotech.com</p>
              <p>Phone: +91 8866009512</p>
              <p>Address: Aamrakunj Business Centre, 209, nr. PANCHSHLOK RESIDENCY, Zundal, Ahmedabad, Gujarat 382424</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
            className="border-t pt-6"
          >
            <p className="text-[14px] text-[#9CA3AF]">
              Last updated: April 23, 2026
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}