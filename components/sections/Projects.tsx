"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { projects, socials, type Project } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      {/* Screenshot — replace the SVG in public/projects/ with a real image. */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-md bg-bg/85 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-faint">
          {project.blurb}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2 text-sm leading-snug text-muted"
              >
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-elevated px-2 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Buttons only render when a URL is present, so no dead links. */}
        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary", "sm")}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live Demo
            </a>
          ) : null}

          {project.adminUrl ? (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outline", "sm")}
            >
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Admin Panel
            </a>
          ) : null}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outline", "sm")}
            >
              <SiGithub className="h-3.5 w-3.5" aria-hidden />
              GitHub Repo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="Things I've built"
      description="Production applications and experiments. Screenshots and copy live in data/index.ts — swap them any time."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={socials.vercel}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("outline", "md")}
          >
            All Vercel deployments
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("ghost", "md")}
          >
            <SiGithub className="h-4 w-4" aria-hidden />
            More on GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
