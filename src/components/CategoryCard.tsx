import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    icon: string;
  };
}

// Mapping Category IDs to High-Quality Unsplash Images
const CATEGORY_IMAGES: Record<string, string> = {
  'data-science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  'machine-learning': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
  'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  'ai-engineering': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  'cybersecurity': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
};

export default function CategoryCard({ category }: CategoryProps) {
  const bgImage = CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES['web-development'];

  return (
    <Link to={`/categories/${category.id}`} className="block h-full relative group">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 bg-slate-900"
      >
        {/* 1. Background Image - Always Visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90"
          />
          {/* 2. Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300" />
        </div>

        {/* 3. Content Container - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
          
          {/* Middle: Title (No Emoji) */}
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight drop-shadow-lg group-hover:text-blue-300 transition-colors">
            {category.name}
          </h3>

          {/* Bottom: Subtle 'Explore' text */}
          <div className="flex items-center gap-2 mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">View Courses</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}