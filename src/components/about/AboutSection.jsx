import AboutCard from "./AboutCard";
import { Heart, Leaf, Gift, Flower } from "lucide-react"; // Using icons instead of emojis for a cleaner look

export default function AboutSection() {
  const aboutData = [
    {
      title: "Made with love",
      detail:
        "Every flower is carefully selected and arranged with care and attention to detail.",
      icon: <Heart size={28} strokeWidth={1.5} />,
    },
    {
      title: "Never Wilts",
      detail:
        "Enjoy beautiful blooms that last forever without maintenance or watering.",
      icon: <Leaf size={28} strokeWidth={1.5} />,
    },
    {
      title: "Perfect Gift",
      detail:
        "Quality, creativity, and customer satisfaction are at the heart of everything we do.",
      icon: <Gift size={28} strokeWidth={1.5} />,
    },
    {
      title: "Custom Arrangements",
      detail:
        "We offer custom designs for weddings and events. Contact us for personalized flowers.",
      icon: <Flower size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            The <span className="italic text-rose-500">Double A</span> Promise
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg leading-relaxed">
            Crafting beauty that stands the test of time, one petal at a time.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              detail={item.detail}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Optional: Simple Call to Action */}
        <div className="mt-20 text-center">
          <button
            className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-rose-500 transition-colors border-b border-rose-100 pb-2"
            onClick={() =>
              document
                .getElementById("process")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More About Our Process
          </button>
        </div>
      </div>
    </section>
  );
}
