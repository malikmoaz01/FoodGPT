"use client";

import { useState } from "react";
import type { CookingStep } from "../lib/mockData";

interface Props {
  steps: CookingStep[];
}

export default function CookingSteps({ steps }: Props) {
  const [done, setDone] = useState<number[]>([]);

  const toggle = (n: number) =>
    setDone((d) => (d.includes(n) ? d.filter((x) => x !== n) : [...d, n]));

  return (
    <div className="max-w-3xl mx-auto mt-12 animate-slide-up [animation-delay:200ms]">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        🍴 Cooking Steps
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-pistachio-200/60" />

        <div className="space-y-6">
          {steps.map((s) => {
            const completed = done.includes(s.step);
            return (
              <div key={s.step} className="relative flex gap-5 group">
                {/* Step circle */}
                <button
                  onClick={() => toggle(s.step)}
                  className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer ${
                    completed
                      ? "bg-pistachio-500 text-white shadow-md shadow-pistachio-500/30"
                      : "bg-white border-2 border-pistachio-300 text-pistachio-600 group-hover:border-pistachio-500"
                  }`}
                >
                  {completed ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.step
                  )}
                </button>

                {/* Content */}
                <div
                  className={`flex-1 bg-white rounded-2xl p-5 border transition-all duration-300 ${
                    completed
                      ? "border-pistachio-200 bg-pistachio-50/30"
                      : "border-pistachio-100/50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`font-semibold transition-colors ${
                        completed
                          ? "text-pistachio-700 line-through"
                          : "text-foreground"
                      }`}
                    >
                      {s.title}
                    </h4>
                    <span className="text-xs bg-coral-50 text-coral-500 px-2.5 py-1 rounded-full font-medium">
                      {s.duration}
                    </span>
                  </div>

                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {s.description}
                  </p>

                  {s.tip && (
                    <div className="mt-3 flex items-start gap-2 bg-pistachio-50 rounded-xl p-3 border border-pistachio-100/50">
                      <span className="text-sm shrink-0">💡</span>
                      <p className="text-xs text-pistachio-700 leading-relaxed">
                        <strong>Pro Tip:</strong> {s.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
