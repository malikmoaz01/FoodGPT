import Link from 'next/link';

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FoodGPT</h1>
          <p className="text-xl text-foreground/60">
            Revolutionizing how people cook with AI
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            At FoodGPT, we believe cooking should be accessible, creative, and sustainable. Our mission is to empower people to become better cooks by leveraging artificial intelligence to transform their available ingredients into delicious, personalized meals.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            We're passionate about reducing food waste, inspiring culinary creativity, and making meal planning effortless for everyone.
          </p>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pistachio-400 to-coral-300 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <div>
                <h3 className="text-xl font-bold">Malik Moaz</h3>
                <p className="text-pistachio-600 font-semibold">Founder & Software Engineer</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Malik is a passionate software engineer with a love for cooking and AI. With years of experience in full-stack development and machine learning, he founded FoodGPT to solve a real problem: what's for dinner?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            FoodGPT was born out of frustration. Late nights at the office, staring into the fridge, wondering what to make with whatever ingredients were available. After trying numerous recipe apps and cookbooks, Malik realized that AI could provide a smarter, more personalized solution.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            With the rapid advancement of language models and AI technology, FoodGPT became a reality. The platform combines powerful AI with a deep understanding of cooking to deliver truly personalized recipe recommendations.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Today, FoodGPT helps thousands of people discover new recipes, reduce food waste, and make cooking easier and more enjoyable.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-pistachio-50/40 rounded-xl border border-pistachio-100/50 p-6">
            <h3 className="font-bold text-lg mb-2">🎯 Innovation</h3>
            <p className="text-sm text-foreground/60">We're always pushing the boundaries of what's possible with AI and cooking.</p>
          </div>
          <div className="bg-coral-50/40 rounded-xl border border-coral-100/50 p-6">
            <h3 className="font-bold text-lg mb-2">🌍 Sustainability</h3>
            <p className="text-sm text-foreground/60">Reducing food waste is at the core of what we do.</p>
          </div>
          <div className="bg-pistachio-50/40 rounded-xl border border-pistachio-100/50 p-6">
            <h3 className="font-bold text-lg mb-2">❤️ Passion</h3>
            <p className="text-sm text-foreground/60">We love cooking and believe everyone should too.</p>
          </div>
          <div className="bg-coral-50/40 rounded-xl border border-coral-100/50 p-6">
            <h3 className="font-bold text-lg mb-2">🤝 Community</h3>
            <p className="text-sm text-foreground/60">Building a community of food lovers and home chefs.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
}
