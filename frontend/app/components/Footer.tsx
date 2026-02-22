export default function Footer() {
  return (
    <footer className="border-t border-pistachio-100/50 bg-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold">
                <span className="text-pistachio-700">Food</span>
                <span className="text-coral-400">GPT</span>
              </span>
            </div>
            <p className="text-sm text-foreground/50 max-w-sm leading-relaxed">
              AI-powered recipe generation that turns your ingredients into
              delicious, personalized meals. Cooking made intelligent.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/50">
              {["Features", "Pricing", "API", "Changelog"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-pistachio-600 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/50">
              {["About", "Blog", "Careers", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-pistachio-600 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-pistachio-100/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} FoodGPT. All rights reserved.
          </p>
          <div className="flex gap-5 text-foreground/40 text-xs">
            <a href="#" className="hover:text-pistachio-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pistachio-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-pistachio-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
