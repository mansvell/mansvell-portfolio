import React, { useEffect, useState } from "react";
import B3 from "./assets/B3.jpg";
import B4 from "./assets/B4.jpg";
import { useApp } from "./context/AppContext";
import { translations } from "./translations/translations";
import Navi from "./components/Navi" ;

export default function UeberM() {
  const [activeCard, setActiveCard] = useState("info");
  const [animateBars, setAnimateBars] = useState(false);

  const { darkMode, setDarkMode, language, setLanguage } = useApp();
  const t = translations[language];

  const skills = [
    { name: "Java", percent: 80 },
    { name: "Python", percent: 80 },
    { name: "HTML5", percent: 90 },
    { name: "Kotlin", percent: 80 },
    { name: "CSS", percent: 80 },
    { name: "Typescript", percent: 80 },
    { name: "Javascript", percent: 80 },
    { name: "MySQL", percent: 80 },
    { name: "PostgreSQL", percent: 80 },
    { name: "Arduino", percent: 65 },
    { name: "C", percent: 60 },
    { name: "Supabase", percent: 70 },
  ];

  const kenntnisse = [
    { name: "Datenbank", percent: 80 },
    { name: "React.js (Frontend)", percent: 90 },
    { name: "Angular (Frontend)", percent: 90 },
    { name: "Vert.X (Backend)", percent: 80 },
    { name: "Spring Boot (Backend)", percent: 80 },
    { name: "Git", percent: 80 },
    { name: "Docker", percent: 80 },
    { name: "Jetpack Compose", percent: 80 },
    { name: "Betriebssystem: Windows/Linux", percent: 70 },
    { name: "Bootstrap/Tailwind", percent: 80 },
    { name: "LaTeX", percent: 70 },
    { name: "Markdown", percent: 80 },
  ];

  useEffect(() => {
    if (activeCard === "skills") {
      setAnimateBars(false);
      const timer = setTimeout(() => setAnimateBars(true), 100);
      return () => clearTimeout(timer);
    }

    setAnimateBars(false);
  }, [activeCard]);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const sections = [
    { id: "info", label: t.about.tabs.info },
    { id: "bilder", label: t.about.tabs.pictures },
    { id: "skills", label: t.about.tabs.skills },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f7f7f5] text-neutral-950 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent dark:from-red-700/25 dark:via-red-900/10 dark:to-transparent" />

      
      <Navi/>

      <main className="relative mt-12 z-10 flex flex-1">
        <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12">

          
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-600">{t.about.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t.about.title}</h1>
            <div className="mt-5 h-[2px] w-12 bg-red-600" />
          </div>

          
          <div className="mb-10 flex w-full gap-2 overflow-x-auto pb-2 sm:w-auto sm:overflow-visible">
            {sections.map((section) => (
              <button key={section.id} onClick={() => setActiveCard(section.id)} className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCard === section.id ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-600/15" : "border-neutral-300 bg-white text-neutral-600 hover:border-red-600 hover:text-red-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-red-500 dark:hover:text-red-400"}`}>
                {section.label}
              </button>
            ))}
          </div>

          {/* Informationen */}
          {activeCard === "info" && (
            <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">

              <div className="max-w-3xl">
                <h2 className="mb-6 text-2xl font-semibold">{t.about.info.title}</h2>

                <div className="space-y-5 text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
                  {t.about.info.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-red-600">{t.about.contact.title}</p>

                <div className="space-y-5">
                  <div>
                    <p className="mb-1 text-xs text-neutral-400">{t.about.contact.email}</p>
                    <a href="mailto:Mansvellnk@gmail.com" className="break-all text-sm font-medium transition-colors hover:text-red-600">Mansvellnk@gmail.com</a>
                  </div>

                  <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

                  <div>
                    <p className="mb-1 text-xs text-neutral-400">{t.about.contact.phone}</p>
                    <a href="tel:+4915734631616" className="text-sm font-medium transition-colors hover:text-red-600">+49 157 3463 1616</a>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Bilder */}
          {activeCard === "bilder" && (
            <div>
              <div className="mb-7">
                <h2 className="text-2xl font-semibold">{t.about.pictures.title}</h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{t.about.pictures.description}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[B3, B4].map((src, index) => (
                  <button key={index} onClick={() => window.open(src, "_blank")} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left dark:border-neutral-800 dark:bg-neutral-900">
                    <img src={src} alt={`${t.about.pictures.image} ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{t.about.pictures.open}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeCard === "skills" && (
            <div className="grid gap-12 lg:grid-cols-2">

              <SkillSection title={t.about.skills.coding} skills={skills} animateBars={animateBars} />

              <SkillSection title={t.about.skills.knowledge} skills={kenntnisse} animateBars={animateBars} />

            </div>
          )}

        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-neutral-200 px-5 py-5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 sm:flex-row sm:px-8 lg:px-12">
          <span>© 2026 Mansvell Nkwanga</span>
          <span>{t.footer.updated} · 27.08.2026</span>
        </div>
      </footer>

    </div>
  );
}

function SkillSection({ title, skills, animateBars }) {
  return (
    <div>
      <h2 className="mb-7 text-xl font-semibold">{title}</h2>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{skill.name}</span>
              <span className="text-xs font-semibold text-neutral-400">{skill.percent}%</span>
            </div>

            <div className="h-[5px] w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full rounded-full bg-red-600" style={{ width: animateBars ? `${skill.percent}%` : "0%", transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}