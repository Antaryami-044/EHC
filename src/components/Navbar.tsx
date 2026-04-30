import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AlignRight, X } from 'lucide-react'; 
import { cn } from '../lib/utils';
import ehc from '../assets/logo-removebg-preview.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 rounded-full",
        scrolled ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-900/5 border border-white/60 px-4 md:px-6 py-2" : "px-2 py-2 bg-transparent"
      )}>

        {/* 1. LOGO - Removed -translate-y-[7px] so it naturally aligns center with flexbox */}
        <Link to="/" className="flex items-center space-x-3 group z-20">
          <div className={cn("relative flex items-center justify-center transition-all duration-500", scrolled ? "w-8 h-8" : "w-12 h-12")}>
            <img src={ehc} alt="EHC Logo" className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
          </div>
          <div className="hidden sm:block transition-all duration-500">
            <span className={cn("font-stencil font-black tracking-tighter uppercase block leading-none text-slate-900 transition-all duration-500", scrolled ? "text-base" : "text-xl")}>EHC</span>
            <span className={cn("font-stencil font-black uppercase text-ehc-indigo block transition-all duration-500", scrolled ? "text-[6px] tracking-[0.2em]" : "text-[8px] tracking-[0.3em]")}>NIST University</span>
          </div>
        </Link>

        {/* 2. DESKTOP LINKS (Centered) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center space-x-1 transition-all duration-500">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-stencil px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300",
                  location.pathname === link.path 
                    ? "bg-ehc-indigo text-white shadow-md" 
                    : "text-slate-600 hover:text-ehc-indigo hover:bg-white/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. CTA BUTTON & MOBILE MENU ICON (Right Side) */}
        <div className="flex items-center z-20">
          <a 
            href="https://chat.whatsapp.com/Kj4IH9GcMukAo58Dh0c2hP" 
            className={cn(
              "font-stencil hidden md:block rounded-full bg-slate-900 text-white font-black tracking-widest uppercase hover:bg-ehc-indigo transition-all duration-300 shadow-md",
              scrolled ? "px-5 py-2.5 text-xs" : "px-6 py-3 text-xs"
            )}
          >
            Join Community
          </a>
          
          {/* MOBILE HAMBURGER - Removed -translate-y-[7px] so it naturally aligns center */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 ml-4 flex items-center justify-center text-slate-800 hover:text-ehc-indigo transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X strokeWidth={1.5} size={32} /> : <AlignRight strokeWidth={1.5} size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -10, scale: 0.95 }} 
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-4 lg:hidden z-40"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 flex flex-col space-y-2 shadow-2xl border border-slate-200">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={cn(
                    "font-stencil px-6 py-4 rounded-2xl text-base font-black tracking-widest uppercase transition-all text-center",
                    location.pathname === link.path 
                      ? "bg-ehc-indigo text-white shadow-md" 
                      : "text-slate-600 hover:text-ehc-indigo hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-slate-200 my-2" />
              <a 
                href="#" 
                className="font-stencil w-full py-4 rounded-2xl bg-slate-900 text-white text-xs font-black tracking-[0.3em] uppercase text-center hover:bg-ehc-indigo transition-all duration-300 shadow-md"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}