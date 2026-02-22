'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'chef'>('free');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      id: 'free' as const,
      name: 'Free',
      price: '0',
      description: 'Get started for free',
      features: [
        'Up to 5 recipes per day',
        'Basic dietary filters',
        'Community recipes',
      ],
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      price: '9.99',
      description: 'For food enthusiasts',
      features: [
        'Unlimited recipes',
        'Advanced AI customization',
        'Save favorite recipes',
        'No ads',
      ],
      highlighted: true,
    },
    {
      id: 'chef' as const,
      name: 'Chef',
      price: '29.99',
      description: 'For professionals',
      features: [
        'Everything in Pro',
        'Meal planning tools',
        'Nutritional analysis',
        'API access',
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      // TODO: Integrate with your backend authentication
      console.log('Signup attempt:', { ...formData, plan: selectedPlan });

      if (selectedPlan === 'free') {
        alert('Free signup will be connected to your backend');
      } else {
        // Redirect to Stripe checkout
        window.location.href = `/checkout?plan=${selectedPlan}`;
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to create account. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10 py-12 px-4 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-3xl">🍳</span>
              <span className="text-2xl font-bold">
                <span className="text-pistachio-700">Food</span>
                <span className="text-coral-400">GPT</span>
              </span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Join FoodGPT</h1>
          <p className="text-foreground/60 text-lg">Choose your plan and start cooking smarter</p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative rounded-2xl border p-6 transition-all text-left ${
                selectedPlan === plan.id
                  ? plan.highlighted
                    ? 'bg-gradient-to-br from-pistachio-50 to-coral-50/30 border-pistachio-400 shadow-lg shadow-pistachio-100/50 ring-2 ring-pistachio-600'
                    : 'bg-gradient-to-br from-pistachio-50 to-coral-50/30 border-pistachio-400 shadow-lg'
                  : 'bg-white/40 backdrop-blur-sm border-pistachio-100/50 hover:shadow-lg hover:shadow-pistachio-100/30'
              }`}
            >
              {plan.highlighted && selectedPlan === plan.id && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pistachio-600 to-coral-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-foreground/60 ml-2">/month</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-pistachio-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* Signup Form */}
        <div className="max-w-2xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-coral-50 border border-coral-200 text-coral-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms" className="text-sm text-foreground/70">
                I agree to the{' '}
                <a href="#" className="text-pistachio-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-pistachio-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : `Sign Up for ${selectedPlan.toUpperCase()}`}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-foreground/70">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-pistachio-600 hover:text-pistachio-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-foreground/60 hover:text-foreground/80">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
