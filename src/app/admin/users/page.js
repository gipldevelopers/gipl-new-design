"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/users");
      const data = await response.json();
      if (response.ok) {
        setUsers(data.data);
      } else {
        setError(data.error || "Failed to load users");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setFormData({ name: "", email: "", password: "" });
    setShowModal(true);
  };

  const handleOpenEdit = (user) => {
    setModalMode("edit");
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email, password: "" });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const method = modalMode === "add" ? "POST" : "PUT";
      const body = modalMode === "add" ? formData : { ...formData, id: selectedUser.id };
      
      const res = await fetch("/api/admin/users", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      const data = await res.json();
      if (res.ok) {
        setShowModal(false);
        fetchUsers();
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Action failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    
    try {
      const res = await fetch(`/api/admin/users?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        fetchUsers();
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/admin/messages")} className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <h1 className="text-xl font-bold text-[#1E293B]">Manage Users</h1>
          </div>
          <button 
            onClick={handleOpenAdd}
            className="px-5 py-2.5 bg-[#3A38A8] text-white rounded-xl text-sm font-bold hover:bg-[#2f2d8e] transition-all shadow-lg shadow-[#3A38A8]/20"
          >
            + Add New User
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-10 px-6">
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm">
            {error}
          </div>
        )}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Admin User</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Email</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Joined Date</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#3A38A8]/10 flex items-center justify-center text-[#3A38A8] font-bold text-xs uppercase">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-bold text-slate-800">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">{user.email}</td>
                  <td className="px-6 py-5 text-sm text-slate-400">{new Date(user.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-5 text-right flex justify-end gap-2">
                    <button 
                      onClick={() => handleOpenEdit(user)}
                      className="p-2 text-slate-400 hover:text-[#3A38A8] transition-colors"
                      title="Edit User"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 00-2 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                      title="Delete User"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {modalMode === "add" ? "Create Admin User" : "Edit Admin User"}
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                {modalMode === "add" ? "They will have full access to the admin dashboard." : "Update details for this admin user."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full h-12 px-5 mt-2 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#3A38A8] outline-none text-slate-700 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full h-12 px-5 mt-2 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#3A38A8] outline-none text-slate-700 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    {modalMode === "add" ? "Password" : "New Password (Leave blank to keep same)"}
                  </label>
                  <input 
                    type="password" 
                    required={modalMode === "add"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full h-12 px-5 mt-2 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#3A38A8] outline-none text-slate-700 transition-all"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 h-12 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 h-12 bg-[#3A38A8] text-white rounded-xl font-bold hover:bg-[#2f2d8e] transition-all shadow-lg shadow-[#3A38A8]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : modalMode === "add" ? "Add User" : "Update User"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
