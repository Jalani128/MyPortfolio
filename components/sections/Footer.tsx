import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SiGithub, SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { site, socials, navLinks } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-ink">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-faint">{site.role}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href={socials.vercel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vercel deployments"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <SiVercel className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden font-mono text-xs text-faint sm:block">
              Built with Next.js &amp; Tailwind CSS
            </p>
            <Link
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
