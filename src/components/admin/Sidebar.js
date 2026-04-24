"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L10 2L17 9V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/admin/dashboard",
    },
  ];

  return (
    <div className="w-[260px] bg-white h-screen fixed left-0 top-0 border-r border-[#E2E8F0] flex flex-col">
      {/* Logo */}
      <div className="px-[24px] py-[24px] border-b border-[#E2E8F0]">
        <h1 className="text-[20px] font-[700] text-[#0F172A]">
          Admin Panel
        </h1>
        <p className="text-[12px] text-[#64748B] mt-[4px]">
          Gohil Infotech
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-[16px] py-[24px]">
        <div className="space-y-[8px]">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <motion.button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] text-[14px] font-[500] transition-all ${
                  isActive
                    ? "bg-[#2F2C8F] text-white"
                    : "text-[#64748B] hover:bg-[#F1F5F9]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="px-[16px] py-[24px] border-t border-[#E2E8F0]">
        <motion.button
          onClick={handleLogout}
          className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] text-[14px] font-[500] text-red-600 hover:bg-red-50 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H7M13 13L17 10M17 10L13 7M17 10H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Logout</span>
        </motion.button>
      </div>
    </div>
  );
}
