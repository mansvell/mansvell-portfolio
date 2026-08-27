import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Languages } from "lucide-react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations/translations";

export default function Navi() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { darkMode, setDarkMode, language, setLanguage } = useApp();
  const t = translations[language];

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/ueber-mich" },
    { label: t.nav.certificates, to: "/zertifikate" },
    { label: t.nav.cv, to: "/lebenslauf" },
    { label: t.nav.portfolio, to: "/portfolio" },
  ];

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <header className=" fixed top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => `group relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-red-600" : "text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"}`}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 min-w-[64px] items-center justify-center rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold tracking-[0.12em] text-neutral-900 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-neutral-500 dark:bg-neutral-900 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600 md:hidden" aria-label="Menu" aria-expanded={menuOpen}>
          {menuOpen ? "X" : "MENU"}
        </button>

        <div className="flex items-center gap-2">

          <div className="relative">
            <button onClick={() => setLanguageOpen(!languageOpen)} aria-label={t.language.label} aria-expanded={languageOpen} className={`flex h-10 items-center gap-2 rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${languageOpen ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20" : "border-neutral-300 bg-white text-neutral-800 hover:border-red-600 hover:text-red-600 dark:border-neutral-500 dark:bg-neutral-900 dark:text-white dark:hover:border-red-500 dark:hover:text-red-400"}`}>
              <Languages size={17} />
              <span>{language}</span>
            </button>

            <div className={`absolute right-0 top-14 origin-top-right transition-all duration-300 ${languageOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"}`}>
              <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-xl shadow-black/10 dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-black/50">
                {["de", "en", "fr"].map((lang) => (
                  <button key={lang} onClick={() => selectLanguage(lang)} title={t.language[lang]} className={`flex h-9 min-w-[44px] items-center justify-center rounded-full px-3 text-xs font-bold uppercase transition-all duration-300 ${language === lang ? "bg-red-600 text-white shadow-md shadow-red-600/20" : "text-neutral-500 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"}`}>
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? t.theme.light : t.theme.dark} title={darkMode ? t.theme.light : t.theme.dark} className={`flex h-10 w-10 items-center justify-center rounded-full border text-base transition-all duration-300 ${darkMode ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-500" : "border-neutral-400 bg-white text-neutral-900 hover:border-red-600 hover:bg-red-600 hover:text-white"}`}>
            {darkMode ? "●" : "○"}
          </button>

        </div>

        <div className={`absolute left-0 right-0 top-20 overflow-hidden border-y border-neutral-200 bg-[#f7f7f5]/95 shadow-lg backdrop-blur-xl transition-all duration-500 dark:border-neutral-800 dark:bg-[#0b0b0b]/95 md:hidden ${menuOpen ? "max-h-[400px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setMenuOpen(false)} className={({ isActive }) => `border-b border-neutral-200 py-4 text-base font-medium transition-all duration-300 last:border-b-0 dark:border-neutral-800 ${isActive ? "text-red-600" : "text-neutral-700 hover:pl-2 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-400"}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
}