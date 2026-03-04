import ProcessCard from "./ProcessCard";
import { Scissors, Feather, CheckCircle2, Package } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { number: "01", icon: <Feather size={24} strokeWidth={1.5} />, title: "Design & Select", detail: "We carefully select premium materials and design each unique flower." },
    { number: "02", icon: <Scissors size={24} strokeWidth={1.5} />, title: "Handcraft", detail: "Every petal and stem is meticulously shaped and assembled by hand." },
    { number: "03", icon: <CheckCircle2 size={24} strokeWidth={1.5} />, title: "Quality Check", detail: "Each piece is inspected to ensure it meets our high standards." },
    { number: "04", icon: <Package size={24} strokeWidth={1.5} />, title: "Package & Ship", detail: "Your flowers are carefully packaged and shipped to arrive perfect." }
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF9F6]" id="process"> 
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left max-w-2xl">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-3">Our Craftsmanship</h4>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6 italic">How we create</h2>
          <p className="text-stone-500 text-sm tracking-wide leading-relaxed">Dedicated artistry in every bloom.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => <ProcessCard key={i} {...step} />)}
        </div>
      </div>
    </section>
  );
}