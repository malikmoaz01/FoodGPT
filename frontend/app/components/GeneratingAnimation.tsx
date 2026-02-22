"use client";

import { useEffect, useState } from "react";

export default function GeneratingAnimation() {
  const [dots, setDots] = useState("");
  const [step, setStep] = useState(0);

  const messages = [
    "Analyzing your ingredients…",
    "Matching flavor profiles…",
    "Crafting the perfect recipe…",
    "Almost ready — plating up!",
  ];

  useEffect(() => {
    const dotTimer = setInterval(
      () => setDots((d) => (d.length >= 3 ? "" : d + ".")),
      400
    );
    const stepTimer = setInterval(
      () => setStep((s) => (s < messages.length - 1 ? s + 1 : s)),
      1800
    );
    return () => {
      clearInterval(dotTimer);
      clearInterval(stepTimer);
    };
  }, [messages.length]);

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      {/* Orbiting emojis */}
      <div className="relative w-48 h-48 mb-10">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-2 border-pistachio-300/30 animate-pulse-ring" />
        <div className="absolute inset-4 rounded-full border-2 border-coral-300/20 animate-pulse-ring [animation-delay:0.5s]" />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pistachio-400 to-pistachio-600 flex items-center justify-center shadow-lg shadow-pistachio-500/30">
            <span className="text-3xl">🧠</span>
          </div>
        </div>

        {/* Orbiting food */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-orbit">🍅</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-orbit-delayed">🌿</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-orbit-delayed-2">🧀</span>
        </div>
      </div>

      {/* Text */}
      <p className="text-xl font-semibold text-foreground/80 mb-2">
        {messages[step]}
        <span className="text-pistachio-500">{dots}</span>
      </p>
      <p className="text-sm text-foreground/40">
        Our AI is working its magic
      </p>

      {/* Progress bar */}
      <div className="mt-6 w-64 h-1.5 rounded-full bg-pistachio-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pistachio-400 to-coral-400 transition-all duration-[7000ms] ease-linear"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
