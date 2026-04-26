import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import madhusudanSir from '../assets/madhusudan-sir.jpg';
import manojSir from '../assets/manoj-sir.jpg';
import rajeshSir from '../assets/rkd-sir.jpg';

const mentors = [
  { 
    name: "Dr. Madhusudan Mishra", 
    role: "Current Club Advisor (3rd)",
    img: madhusudanSir,
    bio: "Guides the club through administrative hurdles and provides strategic vision. He handles institutional relations, secures funding for major events, and ensures we have the lab resources needed for major projects."
  },
  { 
    name: "Mr. Manoj Kumar Senapati", 
    role: "2nd Club Advisor",
    img: manojSir,
    bio: "Steps in during critical technical roadblocks. Whether it's a burnt IC, a short-circuit, or a complex IoT architecture flaw, he provides hands-on troubleshooting and steady guidance under pressure."
  },
  { 
    name: "Mr. Rajesh Kumar Dash", 
    role: "1st Club Advisor",
    img: rajeshSir,
    bio: "Beyond the build, he has a natural instinct for the win. He knows exactly how to take our raw technical ideas and polish them into a pitch that actually resonates with external judges. He doesn’t just help us finish the project; he makes sure people understand why it matters."
  }
];

// 2k23 Batch Members - Only Name, Role, and Socials
const batch2k23 = [
  { name: "Atanu Jana", role: "President", linkedin: "https://www.linkedin.com/in/atanu1108", instagram: "https://www.instagram.com/atanu_1108" },
  { name: "Alok Kumar Tripathy", role: "Vice President", linkedin: "", instagram: "" },
  { name: "N Srinivas Patnaik", role: "Event Co-ordinator", linkedin: "https://www.linkedin.com/in/n-srinivas-patnaik-037382339", instagram: "" },
  { name: "S Praveen Kumar", role: "Tech Leader", linkedin: "https://www.linkedin.com/in/s-praveen-kumar-9460072a9?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/onlypraveen02?igsh=cXQ1MmJzamM3M3Zj" },
  { name: "Nabaneet Mishra", role: "Non-Tech Leader", linkedin: "https://www.linkedin.com/in/nabaneet-mishra-06190a356?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/n_a_b_u_9556_?igsh=MWVpOHhydndxOG54ZA==" },
  { name: "Arpita Mohanty", role: "Management & Decoration", linkedin: "https://www.linkedin.com/in/arpita-mohanty-a43768297?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/__arpita_058?igsh=bnVqYnY5MzgydmJ6" },
  { name: "Sradha Panigrahi", role: "Management & Decoration", linkedin: "https://www.linkedin.com/in/sradha-panigrahi-ab732a290", instagram: "https://www.instagram.com/the_great_sradha?igsh=MXcxenVxMjY5bTUy" },
  { name: "Aditya Kumar Nayak", role: "Video Editor", linkedin: " https://www.linkedin.com/in/aditya-kumar-nayak-a75012277/", instagram: " https://www.instagram.com/_1adityayyy/" },
];

