import Navi from "./components/Navi";
import { useApp } from "./context/AppContext";
import { translations } from "./translations/translations";

const education = [
  {
    period: "04/2023 – HEUTE",
    institution: "Technische Hochschule Mittelhessen (THM)",
    details: [
      "Programmierung interaktiver Systeme (Java)",
      "Grundlagen der künstlichen Intelligenz (Python)",
      "Datenbanken (MariaDB, SQL, ERM)",
      "Android-Praktikum (Android-App, Kotlin)",
      "Objektorientierte Programmierung (Java)",
      "Praktische Informatik 1 & 2 (HTML, Vert.x, CSS, JavaScript)",
      "Konzepte systemnaher Programmierung (C)",
      "Algorithmen und Datenstrukturen",
    ],
  },
  {
    period: "10/2022 – 12/2022",
    institution: "Eifert Sprachzentrum · Frankfurt",
    details: [
      "Abschluss: telc Deutsch C1 Hochschule",
    ],
  },
  {
    period: "12/2020 – 04/2022",
    institution: "Goethe-Institut Sprachschule · Kamerun",
    details: [
      "Abschluss: Goethe-Zertifikate A1, A2, B1 und B2",
    ],
  },
  {
    period: "09/2012 – 07/2020",
    institution: "Bilinguales Gymnasium von Mendong",
    details: [
      "Abitur mit Schwerpunkt Mathematik, Physik und Naturwissenschaften",
    ],
  },
];

const experience = [
  {
    period: "04/2023 – HEUTE",
    institution: "Technische Hochschule Mittelhessen",
    details: [
      "Entwicklung der Webanwendung MJ-Shop zur Rezeptverwaltung mit Benutzerkonten und Rezeptmanagement. Frontend: HTML, CSS, JavaScript und Handlebars. Backend: Java und Vert.x.",
      "Entwicklung des Brettspiels Qawale im Team mit einem KI-Gegner unter Verwendung von Python und Pygame.",
      "Entwicklung der Android-App SmartSaveApp zur Verwaltung von Sparzielen, Bankkonten und Sparkonten mit Kotlin und Jetpack Compose.",
      "Entwicklung mehrerer Videospiele mit Java, darunter Pokémon, Fruit Ninja, Pokéball und Vier Gewinnt, unter Verwendung einer MVC-Struktur.",
      "Aufbau einer virtuellen Maschine mit C#.",
      "Entwicklung eines Compilers mit Java, Kotlin und CUP.",
    ],
  },
];

export default function Lebenslauf() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f7f7f5] text-neutral-950 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent dark:from-red-700/25 dark:via-red-900/10 dark:to-transparent" />

      <Navi />

      <main className="relative mt-12 z-10 flex-1">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-600">{t.cv.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t.cv.title}</h1>
            <div className="mt-5 h-[2px] w-12 bg-red-600" />
            <p className="mt-6 text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">{t.cv.description}</p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-red-600">01</span>
                <h2 className="text-2xl font-semibold">{t.cv.education}</h2>
              </div>

              <Timeline items={education} />
            </div>

            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-red-600">02</span>
                <h2 className="text-2xl font-semibold">{t.cv.experience}</h2>
              </div>

              <Timeline items={experience} />

         
              <div className="mt-14 border-t border-neutral-200 pt-10 dark:border-neutral-800">
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-red-600">03</span>
                  <h2 className="text-2xl font-semibold">{t.cv.professional}</h2>
                </div>

                <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-400">{t.cv.professionalEmpty}</p>
              </div>

            </div>
          </div>

        </section>
      </main>

      

    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative">

      <div className="absolute bottom-0 left-[5px] top-2 w-px bg-red-500/25 dark:bg-red-800" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <article key={`${item.period}-${index}`} className="relative pl-8">

            <span className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-[#f7f7f5] bg-red-600 ring-1 ring-red-600 dark:border-[#0b0b0b]" />

            <p className="mb-2 text-xs font-bold tracking-[0.08em] text-red-600">{item.period}</p>

            <h3 className="text-base font-semibold leading-6 text-neutral-900 dark:text-white">{item.institution}</h3>

            <div className="mt-4 space-y-3">
              {item.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex items-start gap-3">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{detail}</p>
                </div>
              ))}
            </div>

          </article>
        ))}
      </div>

    </div>
  );
}