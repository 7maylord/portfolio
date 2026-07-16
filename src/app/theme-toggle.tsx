"use client";

import { SunMoon } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => {
        const nextTheme =
          document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
      }}
    >
      <SunMoon size={18} />
    </button>
  );
}
