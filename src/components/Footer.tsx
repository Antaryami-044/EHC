import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Cpu, Globe } from 'lucide-react';
import ehcLogo from '../assets/logo-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-neon-cyan/5 blur-[120px] rounded-full -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10 border-t border-white/40 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-white/40 rounded-xl border border-white/50 backdrop-blur-sm">
                <img src={ehcLogo} alt="EHC Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter uppercase block leading-none text-slate-900">EHC</span>
                <span className="text-[8px] font-black tracking-[0.3em] uppercase text-ehc-indigo block">NIST University</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fostering innovation and practical excellence in electronics and hardware at NIST University, Odisha.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/electronics-hobby-club/" className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-slate-500 hover:text-ehc-indigo hover:bg-white transition-all shadow-sm"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/electronics_hobby_club/" className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-slate-500 hover:text-ehc-indigo hover:bg-white transition-all shadow-sm"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/EHCIANS" className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-slate-500 hover:text-ehc-indigo hover:bg-white transition-all shadow-sm"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-600 hover:text-ehc-indigo transition-colors text-sm font-bold uppercase tracking-widest">Home</Link></li>
              <li><Link to="/events" className="text-slate-600 hover:text-ehc-indigo transition-colors text-sm font-bold uppercase tracking-widest">Events</Link></li>
              <li><Link to="/gallery" className="text-slate-600 hover:text-ehc-indigo transition-colors text-sm font-bold uppercase tracking-widest">Gallery</Link></li>
              <li><Link to="/team" className="text-slate-600 hover:text-ehc-indigo transition-colors text-sm font-bold uppercase tracking-widest">Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-ehc-indigo flex-shrink-0" />
                <span className="text-slate-600 text-sm">i-Lab, ATRIUM Ground Floor, NIST University, Odisha, 761008</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-indigo-500 flex-shrink-0" />
                <span className="text-slate-600 text-sm">electronicshobbyclub.nist@gmail.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-slate-600 text-sm">+91 9777108515</span>
              </li>
            </ul>
          </div>

          {/* Community CTA */}
          <div className="bento-card bg-white/30 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase text-ehc-indigo mb-4">Join Community</h4>
              <p className="text-slate-600 text-[10px] leading-relaxed mb-6 uppercase tracking-wider">
                Connect with fellow innovators and stay updated on real-time club activities.
              </p>
            </div>
            <a href="https://chat.whatsapp.com/Kj4IH9GcMukAo58Dh0c2hP" className="font-stencil w-full py-4 rounded-full bg-ehc-indigo text-white text-[10px] font-black tracking-[0.3em] uppercase text-center hover:bg-slate-900 transition-all duration-300 shadow-md">Join Now</a>
          </div>
        </div>

        {/* --- NEW BOXED VISIBILITY SECTION --- */}
        <div className="mt-8 py-6 px-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
            © 2008 ELECTRONICS HOBBY CLUB • NIST UNIVERSITY
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white flex items-center">
              <Cpu size={14} className="mr-2 text-ehc-indigo" /> Hardware First
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white flex items-center">
              <Globe size={14} className="mr-2 text-indigo-400" /> Global Impact
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}