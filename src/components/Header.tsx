"use client";

import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";

export default function Header() {
  const { locale, toggleLocale } = useLocale();
  const { profile } = content[locale];
  const ui = uiText[locale];

  const navItems = [
    { href: "#research", label: ui.nav.research },
    { href: "#awards", label: ui.nav.awards },
    { href: "#experience", label: ui.nav.experience },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projects", label: ui.nav.projects },
    { href: "#contact", label: ui.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900"
        >
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 text-sm text-zinc-600 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-400 hover:text-indigo-600"
          >
            {uiText[locale].localeToggle}
          </button>
        </div>
      </div>
    </header>
  );
}
