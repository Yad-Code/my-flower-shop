import { Star, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

// Mock data to demonstrate the grid
const PRODUCTS = [
  { id: 1, name: "Velvet Peony", price: "$45", tag: "Best Seller" },
  { id: 2, name: "Eternal Rose", price: "$38", tag: "New" },
  { id: 3, name: "Silk Lily", price: "$42", tag: "Handmade" },
  { id: 4, name: "Blush Tulip", price: "$35", tag: "Limited" },
];

export default function ProductSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-500 font-semibold tracking-widest uppercase text-xs">
              <Star size={14} className="fill-current" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-4xl font-serif text-slate-900">
              Featured <span className="italic text-rose-500">Collection</span>
            </h2>
            <p className="text-slate-500 max-w-md">
              Our most popular handmade flowers, crafted with premium silk and
              sustainable materials.
            </p>
          </div>

          <button className="flex items-center gap-2 text-slate-900 font-medium hover:text-rose-500 transition-colors group" >
            <a href="/shop">View All Products</a>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
