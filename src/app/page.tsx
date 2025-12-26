
"use client";
import React from "react";
import CarCard from "../components/CarCard";
import { useLanguage } from "../features/useLanguage";
import { translations } from "../features/translations";



export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <main className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-fg)] font-sans flex flex-col items-center justify-start">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[70vh] py-24 px-4 overflow-hidden bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-card)] to-[var(--color-cherry)]">
        {/* Glow/Glassmorphism background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-20 blur-3xl rounded-full" />
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-[var(--color-accent)] opacity-10 blur-2xl rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[var(--color-primary)] drop-shadow-[var(--color-glow)] mb-6 uppercase">{t.hero.title}</h1>
          <p className="text-2xl md:text-3xl text-[var(--color-gray)] font-medium mb-8 max-w-2xl">{t.hero.subtitle}</p>
          <a href="#cars" className="inline-block mt-4 px-8 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-white)] font-bold text-xl shadow-[var(--color-glow)] hover:bg-[var(--color-accent)] transition-all duration-300">{t.hero.cta}</a>
        </div>
      </section>
      {/* Featured Cars Section */}
      <section id="cars" className="w-full max-w-5xl mt-16 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6 uppercase tracking-wide">{t.cars.section}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarCard
            name={t.cars.mercedes.name}
            season={t.cars.mercedes.season}
            engine={t.cars.mercedes.engine}
            power={t.cars.mercedes.power}
            weight={t.cars.mercedes.weight}
            topSpeed={t.cars.mercedes.topSpeed}
            image="/car-mercedes-w14.png"
          />
          <CarCard
            name={t.cars.redbull.name}
            season={t.cars.redbull.season}
            engine={t.cars.redbull.engine}
            power={t.cars.redbull.power}
            weight={t.cars.redbull.weight}
            topSpeed={t.cars.redbull.topSpeed}
            image="/car-redbull-rb19.png"
          />
          <CarCard
            name={t.cars.ferrari.name}
            season={t.cars.ferrari.season}
            engine={t.cars.ferrari.engine}
            power={t.cars.ferrari.power}
            weight={t.cars.ferrari.weight}
            topSpeed={t.cars.ferrari.topSpeed}
            image="/car-ferrari-sf23.png"
          />
        </div>
      </section>
    </main>
  );
}
