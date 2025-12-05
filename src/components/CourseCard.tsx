import { Link } from 'react-router-dom';
import type { Course } from '../data/mockData'; // Fixed: Added 'type' keyword
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
    >
      <Link to={`/course/${course.id}`} className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Level Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm">
              {course.level}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-3">
             <h3 className="font-display font-bold text-lg leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
               {course.title}
             </h3>
             <p className="text-sm text-slate-500 mt-1">{course.instructor}</p>
          </div>

          <div className="mt-auto space-y-4">
            {/* Added: Stats Row (Lectures & Estimated Time) */}
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-4">
               <div className="flex items-center gap-1.5">
                 <BookOpen className="w-4 h-4 text-blue-500" />
                 <span>{course.lectures} Lectures</span>
               </div>
               <div className="flex items-center gap-1.5">
                 <Clock className="w-4 h-4 text-violet-500" />
                 {/* Mock duration based on lectures for display purposes */}
                 <span>{Math.round(course.lectures * 0.5)}h Total</span>
               </div>
            </div>
            
            {/* Added: Price & Action Row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Price</span>
                <span className="font-display font-bold text-xl text-slate-900 dark:text-white">${course.price}</span>
              </div>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide group-hover:bg-blue-600 group-hover:text-white transition-colors">
                Details
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}