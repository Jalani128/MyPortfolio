"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { site, socials, marqueeSkills } from "@/data";
import { LinkButton } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };

  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Decorative backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      </div>

      <div className="container-page">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          {/* Copy */}
          <div>
            {site.availableForWork ? (
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new opportunities
                </span>
              </motion.div>
            ) : null}

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 font-mono text-lg text-accent sm:text-xl"
            >
              {site.role}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex items-center gap-1.5 text-sm text-faint"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              {site.location}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" aria-hidden />
              </LinkButton>
              <LinkButton href={site.resume} variant="outline" external>
                <Download className="h-4 w-4" aria-hidden />
                Download Resume
              </LinkButton>
              <LinkButton href="#contact" variant="ghost">
                <Mail className="h-4 w-4" aria-hidden />
                Contact Me
              </LinkButton>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={item} className="relative mx-auto lg:mx-0">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-line"
              />
              <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border border-line bg-elevated sm:w-72 lg:w-full lg:max-w-sm">
                <Image
                  src="/profile.png"
                  alt={`${site.name} — ${site.role}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 24rem"
                  className="object-cover"
                />
              </div>
              {/* Accent corner marks */}
              <span
                aria-hidden
                className="absolute -left-3 -top-3 h-5 w-5 border-l-2 border-t-2 border-accent"
              />
              <span
                aria-hidden
                className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skill marquee */}
      <div
        className="relative mt-20 overflow-hidden border-y border-line bg-surface/50 py-5"
        aria-hidden
      >
        <div
          className="flex w-max gap-10 animate-marquee"
          style={{ animationPlayState: reduce ? "paused" : "running" }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex shrink-0 items-center gap-2 text-sm text-faint"
            >
              <skill.icon className="h-4 w-4" />
              <span className="font-mono">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
