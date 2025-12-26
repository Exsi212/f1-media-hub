"use client";
import { useLanguage } from "../features/useLanguage";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
  const { lang, changeLang } = useLanguage();
  return (
    <div className="flex items-center gap-2">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          className={`px-3 py-1 rounded-full font-bold uppercase text-xs border border-[var(--color-primary)] transition-all duration-200
            ${lang === code ? "bg-[var(--color-primary)] text-[var(--color-white)] shadow-[var(--color-glow)]" : "bg-[var(--color-card)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"}`}
          onClick={() => changeLang(code)}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
