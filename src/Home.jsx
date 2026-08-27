import { useState } from "react";
import Typewriter from "typewriter-effect";
import { ArrowUpRight} from "lucide-react";
import githubIcon from "./assets/gitIcon.png";
import linkedIn from "./assets/inlogo.webp";
import { useApp } from "./context/AppContext";
import { translations } from "./translations/translations";
import Navi from "./components/Navi";


export default function Home() {
  
  const { darkMode, setDarkMode, language, setLanguage } = useApp();
  const t = translations[language];


  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f7f7f5] text-neutral-950 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent dark:from-red-700/25 dark:via-red-800/10 dark:to-transparent dark:h-[560px]" />

      <Navi/>

      <main className="relative z-10 flex flex-1 items-center">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-red-600 dark:text-red-500">{t.home.welcome}</p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              <span className="block">Mansvell Nkwanga</span>
              <span className="mt-2 block min-h-[1.2em] text-neutral-400 dark:text-neutral-500">
                <Typewriter key={language} options={{ strings: t.home.roles, autoStart: true, loop: true, delay: 70, deleteSpeed: 35 }} />
              </span>
            </h1>

            <div className="mx-auto my-9 h-[2px] w-12 bg-red-600 transition-all duration-500 hover:w-24" />

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a href="https://github.com/mansvell" target="_blank" rel="noreferrer" className="group flex w-full items-center justify-between gap-6 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white hover:shadow-lg dark:border-neutral-500 dark:bg-neutral-900 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black sm:w-auto">
                <span className="flex items-center gap-3">
                  <img src={githubIcon} alt="GitHub" className="h-5 w-5 object-contain" />
                  GitHub
                </span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a href="https://www.linkedin.com/in/mansvell-nkwanga-59a0a8279" target="_blank" rel="noreferrer" className="group flex w-full items-center justify-between gap-6 rounded-full border border-red-600 bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-md shadow-red-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 dark:border-red-500 dark:bg-red-600 dark:text-white dark:hover:border-red-400 dark:hover:bg-red-500 sm:w-auto">
                <span className="flex items-center gap-3">
                  <img src={linkedIn} alt="LinkedIn" className="h-5 w-5 object-contain" />
                  LinkedIn
                </span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-neutral-200 px-5 py-5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 sm:flex-row sm:px-8 lg:px-12">
          <span>© 2026 Mansvell Nkwanga</span>
          <span>{t.footer.updated} · 27.08.2026</span>
        </div>
      </footer>

    </div>
  );
}