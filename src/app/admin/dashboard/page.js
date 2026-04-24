"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminDashboard() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    // Fetch messages from API
    fetchMessages();
  }, [router]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost/bakend/api/get-messages.php", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setMessages(data.data);
      } else {
        setError(data.message || "Failed to load messages");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) {
      return;
    }

    setDeleteId(id);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost/bakend/api/delete-message.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        // Remove from local state
        setMessages(messages.filter((msg) => msg.id !== id));
      } else {
        alert(data.message || "Failed to delete message");
      }
    } catch (err) {
      alert("Failed to delete message. Please try again.");
    } finally {
      setDeleteId(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">
      <Sidebar />
      
      <div className="flex-1 ml-[260px]">
        <Header
          title="Contact Messages"
          subtitle={`${messages.length} total messages`}
        />

        <div className="p-[40px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-[24px] mb-[32px]">
            <motion.div
              className="bg-white rounded-[12px] p-[24px] border border-[#E2E8F0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-[#64748B] mb-[4px]">
                    Total Messages
                  </p>
                  <p className="text-[32px] font-[700] text-[#0F172A]">
                    {messages.length}
                  </p>
                </div>
                <div className="w-[48px] h-[48px] bg-[#EEF2FF] rounded-[12px] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="#2F2C8F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-[12px] p-[24px] border border-[#E2E8F0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-[#64748B] mb-[4px]">
                    Today
                  </p>
                  <p className="text-[32px] font-[700] text-[#0F172A]">
                    {messages.filter((m) => 
                      new Date(m.created_at).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
                <div className="w-[48px] h-[48px] bg-[#F0FDF4] rounded-[12px] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#16A34A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-[12px] p-[24px] border border-[#E2E8F0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-[#64748B] mb-[4px]">
                    This Week
                  </p>
                  <p className="text-[32px] font-[700] text-[#0F172A]">
                    {messages.length}
                  </p>
                </div>
                <div className="w-[48px] h-[48px] bg-[#FEF3C7] rounded-[12px] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                      stroke="#D97706"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Messages Table */}
          <motion.div
            className="bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-[24px] py-[16px] text-left text-[12px] font-[600] text-[#64748B] uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {isLoading ? (
                    <tr>
                      <td colSpan="6" className="px-[24px] py-[40px] text-center">
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2F2C8F]"></div>
                        </div>
                      </td>
                    </tr>
                  ) : messages.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-[24px] py-[40px] text-center text-[#64748B]">
                        No messages found
                      </td>
                    </tr>
                  ) : (
                    messages.map((message, index) => (
                      <motion.tr
                        key={message.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-[#F8FAFC] transition-colors"
                      >
                        <td className="px-[24px] py-[16px]">
                          <div className="text-[14px] font-[500] text-[#0F172A]">
                            {message.name}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <div className="text-[14px] text-[#64748B]">
                            {message.email}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <div className="text-[14px] text-[#64748B]">
                            {message.phone}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <div className="text-[14px] text-[#64748B] max-w-[300px] truncate">
                            {message.message}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <div className="text-[14px] text-[#64748B]">
                            {formatDate(message.created_at)}
                          </div>
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <button
                            onClick={() => handleDelete(message.id)}
                            disabled={deleteId === message.id}
                            className="text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 5H17M8 9V15M12 9V15M4 5L5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M7 5V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
