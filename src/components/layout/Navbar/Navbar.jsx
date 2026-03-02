import { useState, useEffect } from "react";
import logo from "../../../assets/DoubleA.svg";
import {
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const NavLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "About", link: "#" },
    { id: 4, name: "Contact", link: "#" },
  ];

  return (
    <nav className="sticky top-0 z-[120] w-full bg-white shadow-sm border-b border-rose-50">
      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[130] bg-white">
        {/* Logo */}
        <a href="/" className="relative transition-transform active:scale-95">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
        </a>

        {/* 1. Desktop Links - Switched from md:flex to lg:flex */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-8 text-sm font-medium text-slate-600 uppercase tracking-widest">
            {NavLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="hover:text-rose-500 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions & Toggle */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-600">
            <ShoppingBag size={22} strokeWidth={1.5} />
          </button>

          {/* 2. Toggle Button - Switched from md:hidden to lg:hidden */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 transition-colors"
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE/IPAD OVERLAY --- */}
      {/* 3. Changed md:hidden to lg:hidden */}
      <div
        className={`
        fixed inset-0 w-screen h-screen bg-slate-50 z-[110] flex flex-col
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-10">
          {NavLinks.map((item, index) => (
            <div key={item.id} className="overflow-hidden group">
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`
                  block text-4xl sm:text-5xl font-serif text-slate-900 hover:text-rose-500 transition-all duration-500 transform
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            </div>
          ))}

          {/* Footer inside menu */}
          <div
            className={`pt-12 flex flex-col items-center gap-6 transition-all duration-700 delay-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex gap-8 text-slate-400">
              <Instagram
                size={24}
                className="hover:text-rose-500 transition-colors"
              />
              <Facebook
                size={24}
                className="hover:text-rose-500 transition-colors"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              Double A Artistry
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
