import React from "react";
import CarCard from "../components/CarCard";


export default function Home() {
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
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[var(--color-primary)] drop-shadow-[var(--color-glow)] mb-6 uppercase">Formula 1 Media Hub</h1>
          <p className="text-2xl md:text-3xl text-[var(--color-gray)] font-medium mb-8 max-w-2xl">Speed, engineering, and data — the ultimate motorsport editorial experience. Dive into the world of Formula 1 with immersive visuals, stats, and technology.</p>
          <a href="#cars" className="inline-block mt-4 px-8 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-white)] font-bold text-xl shadow-[var(--color-glow)] hover:bg-[var(--color-accent)] transition-all duration-300">Explore Cars</a>
        </div>
      </section>
      {/* Featured Cars Section */}
      <section id="cars" className="w-full max-w-5xl mt-16 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6 uppercase tracking-wide">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example car cards, replace with dynamic data as needed */}
          <CarCard
            name="Mercedes W14"
            season="2023"
            engine="Mercedes-AMG F1 M14 E Performance"
            power="1050 hp"
            weight="798 kg"
            topSpeed="360 km/h"
            image="/car-mercedes-w14.png"
          />
          <CarCard
            name="Red Bull RB19"
            season="2023"
            engine="Honda RBPT"
            power="1050 hp"
            weight="798 kg"
            topSpeed="355 km/h"
            image="/car-redbull-rb19.png"
          />
          <CarCard
            name="Ferrari SF-23"
            season="2023"
            engine="Ferrari 066/7"
            power="1040 hp"
            weight="798 kg"
            topSpeed="350 km/h"
            image="/car-ferrari-sf23.png"
          />
        </div>
      </section>
    </main>
  );
}
