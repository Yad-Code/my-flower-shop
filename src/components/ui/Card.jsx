export default function Card({ icon, title, link, detail }) {
  return (
    <div className="group bg-white p-8 rounded-[2rem] border border-rose-100 transition-all duration-500 hover:shadow-xl hover:shadow-rose-200/40">
      
      {/* 1. Header: Icon in Pink Circle + Title */}
      <div className="flex items-center justify-start gap-4 mb-6">
        {/* The Pink Circle around the icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white shadow-sm shadow-rose-200 transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        
        <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">
          {title}
        </h1>
      </div>

      {/* 2. Content: Link and Detail */}
      <div className="flex flex-col space-y-2 pl-2">
        <h2 className="text-xl font-serif font-medium text-rose-950 group-hover:text-rose-600 transition-colors">
          {link}
        </h2>
        <p className="text-rose-900/60 text-xs leading-relaxed font-light italic">
          {detail}
        </p>
      </div>

      {/* Subtle Pink Bottom Line */}
      <div className="mt-6 h-[1px] w-full bg-rose-50" />
    </div>
  );
}