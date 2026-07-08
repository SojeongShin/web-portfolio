"use client";

import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const { locale } = useLocale();
  const { projects } = content[locale];
  const ui = uiText[locale];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={ui.sections.projects.eyebrow} title={ui.sections.projects.title} />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-6 transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:hover:border-indigo-800"
          >
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>
            {project.award && (
              <span className="mt-2 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-950/40 dark:text-amber-400">
                {project.award}
              </span>
            )}
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                >
                  {ui.links.demo}
                </a>
              )}
              {project.links.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                >
                  {ui.links.video}
                </a>
              )}
              {project.links.code && (
                <a
                  href={project.links.code}
                  className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700 dark:text-indigo-400"
                >
                  {ui.links.code}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
