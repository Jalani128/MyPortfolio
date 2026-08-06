"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { site, socials } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** EmailJS only runs when all three keys are present. */
const emailjsReady = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = String(data.get("user_name") ?? "");
    const email = String(data.get("user_email") ?? "");
    const message = String(data.get("message") ?? "");

    // Without EmailJS keys, hand off to the visitor's mail client.
    if (!emailjsReady) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form, {
        publicKey: PUBLIC_KEY!,
      });
      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email me directly."
      );
    }
  }

  const sending = status === "sending";

  return (
    <Section
      id="contact"
      eyebrow="05 / Contact"
      title="Let's work together"
      description="Have a project in mind or a role to fill? Send a message and I'll get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Details */}
        <Reveal className="space-y-6">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-3 text-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-faint">Email</span>
                  <span className="text-ink transition-colors group-hover:text-accent">
                    {site.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-start gap-3 text-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-faint">Phone</span>
                  <span className="text-ink transition-colors group-hover:text-accent">
                    {site.phone}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-faint">Location</span>
                <span className="text-ink">{site.location}</span>
              </span>
            </li>
          </ul>

          <div className="flex gap-3 pt-2">
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
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} from="right">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-xl border border-line bg-surface p-5 sm:p-7"
            noValidate={false}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="user_name"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                minLength={10}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-y`}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={sending}>
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden />
                    Send Message
                  </>
                )}
              </Button>

              {/* Live region so screen readers announce the result. */}
              <p aria-live="polite" className="text-sm">
                {status === "sent" ? (
                  <span className="inline-flex items-center gap-1.5 text-accent">
                    <Check className="h-4 w-4" aria-hidden />
                    Thanks — I&apos;ll be in touch soon.
                  </span>
                ) : null}
                {status === "error" ? (
                  <span className="inline-flex items-center gap-1.5 text-red-500">
                    <AlertCircle className="h-4 w-4" aria-hidden />
                    {error}
                  </span>
                ) : null}
              </p>
            </div>

            {!emailjsReady ? (
              <p className="mt-4 border-t border-line pt-4 font-mono text-xs leading-relaxed text-faint">
                Setup note: add your EmailJS keys to{" "}
                <code className="text-accent">.env.local</code> to send mail from
                the site. Until then this form opens your visitor&apos;s email
                client instead. See README.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
