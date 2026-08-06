import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  /** Small monospace label above the title, e.g. "01 / About". */
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={`${id}-heading`}
              className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
