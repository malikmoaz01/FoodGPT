const steps = [
  {
    num: "01",
    icon: "🥕",
    title: "Add Your Ingredients",
    description:
      "Type or tap the ingredients you have on hand. No need to be exact — our AI understands natural language.",
  },
  {
    num: "02",
    icon: "⚙️",
    title: "Set Preferences",
    description:
      "Choose dietary filters, cooking time, and cuisine style. FoodGPT tailors every recipe to your needs.",
  },
  {
    num: "03",
    icon: "✨",
    title: "Get Your Recipe",
    description:
      "In seconds, receive a full recipe with step-by-step instructions, nutrition facts, and pro tips.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-pistachio-50/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-foreground/50 max-w-md mx-auto">
            Three simple steps from fridge to fork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-pistachio-300 to-pistachio-100" />
              )}

              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-lg shadow-pistachio-900/5 border border-pistachio-100/50 text-3xl mb-5">
                {s.icon}
              </div>

              <p className="text-xs font-bold text-pistachio-400 tracking-widest uppercase mb-2">
                Step {s.num}
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
