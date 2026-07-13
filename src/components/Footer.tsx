"use client";

import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";

export default function Footer() {
  const { locale } = useLocale();
  const { profile } = content[locale];
  const ui = uiText[locale];

  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. {ui.footer}
      </div>
    </footer>
  );
}
