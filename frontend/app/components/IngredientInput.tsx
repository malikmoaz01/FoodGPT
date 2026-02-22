"use client";

import { useState, type KeyboardEvent } from "react";
import {
  suggestedIngredients,
  dietaryPreferences,
  cookingTimeOptions,
} from "../lib/mockData";

interface Props {
  onGenerate: () => void;
}

export default function IngredientInput({ onGenerate }: Props) {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [prefs, setPrefs] = useState<string[]>([]);
  const [time, setTime] = useState("30");

  const add = (val: string) => {
    const t = val.trim();
    if (t && !ingredients.includes(t)) setIngredients((p) => [...p, t]);
    setInput("");
  };

  const remove = (val: string) =>
    setIngredients((p) => p.filter((i) => i !== val));

  const togglePref = (id: string) =>
    setPrefs((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      add(input);
    }
  };

  return (
    <div className="animate-slide-up">
      {/* Section heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          What&apos;s in Your Kitchen?
        </h2>
        <p className="text-foreground/50 max-w-lg mx-auto">
          Add your available ingredients and preferences — our AI will craft the
          perfect recipe for you.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-pistachio-900/5 border border-pistachio-100/50 p-6 sm:p-8 max-w-2xl mx-auto">
        {/* ── Input ── */}
        <label className="text-sm font-semibold text-foreground/70 mb-2 block">
          Add Ingredients
        </label>
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30">
              🔍
            </span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type an ingredient…"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-pistachio-200 bg-cream/50 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-pistachio-400/50 focus:border-pistachio-400 transition-all"
            />
          </div>
          <button
            onClick={() => add(input)}
            className="px-4 py-3 rounded-xl bg-pistachio-500 hover:bg-pistachio-600 text-white font-semibold transition-all active:scale-95 cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Ingredient chips */}
        {ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {ingredients.map((ing) => (
              <span
                key={ing}
                className="inline-flex items-center gap-1.5 bg-pistachio-100 text-pistachio-800 pl-3 pr-2 py-1.5 rounded-full text-sm font-medium animate-fade-in"
              >
                {ing}
                <button
                  onClick={() => remove(ing)}
                  className="hover:bg-pistachio-200 rounded-full p-0.5 transition-colors cursor-pointer"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Suggested */}
        <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-2">
          Popular Ingredients
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {suggestedIngredients.map((s) => (
            <button
              key={s}
              onClick={() => add(s)}
              disabled={ingredients.includes(s)}
              className="text-sm px-3 py-1.5 rounded-full border border-pistachio-200 hover:bg-pistachio-50 hover:border-pistachio-300 text-foreground/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>

        <hr className="border-pistachio-100/50 mb-6" />

        {/* ── Dietary Preferences ── */}
        <p className="text-sm font-semibold text-foreground/70 mb-2">
          Dietary Preferences
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {dietaryPreferences.map((d) => (
            <button
              key={d.id}
              onClick={() => togglePref(d.id)}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                prefs.includes(d.id)
                  ? "bg-pistachio-500 text-white shadow-md shadow-pistachio-500/20"
                  : "border border-cream-darker text-foreground/60 hover:border-pistachio-300 hover:bg-pistachio-50"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* ── Cooking Time ── */}
        <p className="text-sm font-semibold text-foreground/70 mb-2">
          Cooking Time
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {cookingTimeOptions.map((t) => (
            <button
              key={t.id}
              onClick={() => setTime(t.id)}
              className={`text-sm px-3 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                time === t.id
                  ? "bg-coral-400 text-white shadow-md shadow-coral-400/20"
                  : "border border-cream-darker text-foreground/60 hover:border-coral-300 hover:bg-coral-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Generate ── */}
        <button
          onClick={onGenerate}
          disabled={ingredients.length === 0}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-coral-400 to-coral-500 hover:from-coral-500 hover:to-coral-600 text-white text-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-coral-400/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-3"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Recipe with AI
        </button>
      </div>
    </div>
  );
}
