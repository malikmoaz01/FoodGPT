import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100/30 via-cream-dark/20 to-pistachio-100/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="text-pistachio-600 hover:text-pistachio-700 text-sm font-medium mb-6 inline-block"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-foreground/60">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/60 border border-pistachio-100 focus:outline-none focus:ring-2 focus:ring-pistachio-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pistachio-600 to-pistachio-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8 mb-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">📧 Email</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:hello@foodgpt.io" className="text-pistachio-600 hover:underline">
                      hello@foodgpt.io
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">💬 Support</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:support@foodgpt.io" className="text-pistachio-600 hover:underline">
                      support@foodgpt.io
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🌍 Social</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-pistachio-600 hover:text-pistachio-700">Twitter</a>
                    <a href="#" className="text-pistachio-600 hover:text-pistachio-700">LinkedIn</a>
                    <a href="#" className="text-pistachio-600 hover:text-pistachio-700">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-pistachio-100/50 p-8">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-pistachio-600 hover:underline">About Us</a>
                </li>
                <li>
                  <a href="/careers" className="text-pistachio-600 hover:underline">Careers</a>
                </li>
                <li>
                  <a href="/blog" className="text-pistachio-600 hover:underline">Blog</a>
                </li>
                <li>
                  <a href="/api" className="text-pistachio-600 hover:underline">API Documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-pistachio-50 to-coral-50/30 rounded-2xl border border-pistachio-200 p-8 text-center">
          <p className="text-foreground/70">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}
