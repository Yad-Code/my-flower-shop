import { ArrowRight } from "lucide-react";
import ProductCard from "../components/shop/Product/ProductCard";

// 1. Your Image Data (Add all your flower images here)
const allProducts = [
  { id: 1, name: "Silk Crimson Rose", price: "45.00", image: "https://images.unsplash.com/photo-1562690862-30bb5476d52f?q=80&w=800" },
  { id: 2, name: "Velvet Peony", price: "38.00", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800" },
  { id: 3, name: "Paper Lily Bouquet", price: "60.00", image: "https://images.unsplash.com/photo-1588628566587-dbd176de94b4?q=80&w=800" },
  { id: 4, name: "Cotton Daisy", price: "25.00", image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=800" },
  { id: 5, name: "Lavender Bunch", price: "32.00", image: "https://images.unsplash.com/photo-1588628566587-dbd176de94b4?q=80&w=800" },
  { id: 6, name: "Sunshine Marigold", price: "28.00", image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=800" },
  { id: 7, name: "White Orchid", price: "42.00", image: "https://images.unsplash.com/photo-1562690862-30bb5476d52f?q=80&w=800" },
  // Add as many as you want...
];

export default function Shop() {
  const heroImage = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80";

  return (
    <div className="bg-white min-h-screen">
      {/* Shop Hero - Breadcrumbs Section */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight">The Gallery</h1>
          <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
            <a href="/" className="hover:text-rose-300 transition-colors">Home</a>
            <ArrowRight size={14} className="text-rose-400" />
            <span className="text-rose-200">All Blooms</span>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
          Everlasting <span className="italic text-rose-500">Artistry</span>
        </h2>
        <p className="text-slate-500 leading-relaxed text-lg">
          Explore our full collection of handcrafted artificial flowers. From 
          vibrant silk petals to delicate paper stems, every piece is designed 
          to stay beautiful forever.
        </p>
      </div>

      {/* 2. The Product Grid - Showing All Items */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {allProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
        
        {/* End of Gallery Indicator */}
        <div className="mt-24 text-center">
          <div className="inline-block w-12 h-px bg-rose-200 align-middle" />
          <span className="mx-4 text-xs uppercase tracking-[0.3em] text-slate-300 font-bold">
            End of Collection
          </span>
          <div className="inline-block w-12 h-px bg-rose-200 align-middle" />
        </div>
      </div>
    </div>
  );
}