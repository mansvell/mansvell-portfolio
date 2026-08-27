import { useState ,useEffect} from 'react';
import Navi from "./components/Navi";
import { useApp } from "./context/AppContext";
import { translations } from "./translations/translations";

import githubIcon from './assets/gitIcon.png'; 
import project1 from './assets/portfolio.png';
import project2 from './assets/smart.png';
import projectDemo2 from '/smartDemo.mp4';
import project3 from './assets/qawale.jpg';
import projectDemo3 from '/QawaleDemo.mp4';
import project4 from './assets/mjshop.png';
import projectDemo4 from '/mjshopDemo.mp4';
import project5 from './assets/mga.png';
import projectDemo5 from '/mgaDemo.mp4';

import project6 from './assets/FN.png';
import projectDemo6 from '/FNDemo.mp4';
import project7 from './assets/pokep.png';
import projectDemo7 from '/pokepDemo.mp4';
import project8 from './assets/compiler.png';
import projectScreen8 from './assets/compiler.png';
import project9 from './assets/ksp.jpg';
import projectScreen9 from './assets/ksp.jpg';
import project10 from './assets/ibitak.png';
import projectDemo10 from '/ibitakDemo.mp4';
import project11 from './assets/arduino.png';
import projectDemo11 from '/arduinoDemo.mp4'  ;
import project12 from './assets/umrhf.png';
import projectDemo12 from '/umrhfDemo.mp4';
import project13 from './assets/carcollection.png';
import projectDemo13 from '/carcollectionDemo.mp4';
import project14 from './assets/wscape.png'
import projectDemo14 from '/wonderscape.mp4';



