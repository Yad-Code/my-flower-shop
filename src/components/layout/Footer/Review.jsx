import ReviewCard from "./ReviewCard";

export default function Review() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Decorative Element (Optional) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            What our <span className="italic text-rose-500">customers say</span>
          </h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full" />
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Real reviews from people who love our handmade flowers and unique
            paper artistry.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <ReviewCard
            name="Sarah M."
            category="Nursery Decor"
            text="The felt flowers I purchased for my daughter's nursery are perfect. The quality is exceptional and the colors are so vibrant."
          />

          <ReviewCard
            name="James L."
            category="Wedding Gift"
            text="Very Special! I saw it for the first time and it looked amazing."
          />

          <ReviewCard
            name="Elena R."
            category="Home Office"
            text="Perfect for someone who forgets to water plants. Fast shipping and even better quality than the photos."
          />
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">
            Best Handmade Flowers — Shop Our Collection Now
          </p>
        </div>
      </div>
    </section>
  );
}
