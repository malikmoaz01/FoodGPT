"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import IngredientInput from "./components/IngredientInput";
import GeneratingAnimation from "./components/GeneratingAnimation";
import RecipeResult from "./components/RecipeResult";
import CookingSteps from "./components/CookingSteps";
import FeatureCards from "./components/FeatureCards";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { mockRecipe } from "./lib/mockData";

type AppState = "idle" | "generating" | "complete";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("idle");

  const scrollToDemo = () =>
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  const handleGenerate = () => {
    setAppState("generating");
    setTimeout(() => setAppState("complete"), 3500);
  };

  const handleReset = () => {
    setAppState("idle");
    setTimeout(scrollToDemo, 100);
  };

  return (
    <div className="min-h-screen bg-cream">
      <HeroSection onGetStarted={scrollToDemo} />

      {/* ── Demo Section ── */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {appState === "idle" && (
            <IngredientInput onGenerate={handleGenerate} />
          )}
          {appState === "generating" && <GeneratingAnimation />}
          {appState === "complete" && (
            <>
              <RecipeResult
                recipe={mockRecipe}
                onGenerateAnother={handleReset}
              />
              <CookingSteps steps={mockRecipe.steps} />
            </>
          )}
        </div>
      </section>

      <FeatureCards />
      <HowItWorks />
      <Footer />
    </div>
  );
}
