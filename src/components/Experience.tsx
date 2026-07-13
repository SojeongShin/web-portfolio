"use client";

import { content, type ExperienceItem } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="mt-5 space-y-6 border-l border-zinc-200 pl-6">
      {items.map((item) => (
        <div key={`${item.role}-${item.org}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-zinc-300" />
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="text-base font-semibold text-zinc-900">
              {item.role}
            </h4>
            <span className="text-sm text-zinc-500">{item.org}</span>
          </div>
          <p className="text-sm text-zinc-500">{item.period}</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const { locale } = useLocale();
  const { education, teaching, international } = content[locale];
  const ui = uiText[locale];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow={ui.sections.experience.eyebrow}
        title={ui.sections.experience.title}
      />

      <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-zinc-500">
        {ui.experience.educationLabel}
      </h3>
      <div className="mt-5 space-y-6 border-l border-zinc-200 pl-6">
        {education.map((item) => (
          <div key={`${item.degree}-${item.org}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-zinc-300" />
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-base font-semibold text-zinc-900">
                {item.degree}
              </h4>
              <span className="text-sm text-zinc-500">{item.org}</span>
            </div>
            <p className="text-sm text-zinc-500">
              {item.period}
              {item.gpa ? ` · ${item.gpa}` : ""}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-zinc-500">
        {ui.experience.teachingLabel}
      </h3>
      <ExperienceTimeline items={teaching} />

      <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-zinc-500">
        {ui.experience.internationalLabel}
      </h3>
      <ExperienceTimeline items={international} />
    </section>
  );
}
