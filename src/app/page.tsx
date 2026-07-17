"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { coreSkills, experience, projects, workingSkills } from "./content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ArrowIcon({ external = false }: { external?: boolean }) {
  return external ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ) : (
    <svg viewBox="0 0 28 18" aria-hidden="true">
      <path d="M1 9h24M18 2l7 7-7 7" />
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 15.1A8.4 8.4 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15Z" />
    </svg>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const current = document.documentElement.dataset.theme;
      setTheme(current === "light" ? "light" : "dark");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from(".site-header", { y: -22, opacity: 0, duration: 0.55 })
          .to(
            ".hero-line-inner",
            { yPercent: 0, duration: 0.8, stagger: 0.09 },
            "-=0.2",
          )
          .from(
            ".hero-copy > *",
            { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 },
            "-=0.45",
          )
          .from(
            ".hero-target",
            { scale: 0.65, opacity: 0, duration: 0.65 },
            "-=0.45",
          );

        gsap.to(progress.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
            markers: false,
          },
        });

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          gsap.from(element, {
            y: 42,
            opacity: 0,
            duration: 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
              markers: false,
            },
          });
        });

        gsap.from(".tool-item", {
          x: -24,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".tool-list",
            start: "top 80%",
            once: true,
            markers: false,
          },
        });

        gsap.fromTo(
          ".timeline-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience-list",
              start: "top 72%",
              end: "bottom 68%",
              scrub: 1,
              markers: false,
            },
          },
        );

        gsap.from(".experience-row", {
          x: 34,
          opacity: 0,
          duration: 0.62,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 76%",
            once: true,
            markers: false,
          },
        });

        gsap.from(".project-row", {
          x: 48,
          opacity: 0,
          duration: 0.72,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".project-list",
            start: "top 80%",
            once: true,
            markers: false,
          },
        });

        gsap.utils.toArray<HTMLElement>(".project-index").forEach((index) => {
          gsap.to(index, {
            yPercent: -14,
            ease: "none",
            scrollTrigger: {
              trigger: index.closest(".project-row"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              markers: false,
            },
          });
        });

        const cursor = document.querySelector<HTMLElement>(".cursor-accent");
        const target = document.querySelector<HTMLElement>(".hero-target");

        if (cursor && window.matchMedia("(pointer: fine)").matches) {
          const cursorX = gsap.quickTo(cursor, "x", {
            duration: 0.22,
            ease: "power3",
          });
          const cursorY = gsap.quickTo(cursor, "y", {
            duration: 0.22,
            ease: "power3",
          });
          const targetX = target
            ? gsap.quickTo(target, "x", { duration: 0.7, ease: "power3" })
            : null;
          const targetY = target
            ? gsap.quickTo(target, "y", { duration: 0.7, ease: "power3" })
            : null;

          const onPointerMove = (event: PointerEvent) => {
            cursorX(event.clientX);
            cursorY(event.clientY);
            targetX?.((event.clientX / window.innerWidth - 0.5) * 20);
            targetY?.((event.clientY / window.innerHeight - 0.5) * 20);
          };

          window.addEventListener("pointermove", onPointerMove, {
            passive: true,
          });
          gsap.set(cursor, { autoAlpha: 1 });

          return () => window.removeEventListener("pointermove", onPointerMove);
        }
      });

      return () => media.revert();
    },
    { scope: root },
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <div ref={root} className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="scroll-track" aria-hidden="true">
        <div ref={progress} className="scroll-progress" />
      </div>
      <div className="cursor-accent" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Arka Prabha Chowdhury, home">
          APC
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <ThemeIcon theme={theme} />
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-grid">
          <div className="hero-main">
            <h1>
              <span className="hero-line">
                <span className="hero-line-inner">Arka Prabha</span>
              </span>{" "}
              <span className="hero-line">
                <span className="hero-line-inner">Chowdhury</span>
              </span>
            </h1>

            <div className="hero-copy">
              <p className="hero-role">
                Full-stack engineer building fast,
                <br /> reliable products.
              </p>
              <p className="hero-summary">
                I design and ship high-performance web applications, APIs, and
                backend systems from India for distributed teams.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">
                  View selected work <ArrowIcon />
                </a>
                <a className="text-action" href="mailto:arkopra@gmail.com">
                  arkopra@gmail.com <ArrowIcon external />
                </a>
              </div>
              <p className="availability">
                <span aria-hidden="true" /> Available for remote roles · IST
                with EU/US overlap
              </p>
            </div>
          </div>

          <div className="hero-target" aria-hidden="true">
            <span className="target-horizontal" />
            <span className="target-vertical" />
            <span className="target-ring" />
            <span className="target-dot" />
          </div>
        </section>

        <section className="impact-rail reveal" aria-labelledby="impact-title">
          <h2 id="impact-title" className="section-label">
            Impact
          </h2>
          <div className="impact-item">
            <strong>~6x</strong>
            <span>faster checkout</span>
          </div>
          <div className="impact-item">
            <strong>~12x</strong>
            <span>image throughput</span>
          </div>
          <div className="impact-item">
            <strong>25–35%</strong>
            <span>fewer API calls</span>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <aside className="tool-panel reveal">
            <p className="section-label">Primary toolkit</p>
            <h2>Tools I trust in production</h2>
            <ul className="tool-list" aria-label="Primary technical skills">
              {coreSkills.map((skill) => (
                <li className="tool-item" key={skill}>
                  <span aria-hidden="true">+</span> {skill}
                </li>
              ))}
            </ul>
            <details className="tool-details">
              <summary>See all tools in context</summary>
              <ul>
                {workingSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </details>
          </aside>

          <div className="experience-content">
            <h2 className="section-heading reveal">Experience</h2>
            <div className="experience-list">
              <div className="timeline-line" aria-hidden="true" />
              {experience.map((role, index) => (
                <article className="experience-row" key={role.role}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="experience-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="experience-detail">
                    <div className="experience-title-row">
                      <div>
                        <h3>{role.role}</h3>
                        <p>{role.company}</p>
                      </div>
                      <time>{role.period}</time>
                    </div>
                    <ul>
                      {role.featuredBullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="work-section">
          <p className="section-label reveal">Selected work</p>
          <h2 className="section-heading reveal">Selected work</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="project-body">
                  <h3>{project.displayName}</h3>
                  <p className="project-stack">{project.displayStack}</p>
                  <p className="project-outcome">{project.displayOutcome}</p>
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.displayName}`}
                >
                  <ArrowIcon /> <span>{project.linkLabel}</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="education-row reveal">
          <p className="section-label">Education</p>
          <p>
            B.Tech in Computer Science <span>{" · "}</span> BVRIT Hyderabad
            <span>{" · "}</span> 2020—2024 <span>{" · "}</span> CGPA 8.6/10
          </p>
        </section>

        <section id="contact" className="contact-section reveal">
          <div>
            <h2>Let’s build something reliable.</h2>
            <p className="availability">
              <span aria-hidden="true" /> Open to remote full-stack roles and
              focused contract work.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:arkopra@gmail.com">
              arkopra@gmail.com <ArrowIcon />
            </a>
            <a
              href="https://linkedin.com/in/arka-pra"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowIcon />
            </a>
            <a
              href="https://github.com/ArkaPrabhaChowdhury"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Arka Prabha Chowdhury</span>
        <span>India / IST</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
