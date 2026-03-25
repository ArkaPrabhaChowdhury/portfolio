"use client";

import { useEffect, useState } from "react";

import {
  coreSkills,
  workingSkills,
  experience,
  projects,
} from "./content";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial =
      stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 glow" />
        <div className="absolute inset-0 gridlines" />
        <div className="absolute inset-0 grain" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-16">
        <button
          type="button"
          onClick={toggleTheme}
          className="absolute right-6 top-6 rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-2)] shadow-sm transition hover:-translate-y-0.5 sm:right-10 sm:top-16 lg:right-16"
          aria-pressed={theme === "dark"}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <section className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--ring)] bg-[var(--card)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] shadow-sm backdrop-blur">
              Full Stack Engineer
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Open to Remote (US/EU)
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Arka Prabha Chowdhury
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Full Stack Engineer (2+ years) — Open to junior–mid remote roles
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Full Stack Engineer with 2+ years building high-performance web
              apps and scalable backend systems. Experienced in API design,
              concurrency, and production optimization.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Based in India (IST) • Can overlap EU/US hours • Open to
              B2B/contract
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-5 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
                href="mailto:arkopra@gmail.com"
              >
                arkopra@gmail.com
              </a>
              <a
                className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-5 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
                href="tel:+917981047462"
              >
                +91 79810 47462
              </a>
            </div>
          </div>

          <div className="w-full max-w-md space-y-4">
            <div className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)]/80 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <span>Links</span>
                <span className="text-[var(--accent-2)]">Live</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                 <a
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3 font-medium transition"
                  href="https://github.com/ArkaPrabhaChowdhury"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-[var(--muted)]">
                    github.com/ArkaPrabhaChowdhury
                  </span>
                </a>
                <a
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3 font-medium transition"
                  href="https://linkedin.com/in/arka-pra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-[var(--muted)]">
                    linkedin.com/in/arka-pra
                  </span>
                </a>
                <a
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3 font-medium transition"
                  href="https://x.com/arkopra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>X</span>
                  <span className="text-xs text-[var(--muted)]">x.com/arkopra</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)] p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Availability
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Remote junior–mid roles
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Remote-friendly,
                async-first teams.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[color:var(--ring)] bg-[var(--card)]/70 p-8 shadow-lg backdrop-blur lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Impact Highlights
            </p>
            <h2 className="text-2xl font-semibold">Engineering outcomes</h2>
            <p className="text-[var(--muted)]">
              Performance, reliability, and delivery speed improvements across
              production systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Checkout performance", value: "~6x faster" },
              { label: "Image throughput", value: "~12x higher" },
              { label: "API call reduction", value: "25-35%" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] p-4 text-center shadow-sm"
              >
                <p className="text-sm text-[var(--muted)]">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Core Stack
              </p>
              <h2 className="text-3xl font-semibold">Primary toolkit</h2>
            </div>
            <p className="max-w-md text-sm text-[var(--muted)]">
              Focused, production-ready skills used across remote client and
              product work.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-4 py-2 text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Working Knowledge
            </p>
            <h2 className="text-2xl font-semibold">Additional tools</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {workingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-4 py-2 text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Experience
            </p>
            <h2 className="text-3xl font-semibold">Selected roles</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Remote experience across distributed teams, async collaboration,
              and client delivery.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((role) => (
              <article
                key={role.role}
                className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)]/80 p-7 shadow-lg backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{role.role}</h3>
                    <p className="text-sm text-[var(--muted)]">
                      {role.company}
                      {role.location ? ` • ${role.location}` : ""}
                    </p>
                  </div>
                  <span className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-4 py-1 text-sm font-medium text-[var(--muted)]">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)]/80 p-8 shadow-lg backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Projects
                </p>
                <h2 className="text-3xl font-semibold">Featured builds</h2>
              </div>
            </div>
            {projects.map((project) => (
              <div key={project.name} className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-[var(--muted)]">
                      {project.stack} • {project.blurb}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      className="text-sm font-medium text-[var(--accent-2)]"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link.replace("https://", "")}
                    </a>
                    <a
                      className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition hover:-translate-y-0.5"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Live
                    </a>
                  </div>
                </div>
                <div className="grid gap-2 text-sm text-[var(--muted)]">
                  <p>
                    <span className="font-semibold text-[var(--foreground)]">
                      Outcome:
                    </span>{" "}
                    {project.outcome}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--foreground)]">
                      Challenge:
                    </span>{" "}
                    {project.challenge}
                  </p>
                </div>
                <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)]/80 p-8 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Education
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                B.Tech in Computer Science
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                BVRIT Hyderabad • 2020 - 2024
              </p>
              <div className="mt-5 rounded-2xl border border-[color:var(--ring)] bg-[var(--card)] px-4 py-3 text-sm font-medium">
                CGPA: 8.6 / 10
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--ring)] bg-[var(--card)] p-8 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Open to Remote (US/EU)
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Reach out for full stack engineering roles and opportunities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-[color:var(--ring)] bg-[var(--card)] px-5 py-2 text-sm font-semibold"
                  href="mailto:arkopra@gmail.com"
                >
                  Email Arka
                </a>
                <a
                  className="rounded-full border border-[color:var(--ring)] px-5 py-2 text-sm font-semibold text-[var(--muted)]"
                  href="https://linkedin.com/in/arka-pra"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--ring)] py-6 text-xs text-[var(--muted)]">
          <span>Arka Prabha Chowdhury</span>
          <span>Full Stack Engineer</span>
        </footer>
      </main>
    </div>
  );
}
