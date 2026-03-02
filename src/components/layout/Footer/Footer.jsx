import { Instagram, Facebook, Mail, Send } from "lucide-react";
import logo from "../../../assets/DoubleA.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-slate-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. Branding - Using "invert" to make your logo white */}
        <div className="text-center mb-10 space-y-4">
          <img 
            src={logo} 
            alt="Double A" 
            className="h-10 w-auto mx-auto brightness-0 invert" 
          />
          <p className="max-w-sm mx-auto text-sm leading-relaxed font-serif italic text-slate-400">
            "Handcrafting everlasting blooms that never fade, just like your most precious memories."
          </p>
        </div>

        {/* 2. Newsletter Input - Muted dark style */}
        <div className="w-full max-w-md mb-12">
          <form className="relative group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Join our newsletter" 
              className="w-full bg-[#2a2a2a] border border-transparent rounded-full py-4 px-6 text-sm text-white focus:ring-2 focus:ring-rose-500/50 outline-none transition-all placeholder:text-slate-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-500 text-white p-2.5 rounded-full hover:bg-rose-400 transition-colors">
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* 3. Socials & Contact */}
        <div className="flex items-center gap-8 mb-12">
          <a href="https://www.instagram.com/doubleadesignn?igsh=MWYxNzE1ZXhxYmYwag%3D%3D&utm_source=qr" target="_blank" className="hover:text-rose-400 transition-colors">
            <Instagram size={22} strokeWidth={1.5} />
          </a>
          <a href="https://www.facebook.com/share/17ysfA9wpt/?mibextid=wwXIfr" target="_blank" className="hover:text-rose-400 transition-colors">
            <Facebook size={22} strokeWidth={1.5} />
          </a>
          <a href="mailto:hello@doublea.com" className="hover:text-rose-400 transition-colors">
            <Mail size={22} strokeWidth={1.5} />
          </a>
        </div>

        {/* 4. Bottom Copyright */}
        <div className="text-center pt-8 border-t border-slate-800/50 w-full">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
            &copy; {new Date().getFullYear()} Double A Artistry — Everlasting Art
          </p>
        </div>
      </div>
    </footer>
  );
}