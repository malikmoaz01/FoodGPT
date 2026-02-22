"use client";

import Image from "next/image";
import type { Recipe } from "../lib/mockData";

interface Props {
  recipe: Recipe;
  onGenerateAnother: () => void;
}

export default function RecipeResult({ recipe, onGenerateAnother }: Props) {
  return (
    <div className="animate-slide-up max-w-3xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          ✨ Your AI Recipe
        </h2>
        <button
          onClick={onGenerateAnother}
          className="text-sm text-pistachio-600 hover:text-pistachio-700 font-medium flex items-center gap-1 transition-colors cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Generate Another
        </button>
      </div>

      {/* Recipe card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-pistachio-900/5 border border-pistachio-100/50 overflow-hidden">
        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Title & description */}
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {recipe.title}
          </h3>
          <p className="text-foreground/50 leading-relaxed mb-6">
            {recipe.description}
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              ["⏱️", "Prep", recipe.prepTime],
              ["🔥", "Cook", recipe.cookTime],
              ["🍽️", "Serves", String(recipe.servings)],
              ["📊", "Difficulty", recipe.difficulty],
            ].map(([icon, label, value]) => (
              <div
                key={label}
                className="bg-cream rounded-xl p-3 text-center"
              >
                <span className="text-lg">{icon}</span>
                <p className="text-xs text-foreground/40 mt-1">{label}</p>
                <p className="text-sm font-semibold text-foreground/80">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Nutrition */}
          <div className="bg-gradient-to-r from-pistachio-50 to-coral-50 rounded-2xl p-5 mb-6">
            <p className="text-sm font-semibold text-foreground/70 mb-3">
              Nutrition per Serving
            </p>
            <div className="grid grid-cols-5 gap-2">
              {[
                ["Calories", `${recipe.nutrition.calories}`, "text-coral-500"],
                ["Protein", recipe.nutrition.protein, "text-pistachio-600"],
                ["Carbs", recipe.nutrition.carbs, "text-coral-500"],
                ["Fat", recipe.nutrition.fat, "text-foreground/70"],
                ["Fiber", recipe.nutrition.fiber, "text-pistachio-600"],
              ].map(([label, val, color]) => (
                <div key={label} className="text-center">
                  <p className={`text-lg font-bold ${color}`}>{val}</p>
                  <p className="text-[11px] text-foreground/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <p className="text-sm font-semibold text-foreground/70 mb-3">
            Ingredients
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {recipe.ingredients.map((ing) => (
              <li
                key={ing}
                className="flex items-start gap-2 text-sm text-foreground/70"
              >
                <span className="mt-0.5 h-5 w-5 rounded-full bg-pistachio-100 flex items-center justify-center shrink-0">
                  <svg className="h-3 w-3 text-pistachio-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
