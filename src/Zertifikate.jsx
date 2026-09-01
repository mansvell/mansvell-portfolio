import React, { useEffect, useState } from "react";
import Navi from "./components/Navi";
import { useApp } from "./context/AppContext";
import { translations } from "./translations/translations";

import zert1 from "./assets/ExamDocker.png";
import zert2 from "./assets/git.png";
import zert3 from "./assets/dockerComp.png";
import zert4 from "./assets/react.png";
import zert5 from "./assets/SpringBoot.png";
import zert6 from "./assets/angularsys.png";

const zertifs = [
  { id: 1, src: zert1, link: "https://www.linkedin.com/learning/certificates/0ae2ae3d13e97cf31016ab663c5e618f37d4ed81ce992e8fd39cca95c1555c20?trk=share_certificate" },
  { id: 2, src: zert2, link: "https://www.linkedin.com/learning/certificates/36c2176955fd29d613d683b4eac72305ff1f843c2893eaa46940c024c2e88a7d?trk=share_certificate" },
  { id: 3, src: zert3, link: "https://www.linkedin.com/learning/certificates/133bce8f943e6cadf904598cd9c33d47bc89097261d70b3df7e750e7b50ee479?trk=share_certificate" },
  { id: 4, src: zert4, link: "https://www.linkedin.com/learning/certificates/a4ba26d643a4e09eb077f2baf4cf28e6371fc628094514fe7365e8fadec2df16?trk=share_certificate" },
  { id: 5, src: zert5, link: "https://www.linkedin.com/learning/certificates/f7877cb55b82aef4635ebb1be8b88e71abcd008445c22007772f2acdfc7bd4c7?trk=share_certificate" },
  { id: 6, src: zert6, link: "https://www.linkedin.com/learning/certificates/1730677a0bc5aac56ff1e7a669b1876f6eccab83544f56f58e4f55330d4fc59d?u=75094530" },
];

export default function Zertifikate() {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useApp();
  const t = translations[language];

  useEffect(() => {
    if (openIndex === null) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpenIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [openIndex]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f7f7f5] text-neutral-950 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent dark:from-red-700/25 dark:via-red-900/10 dark:to-transparent" />

      <Navi />

      
      <main className="relative mt-12 z-10 flex-1">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-600">{t.certificates.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t.certificates.title}</h1>
            <div className="mt-5 h-[2px] w-12 bg-red-600" />
            <p className="mt-6 text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">{t.certificates.description}</p>
          </div>

          {/* Grille */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zertifs.map((certificate, index) => (
              <button key={certificate.id} onClick={() => setOpenIndex(index)} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-900" aria-label={`${t.certificates.open} ${index + 1}`}>

                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-3 sm:p-4">
                  <img src={certificate.src} alt={`${t.certificates.certificate} ${index + 1}`} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>

                <div className="flex items-center justify-between border-t border-neutral-100 px-5 py-4 dark:border-neutral-800">
                  <div>
                    <p className="text-sm font-semibold">{t.certificates.certificate} {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-0.5 text-xs text-neutral-400">{t.certificates.clickToOpen}</p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-lg text-neutral-500 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white dark:border-neutral-700 dark:text-neutral-300">↗</span>
                </div>

              </button>
            ))}
          </div>

        </section>
      </main>

      <footer className="relative z-10 mt-auto w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-neutral-200 px-5 py-5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 sm:flex-row sm:px-8 lg:px-12">
          <span>© 2026 Mansvell Nkwanga</span>
          <span>{t.footer.updated} · 01.09.2026</span>
        </div>
      </footer>


      {/* Aperçu du certificat */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={t.certificates.preview} onClick={() => setOpenIndex(null)}>

          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#f7f7f5] shadow-2xl dark:bg-neutral-950" onClick={(event) => event.stopPropagation()}>

            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-600">{t.certificates.certificate}</p>
                <p className="mt-1 text-sm font-semibold">{String(openIndex + 1).padStart(2, "0")} / {String(zertifs.length).padStart(2, "0")}</p>
              </div>

              <button onClick={() => setOpenIndex(null)} className="flex h-10 min-w-[52px] items-center justify-center rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold tracking-wider text-neutral-900 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600" aria-label={t.certificates.close}>X</button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-neutral-100 p-3 dark:bg-black sm:p-6">
              <img src={zertifs[openIndex].src} alt={`${t.certificates.certificate} ${openIndex + 1}`} className="mx-auto max-h-[65vh] w-auto max-w-full object-contain shadow-lg" />
            </div>

            <div className="flex flex-col gap-3 border-t border-neutral-200 bg-white px-5 py-4 dark:border-neutral-800 dark:bg-neutral-950 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-400">{t.certificates.linkedinInfo}</p>

              <a href={zertifs[openIndex].link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700">
                {t.certificates.verify}
                <span>↗</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}