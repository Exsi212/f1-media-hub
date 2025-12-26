"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-full px-4 py-2 bg-[var(--color-card)] text-[var(--color-primary)] shadow-[var(--color-glow)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] transition-all duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌑 Dark Red" : "🌕 Light"}
    </button>
  );
}
