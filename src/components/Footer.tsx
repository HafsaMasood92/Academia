import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      {/* UPDATED CONTAINER: Reduced width and increased padding */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300">
                Academia
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering the next generation of digital leaders with data-driven curriculum and industry-standard certifications.
            </p>
            
            {/* Newsletter */}
            <div className="pt-4">
               <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Subscribe to our newsletter</h4>
               <div className="flex gap-2">
                 <div className="relative flex-grow">
                   <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                   <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                   />
                 </div>
                 <button className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-lg transition-colors">
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Columns (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Platform</h3>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/categories/web-development" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Browse Courses</Link></li>
                <li><Link to="/mentorship" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mentorship</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/business" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">For Business</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Resources</h3>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
             <span>© 2025 Academia Inc. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
               <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</a>
             </div>
          </div>

          <div className="flex gap-4">
            <SocialLink icon={<Twitter className="w-4 h-4" />} />
            <SocialLink icon={<Facebook className="w-4 h-4" />} />
            <SocialLink icon={<Instagram className="w-4 h-4" />} />
            <SocialLink icon={<Linkedin className="w-4 h-4" />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all">
      {icon}
    </a>
  );
}