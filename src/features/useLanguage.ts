
"use client";
import { useState, useEffect } from "react";

export function useLanguage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored) setLang(stored);
  }, []);

  const changeLang = (code: string) => {
    setLang(code);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", code);
    }
  };

  return { lang, changeLang };
}
