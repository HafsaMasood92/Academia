import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, BookOpen, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  
  // Search State
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof COURSES>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle Search Input
  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }
    
    const filtered = COURSES.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) || 
      course.category.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  }, [query]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchNavigation = (courseId: string) => {
    navigate(`/course/${courseId}`);
    setShowSuggestions(false);
    setQuery('');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      {/* UPDATED CONTAINER: Reduced width to max-w-6xl and increased padding */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300">
              Academia
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8 relative" ref={searchRef}>
            <div className="relative w-full group">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
              {query && (
                <button 
                  onClick={() => { setQuery(''); setSuggestions([]); }}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && query && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#111827] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden max-h-96 overflow-y-auto"
                >
                  {suggestions.length > 0 ? (
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Courses
                      </div>
                      {suggestions.map((course) => (
                        <button
                          key={course.id}
                          onClick={() => handleSearchNavigation(course.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
                        >
                          <img src={course.thumbnail} alt="" className="w-10 h-10 rounded object-cover" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{course.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{course.instructor}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">
                      No results found
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/my-courses" className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  My Learning
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden lg:block text-sm font-semibold text-gray-700 dark:text-gray-200 truncate max-w-[100px]">{user.name}</span>
                  <button onClick={() => { logout(); navigate('/'); }} title="Logout" className="text-gray-400 hover:text-red-500 transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="hidden sm:block text-sm font-medium px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Log in
                </Link>
                <Link to="/login" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:opacity-90 transition-all">
                  Join Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}