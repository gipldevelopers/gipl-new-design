"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Call PHP backend API using centralized config
      const response = await fetch("http://localhost/bakend/api/admin-login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        // Store auth token
        localStorage.setItem("adminToken", data.data.token);
        localStorage.setItem("adminUsername", data.data.username);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Login failed. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB] px-[34px] py-[40px]">
      <motion.div
        className="w-full max-w-[480px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/Title */}
        <div className="text-center mb-[40px]">
          <h1 className="text-[32px] font-[700] text-[#0F172A] mb-[8px]">
            Admin Panel
          </h1>
          <p className="text-[16px] text-[#64748B]">
            Sign in to manage contact messages
          </p>
        </div>

        {/* Login Card */}
        <motion.div
          className="bg-white rounded-[20px] p-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-[24px]">
            {/* Username Field */}
            <div>
              <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[14px] font-[500] text-[#0F172A] mb-[8px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2F2C8F] focus:border-transparent transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                className="bg-red-50 border border-red-200 text-red-600 px-[16px] py-[12px] rounded-[8px] text-[14px]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2F2C8F] text-white py-[14px] rounded-[8px] text-[16px] font-[600] hover:bg-[#2F2C8F]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-[24px] pt-[24px] border-t border-[#E2E8F0]">
            <p className="text-[12px] text-[#64748B] text-center">
              Demo: admin / admin123
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
