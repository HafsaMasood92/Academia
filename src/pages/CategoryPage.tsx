import { useParams, Link } from 'react-router-dom';
import { COURSES, CATEGORIES } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const categoryInfo = CATEGORIES.find(c => c.id === categoryName);
  const filteredCourses = COURSES.filter(c => c.category === categoryName);

  if (!categoryInfo) return <div className="p-20 text-center text-xl">Category not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden bg-slate-50 dark:bg-slate-900/20 border-b border-slate-200 dark:border-slate-800">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent dark:from-blue-900/20 dark:via-purple-900/10" />
           <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
           <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          
          {/* Breadcrumb / Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/10">
              <Sparkles className="w-3 h-3" />
              <span>Specialized Track</span>
            </div>
          </motion.div>

          {/* Title (No Emoji) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            {categoryInfo.name}
          </motion.h1>

          {/* Description */}
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of modules designed to take you from foundational principles to advanced industry application in {categoryInfo.name}.
          </motion.p>
        </div>
      </div>

      {/* 2. COURSES GRID (The 3 Courses Section) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
           <BookOpen className="w-5 h-5 text-blue-500" />
           <h2 className="text-xl font-bold text-slate-900 dark:text-white">Available Modules</h2>
           <span className="ml-auto text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
             {filteredCourses.length} Courses
           </span>
        </div>

        {filteredCourses.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
          >
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500">No courses found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}