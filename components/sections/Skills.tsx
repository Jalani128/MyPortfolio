"use client";

import { skillGroups } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="Tools I work with"
      description="The stack I reach for day to day, from interface down to database and deployment."
    >
      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.06}>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <h3 className="shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.18em] text-faint sm:w-40">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
                      style={
                        { "--brand": skill.color } as React.CSSProperties
                      }
                    >
                      <skill.icon
                        className="h-4 w-4 shrink-0 transition-colors duration-200 text-faint group-hover:text-[color:var(--brand)]"
                        aria-hidden
                      />
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
