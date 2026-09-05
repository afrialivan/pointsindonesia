import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const checkPoints = [
    {
      title: 'Dedicated senior squad',
      text: '— no junior bait-and-switch, ever.',
    },
    {
      title: 'Transparent weekly sprints',
      text: 'with shared dashboards and demos.',
    },
    {
      title: 'Flexible engagement models',
      text: '— project, retainer or staff augmentation.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[5/4] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=560&fit=crop"
                  alt="Nexora team collaborating in office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-xl shadow-[0_8px_24px_rgba(11,20,55,0.08)] p-3.5 items-center gap-3 font-display font-bold text-sm text-[#0B1437]">
                <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] text-[#155EEF] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  Top Rated Agency
                  <br />
                  <small className="text-[#667085] font-normal text-xs">
                    Clutch &amp; G2, 2025
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div className="lg:col-span-6">
            {/* Eyebrow Label */}
            <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
              Why Nexora
            </span>

            {/* Title */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight mb-4">
              A senior team, embedded in your workflow
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-[#667085] mb-6 leading-relaxed">
              We don&apos;t hand off decks and disappear. Our designers and
              engineers work inside your tools — Slack, Linear, Figma — as an
              extension of your team.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 mb-8">
              {checkPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF2FF] text-[#155EEF] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-[#667085] text-base">
                    <strong className="text-[#0B1437] font-semibold me-1">
                      {item.title}
                    </strong>
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              href="/about"
              className="inline-block font-display font-semibold text-base text-white px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#155EEF] to-[#6941C6] shadow-[0_12px_28px_rgba(21,94,239,0.25)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(21,94,239,0.32)] transition-all duration-200"
            >
              More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}