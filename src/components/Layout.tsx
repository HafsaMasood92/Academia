import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      
      {/* flex-grow ensures this section takes up all available space, 
        pushing the footer to the bottom 
      */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}