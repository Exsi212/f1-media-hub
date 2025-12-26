import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-[var(--color-glass)] backdrop-blur-md shadow-lg rounded-b-2xl border-b border-[var(--color-primary-dark)]">
      <div className="flex items-center gap-4">
        <Image src="/f1-logo.svg" alt="F1 Logo" width={40} height={40} />
        <span className="text-2xl font-extrabold tracking-widest text-[var(--color-primary)] uppercase">F1 Media Hub</span>
      </div>
      <nav className="flex gap-6 text-[var(--color-fg)] font-semibold uppercase">
        <a href="#drivers" className="hover:text-[var(--color-primary)] transition">Drivers</a>
        <a href="#cars" className="hover:text-[var(--color-primary)] transition">Cars</a>
        <a href="#teams" className="hover:text-[var(--color-primary)] transition">Teams</a>
        <a href="#tracks" className="hover:text-[var(--color-primary)] transition">Tracks</a>
        <a href="#technology" className="hover:text-[var(--color-primary)] transition">Technology</a>
        <a href="#news" className="hover:text-[var(--color-primary)] transition">News</a>
      </nav>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
