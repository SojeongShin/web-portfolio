"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { uiText } from "@/data/ui";
import { useLocale } from "@/i18n/locale-context";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const { locale } = useLocale();
  const { profile } = content[locale];
  const ui = uiText[locale];
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow={ui.sections.contact.eyebrow} title={ui.sections.contact.title} />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600">
        {ui.contact.intro}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          {ui.contact.emailMe}
        </a>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-indigo-400 hover:text-indigo-600"
        >
          {ui.contact.downloadCv}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="text-sm font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-indigo-600 hover:decoration-indigo-500"
        >
          {copied ? ui.contact.copied : `${profile.email} · ${ui.contact.copyEmail}`}
        </button>
      </div>
    </section>
  );
}
