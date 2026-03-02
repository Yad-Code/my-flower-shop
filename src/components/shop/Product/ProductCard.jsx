import { ShoppingCart, Heart, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductCard({
  name = "Everlasting Peony",
  material = "Premium Crepe Paper",
  description = "Hand-dyed petals with a realistic touch.",
  price = "24.99",
  image = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="group relative bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-100 border border-transparent hover:border-rose-50">
      {/* 1. Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Heart Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-500 transition-colors shadow-sm"
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <Heart
            size={18}
            className={isLiked ? "fill-rose-500 text-rose-500" : null}
          />
        </button>

        {/* Material Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-700 shadow-sm">
            {material}
          </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="mt-5 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-serif font-medium text-slate-900 group-hover:text-rose-600 transition-colors">
              {name}
            </h3>
            <p className="text-xs text-slate-400 leading-tight line-clamp-1 mt-1">
              {description}
            </p>
          </div>
          <p className="text-lg font-bold text-slate-900">${price}</p>
        </div>

        {/* 3. Action Button */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-200 active:scale-[0.98]">
          <ShoppingCart
            size={18}
            className="transition-transform duration-300 group-hover:rotate-[-12deg]"
          />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
}
