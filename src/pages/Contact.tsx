import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', stream: '', year: '', branch: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.stream.trim()) newErrors.stream = 'Stream is required';
    if (!formData.year.trim()) newErrors.year = 'Year is required';
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeFXf49bn-sPfwKixwbKTYAtSc6WwNiBLKUpw7KdK9TkBr_Vg/formResponse"; 
    const formDataToSend = new URLSearchParams();
    
    formDataToSend.append("entry.1045781291", formData.email);       
    formDataToSend.append("entry.2005620554", formData.name);    
    formDataToSend.append("entry.579939684", formData.stream);  
    formDataToSend.append("entry.1065046570", formData.year);    
    formDataToSend.append("entry.1166974658", formData.branch);  
    formDataToSend.append("entry.839337160", formData.message); 

    try {
      await fetch(formUrl, { method: "POST", mode: "no-cors", headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: formDataToSend });
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', stream: '', year: '', branch: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to transmit signal. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">
            GET IN <span className="text-gradient">TOUCH</span>
          </motion.h1>
          <p className="font-comfortaa text-slate-600 max-w-2xl mx-auto text-lg font-bold uppercase tracking-widest">
            NIST University • Electronics Hobby Club
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card bg-white/60 p-8 md:p-10">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-8 text-slate-900">Send a Message</h2>
            
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4"><Send size={32} /></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-slate-900">Signal Transmitted</h3>
                <p className="text-slate-600 font-medium">Your message has been securely sent to our database.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="eg. Rohit Sahu" onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 shadow-sm", focused === 'name' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.name && "border-red-400 bg-red-50")} />
                    {errors.name && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="rohit@example.com" onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 shadow-sm", focused === 'email' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.email && "border-red-400 bg-red-50")} />
                    {errors.email && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Stream *</label>
                    <div className="relative">
                      <select name="stream" value={formData.stream} onChange={handleChange} onFocus={() => setFocused('stream')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 outline-none transition-all duration-300 shadow-sm appearance-none cursor-pointer", focused === 'stream' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.stream && "border-red-400 bg-red-50", !formData.stream && "text-slate-400")}>
                        <option value="" disabled>Select Stream</option>
                        <option value="B. Tech" className="text-slate-800">B. Tech</option>
                        <option value="MBA" className="text-slate-800">MBA</option>
                        <option value="MCA" className="text-slate-800">MCA</option>
                        <option value="Other" className="text-slate-800">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                    {errors.stream && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.stream}</p>}
                  </div>
                  <div className="space-y-2 relative">
                    <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Year *</label>
                    <div className="relative">
                      <select name="year" value={formData.year} onChange={handleChange} onFocus={() => setFocused('year')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 outline-none transition-all duration-300 shadow-sm appearance-none cursor-pointer", focused === 'year' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.year && "border-red-400 bg-red-50", !formData.year && "text-slate-400")}>
                        <option value="" disabled>Select Year</option>
                        <option value="1st Year" className="text-slate-800">1st Year</option>
                        <option value="2nd Year" className="text-slate-800">2nd Year</option>
                        <option value="3rd Year" className="text-slate-800">3rd Year</option>
                        <option value="4th Year" className="text-slate-800">4th Year</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                    {errors.year && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.year}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Branch</label>
                  <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="eg. Electronics & Communication" onFocus={() => setFocused('branch')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 shadow-sm", focused === 'branch' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.branch && "border-red-400 bg-red-50")} />
                  {errors.branch && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.branch}</p>}
                </div>

                <div className="space-y-2">
                  <label className="font-comfortaa text-[10px] font-bold tracking-widest uppercase text-slate-500 ml-4">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your project idea or inquiry..." onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} className={cn("w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 resize-none shadow-sm", focused === 'message' && "border-ehc-indigo ring-2 ring-ehc-indigo/20", errors.message && "border-red-400 bg-red-50")} />
                  {errors.message && <p className="font-comfortaa text-[10px] text-red-500 font-bold uppercase tracking-widest ml-4">{errors.message}</p>}
                </div>

                <button disabled={isSubmitting} className={cn("font-comfortaa w-full py-5 bg-ehc-indigo text-white font-bold tracking-widest uppercase rounded-2xl hover:bg-slate-900 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed shadow-md", isSubmitting && "animate-pulse")}>
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Signal'}</span>
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bento-card bg-white/50 p-8 md:p-10">
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-8 text-slate-900">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ehc-indigo flex-shrink-0 shadow-sm"><MapPin size={24} /></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-comfortaa text-slate-900 font-bold uppercase tracking-widest text-xs mb-1">Location</h4>
                    <p className="text-slate-600 text-sm leading-snug font-medium">i-Lab, ATRIUM Ground Floor, NIST University, Odisha, 761008</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-500 flex-shrink-0 shadow-sm"><Phone size={24} /></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-comfortaa text-slate-900 font-bold uppercase tracking-widest text-xs mb-2">Call Us</h4>
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col xl:flex-row xl:justify-between w-full gap-y-1">
                        <span className="text-slate-600 text-sm font-medium">Atanu Jana:</span>
                        <span className="font-comfortaa text-slate-900 font-bold text-sm tracking-wider">+91 8700220071</span>
                      </div>
                      <div className="flex flex-col xl:flex-row xl:justify-between w-full gap-y-1">
                        <span className="text-slate-600 text-sm font-medium">Alok Kumar Tripathy:</span>
                        <span className="font-comfortaa text-slate-900 font-bold text-sm tracking-wider">+91 7847954255</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-sm"><Mail size={24} /></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-comfortaa text-slate-900 font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                    <p className="font-comfortaa text-slate-600 text-sm break-all font-bold">electronicshobbyclub.nist@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bento-card bg-white/50 flex flex-col sm:flex-row items-center justify-between p-8 gap-6">
              <h4 className="font-comfortaa text-xs font-bold tracking-widest uppercase text-slate-500 text-center sm:text-left">Social Matrix</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/electronics-hobby-club/" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all shadow-sm"><Linkedin size={20} /></a>
                <a href="https://www.instagram.com/electronics_hobby_club/" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] transition-all shadow-sm"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/EHCIANS" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all shadow-sm"><Facebook size={20} /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}