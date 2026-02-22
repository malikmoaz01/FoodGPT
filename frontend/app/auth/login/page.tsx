'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Integrate with your backend authentication
      // This is a placeholder for now
      console.log('Login attempt:', { email, password });
      
      // Simulated success
      setTimeout(() => {
        alert('Login functionality will be connected to your backend');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to login. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-3xl">🍳</span>
              <span className="text-2xl font-bold">
                <span className="text-pistachio-700">Food</span>
                <span className="text-coral-400">GPT</span>
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-foreground/60">Sign in to your FoodGPT account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-foreground/70">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-pistachio-600 hover:text-pistachio-700 font-medium">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pistachio-100/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/40 text-foreground/60">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full px-4 py-2 rounded-lg border border-pistachio-100 bg-white/40 hover:bg-white/60 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <span>🔵</span> Google
            </button>
            <button className="w-full px-4 py-2 rounded-lg border border-pistachio-100 bg-white/40 hover:bg-white/60 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <span>🍎</span> Apple
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-foreground/70">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-pistachio-600 hover:text-pistachio-700 font-semibold">
            Sign up
          </Link>
        </p>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-foreground/60 hover:text-foreground/80">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
