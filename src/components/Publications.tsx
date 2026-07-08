"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

export default function Publications() {
  const { locale } = useLocale();
  const { publications } = content[locale];
  const ui = uiText[locale];
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section id="publications" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow={ui.sections.publications.eyebrow}
        title={ui.sections.publications.title}
      />

      <ul className="mt-10 space-y-4">
        {publications.map((pub) => {
          const isOpen = openTitle === pub.title;
          return (
            <li
              key={pub.title}
              className={`rounded-xl border p-5 sm:p-6 ${
                pub.featured
                  ? "border-indigo-200 bg-indigo-50/40 dark:border-indigo-900 dark:bg-indigo-950/20"
                  : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenTitle(isOpen ? null : pub.title)}
                className="flex w-full flex-wrap items-start justify-between gap-3 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {pub.label && (
                    <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-medium text-white">
                      {pub.label}
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {pub.title}
                  </h3>
                </div>
                <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                  {pub.year}
                </span>
              </button>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">{pub.authors}</p>
              <p className="mt-1 text-sm italic text-zinc-500 dark:text-zinc-500">{pub.venue}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    {ui.links.paper}
                  </a>
                )}
                {pub.links.code && (
                  <a
                    href={pub.links.code}
                    className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    {ui.links.code}
                  </a>
                )}
                {pub.details && pub.details.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setOpenTitle(isOpen ? null : pub.title)}
                    className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    {isOpen ? ui.publications.hideDetails : ui.publications.showDetails}
                  </button>
                )}
              </div>
              {isOpen && pub.details && pub.details.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pub.details.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