// 2k24 Batch Members - Only Name, Role, and Socials
const batch2k24 = [
  { name: "Arpita Choudhury", role: "Core Member", linkedin: "https://www.linkedin.com/in/arpita-choudhury-26a7692a2?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/starlet_megha?igsh=MW9zbzBrb3BwejZqeg==" },
  { name: "M Tarun", role: "Core Member", linkedin: "https://www.linkedin.com/in/m-tarun-964372326?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/m_tarun_12?igsh=MWo3NTV3MXU0Z3RrNg==" },
  { name: "B Sai Ganesh", role: "Core Member", linkedin: "", instagram: "https://www.instagram.com/sai_ganesh_rdy?igsh=ejV5dmRsNWJveXMz" },
  { name: "Arpita Mahapatra", role: "Core Member", linkedin: "https://www.linkedin.com/in/arpita-mahapatra-a33686371", instagram: "https://www.instagram.com/_arpita_mahapatra?igsh=MTk5Mzh2c283aXN4MQ==" },
  { name: "Pavani Gontia", role: "Core Member", linkedin: "https://www.linkedin.com/in/pavani-gontia-8b9668300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/p._.gontia?igsh=MWllaGEzZ3lwcjRzcA==" },
  { name: "Soumya Rani Prusty", role: "Core Member", linkedin: "https://www.linkedin.com/in/soumya-rani-prusty-6bba47398", instagram: "https://www.instagram.com/___soumya_rani_prusty__?igsh=aDc1bW9veGk0dHVq" },
  { name: "K Kuresh Reddy", role: "Core Member", linkedin: "https://www.linkedin.com/in/k-kuresh-reddy-231505326?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "" },
  { name: "Sahil Raj Lenka", role: "Core Member", linkedin: "https://www.linkedin.com/in/sahil-raj-lenka-121417359?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/sahill_raj123?igsh=cWduZDExdG1vdnJo" },
  { name: "Hrydayesh Debta", role: "Core Member", linkedin: "", instagram: "https://www.instagram.com/ig_hrydayeshd?igsh=MTg3Z205c3BiM3lyeQ==" },
  { name: "Badal Ritesh Kumar", role: "Core Member", linkedin: "https://www.linkedin.com/in/ritesh-kumar-badal-3752a5331?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/riteshbadal1?igsh=ZXMwdmo0OTF4czc=" },
  { name: "Aditya Kumar Nayak", role: "Core Member", linkedin: "https://www.linkedin.com/in/aditya-kumar-nayak-754570371?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/nayak_aadityakumar?igsh=MWgweGxldTJ1dmF6ZQ==" },
  { name: "Prasidhi Sasmal", role: "Core Member", linkedin: "https://www.linkedin.com/in/prasidhi-sasmal-31328737a?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "" },
  { name: "Aditya Anjangi", role: "Core Member", linkedin: "https://www.linkedin.com/in/aditya-anjangi-975253361?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/aditya_anjangi?igsh=MWdqd3ltbGU4NzhjOA==" },
  { name: "M Kaivalya", role: "Core Member", linkedin: " https://www.linkedin.com/in/m-kaivalya-68a292313?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: " https://www.instagram.com/_kaivalyaa._?igsh=MWRqMXAyMXRkaGFoZA==" }
];

export default function Team() {
  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-slate-900">
            THE <span className="text-gradient">CREW</span>
          </motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-mono uppercase tracking-widest">
            Innovators of NIST University.
          </p>
        </div>

        {/* --- MENTORS SECTION (Mentors keep their photos) --- */}
        <div className="mb-24">
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-400">Mentors</h2>
            <div className="h-px flex-grow bg-slate-300" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div 
                key={mentor.name} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                className="group bento-card bg-white/60 p-8 flex flex-col justify-start text-left hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className="absolute inset-0 bg-ehc-indigo/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img src={mentor.img} alt={mentor.name} className="relative z-10 w-full h-full rounded-full border-4 border-white shadow-sm object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase text-slate-900">{mentor.name}</h3>
                    <p className="text-ehc-indigo text-[10px] font-black tracking-[0.2em] uppercase mt-1">{mentor.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-ehc-indigo/30 pl-4">
                  "{mentor.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 2K23 BATCH SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-400">2k23 Batch</h2>
            <div className="h-px flex-grow bg-slate-300" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {batch2k23.map((member, index) => (
              <motion.div 
                key={member.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.05 }} 
                className="group bento-card bg-white/50 p-6 flex items-center justify-between text-left hover:-translate-y-1"
              >
                {/* Text Group */}
                <div className="flex-grow pr-4">
                  <h3 className="text-base font-black tracking-tighter uppercase text-slate-900 group-hover:text-ehc-indigo transition-colors leading-tight break-words">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-black tracking-[0.15em] uppercase mt-1 leading-tight break-words">
                    {member.role}
                  </p>
                </div>
                
                {/* Conditional Social Icons */}
                {(member.linkedin || member.instagram) && (
                  <div className="flex-shrink-0 flex gap-2">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all shadow-sm"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] transition-all shadow-sm"
                        aria-label={`${member.name}'s Instagram profile`}
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 2K24 BATCH SECTION --- */}
        <div className="mb-24">
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-400">2k24 Batch</h2>
            <div className="h-px flex-grow bg-slate-300" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {batch2k24.map((member, index) => (
              <motion.div 
                key={member.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.05 }} 
                className="group bento-card bg-white/50 p-6 flex items-center justify-between text-left hover:-translate-y-1"
              >
                {/* Text Group */}
                <div className="flex-grow pr-4">
                  <h3 className="text-base font-black tracking-tighter uppercase text-slate-900 group-hover:text-ehc-indigo transition-colors leading-tight break-words">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-black tracking-[0.15em] uppercase mt-1 leading-tight break-words">
                    {member.role}
                  </p>
                </div>
                
                {/* Conditional Social Icons */}
                {(member.linkedin || member.instagram) && (
                  <div className="flex-shrink-0 flex gap-2">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all shadow-sm"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] transition-all shadow-sm"
                        aria-label={`${member.name}'s Instagram profile`}
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}