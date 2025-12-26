import React from "react";

export type CarProps = {
  name: string;
  season: string;
  engine: string;
  power: string;
  weight: string;
  topSpeed: string;
  image?: string;
};

export default function CarCard({ name, season, engine, power, weight, topSpeed, image }: CarProps) {
  return (
    <div className="bg-[var(--color-card)] rounded-2xl shadow-[var(--color-shadow)] p-6 flex flex-col items-center gap-4 border border-[var(--color-primary-dark)] backdrop-blur-md hover:shadow-[var(--color-glow)] transition-all duration-300">
      {image && (
        <img src={image} alt={name} className="w-32 h-20 object-contain rounded-xl mb-2" />
      )}
      <h3 className="text-2xl font-bold text-[var(--color-primary)] uppercase mb-1">{name}</h3>
      <span className="text-xs font-semibold text-[var(--color-gray)] uppercase tracking-widest mb-2">Season {season}</span>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[var(--color-fg)] w-full">
        <div className="font-bold">Engine:</div>
        <div>{engine}</div>
        <div className="font-bold">Power:</div>
        <div>{power}</div>
        <div className="font-bold">Weight:</div>
        <div>{weight}</div>
        <div className="font-bold">Top Speed:</div>
        <div>{topSpeed}</div>
      </div>
    </div>
  );
}
