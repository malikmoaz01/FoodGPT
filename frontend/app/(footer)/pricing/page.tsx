import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started',
      features: [
        'Up to 5 recipes per day',
        'Basic dietary filters',
        'Community recipes',
        'Mobile access',
      ],
    },
    {
      name: 'Pro',
      price: '9.99',
      description: 'For food enthusiasts',
      features: [
        'Unlimited recipes',
        'Advanced AI customization',
        'Save favorite recipes',
        'No ads',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Chef',
      price: '29.99',
      description: 'For professionals',
      features: [
        'Everything in Pro',
        'Meal planning tools',
        'Nutritional analysis',
        'API access',
        'Custom integrations',
        'Dedicated support',
      ],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your cooking needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-pistachio-50 to-coral-50/30 border-pistachio-300 shadow-lg shadow-pistachio-100/50 relative md:scale-105'
                  : 'bg-white/40 backdrop-blur-sm border-pistachio-100/50 hover:shadow-lg hover:shadow-pistachio-100/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pistachio-600 to-coral-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-foreground/60 ml-2">/month</span>
              </div>
              <button
                className={`w-full py-2 rounded-lg font-semibold transition-all mb-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white hover:shadow-lg'
                    : 'bg-pistachio-100/50 text-pistachio-700 hover:bg-pistachio-100'
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-pistachio-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-6">
              <h3 className="font-bold mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-sm text-foreground/60">Yes! You can change your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-6">
              <h3 className="font-bold mb-2">Is there a free trial?</h3>
              <p className="text-sm text-foreground/60">Yes! Start with our Free plan to explore all features, then upgrade when ready.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-pistachio-100/50 p-6">
              <h3 className="font-bold mb-2">Do you offer refunds?</h3>
              <p className="text-sm text-foreground/60">We offer a 30-day money-back guarantee on all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