const projects = [
  {
    id: 1,
    title: 'Mein Portfolio',
    image: project1,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <h3>Diese Website stellt mein Portfolio dar und besteht aus 4 Teilen. es enthält meine Informationen, Zertifikate,
              Lebenslauf und meine Projekte "sowohl Einzelprojekte als auch Teamprojekte"</h3>
           <div >
            <p><u>| Persönliches Projekt |</u> </p>
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>React.js ,  CSS , html </span> </h3>
           </div> 
        </div>),

  },
  {
    id: 2,
    title: 'SmartSaveApp',
    image: project2,
    github: 'https://github.com/mansvell/SmartSaveApp.git',
    description: (
        <div>
           <p>SmartSaveApp ist eine AndroidApp ,die mit Bankkonto, Kreditkartenkonto oder Sparkonto verbunden ist und ermöglicht die Verwaltung von Sparzielen 
             durch ein Sparkonto.Der User kann auch seine Umsätze kategorisieren und verwalten, also nach der Registrierung</p>
            <p><u>Vorlesung</u>: Android-Praktikum  |  (TeamArbeit-3Pers)<u>Bewertung des Projekts</u>: 100</p>
            <p><u>Meine Rollen</u>: Implementierung der Logik: 50% , Implementierung der UI :35% , Erstellung Roomdatenbank:50%</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>KOTLIN, Jetpack Compose, Layout-XML, Roomdatabase, MySQL, Firebase, Git</span> </h3>
           </div>
           
        </div>),
    video: projectDemo2,
    screenshots: [ , ]
  },
  {
    id: 3,
    title: 'Qawale',
    image: project3,
    github: 'https://github.com/mansvell/Brettspiel-Qawale.git',
    description: (
        <div>
           <p>In diesem Projekt geht es um das neue Brettspiel Qawale, man kann gegen KI oder einen anderen Spieler spielen. 
            Es gibt auch unterschiedliche Spiellevel für KI. um zu gewinnen, muss man 4 Steine aneinanderreihen (horizontal/vertical/diagonal)</p>
            <p><u>Vorlesung</u>: Grundlage der Data Science  |  (TeamArbeit-3Pers)<u>Bewertung des Projekts</u>: 96</p>
            <p><u>Meine Rollen</u>: Implementirung der QawaleLogik: 30% , Implementierung der GUI: 100%, Trainieren der KI-Spieler: 50% </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>Python, pygame , KI  ,Git</span> </h3>
           </div>
           
        </div>),
    video: projectDemo3,
    screenshots: [ , ]
  },
  {
    id: 4,
    title: 'CarCollection',
    image: project13,
    github: 'https://github.com/mansvell/Car-Collection.git',
    description: (
        <div>
           <p>Ich habe diese App entwickelt für alle Personnen ,die eine Leidenschaft für Autos haben. Dort können Sie alle Informartionen Von unterschiedlichen
             und bekannten Automarken sehen und auch von beeindrcuckenden Autos. Vorschläge können User machen und like machen und ein Konto erstellen.
             Sie hat auch ein Administratzor Sektion</p>
             <p><u>| Persönliches Projekt |</u> </p>
            <p><u>Meine Rollen</u>: Backend + Frontend + Database</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>SpringBoot, Angular, Docker, Tailwind.CSS , SQLite, HTML, Git</span> </h3>
           </div>
           
        </div>),
    video: projectDemo13,
    screenshots: [ , ]
  },
  {
    id: 5,
    title: 'Wonderscape',
    image: project14,
    github: 'https://github.com/mansvell/Wonderscape.git',
    description: ( 
        <div>  
           <p>Wonderscape ist eine App, die wichtige Informationen über die Weltwunder, Landschaften, Monumente, bekannte Schlösser
             und viel mehr übermitteln. Dies hilft dem Nutzer dabei ,sich nicht nur gründlich sondern auch schneller zu kultivieren.
             Die Besonderheit bei dieser App ist ,dass sie 3 unterschiedlichen Sprachen (deutsch ,franzöisch, englisch) aufweist 
             und besitzt auch einen ChatBot . </p>
            <p><u>| Persönliches Projekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> Angular, OpenAI(Chatbot)</span> </h3>
           </div>
        </div>),
    video: projectDemo14,
    screenshots: [ , ]
  },
  {
    id: 6,
    title: 'MJ-Shop',
    image: project4,
    github: 'https://github.com/mansvell/Webanwendung-MJ-Shop.git',
    description: (
        <div>
           <p>Das Projekt besteht aus einer Datenbank, Frontend, Backend, Tests. In der App können Nutzer Account & Rezepte erstellen,
             Rezepte kommentieren & bewerten, in Favoritenliste und Einkaufsliste hinzufügen und löschen. </p>
             <p><u>Vorlesung</u>: Informatik-projekt | (TeamArbeit-2Pers)<u>Bewertung des Projekts</u>: 82</p>
            <p><u>Meine Rollen</u>: implementierung Frontend: 100%, implementierung BackEnd: 40%, Erstellung Datenbank:100% </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA , Vert.X, HTML5, CSS , Bootstrap, Handelbar, Javascript, Git, MySQL</span> </h3>
           </div>
           
        </div>),
    video: projectDemo4,
    screenshots: [ , ]
  },
  {
    id: 7,
    title: 'Mini Game Arena',
    image: project5,
    github: 'https://github.com/mansvell/MiniGameArena.git',
    description: (
        <div> 
           <p>Mini Game Arena ist ein Spielplattform ,das mehrere spannende Mini-Spiele enthält, wie: SteinPapierSchere , 
            Jagd , Memory card, Memory Color ,Reaction Time</p>
            <p><u>| Persönliches Projekt |</u> </p>
           <div>
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> HTML5,  Tailwind.css , Javascript </span> </h3>
           </div>
        </div>),
    video: projectDemo5,
    screenshots: [ , ]
  },
  
  {
    id: 8,
    title: 'Fruchtninja',
    image: project6,
    github: 'https://github.com/mansvell/Frucht-Ninja-Spiel.git',
    description: (
        <div>
           <p>Das Spiel basiert auf MVC-Struktur(Modell,View,Controller). Das Prinzip: frucht fliegen und fallen runter und der Spieler versucht,
            Bombs zu vermeiden, alle Früchte zu schneiden, bevor die runterfallen  </p>
            <p><u>Vorlesung</u>: Progrmamierung interaktive Systeme | (Einzelprojekt)<u>Bewertung des Projekts</u>: 75</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA, Processing </span> </h3>
           </div>
           
        </div>),
        video:projectDemo6,
    screenshots: [ ],
  },
  {
    id: 9,
    title: 'PokePong',
    image: project7,
    github: 'https://github.com/mansvell/Pokemon-Pong.git',
    description: (
        <div>
           <p>Javaspiel, in dem zwei Pokemons zusammen ping-pong spielen(Steuerung 1.Spieler:W,S 2.Spieler:Up,Down)</p>
           <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> JAVA, Processing </span></h3>
           </div>
           
        </div>),
    video: projectDemo7,
    screenshots: [ , ]
  },
  {
    id: 10,
    title: 'Compiler',
    image: project8,
    github: 'https://github.com/mansvell/Compilerbau.git',
    description: (
        <div>
           <p> In diesem Projekt habe ich einen Compiler für die kleine Programmiersprache "spl" gebaut.das Projekt besteht darin, 
               einen Compiler zu erstellen und in SPl-programmen zu testen. Zum Bestehen mindestens 60%. </p>
           <p><u>Vorlesung:</u> Compilerbau | (Einzelprojekt)<u>Bestanden mit</u> 90%</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA, Kotlin, CUP, SPL</span> </h3>
           </div>
           
        </div>),
    screenshots:[projectScreen8  ] ,
  },
  {
    id: 11,
    title: 'Ninja Virtuelle Maschine',
    image: project9,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <p>in diesem Projekt habe ich eine Ninja virtuelle Maschine gebaut. Zum Bestehen mindestens 15. </p>
           <p><u>Vorlesung:</u> Konzepte Systemnaher Programmierung | (Einzelprojekt)<u>Bestanden mit</u> 18/27 </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>C# , Git</span> </h3>
           </div>
           
        </div>),
    screenshots:[ projectScreen9 ] ,
  },
  {
    id: 12,
    title: 'Ibitak Collision',
    image: project10,
    github: 'https://github.com/mansvell/Ibitak-Kollision.git',
    description: (
        <div>
           <p>Ibitak ist ein Pokemon(Vögel). In diesem kleinen Projekt sind die Behandlung von MVC-Struktur und Kollisionen sehr wichtig, viele Ibitak fliegen und
               wenn ein Ibitak den Kopf eines anderen berührt ,verschwindet dieser berührte Ibitak direkt. </p>
            <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> JAVA, processing</span> </h3>
           </div>
           
        </div>),
    video: projectDemo10,
    screenshots: [ , ]
  },
  {
    id: 13,
    title: 'LED Steuerung',
    image: project11,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <p>in diesem kleinen Projekt implementiere ich die Steuerung von LED(licht). </p>
            <p><u>Vorlesung:</u> Technische Informatik 2 | (Einzelprojekt) </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> C , Arduino ESP32</span> </h3>
           </div>
           
        </div>),
    video: projectDemo11,
    screenshots: [ , ]
  },
  
  {
    id: 14,
    title: 'Umrechnungshilfe',
    image: project12,
    github: 'https://github.com/mansvell/Umrechnungshilfe.git',
    description: (
        <div>
           <p>Das ist eine Android Anwendung ,die dem Nutzer ermöglicht ,Umrechnungen von Distanz, Temperatur, Datenkapazität vorzunehmen</p>
           <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>KOTLIN </span> </h3>
           </div>
           
        </div>),
    video: projectDemo12,
    screenshots: [ , ]
  },

];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const { language } = useApp();
  const t = translations[language];

  const closeProject = () => setActiveProject(null);

  useEffect(() => {
    if (activeProject === null) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") closeProject();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f7f7f5] text-neutral-950 transition-colors duration-500 dark:bg-[#0b0b0b] dark:text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent dark:from-red-700/25 dark:via-red-900/10 dark:to-transparent" />

      <Navi />

      <main className="relative mt-12  z-10 flex-1">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-600">{t.portfolio.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t.portfolio.title}</h1>
            <div className="mt-5 h-[2px] w-12 bg-red-600" />
            <p className="mt-6 text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">{t.portfolio.description}</p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">

            {projects.map((project, index) => (
              <article key={`${project.id}-${index}`} className="group overflow-hidden rounded-2xl border  bg-white transition-all duration-300 hover:-translate-y-1  hover:shadow-xl  dark:bg-neutral-900 dark:hover:border-red-900">

                <button onClick={() => setActiveProject(index)} className="block w-full text-left  bg-red-200 dark:bg-red-500/25">

                  <div className="relative aspect-[16/10] overflow-hidden"> {/*aspect donne la meme taille a toutes les images*/}
                    <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {project.video && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">{t.portfolio.demo}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 p-2">
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-semibold">{project.title}</h2>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border  text-lg text-neutral-500 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white dark:border-neutral-700 dark:text-neutral-300">↗</span>
                  </div>
                </button>

              </article>
            ))}
          </div>

        </section>
      </main>

    

      {/*Modal du projet */}
      {activeProject !== null && (
        <ProjectModal project={projects[activeProject]} index={activeProject} total={projects.length} onClose={closeProject} t={t} />
      )}

    </div>
  );
}

function ProjectModal({ project, index, total, onClose, t }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>

      <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#f7f7f5] shadow-2xl dark:bg-neutral-950" onClick={(event) => event.stopPropagation()}>

        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800 sm:px-6">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">{t.portfolio.project} {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
            <h2 className="truncate text-lg font-semibold sm:text-xl">{project.title}</h2>
          </div>

          <button onClick={onClose} className="flex h-10 min-w-[52px] shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold tracking-wider text-neutral-900 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600" aria-label={t.portfolio.close}>X</button>
        </div>

      
        <div className="min-h-0 flex-1 overflow-y-auto">

          <div className="p-5 sm:p-7">

            <div className="project-description space-y-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              {project.description}
            </div>

            {project.video && (
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-red-600" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{t.portfolio.videoDemo}</h3>
                </div>

                <div className="overflow-hidden rounded-xl bg-black">
                  <video controls preload="metadata" className="max-h-[520px] w-full bg-black object-contain">
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}

            {project.screenshots?.filter(Boolean).length > 0 && (
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-red-600" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{t.portfolio.screenshots}</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.filter(Boolean).map((img, screenshotIndex) => (
                    <a key={screenshotIndex} href={img} target="_blank" rel="noreferrer" className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                      <img src={img} alt={`${project.title} Screenshot ${screenshotIndex + 1}`} className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]" />
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-col gap-3 border-t border-neutral-200 bg-white px-5 py-4 dark:border-neutral-800 dark:bg-neutral-950 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-xs text-neutral-400">{t.portfolio.sourceInfo}</p>

          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700">
            GitHub
            <span>↗</span>
          </a>
        </div>

      </div>
    </div>
  );
}

