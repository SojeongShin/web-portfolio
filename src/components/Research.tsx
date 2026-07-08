"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

export default function Research() {
  const { locale } = useLocale();
  const { researchAreas } = content[locale];
  const ui = uiText[locale];
  const [featured, ...rest] = researchAreas;
  const [showDetails, setShowDetails] = useState(false);
  const hasSlides = !!featured.slides && featured.slides.length > 0;

  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={ui.sections.research.eyebrow} title={ui.sections.research.title} />

      <div className="mt-10 rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-900 dark:bg-indigo-950/30 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            {ui.research.currentFocus}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{featured.period}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {featured.title}
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {featured.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-zinc-900 dark:text-indigo-300 dark:ring-indigo-800"
            >
              {tag}
            </span>
          ))}
          {hasSlides && (
            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
            >
              {showDetails ? ui.research.hideDetails : ui.research.showDetails}
            </button>
          )}
        </div>

        {showDetails && hasSlides && (
          <div className="mt-6 space-y-5">
            {featured.slides!.map((slide) => (
              <div
                key={slide.title}
                className="overflow-hidden rounded-xl border border-indigo-100 bg-white dark:border-indigo-900/60 dark:bg-zinc-950"
              >
                {slide.imageUrl ? (
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    width={slide.imageWidth ?? 1600}
                    height={slide.imageHeight ?? 900}
                    sizes="(max-width: 640px) 100vw, 768px"
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-zinc-100 text-xs text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
                    {ui.research.imagePlaceholder}
                  </div>
                )}
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {slide.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {slide.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
        {rest.map((area) => (
          <div key={area.title} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {area.title}
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{area.period}</span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {area.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
