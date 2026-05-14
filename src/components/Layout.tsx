import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Layout() {
  const { pathname } = useLocation();

  // Ensure the page always scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* DYNAMIC PADDING: 
        0px for Home page (to allow full-screen hero image) 
        100px for all other pages (to account for the fixed Navbar)
      */}
      <main className={`flex-grow ${pathname === '/' ? 'pt-0' : 'pt-[100px]'}`}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}