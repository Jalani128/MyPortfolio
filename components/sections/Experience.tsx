import { Briefcase, GraduationCap, Award } from "lucide-react";

import { timeline, certifications } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Experience"
      title="Where I've worked & studied"
    >
      <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
        {timeline.map((entry, i) => {
          const Icon = entry.kind === "education" ? GraduationCap : Briefcase;

          return (
            <li key={`${entry.org}-${entry.title}`} className="relative">
              {/* Node on the rail */}
              <span
                aria-hidden
                className="absolute -left-[3.05rem] grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-accent sm:-left-[3.55rem]"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>

              <Reveal delay={i * 0.07}>
                <div className="rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-ink sm:text-lg">
                      {entry.title}
                    </h3>
                    <span className="font-mono text-xs text-faint">
                      {entry.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-accent">
                    {entry.org}
                    {entry.location ? (
                      <span className="text-faint"> · {entry.location}</span>
                    ) : null}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-xl border border-line bg-surface p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            <Award className="h-4 w-4 text-accent" aria-hidden />
            Certifications
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm text-muted"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
