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

      <div className="mt-10 rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            {ui.research.currentFocus}
          </span>
          {featured.paper && (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {featured.paper.label}
            </span>
          )}
          <span className="text-sm text-zinc-500">{featured.period}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-900">
          {featured.title}
        </h3>
        {featured.paper && (
          <p className="mt-1 text-sm italic text-zinc-500">
            {featured.paper.authors} · {featured.paper.venue}
          </p>
        )}
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700">
          {featured.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200"
            >
              {tag}
            </span>
          ))}
          {hasSlides && (
            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
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
                className="overflow-hidden rounded-xl border border-indigo-100 bg-white"
              >
                {slide.images && slide.images.length > 0 ? (
                  <div
                    className={
                      slide.images.length > 1
                        ? "grid grid-cols-1 gap-3 p-3 sm:grid-cols-2"
                        : ""
                    }
                  >
                    {slide.images.map((image) => (
                      <figure key={image.url} className="m-0">
                        <Image
                          src={image.url}
                          alt={slide.title}
                          width={image.width}
                          height={image.height}
                          sizes={
                            slide.images!.length > 1
                              ? "(max-width: 640px) 100vw, 460px"
                              : "(max-width: 640px) 100vw, 768px"
                          }
                          unoptimized={image.url.endsWith(".svg")}
                          className={`h-auto w-full ${slide.images!.length > 1 ? "rounded-lg border border-indigo-100" : ""}`}
                        />
                        {image.caption && (
                          <figcaption className="mt-1.5 text-xs text-zinc-500">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-zinc-100 text-xs text-zinc-400">
                    {ui.research.imagePlaceholder}
                  </div>
                )}
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-zinc-900">
                    {slide.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {slide.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 space-y-8 border-l border-zinc-200 pl-6">
        {rest.map((area) => (
          <div key={area.title} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-zinc-300" />
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-zinc-900">
                {area.title}
              </h3>
              <span className="text-sm text-zinc-500">{area.period}</span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600">
              {area.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
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
