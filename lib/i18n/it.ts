// Italian copy. Same facts as en.ts.

import type { Dictionary } from "./en";

export const it: Dictionary = {
  meta: {
    title: "Muhammad Ismail – Software Engineer (Frontend) — React · Next.js · React Native",
    description:
      "Software Engineer (Frontend) con 5 anni di esperienza professionale su prodotti web e mobile realizzati con React, Next.js e React Native. Vivo a Lahore, in Pakistan.",
    jobTitle: "Software Engineer (Frontend)",
  },

  skipLink: "Vai al contenuto",

  nav: {
    label: "Navigazione principale",
    home: "heyIsmail, home",
    work: "Progetti",
    skills: "Competenze",
    about: "Chi sono",
    contact: "Contatti",
    languageLabel: "Lingua",
  },

  hero: {
    role: "Software Engineer (Frontend): lavoro con React, Next.js e React Native.",
    summary:
      "5 anni di esperienza professionale su prodotti per EdTech, immobiliare, SaaS B2B e AI, inclusa l'integrazione di API e AI. Oggi sono Software Engineer in ARVO; prima ho lavorato all'app React Native di Graana, che ha superato 1 milione di download su Google Play.",
    photoAlt: "Ritratto di Muhammad Ismail",
    factsLabel: "In breve",
    facts: [
      { term: "Dove vivo", value: "Lahore, Pakistan · UTC+5" },
      { term: "Cosa cerco", value: "Un ruolo front-end a tempo pieno" },
    ],
    ctaPrimary: "Contattami",
    ctaSecondary: "Guarda i progetti",
  },

  building: {
    heading: "Ci sto lavorando",
    label: "In fase di ricerca e progettazione · da settembre 2026",
    name: "Barrierefrei Studio",
    nameNote: "nome provvisorio",
    summary:
      "Uno strumento per correggere i problemi di accessibilità dei siti web, pensato per piccole web agency e team e-commerce in Europa.",
    body:
      "L'obiettivo è ridurre la distanza tra trovare un errore WCAG e correggerlo: analizzare le pagine in un browser reale, spiegare ogni errore in un linguaggio semplice, proporre una correzione nel codice e rilanciare l'analisi per verificarla prima che qualcuno ci faccia affidamento. Il rilevamento resta deterministico; l'AI aiuta solo a spiegare e a correggere.",
    progressLabel: "Avanzamento",
    progress: [
      { status: "done", text: "Ricerca, perimetro dell'MVP e piano dell'architettura" },
      { status: "next", text: "Fondamenta: repository, CI, design token e controlli di accessibilità" },
    ],
    stackLabel: "Stack previsto",
    stack: ["Next.js", "TypeScript", "Playwright", "axe-core"],
    cta: "Leggi il caso di studio",
  },

  status: {
    done: "Fatto",
    next: "Prossimo passo",
    planned: "Previsto",
  },

  work: {
    heading: "Progetti selezionati",
    subheading:
      "I prodotti a cui ho lavorato e il mio contributo a ciascuno. ARVO e Graana sono stati realizzati in team; i progetti da freelance erano per clienti.",
    labelProduct: "Il prodotto",
    labelContribution: "Il mio lavoro",
    labelStack: "Stack",
    opensInNewTab: "si apre in una nuova scheda",
    items: [
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web",
        role: "Software Engineer",
        engagement: "ARVO · ruolo attuale",
        url: "https://arvo.com.pk",
        product:
          "Una piattaforma educativa pakistana che affianca libri di testo stampati e digitali a un learning management system e a strumenti per la gestione scolastica. Usata ogni giorno nelle scuole del Pakistan.",
        contribution:
          "Lavoro sul front end nel team che sviluppa la piattaforma web: dashboard basate sui ruoli per studenti, docenti, amministrazione scolastica e genitori, libri di testo digitali, gestione dei compiti e notifiche in tempo reale, collegati alle API della piattaforma.",
        stack: ["React", "Next.js", "TypeScript"],
      },
      {
        id: "graana",
        name: "Graana",
        category: "Immobiliare · Mobile",
        role: "React Native Developer → Frontend Developer",
        engagement: "CodeNinja",
        url: "https://www.graana.com",
        product:
          "Un marketplace immobiliare per il Pakistan con annunci sul web e nelle app mobile. L'app Android supera 1 milione di download su Google Play.",
        contribution:
          "Lavoro sul front end dell'app React Native nel team di sviluppo. Insieme al team ho migrato il codice dai componenti a classe ai componenti funzionali con gli Hooks e ho integrato l'app con le API di back end. In seguito ho lavorato come Frontend Developer a diversi progetti interni.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "AI · Web",
        role: "Software Engineer",
        engagement: "Freelance",
        url: "https://www.whatever-ai.com",
        product:
          "Uno strumento AI di Atlas Apps (Regno Unito) per generare e modificare immagini, rimuovere sfondi e creare musica.",
        contribution:
          "Front end della piattaforma: le interfacce degli strumenti AI, l'integrazione di API e AI che le sostiene e il percorso di upgrade dal piano gratuito a quello a pagamento.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "SaaS B2B · Web",
        role: "Software Engineer",
        engagement: "Freelance",
        url: "https://www.supervise.work",
        product:
          "Un tracker di produttività di Supervise LTD che riunisce in un'unica dashboard per i manager l'attività del team su strumenti come GitHub, Figma e Google Docs.",
        contribution:
          "Front end della dashboard delle attività, con analisi per persona e report automatici, inclusa l'integrazione delle API per i dati di GitHub, Figma e Google Docs.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "vectum",
        name: "Vectum",
        category: "Logistica · Sito web",
        role: "Software Engineer",
        engagement: "Freelance · 2026",
        // [TODO: link to vectum.it once the production domain serves this site]
        url: "https://vectum-site.vercel.app",
        product: "Il sito di VECTUM, azienda di logistica italiana specializzata in cargo aereo, spedizioni time critical e trasporto su strada e via mare.",
        contribution:
          "Ho realizzato il sito da solo: versioni in italiano, inglese e spagnolo con metadati propri, un viaggio animato della merce in home page che si disattiva con la preferenza di movimento ridotto, un menu utilizzabile da tastiera e una dichiarazione di accessibilità.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
      },
    ],
  },

  skills: {
    heading: "Competenze",
    groups: [
      { name: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML e CSS", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integrazione", items: ["REST APIs", "OAuth", "OpenAI API", "Stripe"] },
      { name: "Strumenti", items: ["Git", "GitHub", "Jira", "Figma", "Postman", "Vercel"] },
      { name: "Backend (progetti personali)", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
      { name: "Sto imparando", items: ["Accessibilità web (WCAG 2.2)", "Playwright", "axe-core"] },
    ],
  },

  about: {
    heading: "Chi sono",
    paragraphs: [
      "Sono uno sviluppatore front-end di Lahore, in Pakistan. Ho iniziato a sviluppare software da autodidatta nel 2018 e lavoro nel settore dal 2021, soprattutto con React, Next.js e React Native.",
      "Oggi sono Software Engineer in ARVO. Prima ho lavorato in CodeNinja, dove mi sono occupato dell'app mobile di Graana, e come freelance per clienti nel Regno Unito e in Italia.",
      "L'accessibilità è la parte del lavoro front-end che sto approfondendo adesso, e Barrierefrei Studio è il modo in cui lo sto facendo. Cerco un ruolo front-end a tempo pieno in cui continuare a lavorare con React, Next.js e React Native e approfondire l'accessibilità.",
    ],
    principlesHeading: "Come lavoro",
    principles: [
      {
        title: "Front end collegati a sistemi reali",
        body: "In ognuno di questi prodotti ho collegato l'interfaccia ad API, servizi di terze parti o AI: i dati di GitHub, Figma e Google Docs in Supervise, OpenAI e Stripe in Whatever AI.",
      },
      {
        title: "Soprattutto in team",
        body: "Gran parte del mio lavoro si è svolta su codebase condivise insieme ad altri sviluppatori, con la pianificazione in sprint su Jira.",
      },
      {
        title: "Da remoto e per iscritto",
        body: "Lavoro su fusi orari diversi con clienti e team fuori dal Pakistan, anche nel Regno Unito e in Italia.",
      },
    ],
    testimonial: {
      quote:
        "Ismail delivered exactly what we needed; clean, fast, production-ready code with no back-and-forth. He understood the brief immediately and shipped work that genuinely elevated how our agency presents itself online. Rare to find an engineer who thinks about the product, not just the task.",
      author: "Pietro Gadaleta",
      role: "Fondatore, Agenzia Grafica Milano",
      url: "https://www.agenziagraficamilano.it",
    },
  },

  contact: {
    heading: "Contatti",
    subheading: "Il modo più rapido per raggiungermi è l'email. Di solito rispondo entro un giorno.",
    emailCta: "Scrivimi",
    copyEmail: "Copia l'indirizzo email",
    copied: "Indirizzo email copiato",
    linkedin: "LinkedIn",
    github: "GitHub",
    instagram: "Instagram",
    facebook: "Facebook",
    bookCall: "Prenota una call di 15 minuti",
    detailsHeading: "Per chi si occupa di selezione",
    details: [
      { term: "Dove mi trovo", value: "Lahore, Pakistan (PKT, UTC+5)" },
      { term: "Cosa cerco", value: "Ruoli front-end a tempo pieno: React, Next.js, React Native" },
      { term: "Lingue", value: "Inglese (competenza professionale di lavoro)" },
    ],
  },

  footer: {
    tagline: "Software Engineer (Frontend) · Lahore, Pakistan",
    instagramLabel: "Profilo Instagram, si apre in una nuova scheda",
    facebookLabel: "Profilo Facebook, si apre in una nuova scheda",
    languagesLabel: "Questo sito in altre lingue",
  },

  notFound: {
    title: "Pagina non trovata",
    body: "Questa pagina non esiste o è stata spostata.",
    cta: "Vai alla home",
  },

  caseStudy: {
    meta: {
      title: "Barrierefrei Studio: strumento per l'accessibilità in corso – Muhammad Ismail",
      description:
        "Caso di studio di un prodotto in fase di ricerca e progettazione: analisi WCAG in un browser reale con Playwright e axe-core, correzioni proposte dall'AI e verificate prima di contare, per le web agency in Europa.",
    },
    lastUpdated: "Ultimo aggiornamento: ottobre 2026",
    back: "Tutti i progetti",
    label: "Ci sto lavorando",
    subtitle:
      "Uno strumento per correggere i problemi di accessibilità, pensato per piccole web agency e team e-commerce in Europa. È in fase di ricerca e progettazione; questa pagina separa ciò che è fatto da ciò che è previsto.",
    factsLabel: "Dati del progetto",
    facts: [
      { term: "Fase", value: "Ricerca e progettazione. Ancora nessun codice." },
      { term: "Inizio", value: "Settembre 2026" },
      { term: "Ruolo", value: "Progetto individuale" },
      { term: "Stack previsto", value: "Next.js, React, TypeScript, Playwright, axe-core" },
    ],
    tocLabel: "In questa pagina",

    overview: {
      heading: "Panoramica",
      body: [
        "Barrierefrei Studio (nome provvisorio) è uno strumento per correggere i problemi di accessibilità che sto progettando. Analizza le pagine di un sito in un browser reale, spiega ogni errore WCAG in un linguaggio semplice, propone una correzione a livello di codice e rilancia l'analisi per verificarla.",
        "Guida inoltre i controlli manuali che l'automazione non può fare e conserva le prove che i clienti chiedono: storico dei problemi, report e una bozza di dichiarazione di accessibilità.",
      ],
    },
    problem: {
      heading: "Il problema",
      body: [
        "Dal 28 giugno 2025 lo European Accessibility Act (direttiva (UE) 2019/882) si applica a molti negozi online e servizi rivolti ai consumatori in tutta l'UE. Le agency che realizzano e mantengono questi siti ricevono dai clienti sempre la stessa domanda: siamo accessibili, e cosa dobbiamo correggere?",
        "Gli strumenti disponibili non si adattano bene a questo lavoro. Gli scanner gratuiti elencano gli errori ma lasciano la correzione agli sviluppatori. Le suite enterprise hanno prezzi pensati per le grandi aziende. I widget overlay promettono la conformità automatica; nel 2025 la Federal Trade Commission statunitense ha imposto al fornitore di overlay accessiBe di pagare 1 milione di dollari per dichiarazioni ingannevoli. E le regole automatiche coprono solo una parte del problema: navigazione da tastiera, ordine del focus e significato dei testi alternativi richiedono ancora una persona.",
      ],
    },
    users: {
      heading: "Per chi è",
      items: [
        {
          title: "Piccole web agency",
          body: "Da circa 5 a 50 persone in Europa, che realizzano e mantengono negozi Shopify, Shopware, WordPress o headless per molti clienti. Devono analizzare molti siti, dare agli sviluppatori correzioni concrete e ai clienti un report comprensibile.",
        },
        {
          title: "Team e-commerce interni",
          body: "Rivenditori di medie dimensioni con un grande negozio online e un team di sviluppo da una a cinque persone.",
        },
        {
          title: "Non è per",
          body: "Chi cerca un bollino di conformità con un clic. Il prodotto aiuta i team a trovare e correggere i problemi; non certifica nulla.",
        },
      ],
    },
    why: {
      heading: "Perché lo sto costruendo",
      body: [
        "HTML semantico, ARIA, gestione del focus e contrasto sono per definizione problemi di front end, ed è proprio qui che voglio approfondire. Uno strumento che deve rilevare questi errori, e la cui interfaccia deve evitarli per prima, è il modo più diretto che conosco per impararli davvero.",
        "È anche un problema che i team in tutta Europa hanno adesso, con una normativa UE alle spalle. Questo gli dà un pubblico reale con cui confrontarsi, non solo una demo.",
      ],
    },
    status: {
      heading: "A che punto è",
      intro: "A settembre 2026:",
      items: [
        { status: "done", text: "Ricerca di mercato e sugli utenti: il problema, i clienti, gli strumenti esistenti e i loro costi." },
        {
          status: "done",
          text: "Perimetro dell'MVP: siti ed elenchi di pagine, analisi in un browser reale, avanzamento in tempo reale, un esploratore dei problemi, dettaglio del problema con spiegazione AI e correzione verificata, guida ai controlli manuali, flusso di lavoro sui problemi e report per il cliente.",
        },
        { status: "done", text: "Piano dell'architettura e le decisioni riportate più sotto, incluso dove l'AI è ammessa e dove no." },
        { status: "next", text: "Fondamenta: repository, CI con controllo dei tipi, test e controlli di accessibilità, design token." },
        { status: "planned", text: "Nucleo di scansione: un worker che apre le pagine con Playwright ed esegue axe-core, con l'avanzamento trasmesso all'interfaccia." },
        { status: "planned", text: "Spiegazioni AI, correzioni proposte e verificate, controlli manuali e report per i clienti." },
      ],
      outcome: "Non c'è ancora codice, quindi non c'è ancora una demo. Screenshot e repository compariranno qui man mano che le parti saranno pronte.",
    },
    role: {
      heading: "Il mio ruolo",
      body: [
        "È un progetto individuale, quindi tutto: ricerca, perimetro del prodotto, design dell'interfaccia, il front end in Next.js e il worker di scansione. Non è un'azienda e non ha ancora clienti né utenti.",
      ],
    },
    architecture: {
      heading: "Architettura prevista",
      intro: "Due parti distribuibili in un'unica codebase TypeScript, collegate da una coda di job. Queste scelte vengono dalla ricerca e potrebbero cambiare quando il nucleo di scansione esisterà.",
      items: [
        { title: "Web app", body: "Next.js, React e TypeScript. Siti, analisi, l'esploratore dei problemi e i report." },
        { title: "Coda di job", body: "Redis con BullMQ. Passa i job di analisi al worker e riporta l'avanzamento." },
        { title: "Worker di scansione", body: "Node.js con Playwright e axe-core. L'unica parte che accede ai siti dei clienti." },
        { title: "Adattatore AI", body: "Un fornitore dietro un'interfaccia, con output strutturato e validato. Propone; non decide mai." },
        { title: "Database", body: "PostgreSQL, ospitato nell'UE, con i dati di ogni agency tenuti separati." },
      ],
    },
    decisions: {
      heading: "Decisioni prese finora",
      intro: "Prese durante la progettazione, prima di scrivere codice:",
      items: [
        {
          title: "Il rilevamento resta deterministico",
          body: "È axe-core a stabilire se una regola non è rispettata. È deterministico, molto diffuso e spiegabile. L'AI non decide mai se esiste un problema di accessibilità.",
        },
        {
          title: "Analisi in un browser reale",
          body: "Molti negozi generano i contenuti con JavaScript, e il contrasto dipende dagli stili calcolati. Un'analisi statica dell'HTML li perderebbe entrambi, quindi ogni pagina viene caricata in Chromium headless.",
        },
        {
          title: "Ogni correzione AI viene ritestata",
          body: "La correzione proposta viene applicata alla pagina nel browser e axe-core viene eseguito di nuovo. Solo le correzioni che superano il test sono segnate come verificate.",
        },
        {
          title: "Server-Sent Events per l'avanzamento",
          body: "L'avanzamento va solo dal server al browser, quindi SSE basta: HTTP semplice con riconnessione integrata. I WebSocket aggiungerebbero un canale bidirezionale che non serve a nessuno.",
        },
        {
          title: "I filtri stanno nell'URL",
          body: "Un elenco di problemi filtrato deve poter essere condiviso con un collega o collegato a un ticket.",
        },
        {
          title: "Mai dichiarare la conformità",
          body: "I report dicono cosa è stato testato e cosa no. Il prodotto aiuta i team a trovare e correggere i problemi; non certifica nulla.",
        },
      ],
    },
    ai: {
      heading: "Dove l'AI aiuta, e dove no",
      intro: "Qui l'AI è utile dove conta il contesto. Non è il cuore del prodotto, e il prodotto deve funzionare anche con l'AI disattivata.",
      helpsHeading: "Dove l'AI aiuta",
      helps: [
        "Spiegare un errore per quello specifico elemento, in un linguaggio semplice, a uno sviluppatore o a un cliente.",
        "Proporre una correzione minima del codice, mostrata come diff.",
        "Proporre testi alternativi per le immagini, sempre da approvare da una persona.",
        "Ricavare dalla struttura di una pagina una checklist di controlli manuali specifica, ad esempio “questa finestra di dialogo deve mantenere il focus al suo interno”.",
        "Preparare una bozza di dichiarazione di accessibilità, chiaramente indicata come bozza e non come consulenza legale.",
      ],
      notHeading: "Volutamente senza AI",
      not: ["Rilevare gli errori", "Assegnare punteggi", "Qualsiasi affermazione che un sito sia conforme"],
    },
    verification: {
      heading: "Come si verifica il lavoro dell'AI",
      intro: "Il ciclo che sto progettando per ogni correzione proposta:",
      kinds: { deterministic: "Deterministico", ai: "Con AI" },
      steps: [
        { kind: "deterministic", title: "Rilevare", body: "axe-core trova un errore su un elemento specifico." },
        { kind: "ai", title: "Spiegare", body: "Il modello lo spiega partendo dal testo della regola e dal criterio di successo WCAG." },
        { kind: "ai", title: "Proporre", body: "Il modello propone una modifica minima all'HTML dell'elemento." },
        { kind: "deterministic", title: "Ritestare", body: "Il worker applica la modifica alla pagina nel browser ed esegue di nuovo axe-core." },
        {
          kind: "deterministic",
          title: "Classificare",
          body: "Verificata se la regola passa e non compaiono nuovi errori; altrimenti parzialmente verificata o non verificata.",
        },
      ],
      note: "Quando esisterà, misurerò quante proposte superano il nuovo test su un insieme fisso di pagine di prova e pubblicherò qui il dato. Fino ad allora non c'è un dato da pubblicare.",
    },
    accessibility: {
      heading: "L'accessibilità dello strumento stesso",
      body: [
        "Uno strumento che segnala problemi di accessibilità deve essere accessibile a sua volta. L'obiettivo è WCAG 2.2 AA: uso completo da tastiera, focus gestito nelle finestre di dialogo, avanzamento annunciato agli screen reader e controlli con axe-core nella CI fin dal primo commit.",
        "Applico lo stesso criterio a questo sito. Ogni pagina di heyismail.com viene controllata con axe-core rispetto alle regole WCAG 2.2 AA nella sua suite di test, insieme a controlli su tastiera e focus. I controlli automatici coprono solo una parte di ciò che conta: sono una soglia minima, non un certificato.",
      ],
    },
    challenges: {
      heading: "I problemi difficili",
      intro: "Problemi che, in base alla ricerca, mi aspetto siano difficili:",
      items: [
        { title: "Siti qualsiasi", body: "Banner dei cookie, single-page app lente, timeout e pagine che non finiscono mai di caricare." },
        { title: "Elenchi di problemi molto lunghi", body: "L'analisi di 50 pagine può produrre migliaia di problemi. L'esploratore ha bisogno di raggruppamenti, righe virtualizzate e filtri che restino veloci." },
        { title: "Indicare l'elemento giusto", body: "Collegare un errore al punto esatto nello screenshot della pagina e nel DOM, così che lo sviluppatore lo trovi." },
        { title: "Testare una correzione su una pagina altrui", body: "Applicare una modifica alla pagina di qualcun altro in un browser, senza effetti collaterali." },
        { title: "Errori e costi dell'AI", body: "Timeout, output non validi e costi per agency. L'interfaccia deve restare utile quando il modello non è disponibile." },
        { title: "Analizzare solo ciò che è tuo", body: "Verifica del dominio, perché lo strumento non possa essere puntato sui siti di altri." },
      ],
    },
    next: {
      heading: "Prossimi passi",
      items: [
        { status: "next", text: "Fondamenta: repository, CI, design token e controlli di accessibilità fin dal primo giorno." },
        { status: "planned", text: "Nucleo di scansione: elenchi di pagine, il worker con Playwright e axe-core, avanzamento in tempo reale, esploratore e dettaglio dei problemi." },
        { status: "planned", text: "Livello AI: spiegazioni, correzioni proposte e verificate, bozze di testi alternativi." },
        { status: "planned", text: "Basi per la produzione: controlli manuali, flusso di lavoro sui problemi, report per i clienti, hosting nell'UE e impostazioni di conservazione dei dati." },
      ],
    },
    sourcesHeading: "Fonti",
    sources: [
      { label: "Direttiva (UE) 2019/882 (European Accessibility Act), testo completo", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj" },
      { label: "FTC: ordine definitivo contro accessiBe da 1 milione di dollari (aprile 2025, in inglese)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million" },
      { label: "Deque: quanto trovano i test automatici (in inglese)", url: "https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/" },
      { label: "WCAG 2.2 (W3C, in inglese)", url: "https://www.w3.org/TR/WCAG22/" },
    ],
    contactHeading: "Vuoi parlarne?",
    contactBody: "Posso spiegare le decisioni di questa pagina durante un colloquio.",
    contactCta: "Contattami",
  },
};
