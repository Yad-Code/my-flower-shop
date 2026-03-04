import { Star, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  { id: 1, name: "Velvet Peony", price: "45.00", material: "Premium Silk" },
  { id: 2, name: "Eternal Rose", price: "38.00", material: "Velvet Crepe" },
  { id: 3, name: "Silk Lily", price: "42.00", material: "Fine Silk" },
  { id: 4, name: "Blush Tulip", price: "35.00", material: "Hand-dyed Paper" },
];

export default function ProductSection() {
  return (
    /* Changed bg-white to a soft bone color to match the new style */
    <section className="bg-[#FAF9F6] py-24 px-6 border-t border-stone-200/40">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Aligned Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D4A39E] font-bold tracking-[0.3em] uppercase text-[10px]">
              <Star size={12} strokeWidth={2.5} className="fill-current" />
              <span>Curated Selection</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
              Featured <span className="italic text-[#D4A39E]">Collection</span>
            </h2>
            
            <p className="text-stone-500/80 max-w-md text-sm leading-relaxed">
              Our most popular handmade flowers, crafted with premium silk and
              sustainable materials for everlasting beauty.
            </p>
          </div>

          {/* 2. Refined "View All" Link (Fixed URL issue) */}
          <div className="pb-2">
            <a 
              href="/shop" 
              className="group flex items-center gap-3 text-stone-800 font-bold tracking-widest uppercase text-[10px] hover:text-[#D4A39E] transition-all duration-300"
            >
              <span>View All Products</span>
              <div className="w-8 h-px bg-stone-300 group-hover:w-12 group-hover:bg-[#D4A39E] transition-all duration-500" />
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3. Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price}
              material={product.material} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}