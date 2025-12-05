import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, COURSES } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import CourseCard from '../components/CourseCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Shield, ChevronLeft, ChevronRight, Play, Users, Globe, Award } from 'lucide-react';

export default function Home() {
  const featuredCourses = COURSES.slice(0, 4);

  // Carousel State: 3 Cards Per Row
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < CATEGORIES.length) {
      setStartIndex(prev => prev + itemsPerPage);
    } else {
      setStartIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(prev => prev - itemsPerPage);
    } else {
      setStartIndex(Math.max(0, CATEGORIES.length - itemsPerPage)); 
    }
  };

  const visibleCategories = CATEGORIES.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* 1. Geometric Overlay / Diagonal Splash */}
      <div className="absolute top-0 right-0 w-2/3 h-screen bg-gradient-to-b from-blue-500/10 to-purple-500/10 -skew-x-12 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider"
            >
              <Sparkles className="w-3 h-3" />
              <span>Future of Learning</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                Digital Economy
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
            >
              Data-driven curriculum designed for the modern era. precise alignment, dashboard-style learning, and systematic progress tracking.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link to="/login" className="btn-tech bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 flex items-center gap-2">
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-tech border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white">
                View Syllabus
              </button>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full max-w-xl">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8 }}
               className="glass-card rounded-2xl p-2 relative z-10"
             >
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                 alt="Dashboard" 
                 className="rounded-xl w-full object-cover grayscale-[20%] contrast-125"
               />
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -right-8 top-10 glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-blue-500"
               >
                 <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                   <TrendingUp className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-semibold">Progress</p>
                   <p className="text-lg font-bold font-display text-slate-900 dark:text-white">+128%</p>
                 </div>
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -left-8 bottom-20 glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-violet-500"
               >
                 <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg">
                   <Shield className="w-6 h-6 text-violet-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-semibold">Certified</p>
                   <p className="text-lg font-bold font-display text-slate-900 dark:text-white">Elite Tier</p>
                 </div>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CAROUSEL / SYSTEMATIC TRACKS SECTION */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        
        {/* CENTERED HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-4 uppercase tracking-wider"
          >
             <span>Systematic Growth</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Specialized Career Paths
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Our "Systematic Tracks" are engineered to take you from foundational knowledge to industry mastery through a rigorous, data-backed curriculum.
          </motion.p>
        </div>

        {/* Carousel Content */}
        <div className="relative h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 absolute w-full h-full"
            >
              {visibleCategories.map((cat) => (
                <div key={cat.id} className="h-full"> 
                  <CategoryCard category={cat} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Centered Controls */}
        <div className="flex justify-center gap-4 mt-12">
           <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors group"
           >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
           </button>
           <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 group"
           >
             <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </section>

      {/* NEW: IMMERSIVE ABOUT US SECTION */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/90 dark:bg-[#0B0F19]/90 z-10" /> {/* Overlay for readability */}
          {/* Abstract Tech Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-97-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Left: Text Content */}
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Impact</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Online Education
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-300 leading-relaxed max-w-xl"
              >
                We blend cutting-edge technology with world-class pedagogy. Our platform isn't just about watching videos—it's about immersive, interactive experiences that build real-world competence.
              </motion.p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-white">50k+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Active Learners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-white">120+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Enterprise Partners</div>
                </div>
              </div>
            </div>

            {/* Right: 3D Visual Element */}
            <div className="flex-1 w-full max-w-lg perspective-1000">
              <motion.div
                initial={{ rotateY: 20, rotateX: 10, opacity: 0 }}
                whileInView={{ rotateY: -10, rotateX: 5, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Back Card (Decoration) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-50 blur-lg" />
                
                {/* Main Glass Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                     <Users className="w-32 h-32 text-white" />
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Industry Recognized</h3>
                      <p className="text-gray-300 text-sm">Our certifications are valued by top tech companies worldwide.</p>
                    </div>
                    <div className="pt-4">
                      <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                        <Play className="w-4 h-4 fill-current" />
                        <span>Watch Our Story</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 bg-[#0B0F19] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white font-mono text-sm">System Online</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-24">
        {/* UPDATED CONTAINER */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          {/* Centered Heading & Action */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-6">Trending Modules</h2>
            
            <Link 
              to="/categories/web-development" 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 text-slate-600 dark:text-slate-300 transition-all duration-300"
            >
              <span className="text-sm font-bold uppercase tracking-widest">View All Modules</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}