'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10 flex items-center justify-center px-4 pt-24">
      <div className="max-w-md text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pistachio-50 to-coral-50 rounded-full mb-4">
            <svg className="w-8 h-8 text-pistachio-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-foreground/60 text-lg">Welcome to your new plan</p>
        </div>

        {/* Content */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8 mb-8">
          <div className="mb-6 pb-6 border-b border-pistachio-100/30">
            <p className="text-sm text-foreground/60 mb-2">Order Confirmation</p>
            <p className="text-2xl font-bold text-pistachio-600">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center">
              <span className="text-foreground/70">Status</span>
              <span className="inline-block bg-pistachio-50 text-pistachio-700 px-3 py-1 rounded-full text-sm font-semibold">
                Confirmed
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/70">Email</span>
              <span className="text-foreground font-medium">confirmation@email.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/70">Next Billing</span>
              <span className="text-foreground font-medium">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-pistachio-50/40 rounded-xl border border-pistachio-100/50 p-6 mb-8">
          <h2 className="font-bold mb-3">What's Next?</h2>
          <ul className="text-sm text-foreground/70 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-pistachio-600 font-bold">✓</span>
              <span>Check your email for a confirmation receipt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pistachio-600 font-bold">✓</span>
              <span>Your subscription is now active</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pistachio-600 font-bold">✓</span>
              <span>Start generating unlimited recipes</span>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="block w-full border border-pistachio-200 text-pistachio-600 py-3 rounded-lg font-semibold hover:bg-pistachio-50/30 transition-all"
          >
            Back to Home
          </Link>
        </div>

        {/* Support */}
        <p className="mt-8 text-xs text-foreground/50">
          Need help?{' '}
          <Link href="/contact" className="text-pistachio-600 hover:underline">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
