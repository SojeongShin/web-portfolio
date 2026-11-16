"use client";

import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";

export default function Hero() {
  const { locale } = useLocale();
  const { profile } = content[locale];
  const ui = uiText[locale];

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        {profile.title}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">{profile.tagline}</p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600">
        {profile.bio}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          {ui.hero.viewCv}
        </a>
      </div>
    </section>
  );
}
