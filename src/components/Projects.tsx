"use client";

import { useState } from "react";
import Image from "next/image";
import {
  content,
  type FeaturedProject,
  type ProjectItem,
} from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-disc space-y-1.5 pl-5 marker:text-indigo-300 ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const { locale } = useLocale();
  const ui = uiText[locale];
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          {ui.projects.featured}
        </span>
        {project.paper && (
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
            {project.paper.label}
          </span>
        )}
        <span className="text-sm text-zinc-500">{project.period}</span>
      </div>
      <h4 className="mt-4 text-xl font-semibold text-zinc-900">{project.title}</h4>
      {project.paper && (
        <p className="mt-1 text-sm italic text-zinc-500">
          {project.paper.authors} · {project.paper.venue}
        </p>
      )}
      <BulletList
        items={project.bullets}
        className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700"
      />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200"
          >
            {tag}
          </span>
        ))}
        <button
          type="button"
          onClick={() => setShowDetails((prev) => !prev)}
          className="text-xs font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
        >
          {showDetails ? ui.projects.hideDetails : ui.projects.showDetails}
        </button>
      </div>

      {showDetails && (
        <div className="mt-6 space-y-5">
          {project.slides.map((slide) => {
            const images = slide.images ?? [];
            const multi = images.length > 1 && !slide.stacked;
            return (
              <div
                key={slide.title}
                className="overflow-hidden rounded-xl border border-indigo-100 bg-white"
              >
                {images.length > 0 && (
                  <div className={multi ? "grid grid-cols-1 gap-3 p-3 sm:grid-cols-2" : "space-y-3 p-3"}>
                    {images.map((image) => (
                      <figure key={image.url} className="m-0">
                        <Image
                          src={image.url}
                          alt={image.caption ?? slide.title}
                          width={image.width}
                          height={image.height}
                          sizes={multi ? "(max-width: 640px) 100vw, 460px" : "(max-width: 640px) 100vw, 768px"}
                          unoptimized={image.url.endsWith(".svg")}
                          className="h-auto w-full rounded-lg border border-indigo-100"
                        />
                        {image.caption && (
                          <figcaption className="mt-1.5 text-xs text-zinc-500">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
                <div className="p-5">
                  <h5 className="text-sm font-semibold text-zinc-900">{slide.title}</h5>
                  <BulletList
                    items={slide.bullets}
                    className="mt-2 text-sm leading-relaxed text-zinc-600"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const { locale } = useLocale();
  const ui = uiText[locale];

  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 p-6 transition-colors hover:border-indigo-300">
      <p className="text-xs font-medium text-zinc-400">{project.period}</p>
      <h4 className="mt-1 text-base font-semibold text-zinc-900">{project.title}</h4>
      {project.award && (
        <span className="mt-2 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          {project.award}
        </span>
      )}
      <BulletList
        items={project.bullets}
        className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.links.demo || project.links.video || project.links.code) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              {ui.links.demo}
            </a>
          )}
          {project.links.video && (
            <a
              href={project.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              {ui.links.video}
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              {ui.links.code}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { locale } = useLocale();
  const { projectGroups } = content[locale];
  const ui = uiText[locale];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={ui.sections.projects.eyebrow} title={ui.sections.projects.title} />

      {projectGroups.map((group) => (
        <div key={group.label} className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {group.label}
          </h3>
          {group.featured && (
            <div className="mt-5">
              <FeaturedCard project={group.featured} />
            </div>
          )}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {group.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
