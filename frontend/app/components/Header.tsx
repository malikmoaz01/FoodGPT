"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-pistachio-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
            🍳
          </span>
          <span className="text-xl font-bold">
            <span className="text-pistachio-700">Food</span>
            <span className="text-coral-400">GPT</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["#features", "Features"],
            ["#demo", "Try Demo"],
            ["#how-it-works", "How It Works"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-foreground/60 hover:text-pistachio-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-pistachio-500 to-pistachio-600 hover:from-pistachio-600 hover:to-pistachio-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pistachio-500/30 active:scale-95 cursor-pointer">
          Get Started
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-pistachio-50 transition-colors cursor-pointer"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-pistachio-100/50 py-4 px-4 animate-fade-in bg-cream/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {[
              ["#features", "Features"],
              ["#demo", "Try Demo"],
              ["#how-it-works", "How It Works"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/60 hover:text-pistachio-600 px-3 py-2 rounded-lg hover:bg-pistachio-50 transition-colors"
              >
                {label}
              </a>
            ))}
            <button className="mt-2 w-full bg-gradient-to-r from-pistachio-500 to-pistachio-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
