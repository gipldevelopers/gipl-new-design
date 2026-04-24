"use client";

import { motion } from "framer-motion";

export default function TermsConditionsContent() {
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
            Terms & Conditions
          </h1>
          <p className="text-[18px] text-[#6B7280] max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
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
              Acceptance of Terms
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              By accessing and using Gohil Infotech's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Services Description
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-4">
              Gohil Infotech provides IT consulting, software development, web development, 
              and related technology services. Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4">
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>UI/UX design services</li>
              <li>Cloud solutions and deployment</li>
              <li>Digital marketing services</li>
              <li>IT consulting and support</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Payment Terms
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-4">
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4">
              <li>Payment schedules are defined in project contracts</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are exclusive of applicable taxes</li>
              <li>Refunds are subject to project-specific terms</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Intellectual Property
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Upon full payment, clients receive ownership of custom-developed code and designs 
              created specifically for their project. However, Gohil Infotech retains rights to:
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#6B7280] space-y-2 ml-4 mt-4">
              <li>General methodologies and know-how</li>
              <li>Reusable code components and frameworks</li>
              <li>Use project as portfolio reference (with client consent)</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Gohil Infotech's liability is limited to the amount paid for the specific service. 
              We are not liable for indirect, incidental, or consequential damages. We provide 
              services "as is" and make no warranties beyond those explicitly stated in project agreements.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Confidentiality
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              We maintain strict confidentiality regarding client information and project details. 
              All team members sign non-disclosure agreements, and we implement appropriate security 
              measures to protect sensitive information.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Termination
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Either party may terminate services with written notice as specified in individual 
              project agreements. Upon termination, clients receive all completed work and pay 
              for services rendered up to the termination date.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Governing Law
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              These terms are governed by the laws of Gujarat, India. Any disputes will be 
              resolved through arbitration in Ahmedabad, Gujarat.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] font-semibold text-[#2D3342] mb-4">
              Contact Information
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              For questions about these terms and conditions, please contact us:
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
            transition={{ duration: 0.6, delay: 1.1 }}
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