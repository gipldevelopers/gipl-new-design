"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/messages");
      const data = await response.json();
      if (response.ok) {
        setMessages(data.data);
      } else {
        setError(data.error || "Failed to load messages");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3A38A8] rounded-lg flex items-center justify-center text-white font-bold italic">G</div>
            <h1 className="text-xl font-bold text-[#1E293B]">Admin Console</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push("/admin/users")}
              className="text-sm font-semibold text-slate-600 hover:text-[#3A38A8] transition-colors"
            >
              Manage Users
            </button>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#1E293B]">Inquiry Submissions</h2>
            <p className="text-slate-500 text-sm mt-1">Manage and track all customer inquiries from your website.</p>
          </div>
          <button 
            onClick={fetchMessages}
            className="self-start px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm flex items-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 bg-white border border-slate-100 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-20 text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800">No Inquiries Found</h3>
            <p className="text-slate-500 max-w-xs mx-auto mt-2">When people fill out your contact form, their details will show up right here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200">
                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Sender</th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Info</th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {messages.map((msg, index) => (
                    <motion.tr 
                      key={msg.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#3A38A8]/10 flex items-center justify-center text-[#3A38A8] font-bold text-sm">
                            {msg.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 group-hover:text-[#3A38A8] transition-colors">{msg.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1 max-w-[200px]">{msg.message}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm font-medium text-slate-700">{msg.email}</div>
                        <div className="text-xs text-slate-400 mt-1">{msg.phone || "No phone"}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-slate-600 font-medium">
                          {new Date(msg.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {new Date(msg.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => setSelectedMessage(msg)}
                          className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#3A38A8] hover:bg-[#3A38A8] hover:text-white hover:border-[#3A38A8] transition-all shadow-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#3A38A8] flex items-center justify-center text-white font-bold text-xl">
                      {selectedMessage.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{selectedMessage.name}</h3>
                      <p className="text-sm text-slate-500">{new Date(selectedMessage.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedMessage(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Email Address</label>
                      <a href={`mailto:${selectedMessage.email}`} className="text-slate-800 font-semibold hover:text-[#3A38A8] transition-colors">{selectedMessage.email}</a>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Phone Number</label>
                      <a href={`tel:${selectedMessage.phone}`} className="text-slate-800 font-semibold hover:text-[#3A38A8] transition-colors">{selectedMessage.phone || "Not provided"}</a>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Physical Address</label>
                    <p className="text-slate-800 font-semibold leading-relaxed">{selectedMessage.address || "Not provided"}</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4 text-center">Inquiry Message</label>
                  <p className="text-slate-700 whitespace-pre-wrap leading-relaxed text-center italic">"{selectedMessage.message}"</p>
                </div>

                <div className="mt-10 flex gap-4">
                  <a 
                    href={`mailto:${selectedMessage.email}`}
                    className="flex-1 h-14 bg-[#3A38A8] text-white rounded-2xl flex items-center justify-center font-bold hover:bg-[#2f2d8e] transition-all shadow-lg shadow-[#3A38A8]/20"
                  >
                    Reply via Email
                  </a>
                  <button 
                    onClick={() => setSelectedMessage(null)}
                    className="flex-1 h-14 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
