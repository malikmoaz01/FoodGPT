'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">🍳</span>
              <span className="text-2xl font-bold">
                <span className="text-pistachio-700">Food</span>
                <span className="text-coral-400">GPT</span>
              </span>
            </Link>
            <button className="px-4 py-2 rounded-lg bg-pistachio-100/50 text-pistachio-700 hover:bg-pistachio-100 transition-colors font-medium">
              Logout
            </button>
          </div>
          <h1 className="text-4xl font-bold mb-2">Welcome to FoodGPT!</h1>
          <p className="text-xl text-foreground/60">Start generating amazing recipes with AI</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6">
            <p className="text-foreground/60 text-sm mb-2">Recipes Generated</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6">
            <p className="text-foreground/60 text-sm mb-2">Saved Recipes</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6">
            <p className="text-foreground/60 text-sm mb-2">Current Plan</p>
            <p className="text-3xl font-bold">Free</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-pistachio-100/50 p-6">
            <p className="text-foreground/60 text-sm mb-2">Streak</p>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recipe Generator */}
          <div className="lg:col-span-2 bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
            <h2 className="text-2xl font-bold mb-6">Generate a Recipe</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Enter your ingredients (comma separated)
                </label>
                <textarea
                  placeholder="e.g., chicken, rice, garlic, onion"
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Cuisine Type</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600">
                    <option>Any</option>
                    <option>Asian</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Indian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Difficulty</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600">
                    <option>Any</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
              >
                Generate Recipe ✨
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upgrade Card */}
            <div className="bg-gradient-to-br from-pistachio-50 to-coral-50/30 rounded-2xl border border-pistachio-200 p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Upgrade Your Plan</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Get unlimited recipes and advanced features
              </p>
              <Link
                href="/pricing"
                className="inline-block w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                View Plans
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-6">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-pistachio-600 hover:text-pistachio-700 font-medium">
                    → Saved Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pistachio-600 hover:text-pistachio-700 font-medium">
                    → Meal Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pistachio-600 hover:text-pistachio-700 font-medium">
                    → Account Settings
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-pistachio-600 hover:text-pistachio-700 font-medium">
                    → Help & Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-6">
              <h3 className="font-bold mb-3">💡 Tip of the Day</h3>
              <p className="text-sm text-foreground/70">
                Try adding specific dietary restrictions (vegan, gluten-free) to get better recipe suggestions!
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Recipes</h2>
          <p className="text-foreground/60 text-center py-8">
            No recipes generated yet. Start by entering your ingredients above!
          </p>
        </div>
      </div>
    </div>
  );
}
