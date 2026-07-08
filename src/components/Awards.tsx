"use client";

import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

export default function Awards() {
  const { locale } = useLocale();
  const { awards } = content[locale];
  const ui = uiText[locale];

  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={ui.sections.awards.eyebrow} title={ui.sections.awards.title} />

      <ul className="mt-10 space-y-4">
        {awards.map((award) => (
          <li
            key={award.title}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {award.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{award.org}</p>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{award.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
