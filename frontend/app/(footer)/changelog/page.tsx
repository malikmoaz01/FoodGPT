import Link from 'next/link';

export default function ChangelogPage() {
  const changes = [
    {
      version: 'v2.1.0',
      date: 'February 22, 2026',
      items: [
        'Added meal planning feature',
        'Improved recipe recommendations algorithm',
        'Fixed mobile UI bugs',
      ],
    },
    {
      version: 'v2.0.0',
      date: 'January 15, 2026',
      items: [
        'Major UI redesign',
        'Added API access for Pro users',
        'Implemented nutritional analysis',
      ],
    },
    {
      version: 'v1.5.0',
      date: 'December 10, 2025',
      items: [
        'Added dietary restriction filters',
        'Improved search performance',
        'Added community reviews',
      ],
    },
    {
      version: 'v1.0.0',
      date: 'November 1, 2025',
      items: [
        'Initial public launch',
        'Core recipe generation feature',
        'Mobile app release',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-pistachio-600 hover:text-pistachio-700 text-sm font-medium mb-6 inline-block"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Changelog</h1>
          <p className="text-xl text-foreground/60">
            What's new in FoodGPT
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {changes.map((release, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pistachio-600 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{release.version}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{release.date}</p>
                  <ul className="space-y-2">
                    {release.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70">
                        <span className="text-pistachio-600 mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
