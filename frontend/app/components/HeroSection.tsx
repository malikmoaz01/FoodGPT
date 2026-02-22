"use client";

interface Props {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pistachio-50/50 via-cream to-cream" />

      {/* Floating food emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[15%] left-[10%] text-5xl animate-float opacity-40">🥑</span>
        <span className="absolute top-[25%] right-[15%] text-4xl animate-float-delayed opacity-30">🍅</span>
        <span className="absolute bottom-[30%] left-[20%] text-5xl animate-float-delayed-2 opacity-30">🌿</span>
        <span className="absolute top-[40%] right-[10%] text-6xl animate-float opacity-20">🍋</span>
        <span className="absolute bottom-[20%] right-[25%] text-4xl animate-float-delayed opacity-30">🧄</span>
        <span className="absolute top-[60%] left-[8%] text-5xl animate-float-delayed-2 opacity-25">🍊</span>
        <span className="absolute top-[10%] left-[45%] text-3xl animate-float-delayed opacity-30">✨</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-pistachio-100/80 text-pistachio-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-pistachio-200/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pistachio-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pistachio-500" />
          </span>
          Powered by Generative AI
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">Your Ingredients,</span>
          <br />
          <span className="bg-gradient-to-r from-pistachio-500 via-pistachio-400 to-coral-400 bg-clip-text text-transparent">
            AI-Crafted Recipes
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enter your ingredients, set your preferences, and let FoodGPT generate
          personalized, delicious recipes in seconds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-coral-400 to-coral-500 hover:from-coral-500 hover:to-coral-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-coral-400/30 active:scale-95 cursor-pointer"
          >
            Try It Now — It&apos;s Free
            <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-pistachio-600 px-6 py-4 rounded-full text-base font-medium transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            ["10K+", "Recipes Generated", "text-pistachio-600"],
            ["50+", "Cuisines", "text-coral-500"],
            ["4.9★", "User Rating", "text-pistachio-600"],
          ].map(([val, label, color]) => (
            <div key={label} className="text-center">
              <p className={`text-2xl sm:text-3xl font-bold ${color}`}>{val}</p>
              <p className="text-sm text-foreground/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
