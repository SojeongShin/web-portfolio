"use client";

import Image from "next/image";
import { content } from "@/data/content";
import { useLocale } from "@/i18n/locale-context";

export default function Hero() {
  const { locale } = useLocale();
  const { profile } = content[locale];

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Image
        src={profile.photoUrl}
        alt={profile.name}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-1 ring-zinc-200"
      />
      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-indigo-600">
        {profile.title}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">{profile.tagline}</p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600">
        {profile.bio}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-indigo-500"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
