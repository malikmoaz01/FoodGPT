const features = [
  {
    icon: "🤖",
    title: "AI-Powered Generation",
    description:
      "Our advanced AI understands flavour chemistry, regional cuisines, and ingredient pairings to create unique, balanced recipes every time.",
    accent: "pistachio",
  },
  {
    icon: "🎯",
    title: "Personalised to You",
    description:
      "Whether you're keto, vegan, gluten-free, or anything in between — FoodGPT adapts recipes to your exact dietary needs.",
    accent: "coral",
  },
  {
    icon: "⚡",
    title: "Ready in Seconds",
    description:
      "No more scrolling through endless blogs. Get a complete recipe with steps, nutrition, and pro tips in under 5 seconds.",
    accent: "pistachio",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Why <span className="text-pistachio-600">Food</span>
            <span className="text-coral-400">GPT</span>?
          </h2>
          <p className="text-foreground/50 max-w-md mx-auto">
            Three pillars that make FoodGPT the smartest cooking companion
            you&apos;ve ever had.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-3xl p-7 border border-pistachio-100/50 shadow-sm hover:shadow-xl hover:shadow-pistachio-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${
                  f.accent === "pistachio"
                    ? "bg-pistachio-100"
                    : "bg-coral-100"
                }`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
