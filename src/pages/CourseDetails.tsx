import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle, PlayCircle, Lock, Globe, 
  Award, BarChart, Clock, BookOpen, 
  ArrowLeft, Share2, AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrollInCourse, enrolledCourses, user } = useApp();
  
  const course = COURSES.find(c => c.id === courseId);
  const isEnrolled = course && enrolledCourses.includes(course.id);

  if (!course) return <div className="text-center py-20 text-xl">Course not found</div>;

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollInCourse(course.id);
  };

  // Mock data for "What you'll learn"
  const learningPoints = [
    "Master the fundamental concepts and advanced techniques",
    "Build real-world projects to add to your portfolio",
    "Understand industry best practices and workflows",
    "Get certified and boost your career prospects"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* 1. HERO HEADER (Dark Gradient) */}
      <div className="relative bg-[#111827] text-white pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl opacity-50" />
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Breadcrumb */}
            <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm font-medium mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <BarChart className="w-3 h-3" /> {course.level}
              </span>
              <span className="px-3 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Globe className="w-3 h-3" /> English
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {course.description}
            </p>

            {/* Instructor Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                   {course.instructor.charAt(0)}
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Instructor</p>
                   <p className="text-sm font-bold text-white">{course.instructor}</p>
                 </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                 <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Last Updated</p>
                 <p className="text-sm font-bold text-white">August 2025</p>
              </div>
            </div>
          </div>
          
          {/* Space for the Sidebar to overlap */}
          <div className="lg:w-[380px] hidden lg:block" />
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: Course Info */}
          <div className="flex-1 space-y-12">
            
            {/* What you'll learn */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What you'll learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningPoints.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Content</h3>
              <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${isEnrolled ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                        <PlayCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                          Lecture {i}: Introduction to Module {i}
                        </p>
                        <p className="text-xs text-gray-500">Video • 12:45</p>
                      </div>
                    </div>
                    {isEnrolled ? (
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">Playing</span>
                    ) : (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {course.description} This comprehensive course is designed for students who want to master the subject from the ground up. 
                Whether you are a complete beginner or looking to refresh your skills, this curriculum covers everything you need.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar Card */}
          <div className="lg:w-[380px] relative">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-2xl lg:-mt-64 z-10 relative">
                
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                     <span className="font-bold text-lg">Preview Course</span>
                     <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                       <PlayCircle className="w-5 h-5 fill-current" />
                     </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  {/* Price Section */}
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                      ${course.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through mb-1.5">${(course.price * 1.5).toFixed(2)}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded mb-2">
                      33% OFF
                    </span>
                  </div>

                  {/* Enroll Button */}
                  {isEnrolled ? (
                    <button 
                      disabled 
                      className="w-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 py-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-default"
                    >
                      <CheckCircle className="w-5 h-5" /> Already Enrolled
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <button 
                        onClick={handleEnroll}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Enroll Now
                      </button>
                      <p className="text-xs text-center text-gray-500">30-Day Money-Back Guarantee</p>
                    </div>
                  )}

                  {/* Course Details List - ADDED THIS AS REQUESTED */}
                  <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">This course includes:</h4>
                    
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span>{Math.round(course.lectures * 0.5)} hours on-demand video</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <BookOpen className="w-5 h-5 text-gray-400" />
                        <span>{course.lectures} downloadable resources</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <BarChart className="w-5 h-5 text-gray-400" />
                        <span>{course.level} Level exercises</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <span>Full lifetime access</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Award className="w-5 h-5 text-gray-400" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>

                  {/* Share Actions */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800">
                     <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 transition-colors">
                       <Share2 className="w-4 h-4" /> Share
                     </button>
                     <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 transition-colors">
                       <AlertCircle className="w-4 h-4" /> Report
                     </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}