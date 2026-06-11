/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useRef, ReactNode } from 'react';

const FadeIn = ({ children, delay = 0, y = 20, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#f5f5f5] text-zinc-900 font-sans select-none">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-10 py-6 flex items-center justify-between z-50 mix-blend-difference text-white">
        <div className="font-bold tracking-tighter text-xl">ABHIRAM</div>
        <div className="hidden md:flex gap-8 text-[11px] font-medium tracking-widest uppercase text-zinc-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#insights" className="hover:text-white transition-colors">Insights</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#partner" className="flex items-center gap-1 hover:text-white transition-colors">
            Partner <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO (ONE WHOLE PAGE) */}
      <section className="relative h-screen min-h-[700px] w-full bg-zinc-900 flex flex-col justify-center items-end px-12 md:px-24 overflow-hidden">
        {/* Profile Image Background */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://i.ibb.co/Ng6dvmVD/main-web.png" 
            alt="Abhiram Profile" 
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
        
        {/* Gradients - Adjusted for visibility while maintaining readability */}
        <div className="absolute inset-0 opacity-40 bg-black/40 z-1" />
        <div className="absolute top-0 right-0 w-full h-full hero-radial z-1 mt-auto" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-end text-center md:text-right">
          {/* Stats */}
          <div className="flex gap-16 mb-16 justify-center md:justify-end">
            <FadeIn delay={0.2} y={10}>
              <div className="text-center">
                <div className="text-white text-5xl md:text-7xl font-black tracking-tighter">340+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-bold">Videos Produced</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} y={10}>
              <div className="text-center">
                <div className="text-white text-5xl md:text-7xl font-black tracking-tighter">+01</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-bold">Year Experience</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center md:items-end mb-12">
              <h1 className="text-[10vw] md:text-[8vw] font-black text-white leading-none tracking-tighter text-editorial mb-4">
                Abhiram
              </h1>
              <p className="text-4xl md:text-7xl font-extralight italic text-zinc-400 tracking-tight">an AI Architect</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-sm md:text-base text-zinc-400 font-light max-w-md mb-12 opacity-80 md:ml-auto">
              AI Creative Director & Video Editor crafting high-impact visual narratives at scale.<br className="hidden md:block" /> I don’t just create content — I engineer attention, emotion, and recall.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <button className="px-14 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-2xl">
              EXPLORE WORKS
            </button>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">Scroll</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* CONTENT AREA */}
      <main className="w-full h-auto p-12 flex flex-col gap-24 bg-[#f5f5f5] max-w-7xl mx-auto">
        
        {/* SECTION 2: ABOUT / INTRO */}
        <div id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="bg-white rounded-[40px] p-12 h-full flex flex-col justify-between border border-zinc-100 shadow-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold block mb-8">Creative Mission</span>
                  <h2 className="text-5xl font-bold leading-[0.95] text-zinc-800 tracking-tighter mb-8">Defining the intersection of Generative AI and direction.</h2>
                  <p className="text-base text-zinc-500 font-light leading-relaxed">
                    With deep roots in video direction and generative technology, we deliver high-impact digital experiences that resonate globally.
                  </p>
                </div>
                <a href="#" className="text-xs font-bold tracking-widest uppercase mt-12 flex items-center gap-2 group underline-offset-8 hover:underline decoration-1">
                  THE SKILLBUILD STORY <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <FadeIn delay={0.1} className="h-full">
                <div className="h-full bg-white rounded-[40px] p-12 flex flex-col justify-center items-center text-center border border-zinc-100 shadow-sm">
                  <div className="text-7xl font-bold text-zinc-900 mb-4 tracking-tighter">340+</div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-[0.3em] leading-relaxed">videos produced in AI and traditional production.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="h-full">
                <div className="h-full bg-zinc-800 rounded-[40px] overflow-hidden relative grayscale-img group cursor-pointer shadow-xl">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" alt="Curation" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-600/30 to-black/60"></div>
                  <div className="absolute bottom-10 left-10 text-xs text-white font-bold tracking-[0.4em] uppercase opacity-70">Curation Art #04</div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.3}>
              <div className="bg-zinc-100/50 rounded-[40px] p-12 italic text-2xl font-light text-zinc-800 leading-relaxed border border-zinc-200/50">
                "Abhiram's direction represents the frontier of AI storytelling. A pioneer in the true sense."
                <div className="mt-8 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 not-italic">— Lead, Creative Tech Global</div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* SECTION 3: PROJECTS */}
        <div id="portfolio" className="flex flex-col">
          <FadeIn>
            <div className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-8">
              <h3 className="text-6xl font-bold tracking-tighter text-zinc-900">Curation of Farm Batches</h3>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.5em] mb-3">01 / 03</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Kerala AI Influencer Launch", cat: "Direction", img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=800&auto=format&fit=crop" },
              { title: "Spiderworks Series", cat: "Branding", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop" },
              { title: "Neural Brand Story", cat: "AI Animation", img: "https://images.unsplash.com/photo-1531871563581-6780c14c3303?q=80&w=800&auto=format&fit=crop" }
            ].map((proj, idx) => (
              <div key={idx}>
                <FadeIn delay={idx * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-zinc-200 rounded-[40px] mb-8 overflow-hidden border border-zinc-100 shadow-sm relative">
                       <img src={proj.img} className="w-full h-full object-cover grayscale grayscale-img group-hover:scale-105 transition-all duration-1000" alt={proj.title} />
                       <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-zinc-800 group-hover:opacity-60 transition-opacity">{proj.title}</h4>
                    <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] font-bold mt-4">{proj.cat}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: EXPERIENCE / JOURNEY */}
        <div className="bg-white rounded-[48px] p-20 border border-zinc-100 shadow-sm">
          <FadeIn>
            <h3 className="text-6xl font-bold tracking-tighter mb-8">My Design Journey</h3>
            <p className="text-zinc-500 text-lg font-light max-w-2xl mb-24 leading-relaxed italic border-l-2 border-zinc-100 pl-8">
              Over the past 12+ years, I've had the opportunity to collaborate with world-class spice houses and sustainable farming cooperatives.
            </p>
          </FadeIn>
          <div className="space-y-16">
            {[
              { year: "2023 — Present", role: "AI Architect & Creative Lead", company: "SKILLBUILD CREATIVES", desc: "Produced 110+ AI videos at Kerala's first AI influencer + creative studio. Pioneering AI-assisted content creation and neural aesthetic standards." },
              { year: "2022 — 2023", role: "Content Director", company: "SPIDERWORKS TECH", desc: "Directed 230+ high-quality videos, managing the entire production lifecycle from conceptual scripting to final technical cut." }
            ].map((exp, idx) => (
              <div key={idx}>
                <FadeIn delay={idx * 0.1}>
                  <div className="flex flex-col md:flex-row gap-12 group">
                    <div className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-300 w-48 shrink-0">{exp.year}</div>
                    <div className="flex-1">
                      <h4 className="text-4xl font-bold text-zinc-800 leading-none mb-4 tracking-tighter group-hover:pl-4 transition-all duration-500 border-l-0 group-hover:border-l-4 border-zinc-900">{exp.role}</h4>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-8">{exp.company}</div>
                      <p className="text-base text-zinc-500 font-light leading-relaxed max-w-2xl">{exp.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: INSIGHTS */}
        <div id="insights" className="flex flex-col gap-12">
          <FadeIn>
            <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-8">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.4em] text-zinc-400">Design Insights & Trends</h3>
              <a href="#" className="group flex items-center gap-3 text-xs font-bold text-zinc-900 uppercase tracking-widest transition-all">
                View All Essays <div className="w-8 h-8 rounded-full border border-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all"><ArrowUpRight className="w-4 h-4" /></div>
              </a>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { title: "Becoming Kerala's First AI Influencer", time: "6 Min Read", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop" },
              { title: "AI in Traditional Production", time: "4 Min Read", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" }
            ].map((post, idx) => (
              <div key={idx}>
                <FadeIn delay={idx * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] rounded-[48px] overflow-hidden grayscale grayscale-img mb-10 shadow-2xl transition-all duration-1000">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4">{post.time}</div>
                    <h4 className="text-4xl font-bold tracking-tighter text-zinc-800 group-hover:opacity-50 transition-all">{post.title}</h4>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: DARK CTA & FOOTER */}
        <div id="contact" className="mt-24 flex flex-col gap-12 pb-16">
          <FadeIn y={50}>
            <div className="bg-zinc-900 rounded-[64px] p-24 text-center relative overflow-hidden group cursor-pointer shadow-black/40 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 cta-radial transition-opacity group-hover:opacity-30 duration-1000"></div>
              <h3 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-8 relative z-10 select-none leading-[0.8] text-editorial">Sourcing the Rare.<br/>Defining the Standard.</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.5em] mb-16 relative z-10 font-bold">Pushing limits of generative production</p>
              <div className="flex justify-center relative z-10">
                <button className="px-16 py-6 border-2 border-zinc-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-105 flex items-center gap-3">
                  Let's Talk <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* FOOTER */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 mt-24 gap-12">
            <FadeIn y={20}>
              <a href="mailto:hello@abhiram.ai" className="text-4xl md:text-7xl font-bold tracking-tighter hover:opacity-50 transition-opacity border-b-4 border-zinc-900 pb-2">
                hello@abhiram.ai
              </a>
            </FadeIn>
            
            <div className="flex flex-col items-end gap-8">
              <FadeIn delay={0.2} y={20}>
                <div className="flex gap-12 text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] transition-all">
                  <span className="hover:text-zinc-900 cursor-pointer hover:scale-110 transition-transform">Instagram</span>
                  <span className="hover:text-zinc-900 cursor-pointer hover:scale-110 transition-transform">LinkedIn</span>
                  <span className="hover:text-zinc-900 cursor-pointer hover:scale-110 transition-transform">Twitter/X</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} y={20}>
                <button 
                  onClick={scrollToTop}
                  className="w-16 h-16 flex items-center justify-center border-2 border-zinc-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all shadow-lg group"
                >
                  <ArrowUp className="w-6 h-6 group-hover:-translate-y-2 transition-transform" />
                </button>
              </FadeIn>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.5em] text-zinc-300 font-bold px-4 mt-12 pt-12 border-t border-zinc-100">
            <span>© 2024 ABHIRAM COLLABORATIVE</span>
            <span>AI Research & Creative Direction</span>
          </div>
        </div>
      </main>
    </div>
  );
}
