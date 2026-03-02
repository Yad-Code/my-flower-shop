export default function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}