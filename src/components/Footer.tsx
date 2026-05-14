import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Cpu, Globe } from 'lucide-react';
import ehcLogo from '../assets/logo-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 overflow-hidden bg-slate-50 border-t border-slate-200/60">
      
      {/* Background Premium Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-ehc-indigo/5 blur-[120px] rounded-full -mb-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-white rounded-2xl border border-slate-200 shadow-sm transition-transform group-hover:scale-105">
                <img src={ehcLogo} alt="EHC Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-comfortaa text-2xl font-bold uppercase block leading-none text-slate-900">EHC</span>
                <span className="font-comfortaa text-[8px] font-bold tracking-[0.3em] uppercase text-slate-500">NIST University</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Empowering students to innovate, build, and deploy the next generation of hardware and IoT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/electronics-hobby-club/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all shadow-sm"><Linkedin size={16} /></a>
              <a href="https://www.instagram.com/electronics_hobby_club/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] transition-all shadow-sm"><Instagram size={16} /></a>
              <a href="https://www.facebook.com/EHCIANS" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all shadow-sm"><Facebook size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-comfortaa text-sm font-bold tracking-widest uppercase text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/events" className="text-slate-500 hover:text-ehc-indigo transition-colors flex items-center"><ChevronRight size={14} className="mr-2 opacity-50" /> SANKALP Fest</Link></li>
              <li><Link to="/gallery" className="text-slate-500 hover:text-ehc-indigo transition-colors flex items-center"><ChevronRight size={14} className="mr-2 opacity-50" /> Memory Core</Link></li>
              <li><Link to="/team" className="text-slate-500 hover:text-ehc-indigo transition-colors flex items-center"><ChevronRight size={14} className="mr-2 opacity-50" /> The Crew</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-ehc-indigo transition-colors flex items-center"><ChevronRight size={14} className="mr-2 opacity-50" /> Transmit Signal</Link></li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="font-comfortaa text-sm font-bold tracking-widest uppercase text-slate-900 mb-6">Headquarters</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin size={16} className="text-ehc-indigo mt-0.5 shrink-0" />
                <span className="leading-snug">i-Lab, ATRIUM Ground Floor<br/>NIST University, Odisha 761008</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone size={16} className="text-ehc-indigo shrink-0" />
                <span>+91 8700220071</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Mail size={16} className="text-ehc-indigo shrink-0" />
                <span className="truncate">electronicshobbyclub.nist@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Community Box */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-comfortaa text-sm font-bold tracking-widest uppercase text-slate-900 mb-3">Join The Matrix</h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                Connect with fellow innovators and stay updated on real-time club activities.
              </p>
            </div>
            <a href="https://chat.whatsapp.com/Kj4IH9GcMukAo58Dh0c2hP" className="font-comfortaa w-full py-4 rounded-full bg-ehc-indigo text-white text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center hover:bg-slate-900 transition-all duration-300 shadow-md">
              Join Whatsapp
            </a>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-8 py-6 px-8 bg-slate-900 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="font-comfortaa text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
            © {new Date().getFullYear()} ELECTRONICS HOBBY CLUB • NIST
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <span className="font-comfortaa text-[10px] font-bold tracking-[0.2em] uppercase text-white flex items-center">
              <Cpu size={14} className="mr-2 text-ehc-indigo" /> Hardware First
            </span>
            <span className="font-comfortaa text-[10px] font-bold tracking-[0.2em] uppercase text-white flex items-center">
              <Globe size={14} className="mr-2 text-indigo-400" /> Build The Future
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Helper component for chevron right to keep code clean
function ChevronRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}