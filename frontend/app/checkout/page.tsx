'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'pro';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const prices = {
    pro: 999,
    chef: 2999,
  };

  const plans = {
    pro: {
      name: 'Pro',
      price: '9.99',
      features: [
        'Unlimited recipes',
        'Advanced AI customization',
        'Save favorite recipes',
        'No ads',
        'Priority support',
      ],
    },
    chef: {
      name: 'Chef',
      price: '29.99',
      features: [
        'Everything in Pro',
        'Meal planning tools',
        'Nutritional analysis',
        'API access',
        'Dedicated support',
      ],
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      // In a real application, you would call your backend to create a Stripe payment intent
      // For now, we'll show a demo checkout experience

      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
        billing_details: {
          email,
          name,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'Payment failed');
        setLoading(false);
        return;
      }

      // In production: send paymentMethod to your backend
      console.log('Payment method created:', paymentMethod);

      alert(`✅ Payment simulated!\n\nPlan: ${plan.toUpperCase()}\nAmount: $${prices[plan as 'pro' | 'chef'] / 100}\n\nIn production, this would process through Stripe.`);
      
      // Redirect to success page or dashboard
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  const selectedPlan = plans[plan as 'pro' | 'chef'] || plans.pro;
  const amount = prices[plan as 'pro' | 'chef'] || prices.pro;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10 py-12 px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-3xl">🍳</span>
              <span className="text-2xl font-bold">
                <span className="text-pistachio-700">Food</span>
                <span className="text-coral-400">GPT</span>
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Upgrade to {selectedPlan.name}</h1>
          <p className="text-foreground/60 mt-2">Complete your purchase securely</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
            <h2 className="text-2xl font-bold mb-6">{selectedPlan.name} Plan</h2>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-pistachio-100/30">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">${selectedPlan.price}</span>
                <span className="text-foreground/60">/month</span>
              </div>
              <p className="text-sm text-foreground/60">
                Billed monthly • Cancel anytime
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-foreground/80">What's Included</h3>
              <ul className="space-y-3">
                {selectedPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-pistachio-600 text-lg">✓</span>
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Badge */}
            <div className="bg-pistachio-50/50 rounded-lg p-4 text-center">
              <p className="text-xs text-foreground/60">
                🔒 Secured by <span className="font-semibold">Stripe</span>
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-pistachio-100 placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-pistachio-600 focus:border-transparent transition-all"
                />
              </div>

              {/* Card Element */}
              <div>
                <label className="block text-sm font-semibold mb-2">Card Details</label>
                <div className="p-4 bg-white/60 border border-pistachio-100 rounded-lg">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#1a1a1a',
                        },
                      },
                    }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-coral-50 border border-coral-200 text-coral-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Terms */}
              <div className="flex items-start gap-2 text-xs text-foreground/60">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms">
                  I agree to the recurring monthly billing and can cancel anytime
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pistachio-200/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Subscribe to ${selectedPlan.name}`}
              </button>

              {/* Back Link */}
              <button
                type="button"
                className="w-full text-pistachio-600 hover:text-pistachio-700 font-medium"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </form>

            {/* Test Card Info */}
            <div className="mt-8 pt-8 border-t border-pistachio-100/30 text-xs text-foreground/50">
              <p className="font-semibold mb-2">🧪 Test Mode</p>
              <p>Card: 4242 4242 4242 4242</p>
              <p>Expiry: Any future date</p>
              <p>CVC: Any 3 digits</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-4">
              <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-foreground/60">Yes! Cancel your subscription anytime with no penalty.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-4">
              <h3 className="font-bold mb-2">Is my payment secure?</h3>
              <p className="text-sm text-foreground/60">Yes. All payments are processed securely through Stripe.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-4">
              <h3 className="font-bold mb-2">What's the difference between plans?</h3>
              <p className="text-sm text-foreground/60">Pro includes unlimited recipes and no ads. Chef adds meal planning and API access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
