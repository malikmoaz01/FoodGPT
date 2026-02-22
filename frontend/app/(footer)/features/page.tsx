import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      icon: '🍳',
      title: 'Smart Recipe Generation',
      description: 'Our AI analyzes your ingredients and generates personalized recipes tailored to your needs.',
    },
    {
      icon: '⏱️',
      title: 'Cooking Instructions',
      description: 'Step-by-step instructions with timing, difficulty levels, and helpful cooking tips.',
    },
    {
      icon: '🎯',
      title: 'Dietary Filters',
      description: 'Filter recipes by dietary preferences including vegan, gluten-free, keto, and more.',
    },
    {
      icon: '⭐',
      title: 'Ratings & Reviews',
      description: 'See community ratings and reviews to help you pick the perfect recipe.',
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access FoodGPT on any device - seamlessly cook from your phone or tablet.',
    },
    {
      icon: '🔒',
      title: 'Privacy Focused',
      description: 'Your ingredients and preferences are kept private and secure.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get recipe suggestions in seconds with our optimized AI engine.',
    },
    {
      icon: '🌍',
      title: 'Global Cuisine',
      description: 'Explore recipes from cuisines around the world.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link
            href="/"
            className="text-pistachio-600 hover:text-pistachio-700 text-sm font-medium mb-6 inline-block"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Discover everything FoodGPT has to offer
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6 hover:shadow-lg hover:shadow-pistachio-100/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
