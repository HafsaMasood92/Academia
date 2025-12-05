import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, User, Mail, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setIsLoading(true);
      // Simulate a brief network delay for realism
      setTimeout(() => {
        login(name, email);
        navigate('/');
      }, 800);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-32 px-4 overflow-hidden bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* 1. Dynamic Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* 2. The Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/70 dark:bg-[#111827]/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl dark:shadow-blue-900/10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 mb-6 shadow-lg shadow-blue-500/30">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-3">
             JOIN ACADEMIA
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Enter your credentials to resume your learning trajectory and view analytics.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase  ml-1">
              Username
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  placeholder="e.g. Hafsa Masood"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider ml-1">
                Academic Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  placeholder="name@university.edu"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? 'Authenticating...' : 'Initialize Session'} 
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </span>
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Secure SSL Encryption</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}