import Link from 'next/link';

export default function ProductPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pistachio-700">Food</span>
            <span className="text-coral-400">GPT</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            AI-powered recipe generation that transforms your ingredients into delicious, personalized meals.
          </p>
        </div>

        {/* Product Overview */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Product Overview</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            FoodGPT revolutionizes cooking by leveraging artificial intelligence to generate personalized recipes based on your available ingredients. Whether you're looking to reduce food waste, explore new cuisines, or simply need dinner inspiration, FoodGPT has you covered.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Our intelligent system analyzes your ingredients and creates step-by-step recipes tailored to your preferences, dietary restrictions, and cooking skill level.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-pistachio-50/40 rounded-xl border border-pistachio-100/50 p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-lg mb-2">AI-Powered Recipes</h3>
            <p className="text-sm text-foreground/60">Get intelligent recipe suggestions based on your ingredients</p>
          </div>
          <div className="bg-coral-50/40 rounded-xl border border-coral-100/50 p-6">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-bold text-lg mb-2">Quick & Easy</h3>
            <p className="text-sm text-foreground/60">Get recipes with cooking time, difficulty level, and clear instructions</p>
          </div>
          <div className="bg-pistachio-50/40 rounded-xl border border-pistachio-100/50 p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Personalized</h3>
            <p className="text-sm text-foreground/60">Filter by dietary preferences, allergies, and cuisine types</p>
          </div>
          <div className="bg-coral-50/40 rounded-xl border border-coral-100/50 p-6">
            <div className="text-3xl mb-3">♻️</div>
            <h3 className="font-bold text-lg mb-2">Reduce Waste</h3>
            <p className="text-sm text-foreground/60">Use what you have and minimize food waste</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
          >
            Try FoodGPT Now
          </Link>
        </div>
      </div>
    </div>
  );
}
