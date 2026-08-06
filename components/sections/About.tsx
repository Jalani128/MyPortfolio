import { about } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <Reveal className="space-y-5">
          {about.paragraphs.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {text}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.12} from="right">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {about.highlights.map((h) => (
              <div key={h.label} className="bg-surface p-5">
                <dt className="sr-only">{h.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-semibold text-accent">
                    {h.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-faint">
                    {h.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
