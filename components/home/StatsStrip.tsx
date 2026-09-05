interface StatItem {
  number: string;
  label: string;
}

export default function StatsStrip() {
  const stats: StatItem[] = [
    { number: '480+', label: 'Projects delivered' },
    { number: '12 yrs', label: 'Industry experience' },
    { number: '96%', label: 'Client retention' },
    { number: '34', label: 'Countries served' },
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-2">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1437] mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-[#667085]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}