// German copy. Same facts as en.ts. Formal "Sie" throughout.

import type { Dictionary } from "./en";

export const de: Dictionary = {
  meta: {
    title: "Muhammad Ismail – Frontend-Entwickler (React, Next.js, React Native)",
    description:
      "Frontend-Entwickler mit über 5 Jahren Berufserfahrung mit Web- und Mobile-Produkten auf Basis von React, Next.js und React Native. Wohnhaft in Lahore, Pakistan, und bereit für einen Umzug nach Deutschland oder Italien.",
    jobTitle: "Frontend-Entwickler",
  },

  skipLink: "Zum Inhalt springen",

  nav: {
    label: "Hauptnavigation",
    home: "heyIsmail, Startseite",
    work: "Projekte",
    skills: "Kenntnisse",
    about: "Über mich",
    contact: "Kontakt",
    languageLabel: "Sprache",
  },

  hero: {
    role: "Frontend-Entwickler mit Schwerpunkt React, Next.js und React Native.",
    summary:
      "Über 5 Jahre Berufserfahrung mit Produkten aus EdTech, Immobilien, B2B-SaaS und KI, inklusive API- und KI-Integration. Derzeit bin ich React-Entwickler bei ARVO; davor habe ich an der React-Native-App von Graana mitgearbeitet, die bei Google Play über 1 Million Downloads hat.",
    photoAlt: "Porträt von Muhammad Ismail",
    factsLabel: "Auf einen Blick",
    facts: [
      { term: "Standort", value: "Lahore, Pakistan · UTC+5" },
      { term: "Gesucht", value: "Festanstellung im Frontend in Deutschland oder Italien, mit Umzug" },
      { term: "Arbeitserlaubnis", value: "Ich benötige ein Arbeitsvisum, z. B. die Blaue Karte EU" },
    ],
    ctaPrimary: "Kontakt aufnehmen",
    ctaSecondary: "Projekte ansehen",
  },

  building: {
    heading: "Aktuelles Projekt",
    label: "In Recherche und Konzeption · seit September 2026",
    name: "Barrierefrei Studio",
    nameNote: "Arbeitstitel",
    summary:
      "Ein Arbeitsbereich zur Behebung von Barrierefreiheitsmängeln für kleine Webagenturen und E-Commerce-Teams in Deutschland, Österreich und der Schweiz.",
    body:
      "Ziel ist, die Lücke zwischen dem Finden eines WCAG-Fehlers und seiner Behebung zu schließen: Seiten in einem echten Browser prüfen, jeden Fehler auf Deutsch oder Englisch erklären, einen Code-Fix entwerfen und die Prüfung erneut ausführen, damit der Fix bestätigt ist, bevor sich jemand darauf verlässt. Die Erkennung bleibt deterministisch; KI hilft nur beim Erklären und Beheben.",
    progressLabel: "Fortschritt",
    progress: [
      { status: "done", text: "Recherche, MVP-Umfang und Architekturplan" },
      { status: "next", text: "Scan-Kern: Worker mit Playwright und axe-core, Fortschritt live in der Oberfläche" },
    ],
    stackLabel: "Geplanter Stack",
    stack: ["Next.js", "TypeScript", "Playwright", "axe-core"],
    cta: "Zur Fallstudie",
  },

  status: {
    done: "Erledigt",
    next: "Als Nächstes",
    planned: "Geplant",
  },

  work: {
    heading: "Ausgewählte Projekte",
    subheading:
      "Produkte, an denen ich gearbeitet habe, und mein Anteil daran. ARVO und Graana sind im Team entstanden; die freiberuflichen Projekte waren Kundenaufträge.",
    labelProduct: "Das Produkt",
    labelContribution: "Meine Arbeit",
    labelStack: "Stack",
    opensInNewTab: "öffnet in neuem Tab",
    items: [
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web",
        role: "React Developer",
        engagement: "ARVO · aktuelle Position",
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
        engagement: "CodeNinja",
        url: "https://www.graana.com",
        product:
          "Ein Immobilienmarktplatz für Pakistan mit Angeboten im Web und in mobilen Apps. Die Android-App hat über 1 Million Downloads bei Google Play.",
        contribution:
          "Frontend-Arbeit an der React-Native-App im Entwicklungsteam, darunter die Migration der Codebasis von Klassenkomponenten zu Funktionskomponenten mit Hooks und die Anbindung der App an die Backend-APIs.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "KI · Web",
        role: "Frontend Developer",
        engagement: "Freiberuflich",
        url: "https://www.whatever-ai.com",
        product:
          "Ein KI-Tool von Atlas Apps (UK) zum Erstellen und Bearbeiten von Bildern, Entfernen von Hintergründen und Komponieren von Musik.",
        contribution:
          "Frontend der Plattform: die Oberflächen der KI-Tools, die API- und KI-Integration dahinter und der Upgrade-Ablauf vom kostenlosen zum bezahlten Angebot.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "B2B-SaaS · Web",
        role: "Frontend Developer",
        engagement: "Freiberuflich",
        url: "https://www.supervise.work",
        product:
          "Ein Produktivitäts-Tracker von Supervise LTD, der Teamaktivitäten aus Tools wie GitHub, Figma und Google Docs in einem Dashboard für Führungskräfte zusammenführt.",
        contribution:
          "Frontend des Aktivitäts-Dashboards mit Auswertungen pro Person und automatisierten Berichten, inklusive der API-Integration für die Daten aus GitHub, Figma und Google Docs.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "vectum",
        name: "Vectum",
        category: "Logistik · Website",
        role: "Frontend Developer",
        engagement: "Freiberuflich · 2026",
        url: "https://vectum-site.vercel.app",
        product: "Die Website von VECTUM, einem italienischen Logistikunternehmen für Luftfracht, zeitkritische Sendungen sowie Straßen- und Seefracht.",
        contribution:
          "Die Website habe ich allein umgesetzt: italienische, englische und spanische Version mit eigenen Metadaten, eine animierte Frachtreise auf der Startseite, die sich bei reduzierter Bewegung abschaltet, ein per Tastatur bedienbares Menü und eine Erklärung zur Barrierefreiheit.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
      },
    ],
  },

  skills: {
    heading: "Kenntnisse",
    groups: [
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML und CSS", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integration", items: ["REST APIs", "OAuth", "OpenAI API", "Stripe"] },
      { name: "Tools", items: ["Git", "GitHub", "Jira", "Figma", "Postman", "Vercel"] },
      { name: "Grundkenntnisse", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
      { name: "Lerne ich gerade", items: ["Barrierefreiheit im Web (WCAG 2.2)", "Playwright", "axe-core"] },
    ],
  },

  about: {
    heading: "Über mich",
    paragraphs: [
      "Ich bin Frontend-Entwickler aus Lahore, Pakistan. 2018 habe ich angefangen, eigenständig Software zu entwickeln, und seit 2020 arbeite ich beruflich als Entwickler – überwiegend mit React, Next.js und React Native.",
      "Derzeit bin ich React-Entwickler bei ARVO. Davor war ich bei CodeNinja, wo ich an der Mobile-App von Graana gearbeitet habe, und ich war freiberuflich für Kunden in Großbritannien und Italien tätig.",
      "Barrierefreiheit ist der Teil der Frontend-Arbeit, in den ich mich gerade vertiefe – Barrierefrei Studio ist mein Weg dorthin. Ich suche eine Festanstellung im Frontend in Deutschland oder Italien, für die ich umziehen kann.",
    ],
    principlesHeading: "Wie ich arbeite",
    principles: [
      {
        title: "Frontends mit echten Systemen dahinter",
        body: "Bei jedem dieser Produkte habe ich die Oberfläche an APIs, Drittanbieterdienste oder KI angebunden: Daten aus GitHub, Figma und Google Docs bei Supervise, OpenAI und Stripe bei Whatever AI.",
      },
      {
        title: "Überwiegend im Team",
        body: "Den Großteil meiner Arbeit habe ich gemeinsam mit anderen Entwicklern in einer geteilten Codebasis geleistet, geplant in Jira-Sprints.",
      },
      {
        title: "Remote und schriftlich",
        body: "Ich arbeite über Zeitzonen hinweg mit Kunden und Teams außerhalb Pakistans zusammen, unter anderem in Großbritannien und Italien.",
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
    heading: "Kontakt",
    subheading: "Am schnellsten erreichen Sie mich per E-Mail. Ich antworte in der Regel innerhalb eines Tages.",
    emailCta: "E-Mail schreiben",
    copyEmail: "E-Mail-Adresse kopieren",
    copied: "E-Mail-Adresse kopiert",
    linkedin: "LinkedIn",
    github: "GitHub",
    bookCall: "15-minütiges Gespräch buchen",
    detailsHeading: "Für Recruiter",
    details: [
      { term: "Standort", value: "Lahore, Pakistan (PKT, UTC+5), 3–4 Stunden vor Berlin und Rom" },
      { term: "Gesucht", value: "Festanstellung im Frontend: React, Next.js, React Native" },
      { term: "Länder", value: "Deutschland oder Italien, mit Umzug" },
      {
        term: "Deutschland",
        value:
          "Ich benötige ein Arbeitsvisum, z. B. die Blaue Karte EU. Für erfahrene IT-Fachkräfte verlangt Deutschland keinen anerkannten Abschluss. Vom Arbeitgeber werden ein Jobangebot und die ausgefüllte „Erklärung zum Beschäftigungsverhältnis“ benötigt.",
      },
      {
        term: "Italien",
        value: "Die Blaue Karte EU, die nicht unter die Quoten des Decreto Flussi fällt. Der Arbeitgeber beantragt das Nulla Osta.",
      },
      { term: "Start", value: "Bis zur Erteilung des Visums kann ich remote starten." },
      { term: "Sprachen", value: "Englisch (Arbeitssprache) · Deutsch A1–A2, lerne ich gerade" },
    ],
    visaSource: "Visa-Regeln: Make it in Germany",
  },

  footer: {
    tagline: "Frontend-Entwickler · Lahore, Pakistan · Bereit für einen Umzug nach Deutschland oder Italien",
    languagesLabel: "Diese Website in anderen Sprachen",
  },

  notFound: {
    title: "Seite nicht gefunden",
    body: "Diese Seite existiert nicht oder wurde verschoben.",
    cta: "Zur Startseite",
  },

  caseStudy: {
    meta: {
      title: "Barrierefrei Studio: Barrierefreiheits-Tool im Aufbau – Muhammad Ismail",
      description:
        "Fallstudie eines Produkts in Recherche und Konzeption: WCAG-Prüfung im echten Browser mit Playwright und axe-core, KI-Vorschläge für Fixes, die vor der Freigabe erneut geprüft werden – für Webagenturen im DACH-Raum.",
    },
    back: "Alle Projekte",
    label: "Aktuelles Projekt",
    subtitle:
      "Ein Arbeitsbereich zur Behebung von Barrierefreiheitsmängeln für kleine Webagenturen und E-Commerce-Teams in Deutschland, Österreich und der Schweiz. Das Projekt ist in Recherche und Konzeption; diese Seite trennt, was erledigt ist, von dem, was geplant ist.",
    factsLabel: "Projektdaten",
    facts: [
      { term: "Phase", value: "Recherche und Konzeption. Noch kein Code." },
      { term: "Beginn", value: "September 2026" },
      { term: "Rolle", value: "Soloprojekt" },
      { term: "Geplanter Stack", value: "Next.js, React, TypeScript, Playwright, axe-core" },
    ],
    tocLabel: "Auf dieser Seite",

    overview: {
      heading: "Überblick",
      body: [
        "Barrierefrei Studio (Arbeitstitel) ist ein Tool zur Behebung von Barrierefreiheitsmängeln, das ich gerade konzipiere. Es prüft die Seiten einer Website in einem echten Browser, erklärt jeden WCAG-Fehler verständlich auf Deutsch oder Englisch, entwirft einen Fix auf Code-Ebene und führt die Prüfung erneut aus, um diesen Fix zu bestätigen.",
        "Außerdem leitet es durch die manuellen Prüfungen, die sich nicht automatisieren lassen, und hält die Nachweise fest, die Kunden verlangen: Verlauf der Mängel, Berichte und den Entwurf einer Erklärung zur Barrierefreiheit.",
      ],
    },
    problem: {
      heading: "Problem",
      body: [
        "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz (BFSG) für viele Onlineshops und Dienstleistungen für Verbraucher. Agenturen, die solche Websites bauen und betreuen, hören von ihren Kunden jetzt dieselbe Frage: Sind wir barrierefrei, und was müssen wir beheben?",
        "Die vorhandenen Tools passen nicht gut zu dieser Aufgabe. Kostenlose Scanner listen Fehler auf, überlassen die Behebung aber den Entwicklern. Enterprise-Suiten sind für große Unternehmen bepreist. Overlay-Widgets versprechen automatische Konformität; 2025 verpflichtete die US-Handelsbehörde FTC den Overlay-Anbieter accessiBe wegen irreführender Aussagen zur Zahlung von 1 Million US-Dollar. Und automatische Regeln erfassen nur einen Teil des Problems: Tastaturbedienung, Fokusreihenfolge und ob ein Alternativtext aussagekräftig ist, muss weiterhin ein Mensch prüfen.",
      ],
    },
    users: {
      heading: "Für wen",
      items: [
        {
          title: "Kleine Webagenturen",
          body: "Etwa 5 bis 50 Personen im DACH-Raum, die Shopify-, Shopware-, WordPress- oder Headless-Shops für viele Kunden bauen und betreuen. Sie müssen viele Websites prüfen, Entwicklern konkrete Fixes übergeben und Kunden einen verständlichen Bericht liefern.",
        },
        {
          title: "Interne E-Commerce-Teams",
          body: "Mittelständische Händler mit einem großen Shop und einem Entwicklungsteam von ein bis fünf Personen.",
        },
        {
          title: "Nicht für",
          body: "Alle, die ein Konformitätssiegel per Klick suchen. Das Produkt hilft Teams, Mängel zu finden und zu beheben; es zertifiziert nichts.",
        },
      ],
    },
    why: {
      heading: "Warum ich es baue",
      body: [
        "Semantisches HTML, ARIA, Fokusmanagement und Kontraste sind per Definition Frontend-Themen, und genau hier möchte ich mich vertiefen. Ein Tool, das diese Fehler erkennen muss und dessen eigene Oberfläche sie selbst vermeiden muss, ist für mich der direkteste Weg, das gründlich zu lernen.",
        "Außerdem ist es ein Problem, das Teams in Deutschland gerade jetzt haben, mit einem Gesetz im Hintergrund. So gibt es ein echtes Publikum, an dem sich das Produkt messen lässt, nicht nur eine Demo.",
      ],
    },
    status: {
      heading: "Aktueller Stand",
      intro: "Stand September 2026:",
      items: [
        { status: "done", text: "Markt- und Nutzerrecherche: das Problem, die Zielkunden, bestehende Tools und ihre Preise." },
        {
          status: "done",
          text: "MVP-Umfang: Websites und Seitenlisten, Prüfungen im echten Browser, Live-Fortschritt, ein Issue-Explorer, Detailansicht mit KI-Erklärung und erneut geprüftem Fix, Anleitung für manuelle Prüfungen, Workflow für Mängel und ein Kundenbericht.",
        },
        { status: "done", text: "Architekturplan und die Entscheidungen weiter unten, inklusive der Frage, wo KI eingesetzt werden darf und wo nicht." },
        { status: "next", text: "Grundlagen: Repository, CI mit Typprüfung, Tests und Barrierefreiheitsprüfungen, Design-Tokens." },
        { status: "next", text: "Scan-Kern: ein Worker, der Seiten mit Playwright öffnet und axe-core ausführt, mit Fortschritt live in der Oberfläche." },
        { status: "planned", text: "KI-Erklärungen, erneut geprüfte Fix-Vorschläge, manuelle Prüfungen und Kundenberichte." },
      ],
      outcome: "Es gibt noch keinen Code und daher noch keine Demo. Screenshots und das Repository erscheinen hier, sobald Teile fertig sind.",
    },
    role: {
      heading: "Meine Rolle",
      body: [
        "Es ist ein Soloprojekt, also alles: Recherche, Produktumfang, Interface-Design, das Next.js-Frontend und der Scan-Worker. Es ist kein Unternehmen, und es gibt noch keine Kunden oder Nutzer.",
      ],
    },
    architecture: {
      heading: "Geplante Architektur",
      intro: "Zwei deploybare Teile in einer TypeScript-Codebasis, verbunden über eine Job-Queue. Diese Entscheidungen stammen aus der Recherche und können sich ändern, sobald der Scan-Kern steht.",
      items: [
        { title: "Web-App", body: "Next.js, React und TypeScript. Websites, Prüfungen, der Issue-Explorer und Berichte." },
        { title: "Job-Queue", body: "Redis mit BullMQ. Übergibt Prüfaufträge an den Worker und meldet den Fortschritt zurück." },
        { title: "Scan-Worker", body: "Node.js mit Playwright und axe-core. Der einzige Teil, der Kunden-Websites aufruft." },
        { title: "KI-Adapter", body: "Ein Anbieter hinter einer Schnittstelle, mit validierter strukturierter Ausgabe. Er schlägt vor; er entscheidet nie." },
        { title: "Datenbank", body: "PostgreSQL, gehostet in der EU, mit getrennten Daten pro Agentur." },
      ],
    },
    decisions: {
      heading: "Bisherige Entscheidungen",
      intro: "In der Konzeptionsphase getroffen, vor der ersten Zeile Code:",
      items: [
        {
          title: "Die Erkennung bleibt deterministisch",
          body: "axe-core entscheidet, ob eine Regel verletzt ist. Es ist deterministisch, weit verbreitet und nachvollziehbar. KI entscheidet nie, ob ein Barrierefreiheitsmangel vorliegt.",
        },
        {
          title: "Prüfung im echten Browser",
          body: "Viele Shops rendern Inhalte per JavaScript, und Kontraste hängen von berechneten Styles ab. Eine statische HTML-Analyse würde beides übersehen, deshalb lädt jede Seite in Headless Chromium.",
        },
        {
          title: "Jeder KI-Fix wird erneut geprüft",
          body: "Ein vorgeschlagener Fix wird im Browser auf die Seite angewendet, dann läuft axe-core erneut. Nur Fixes, die bestehen, gelten als bestätigt.",
        },
        {
          title: "Server-Sent Events für den Fortschritt",
          body: "Der Fortschritt fließt nur vom Server zum Browser, dafür reicht SSE: einfaches HTTP mit eingebauter Wiederverbindung. WebSockets würden einen Rückkanal hinzufügen, den niemand braucht.",
        },
        {
          title: "Filter stehen in der URL",
          body: "Eine gefilterte Mängelliste soll sich mit Kollegen teilen oder aus einem Ticket verlinken lassen.",
        },
        {
          title: "Nie Konformität behaupten",
          body: "Berichte sagen, was geprüft wurde und was nicht. Das Produkt hilft Teams, Mängel zu finden und zu beheben; es zertifiziert nichts.",
        },
      ],
    },
    ai: {
      heading: "Wo KI hilft und wo nicht",
      intro: "KI ist hier dort nützlich, wo Kontext zählt. Sie ist nicht der Kern des Produkts, und das Produkt muss auch ohne sie funktionieren.",
      helpsHeading: "Wo KI hilft",
      helps: [
        "Einen Fehler für genau dieses Element erklären, auf Deutsch oder Englisch, für Entwickler oder Kunden.",
        "Einen minimalen Code-Fix entwerfen, dargestellt als Diff.",
        "Alternativtexte für Bilder entwerfen, immer zur Freigabe durch einen Menschen.",
        "Aus der Struktur einer Seite eine seitenspezifische Checkliste für manuelle Prüfungen ableiten, z. B. „dieser Dialog muss den Fokus in sich halten“.",
        "Eine Erklärung zur Barrierefreiheit entwerfen, klar als Entwurf und nicht als Rechtsberatung gekennzeichnet.",
      ],
      notHeading: "Bewusst ohne KI",
      not: ["Erkennen von Fehlern", "Bewertung", "Jede Aussage, dass eine Website konform ist"],
    },
    verification: {
      heading: "Wie KI-Ergebnisse geprüft werden",
      intro: "Der Ablauf, den ich für jeden Fix-Vorschlag plane:",
      kinds: { deterministic: "Deterministisch", ai: "KI-gestützt" },
      steps: [
        { kind: "deterministic", title: "Erkennen", body: "axe-core findet einen Fehler an einem bestimmten Element." },
        { kind: "ai", title: "Erklären", body: "Das Modell erklärt ihn auf Grundlage des Regeltexts und des WCAG-Erfolgskriteriums." },
        { kind: "ai", title: "Vorschlagen", body: "Das Modell entwirft eine minimale Änderung am HTML des Elements." },
        { kind: "deterministic", title: "Erneut prüfen", body: "Der Worker wendet die Änderung im Browser auf die Seite an und führt axe-core erneut aus." },
        {
          kind: "deterministic",
          title: "Einstufen",
          body: "Bestätigt, wenn die Regel besteht und nichts Neues fehlschlägt; sonst teilweise bestätigt oder unbestätigt.",
        },
      ],
      note: "Sobald das existiert, messe ich, wie viele Vorschläge die erneute Prüfung auf einem festen Satz von Testseiten bestehen, und veröffentliche die Zahl hier. Bis dahin gibt es keine Zahl zu veröffentlichen.",
    },
    accessibility: {
      heading: "Barrierefreiheit des Tools selbst",
      body: [
        "Ein Tool, das Barrierefreiheitsmängel meldet, muss selbst barrierefrei sein. Das Ziel ist WCAG 2.2 AA: vollständige Tastaturbedienung, gesteuerter Fokus in Dialogen, Fortschritt, der Screenreadern angesagt wird, und axe-core-Prüfungen in der CI ab dem ersten Commit.",
        "Denselben Maßstab lege ich an diese Website an. Jede Seite von heyismail.com wird in der Testsuite mit axe-core gegen die Regeln für WCAG 2.2 AA geprüft, zusammen mit Tastatur- und Fokustests. Automatische Prüfungen erfassen nur einen Teil dessen, worauf es ankommt – das ist eine Untergrenze, kein Zertifikat.",
      ],
    },
    challenges: {
      heading: "Schwierige Probleme",
      intro: "Probleme, die laut Recherche schwierig werden dürften:",
      items: [
        { title: "Beliebige Websites", body: "Cookie-Banner, langsame Single-Page-Apps, Timeouts und Seiten, die nie fertig laden." },
        { title: "Große Mängellisten", body: "Eine Prüfung von 50 Seiten kann Tausende Mängel liefern. Der Explorer braucht Gruppierung, virtualisierte Zeilen und Filter, die schnell bleiben." },
        { title: "Auf das Element zeigen", body: "Einen Fehler mit der richtigen Stelle im Screenshot und im DOM verknüpfen, damit Entwickler ihn finden." },
        { title: "Einen Fix auf fremden Seiten testen", body: "Eine Änderung im Browser auf die Seite eines anderen anwenden, ohne Nebenwirkungen." },
        { title: "KI-Ausfälle und Kosten", body: "Timeouts, ungültige Ausgaben und Kosten pro Agentur. Die Oberfläche muss nützlich bleiben, wenn das Modell nicht verfügbar ist." },
        { title: "Nur eigene Websites prüfen", body: "Domain-Verifizierung, damit sich das Tool nicht auf fremde Websites richten lässt." },
      ],
    },
    next: {
      heading: "Nächste Schritte",
      items: [
        { status: "next", text: "Grundlagen: Repository, CI, Design-Tokens und Barrierefreiheitsprüfungen ab dem ersten Tag." },
        { status: "planned", text: "Scan-Kern: Seitenlisten, der Worker mit Playwright und axe-core, Live-Fortschritt, Issue-Explorer und Detailansicht." },
        { status: "planned", text: "KI-Schicht: Erklärungen, erneut geprüfte Fix-Vorschläge und Entwürfe für Alternativtexte." },
        { status: "planned", text: "Produktionsgrundlagen: manuelle Prüfungen, Workflow für Mängel, Kundenberichte, Hosting in der EU und Einstellungen zur Datenaufbewahrung." },
      ],
    },
    sourcesHeading: "Quellen",
    sources: [
      { label: "Barrierefreiheitsstärkungsgesetz (BFSG), Volltext", url: "https://www.gesetze-im-internet.de/bfsg/" },
      { label: "FTC: Anordnung gegen accessiBe über 1 Million US-Dollar (April 2025, Englisch)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million" },
      { label: "Deque: Wie viel automatische Tests finden (Englisch)", url: "https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/" },
      { label: "WCAG 2.2 (W3C, Englisch)", url: "https://www.w3.org/TR/WCAG22/" },
    ],
    contactHeading: "Möchten Sie darüber sprechen?",
    contactBody: "Die Entscheidungen auf dieser Seite erläutere ich gern im Gespräch.",
    contactCta: "Kontakt aufnehmen",
  },
};
