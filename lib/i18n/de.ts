// German copy. Same facts as en.ts. Formal "Sie" throughout.

import type { Dictionary } from "./en";

export const de: Dictionary = {
  meta: {
    title: "Muhammad Ismail – Frontend-Entwickler (React, Next.js, React Native)",
    description:
      "Frontend-Entwickler mit über 5 Jahren Berufserfahrung in der Entwicklung von Web- und Mobile-Produkten mit React, Next.js und React Native, inklusive API- und KI-Integration. Wohnhaft in Lahore, Pakistan, und bereit für einen Umzug nach Deutschland oder Italien.",
    jobTitle: "Frontend-Entwickler",
  },

  skipLink: "Zum Inhalt springen",

  nav: {
    label: "Hauptnavigation",
    home: "heyIsmail, Startseite",
    work: "Projekte",
    stack: "Stack",
    about: "Über mich",
    contact: "Kontakt",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    languageLabel: "Sprache",
  },

  hero: {
    eyebrow: "Muhammad Ismail · Frontend-Entwickler",
    headline: "Ich entwickle Web- und Mobile-Frontends mit React, Next.js und React Native – inklusive API- und KI-Integration.",
    body: "Über 5 Jahre Berufserfahrung mit Produkten aus EdTech, Immobilien, B2B-SaaS und KI. Derzeit arbeite ich als React-Entwickler bei ARVO. Mobile-Apps, an denen ich mitgearbeitet habe, kommen zusammen auf über 1 Million Downloads bei Google Play.",
    location: "Wohnhaft in Lahore, Pakistan · Bereit für einen Umzug nach Deutschland oder Italien",
    ctaPrimary: "Kontakt aufnehmen",
    ctaSecondary: "Ausgewählte Projekte",
  },

  facts: {
    label: "Auf einen Blick",
    items: [
      { value: "5+ Jahre", label: "Berufserfahrung in der Softwareentwicklung" },
      { value: "1 Mio.+", label: "Google-Play-Downloads der Mobile-Apps, an denen ich mitgearbeitet habe" },
      { value: "React · React Native", label: "Web- und Mobile-Frontends" },
      { value: "UTC+5", label: "3–4 Stunden vor Berlin und Rom" },
    ],
  },

  work: {
    eyebrow: "Ausgewählte Projekte",
    heading: "Produkte im Live-Betrieb – und mein Beitrag dazu.",
    subheading:
      "Alle diese Produkte sind im Team entstanden. Jeder Eintrag trennt, was das Produkt ist, von dem Teil, an dem ich gearbeitet habe.",
    labelProduct: "Das Produkt",
    labelContribution: "Meine Arbeit",
    labelStack: "Stack",
    opensInNewTab: "öffnet in neuem Tab",
    items: [
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web und Mobile",
        role: "React Developer",
        status: "Aktuelle Position",
        url: "https://arvo.com.pk",
        product:
          "Eine pakistanische Bildungsplattform, die gedruckte Schulbücher mit einem Learning-Management-System und Tools für die Schulverwaltung verbindet. ARVO nennt über 100 Partnerstandorte.",
        contribution:
          "Frontend-Arbeit im Team, das die Webplattform entwickelt: rollenbasierte Dashboards für Schüler, Lehrkräfte, Schulverwaltung und Eltern, digitale Schulbücher, Aufgabenverwaltung und Echtzeit-Benachrichtigungen, angebunden an die APIs der Plattform.",
        stack: ["React", "Next.js"],
      },
      {
        id: "graana",
        name: "Graana",
        category: "Immobilien · Mobile",
        role: "Mobile Application Developer",
        url: "https://www.graana.com",
        product:
          "Ein Immobilienmarktplatz für Pakistan mit Angeboten im Web und in mobilen Apps. Die Android-App hat über 1 Million Downloads bei Google Play.",
        contribution:
          "Frontend-Arbeit an der React-Native-App im Entwicklungsteam, darunter die Migration der Codebasis von Klassenkomponenten zu Funktionskomponenten mit Hooks und die Anbindung der App an die Backend-APIs.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "B2B-SaaS · Web",
        role: "Frontend Developer",
        url: "https://www.supervise.work",
        product:
          "Ein Produktivitäts-Tracker von Supervise LTD, der Teamaktivitäten aus Tools wie GitHub, Figma und Google Docs in einem Dashboard für Führungskräfte zusammenführt.",
        contribution:
          "Frontend des Aktivitäts-Dashboards mit Auswertungen pro Person und automatisierten Berichten, inklusive der API-Integration für die Daten aus GitHub, Figma und Google Docs.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "KI · Web",
        role: "Frontend Developer",
        url: "https://www.whatever-ai.com",
        product:
          "Ein KI-Tool von Atlas Apps (UK) zum Erstellen und Bearbeiten von Bildern, Entfernen von Hintergründen und Komponieren von Musik.",
        contribution:
          "Frontend der Plattform: die Oberflächen der KI-Tools, die API- und KI-Integration dahinter und der Upgrade-Ablauf vom kostenlosen zum bezahlten Angebot.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    heading: "Womit ich täglich arbeite.",
    groups: [
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integration", items: ["REST APIs", "OpenAI API", "Stripe", "OAuth"] },
      { name: "Tools", items: ["Git", "GitHub", "Jira", "Postman", "Figma", "Vercel"] },
      { name: "Backend (Grundkenntnisse)", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    ],
  },

  about: {
    eyebrow: "Über mich",
    heading: "Seit 2018 entwickle ich Software. Den Code schreibe ich immer noch selbst.",
    photoAlt: "Porträt von Muhammad Ismail",
    paragraphs: [
      "Ich bin Muhammad Ismail, Frontend-Entwickler aus Lahore, Pakistan. 2018 habe ich angefangen, eigenständig Software zu entwickeln, und seit 2020 arbeite ich beruflich als Entwickler – überwiegend mit React, Next.js und React Native.",
      "Derzeit bin ich React-Entwickler bei ARVO. Davor habe ich bei CodeNinja und als freiberuflicher Entwickler gearbeitet. In diesen Rollen habe ich an einer Immobilien-App, B2B-SaaS, KI-Produkten und einer EdTech-Plattform mitgewirkt.",
      "Ich suche eine Festanstellung als Frontend-Entwickler bei einem Unternehmen in Deutschland oder Italien, zu dem ich umziehen kann.",
    ],
    principlesHeading: "Wie ich arbeite",
    principles: [
      {
        title: "API- und KI-Integration",
        body: "Bei jedem dieser Produkte habe ich Frontends mit React und React Native an REST-APIs, Drittanbieterdienste und KI-Funktionen angebunden.",
      },
      {
        title: "Arbeit im Team",
        body: "Jedes Produkt auf dieser Seite ist im Team entstanden. Ich bin es gewohnt, gemeinsam mit anderen Entwicklern in einer geteilten Codebasis zu arbeiten.",
      },
      {
        title: "Remote als Normalfall",
        body: "Ich arbeite schriftlich und über Zeitzonen hinweg mit Menschen außerhalb Pakistans zusammen, unter anderem mit einem Gründer in Mailand.",
      },
    ],
    testimonial: {
      quote:
        "Ismail delivered exactly what we needed; clean, fast, production-ready code with no back-and-forth. He understood the brief immediately and shipped work that genuinely elevated how our agency presents itself online. Rare to find an engineer who thinks about the product, not just the task.",
      author: "Pietro Gadaleta",
      role: "Gründer, Agenzia Grafica Milano",
      url: "https://www.agenziagraficamilano.it",
    },
  },

  contact: {
    eyebrow: "Kontakt",
    heading: "Lassen Sie uns sprechen.",
    subheading:
      "Am schnellsten erreichen Sie mich per E-Mail. Ich beantworte jede Nachricht selbst, meist innerhalb eines Tages.",
    emailCta: "E-Mail schreiben",
    linkedin: "LinkedIn",
    github: "GitHub",
    bookCall: "15-minütiges Gespräch buchen",
    detailsHeading: "Für Recruiter",
    details: [
      { term: "Standort", value: "Lahore, Pakistan (PKT, UTC+5)" },
      { term: "Gesucht", value: "Festanstellung im Frontend (React, Next.js, React Native)" },
      { term: "Länder", value: "Deutschland oder Italien, mit Umzug" },
      { term: "Arbeitserlaubnis", value: "Ich benötige ein Arbeitsvisum, z. B. die Blaue Karte EU. Bis zur Erteilung kann ich remote starten." },
      { term: "Sprachen", value: "Englisch (Arbeitssprache) · Deutsch A1–A2, lerne ich gerade" },
    ],
  },

  footer: {
    tagline: "Wohnhaft in Lahore, Pakistan · Bereit für einen Umzug nach Deutschland oder Italien",
    languagesLabel: "Diese Website in anderen Sprachen",
  },

  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese Seite existiert nicht oder wurde verschoben.",
    cta: "Zur Startseite",
  },
};
