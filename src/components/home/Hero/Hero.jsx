import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-rose-50/50 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="relative z-10 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-rose-200 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles size={16} className="text-rose-500" />
            <span className="text-sm text-rose-900 font-medium tracking-wide uppercase">
              Handcrafted with Love
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1.1]">
              Beautiful <br />
              <span className="text-rose-500 italic">Everlasting</span> <br />
              Blooms
            </h1>
            <p className="max-w-lg text-lg text-slate-600 leading-relaxed">
              Each flower is uniquely crafted by hand with premium materials.
              Experience beauty that lasts forever—no water, no wilting, just
              art.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <a href="/shop" className="cursor-default"><button className="group flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-rose-200 active:scale-95">
              Shop Collection
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button></a>
            <a href="/about">
            <button className="px-8 py-4 rounded-full font-semibold text-slate-700 hover:bg-white transition-colors border border-transparent hover:border-rose-100">
              Our Story
            </button></a>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-rose-100">
            <div>
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Happy Souls
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Handmade
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">12+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Designs
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image with stylized frame */}
        <div className="relative">
          <div className="absolute inset-0 bg-rose-200 rounded-2xl rotate-3 scale-105 -z-10 opacity-50" />
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
              alt="Artisanal handmade flowers"
            />
          </div>
          {/* Floating Detail Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
            <p className="text-xs text-rose-500 font-bold uppercase">
              Featured
            </p>
            <p className="text-sm font-medium text-slate-800">
              The Velvet Peony
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
