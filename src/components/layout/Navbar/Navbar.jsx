import logo from "../../../assets/DoubleA.svg";
import { Search, ShoppingBag, Menu as MenuIcon } from "lucide-react";

const NavLinks = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Shop", link: "#" },
  { id: 3, name: "About", link: "#" },
  { id: 4, name: "Contact", link: "#" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img className="h-12 w-auto" src={logo} alt="Double A Logo" />
            </a>
          </div>

          {/* 2. Desktop Navigation (Centered) */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium text-slate-600 uppercase tracking-widest">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-rose-500 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Actions (Search & Icons) */}
          <div className="flex items-center gap-4">
            {/* Search Bar Container */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Find your bloom..."
                className="w-40 lg:w-64 bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-rose-200 transition-all outline-none"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors"
              />
            </div>

            {/* Shopping Cart (New addition for better UI balance) */}
            <button className="p-2 text-slate-600 hover:text-rose-500 transition-colors">
              <ShoppingBag size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
