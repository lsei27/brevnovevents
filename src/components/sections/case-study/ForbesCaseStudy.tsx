import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudySolutionItem {
  lead: string;
  text: string;
}

export interface CaseStudySlide {
  image: string;
  alt: string;
  title: string;
  capacity: string;
  description: string;
}

export interface CaseStudyContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  meta: CaseStudyMeta[];
  intro: { heading: string; paragraphs: string[] };
  context: { heading: string; paragraphs: string[] };
  solution: { heading: string; items: CaseStudySolutionItem[] };
  result: { heading: string; bullets: string[] };
  forManagers: { heading: string; paragraphs: string[] };
  gallery: { heading: string; slides: CaseStudySlide[] };
  cta: { heading: string; text: string; button: string; href: string; email: string };
}

export function ForbesCaseStudy({ content }: { content: CaseStudyContent }) {
  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end pb-20 md:pb-28">
        <Image
          src={content.heroImage}
          alt={content.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-white">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-white/80 md:text-xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Meta facts */}
      <section className="bg-brand-black-alt">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-8 px-6 py-12 md:grid-cols-3">
          {content.meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-bold uppercase tracking-wider text-brand-white/50">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg font-bold text-brand-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Body */}
      <section className="bg-brand-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-16 px-6">
          {/* Intro */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.intro.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {content.intro.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-brand-white/70">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Context */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.context.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {content.context.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-brand-white/70">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.solution.heading}
            </h2>
            <div className="mt-8 space-y-8">
              {content.solution.items.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-brand-red pl-6"
                >
                  <h3 className="text-xl font-bold text-brand-white">
                    {item.lead}
                  </h3>
                  <p className="mt-2 leading-relaxed text-brand-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.result.heading}
            </h2>
            <ul className="mt-6 space-y-4">
              {content.result.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-brand-white/70">
                  <span
                    aria-hidden
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-red"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For managers */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {content.forManagers.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {content.forManagers.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-brand-white/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-brand-black-alt py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            {content.gallery.heading}
          </h2>
          <div className="mt-12">
            <ImageCarousel slides={content.gallery.slides} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {content.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-brand-white/70">
            {content.cta.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={content.cta.href} variant="primary">
              {content.cta.button}
            </Button>
            <a
              href={`mailto:${content.cta.email}`}
              className="font-bold text-brand-white underline transition-colors hover:text-brand-red"
            >
              {content.cta.email}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
