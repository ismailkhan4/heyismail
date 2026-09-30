// Italian copy. Same facts as en.ts.

import type { Dictionary } from "./en";

export const it: Dictionary = {
  meta: {
    title: "Muhammad Ismail – Sviluppatore front-end (React, Next.js, React Native)",
    description:
      "Sviluppatore front-end con oltre 5 anni di esperienza professionale nella realizzazione di prodotti web e mobile con React, Next.js e React Native, inclusa l'integrazione di API e AI. Vivo a Lahore, in Pakistan, e sono disponibile a trasferirmi in Germania o in Italia.",
    jobTitle: "Sviluppatore front-end",
  },

  skipLink: "Vai al contenuto",

  nav: {
    label: "Navigazione principale",
    home: "heyIsmail, home",
    work: "Progetti",
    stack: "Stack",
    about: "Chi sono",
    contact: "Contatti",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
    languageLabel: "Lingua",
  },

  hero: {
    eyebrow: "Muhammad Ismail · Sviluppatore front-end",
    headline: "Sviluppo front end web e mobile con React, Next.js e React Native, inclusa l'integrazione di API e AI.",
    body: "Oltre 5 anni di esperienza professionale su prodotti per EdTech, immobiliare, SaaS B2B e AI. Oggi lavoro come sviluppatore React in ARVO, e le app mobile a cui ho lavorato superano complessivamente 1 milione di download su Google Play.",
    location: "Vivo a Lahore, in Pakistan · Disponibile a trasferirmi in Germania o in Italia",
    ctaPrimary: "Contattami",
    ctaSecondary: "Guarda i progetti",
  },

  facts: {
    label: "In breve",
    items: [
      { value: "5+ anni", label: "Di esperienza professionale nello sviluppo software" },
      { value: "1M+", label: "Download su Google Play delle app mobile a cui ho lavorato" },
      { value: "React · React Native", label: "Front end web e mobile" },
      { value: "UTC+5", label: "3–4 ore avanti rispetto a Berlino e Roma" },
    ],
  },

  work: {
    eyebrow: "Progetti selezionati",
    heading: "Prodotti in produzione, e il mio contributo.",
    subheading:
      "Sono tutti prodotti realizzati in team. Per ogni progetto distinguo che cos'è il prodotto dalla parte a cui ho lavorato io.",
    labelProduct: "Il prodotto",
    labelContribution: "Il mio lavoro",
    labelStack: "Stack",
    opensInNewTab: "si apre in una nuova scheda",
    items: [
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web e mobile",
        role: "React Developer",
        status: "Ruolo attuale",
        url: "https://arvo.com.pk",
        product:
          "Una piattaforma educativa pakistana che affianca libri di testo stampati a un learning management system e a strumenti per la gestione scolastica. ARVO dichiara oltre 100 sedi partner.",
        contribution:
          "Lavoro sul front end nel team che sviluppa la piattaforma web: dashboard basate sui ruoli per studenti, docenti, amministrazione scolastica e genitori, libri di testo digitali, gestione dei compiti e notifiche in tempo reale, collegati alle API della piattaforma.",
        stack: ["React", "Next.js"],
      },
      {
        id: "graana",
        name: "Graana",
        category: "Immobiliare · Mobile",
        role: "Mobile Application Developer",
        url: "https://www.graana.com",
        product:
          "Un marketplace immobiliare per il Pakistan con annunci sul web e nelle app mobile. L'app Android supera 1 milione di download su Google Play.",
        contribution:
          "Lavoro sul front end dell'app React Native nel team di sviluppo, inclusa la migrazione del codice dai componenti a classe ai componenti funzionali con gli Hooks e l'integrazione dell'app con le API di back end.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "SaaS B2B · Web",
        role: "Frontend Developer",
        url: "https://www.supervise.work",
        product:
          "Un tracker di produttività di Supervise LTD che riunisce in un'unica dashboard per i manager l'attività del team su strumenti come GitHub, Figma e Google Docs.",
        contribution:
          "Front end della dashboard delle attività con il dettaglio per persona e i report automatici, inclusa l'integrazione delle API per i dati di GitHub, Figma e Google Docs.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "AI · Web",
        role: "Frontend Developer",
        url: "https://www.whatever-ai.com",
        product:
          "Uno strumento AI di Atlas Apps (Regno Unito) per generare e modificare immagini, rimuovere gli sfondi e creare musica.",
        contribution:
          "Front end della piattaforma: le interfacce degli strumenti AI, l'integrazione di API e AI che le alimenta e il percorso di upgrade dal piano gratuito a quello a pagamento.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    heading: "Gli strumenti che uso ogni giorno.",
    groups: [
      { name: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integrazione", items: ["REST APIs", "OpenAI API", "Stripe", "OAuth"] },
      { name: "Strumenti", items: ["Git", "GitHub", "Jira", "Postman", "Figma", "Vercel"] },
      { name: "Back end (conoscenze di base)", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    ],
  },

  about: {
    eyebrow: "Chi sono",
    heading: "Sviluppo software dal 2018. E il codice lo scrivo ancora io.",
    photoAlt: "Ritratto di Muhammad Ismail",
    paragraphs: [
      "Sono Muhammad Ismail, sviluppatore front-end e vivo a Lahore, in Pakistan. Ho iniziato a sviluppare software da autodidatta nel 2018 e lavoro nel settore dal 2020, soprattutto con React, Next.js e React Native.",
      "Oggi sono sviluppatore React in ARVO. In precedenza ho lavorato in CodeNinja e come sviluppatore freelance. In questi ruoli ho lavorato su un'app immobiliare, prodotti SaaS B2B, prodotti AI e una piattaforma EdTech.",
      "Cerco un ruolo a tempo pieno come sviluppatore front-end in un'azienda in Germania o in Italia dove potermi trasferire.",
    ],
    principlesHeading: "Come lavoro",
    principles: [
      {
        title: "Integrazione di API e AI",
        body: "In ognuno di questi prodotti ho collegato front end in React e React Native ad API REST, servizi di terze parti e funzionalità AI.",
      },
      {
        title: "Lavoro in team",
        body: "Ogni prodotto in questa pagina è stato realizzato in team. Sono abituato a lavorare su una codebase condivisa insieme ad altri sviluppatori.",
      },
      {
        title: "Il remoto come normalità",
        body: "Lavoro per iscritto e su fusi orari diversi con persone fuori dal Pakistan, tra cui un founder di Milano.",
      },
    ],
    testimonial: {
      quote:
        "Ismail delivered exactly what we needed; clean, fast, production-ready code with no back-and-forth. He understood the brief immediately and shipped work that genuinely elevated how our agency presents itself online. Rare to find an engineer who thinks about the product, not just the task.",
      author: "Pietro Gadaleta",
      role: "Founder, Agenzia Grafica Milano",
      url: "https://www.agenziagraficamilano.it",
    },
  },

  contact: {
    eyebrow: "Contatti",
    heading: "Parliamone.",
    subheading:
      "Il modo più rapido per raggiungermi è l'email. Rispondo personalmente a ogni messaggio, di solito entro un giorno.",
    emailCta: "Scrivimi",
    linkedin: "LinkedIn",
    github: "GitHub",
    bookCall: "Prenota una call di 15 minuti",
    detailsHeading: "Per recruiter",
    details: [
      { term: "Dove mi trovo", value: "Lahore, Pakistan (PKT, UTC+5)" },
      { term: "Cosa cerco", value: "Ruoli a tempo pieno nel front end (React, Next.js, React Native)" },
      { term: "Paesi", value: "Germania o Italia, con trasferimento" },
      { term: "Permesso di lavoro", value: "Mi servirà un visto di lavoro, ad esempio la Carta Blu UE. Posso iniziare da remoto mentre la pratica è in corso." },
      { term: "Lingue", value: "Inglese (lingua di lavoro) · Tedesco A1–A2, in fase di studio" },
    ],
  },

  footer: {
    tagline: "Vivo a Lahore, in Pakistan · Disponibile a trasferirmi in Germania o in Italia",
    languagesLabel: "Questo sito in altre lingue",
  },

  notFound: {
    title: "Pagina non trovata",
    body: "Questa pagina non esiste o è stata spostata.",
    cta: "Torna alla home",
  },
};
