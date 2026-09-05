import Link from 'next/link';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Product Strategy',
      description:
        'Research-driven roadmaps that align stakeholders and de-risk what you build next.',
      link: '/service-details',
      iconBg: 'bg-[#EEF2FF]',
      iconColor: 'text-[#155EEF]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Interfaces that convert — wireframes, design systems and prototypes ready for dev.',
      link: '/service-details',
      iconBg: 'bg-[#F4F0FF]',
      iconColor: 'text-[#6941C6]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-23" />
        </svg>
      ),
    },
    {
      title: 'Web Development',
      description:
        'Performant, scalable web apps built on modern frameworks with clean architecture.',
      link: '/service-details',
      iconBg: 'bg-[#E7F9F0]',
      iconColor: 'text-[#12B76A]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps',
      description:
        'CI/CD pipelines, monitoring and cloud infrastructure that scales with your traffic.',
      link: '/service-details',
      iconBg: 'bg-[#EEF2FF]',
      iconColor: 'text-[#155EEF]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
              What we do
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight mb-4">
              Capabilities built for modern product teams
            </h2>
            <p className="text-lg text-[#667085]">
              From early-stage validation to scaling infrastructure, our specialists plug directly into your roadmap.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#155EEF] hover:text-[#0E3FB0] hover:gap-3 transition-all duration-200"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#E4E7EC] rounded-2xl p-8 shadow-[0_2px_8px_rgba(11,20,55,0.06)] hover:shadow-[0_8px_24px_rgba(11,20,55,0.08)] hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div
                  className={`w-14 h-14 rounded-xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-xl text-[#0B1437] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#667085] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Link Arrow */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#155EEF] hover:text-[#0E3FB0] hover:gap-3 transition-all duration-200"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}