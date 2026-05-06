/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dumbbell, 
  Flame, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Instagram, 
  Check,
  ChevronRight,
  Zap,
  Target,
  Trophy
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2349169976308?text=Hello%20I%20AM%20FIT%20Gym,%20I%20would%20like%20to%20get%20a%20membership%20with%20your%20gym%20today.";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const marqueeItem = " • BUILD STRENGTH • HIT YOUR GOALS • REAL RESULTS • LAGOS' FINEST • PURE PERFORMANCE • NO EXCUSES • TRAIN HARDER • JOIN THE COMMUNITY •";

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-magenta overflow-hidden">
      <div className="noise-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[150] bg-brand-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-magenta rounded-none flex items-center justify-center font-display font-black text-2xl italic -rotate-12 outline outline-2 outline-white/20">
              IF
            </div>
            <span className="font-display font-black text-2xl tracking-tight uppercase italic">I AM FIT</span>
          </div>
          <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-white/50">
            <a href="#services" className="hover:text-brand-magenta transition-all relative group">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-magenta transition-all group-hover:w-full" />
            </a>
            <a href="#plans" className="hover:text-brand-magenta transition-all relative group">
               Memberships
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-magenta transition-all group-hover:w-full" />
            </a>
            <a href="#location" className="hover:text-brand-magenta transition-all relative group">
              <span className="relative z-10">Location</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-magenta transition-all group-hover:w-full" />
            </a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-brand-magenta text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black transition-all shadow-[0_0_20px_rgba(255,0,255,0.3)]">
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1920" 
            alt="Intense training session with African athletes"
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-black to-transparent" />
        </div>

        {/* Aura Effects */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-magenta/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-orange/10 blur-[180px] rounded-full" />

        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 relative z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-brand-magenta" />
                  <span className="text-brand-magenta text-[12px] font-black uppercase tracking-[0.5em]">Lagos Premiere Fitness</span>
                </div>
                <h1 className="font-display text-[15vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter mb-10 italic uppercase relative">
                  DEFINE<br/>
                  <span className="text-gradient">STRENGTH</span><br/>
                  <span className="relative">
                    LIMITLESS
                    <span className="absolute -right-4 lg:-right-12 top-0 text-[3vw] text-white/10 not-italic font-black">2026</span>
                  </span>
                </h1>
                <p className="text-lg lg:text-2xl text-white/60 mb-12 leading-tight max-w-xl font-medium tracking-tight">
                  High-performance training for the ambitious. Discover a premium fitness environment designed for those who demand real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group shadow-[0_0_40px_rgba(255,0,255,0.2)]">
                    Activate Membership
                    <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/10 text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black hover:border-white transition-all backdrop-blur-sm">
                    View Services
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="relative p-2 border border-white/10 bg-brand-black/40 backdrop-blur-xl rotate-3 scale-95 hover:rotate-0 hover:scale-100 transition-all duration-700">
                <div className="absolute top-0 right-0 p-4 font-display font-black text-8xl text-white/5 italic">IF</div>
                <div className="aspect-[4/5] bg-brand-dusk relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" 
                    alt="Lagos Athlete training"
                    className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-2">Member Highlight</p>
                    <h3 className="text-2xl font-display font-black italic uppercase">TOLA ADEYEMI</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-10 bottom-24 hidden xl:block">
          <div className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[1em] text-white/20 whitespace-nowrap">
            PREMIUM FITNESS / LAGOS NIGERIA / PERFORMANCE
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="relative py-8 bg-brand-magenta overflow-hidden z-20 -rotate-2 scale-105 border-y-4 border-black">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          <span className="text-4xl lg:text-6xl font-display font-black uppercase italic text-black tracking-tighter">
            {marqueeItem} {marqueeItem}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Services Grid */}
      <section id="services" className="section-padding overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-brand-orange font-black text-xl">01</span>
              <div className="h-0.5 w-16 bg-brand-orange" />
            </div>
            <h2 className="font-display text-5xl lg:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter">
              CORE <br/><span className="text-brand-magenta">SERVICES</span>
            </h2>
          </motion.div>
          <motion.p {...fadeIn} className="max-w-md text-white/40 font-medium leading-tight">
            We provide a world-class training environment. No fillers, just high-caliber equipment and specialized coaching for serious athletes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "01", title: "Boxing Arena", icon: <Target />, img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800" },
            { tag: "02", title: "Strength", icon: <Flame />, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
            { tag: "03", title: "Pro Coaching", icon: <Zap />, img: "https://images.unsplash.com/photo-1583454110551-21f2fa2efe61?auto=format&fit=crop&q=80&w=800" },
            { tag: "04", title: "Fuel Bar", icon: <Dumbbell />, img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800" }
          ].map((service, i) => (
            <motion.div 
              key={service.title}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[600px] bg-brand-dusk overflow-hidden border border-white/5 cursor-pointer"
            >
              <img 
                src={service.img} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent p-10 flex flex-col justify-end">
                <div className="mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-12 h-12 bg-brand-magenta flex items-center justify-center text-black">
                    {service.icon}
                  </div>
                </div>
                <div className="relative">
                  <span className="text-[10vw] lg:text-[6vw] font-display font-black text-white/5 absolute -top-16 -left-6 uppercase italic tracking-tighter leading-none group-hover:text-brand-magenta/10 transition-colors">
                    {service.tag}
                  </span>
                  <h3 className="text-4xl font-display font-black uppercase italic relative z-10 group-hover:text-brand-magenta transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section id="plans" className="relative py-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-magenta/5 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding">
          <div className="text-center mb-32">
            <h2 className="font-display text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-brand-orange text-8xl opacity-10 font-black">02</span>
              MEMBERSHIPS
            </h2>
            <div className="w-48 h-2 bg-brand-magenta mx-auto mb-8" />
            <p className="text-white/40 uppercase tracking-[0.4em] font-black text-sm">Select Your Level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { name: "Starter", price: "25,000", features: ["Full Gym Access", "Standard Lockers", "Group Sessions"] },
              { name: "Pro", price: "45,000", features: ["Combat Zone Access", "Fuel Bar Priority", "Performance Tracking", "24/7 Access"], popular: true },
              { name: "Executive", price: "75,000", features: ["1-on-1 Pro Coaching", "Nutrition Strategy", "Daily Signature Juice", "Exclusive Access"] }
            ].map((plan, i) => (
              <motion.div 
                key={plan.name}
                {...fadeIn}
                transition={{ delay: i * 0.15 }}
                className={`group relative p-12 lg:p-16 border-2 flex flex-col transition-all duration-500 hover:-translate-y-4 ${plan.popular ? 'border-brand-magenta bg-brand-magenta/5 shadow-[0_40px_80px_rgba(255,0,255,0.1)]' : 'border-white/5 bg-brand-black'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-12 px-6 py-2 bg-brand-magenta text-black text-xs font-black uppercase tracking-widest -rotate-2">
                    Recommended
                  </div>
                )}
                <h3 className="font-display text-4xl font-black uppercase mb-2 italic tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline mb-12">
                  <span className="text-6xl font-black tracking-tighter">₦{plan.price}</span>
                  <span className="text-white/40 text-xs ml-2 uppercase font-black tracking-widest">/mo</span>
                </div>
                <div className="space-y-6 mb-16 flex-grow">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-4 text-sm font-medium text-white/70">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`w-full py-6 text-center font-black uppercase tracking-[0.2em] text-sm transition-all shadow-xl ${plan.popular ? 'bg-brand-magenta text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-brand-magenta hover:text-white'}`}>
                  Join The Gym
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Evidence */}
      <section className="bg-white/5 py-40 border-y border-white/10">
        <div className="section-padding">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeIn}>
                <h2 className="font-display text-5xl lg:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-12">
                  MEMBER <br/>
                  <span className="text-gradient">TESTIMONIES</span>
                </h2>
                <div className="space-y-12 relative">
                   <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />
                   {[
                    { quote: "Intensity redefined. Finally a training center in Ikeja that matches the professional standard.", author: "CHIDI O." },
                    { quote: "Exceptional coaching, elite equipment, and a focused community. Highly recommended.", author: "AMAKA G." }
                   ].map((t, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-2 w-8 h-px bg-brand-magenta" />
                      <p className="text-2xl lg:text-3xl font-display font-medium italic text-white/90 leading-tight mb-4 tracking-tight">"{t.quote}"</p>
                      <p className="text-[11px] font-black tracking-[0.5em] text-brand-magenta">{t.author}</p>
                    </div>
                   ))}
                </div>
              </motion.div>
              
              <motion.div {...fadeIn} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] bg-brand-dusk relative overflow-hidden -rotate-3 scale-110">
                    <img src="https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] bg-brand-dusk relative overflow-hidden rotate-6 translate-y-12">
                    <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 lg:w-48 h-48 bg-brand-magenta/10 backdrop-blur-3xl rounded-full border border-brand-magenta/30 flex items-center justify-center p-8 text-center rotate-12 animate-pulse">
                    <Trophy className="w-12 h-12 text-brand-magenta" />
                  </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="relative group">
        <div className="absolute top-0 left-0 p-24 pointer-events-none z-20">
          <h2 className="font-display text-6xl md:text-9xl font-black text-white/5 uppercase italic leading-none select-none">GYM LOCATION</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-white/5 border-b border-white/5">
          <div className="p-12 lg:p-32 flex flex-col justify-center relative bg-brand-black">
            <motion.div {...fadeIn}>
               <h3 className="font-display text-5xl font-black uppercase italic mb-12 tracking-tight">VISIT <span className="text-brand-magenta">US</span></h3>
               <div className="space-y-10 group/list">
                  <div className="flex items-center gap-8 group/item">
                    <div className="w-16 h-16 bg-brand-dusk border border-white/5 flex items-center justify-center text-brand-magenta group-hover/item:bg-brand-magenta group-hover/item:text-black transition-all duration-300">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">FACILITY ADDRESS</p>
                      <p className="text-xl font-display font-bold">12 P.S.S.D.C Rd, Phase 2, Ikeja, Lagos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group/item">
                    <div className="w-16 h-16 bg-brand-dusk border border-white/5 flex items-center justify-center text-brand-orange group-hover/item:bg-brand-orange group-hover/item:text-black transition-all duration-300">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">PHONE</p>
                      <p className="text-xl font-display font-bold">+234 916 997 6308</p>
                    </div>
                  </div>
               </div>
               <div className="mt-16">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full shadow-[0_20px_50px_rgba(255,0,255,0.2)]">
                    Contact Us
                  </a>
               </div>
            </motion.div>
          </div>
          <div className="h-[500px] lg:h-auto overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920" 
              alt="Lagos Urban Setting"
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-magenta/10 mix-blend-color" />
            <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-brand-black to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-magenta rounded-full animate-ping" />
                <span className="font-display font-black uppercase tracking-widest text-xl italic">OPEN DAILY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-black">
        <div className="section-padding">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
             <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-brand-magenta flex items-center justify-center font-display font-black text-xl italic -rotate-12 outline outline-2 outline-white/20">
                    IF
                  </div>
                  <span className="font-display font-black text-xl tracking-tight uppercase italic underline underline-offset-4 decoration-brand-orange">I AM FIT</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Lagos' premiere fitness facility dedicated to high-performance and elite training standards.
                </p>
             </div>
             
             <div className="flex flex-col md:flex-row gap-16 lg:gap-32 w-full lg:w-auto">
                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-magenta">Links</p>
                   {['Services', 'Memberships', 'Location'].map(l => (
                     <a key={l} href={`#${l.toLowerCase()}`} className="block text-2xl font-display font-black italic uppercase hover:text-brand-orange transition-colors">{l}</a>
                   ))}
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-magenta">Follow</p>
                   <div className="flex gap-8">
                      <Instagram className="hover:text-brand-orange transition-colors cursor-pointer w-8 h-8" />
                      <MessageCircle className="hover:text-brand-orange transition-colors cursor-pointer w-8 h-8" />
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 items-center flex gap-2">
               <span className="w-1.5 h-1.5 bg-brand-magenta rounded-full" />
               © 2026 I AM FIT GYM LAGOS / ALL RIGHTS RESERVED
             </p>
             <div className="px-6 py-2 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
               ELITE FITNESS STANDARDS
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
