import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      date: 'February 15, 2026',
      title: 'How AI is Revolutionizing Home Cooking',
      excerpt: 'Discover how artificial intelligence is changing the way we cook at home and making meal planning easier than ever before.',
      category: 'Technology',
    },
    {
      date: 'February 8, 2026',
      title: '5 Ways to Reduce Food Waste in Your Kitchen',
      excerpt: 'Learn practical tips and strategies to minimize food waste and save money on groceries while helping the environment.',
      category: 'Sustainability',
    },
    {
      date: 'February 1, 2026',
      title: 'The Future of Personalized Nutrition',
      excerpt: 'Explore how personalized AI recommendations are making nutrition more accessible and tailored to individual needs.',
      category: 'Health',
    },
    {
      date: 'January 25, 2026',
      title: 'Quick Weeknight Dinner Ideas',
      excerpt: 'Tired of the same old weeknight dinners? We have some fresh and quick recipe ideas to inspire your cooking.',
      category: 'Recipes',
    },
    {
      date: 'January 18, 2026',
      title: 'Understanding Dietary Restrictions',
      excerpt: 'A comprehensive guide to common dietary restrictions and how to find recipes that work for your lifestyle.',
      category: 'Education',
    },
    {
      date: 'January 11, 2026',
      title: 'Budget-Friendly Meals for Families',
      excerpt: 'Discover how to cook delicious, nutritious meals on a tight budget with our AI-powered recipe suggestions.',
      category: 'Budget',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FoodGPT Blog</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Insights, recipes, and tips from our kitchen to yours
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6 hover:shadow-lg hover:shadow-pistachio-100/30 transition-all group cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block text-xs font-semibold text-pistachio-600 bg-pistachio-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-pistachio-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">{post.excerpt}</p>
              <p className="text-xs text-foreground/40">{post.date}</p>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-pistachio-50 to-coral-50/30 rounded-2xl border border-pistachio-200 p-8 md:p-12 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-foreground/60 mb-6">
            Get weekly recipes, cooking tips, and food insights delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600"
            />
            <button className="bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
          >
            Start Cooking
          </Link>
        </div>
      </div>
    </div>
  );
}
