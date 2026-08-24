// ─── Italian dictionary ───────────────────────────────────────────────────────
// Keys must mirror en.ts exactly.

import type { Dictionary } from "./en";

export const it: Dictionary = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    work: "Lavori",
    services: "Servizi",
    process: "Processo",
    techStack: "Stack",
    about: "Chi sono",
    contact: "Contatti",
    bookCall: "Prenota una call",
    langToggleLabel: "Passa all'inglese",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Con base a Lahore, Pakistan · Lavoro con clienti in tutto il mondo.",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Full-Stack Engineer · Dal 2018",
    headline: "Software in produzione per founder che non possono permettersi errori.",
    body: "Sono un ingegnere full-stack che lavora direttamente con clienti premium (nessun account manager, nessun team offshore) per progettare e costruire prodotti web, mobile e AI end to end.",
    ctaPrimary: "Prenota una call",
    ctaSecondary: "Guarda i progetti",
  },

  // ── ProofBar (stats) ─────────────────────────────────────────────────────────
  stats: [
    { id: "since",    value: "2018",                      label: "Software in produzione dal" },
    { id: "breadth",  value: "Web · Mobile · AI",         label: "Competenza full-stack, un ingegnere" },
    { id: "response", value: "<24h",                      label: "Tempo di risposta tipico" },
    { id: "model",    value: "Scope fisso o retainer",    label: "Modello di ingaggio" },
  ],

  // ── Services ─────────────────────────────────────────────────────────────────
  services: {
    eyebrow: "COSA COSTRUISCO",
    heading: "Quattro modi di lavorare con un senior engineer, senza la burocrazia di un'agenzia.",
    items: [
      {
        id: "web",
        title: "Sviluppo Web Application",
        description:
          "Web app pronte per la produzione, costruite per scalare dal primo giorno — non un prototipo che richiede una riscrittura dopo sei mesi.",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
      },
      {
        id: "mobile",
        title: "Sviluppo App Mobile",
        description:
          "App con esperienza nativa su iOS e Android da un unico codebase, senza sacrificare le performance.",
        tech: ["React Native", "Expo"],
      },
      {
        id: "ai",
        title: "Integrazione AI & Automazione",
        description:
          "Workflow agentici e funzionalità AI che arrivano effettivamente in produzione e reggono sotto carico reale.",
        tech: ["OpenAI API", "Agentic Workflows"],
      },
      {
        id: "full-build",
        title: "Product Build Completo (0→1)",
        description:
          "Dall'idea al prodotto lanciato — architettura, implementazione e handoff, tutto costruito e gestito da un solo ingegnere.",
        tech: ["Full stack", "Infrastruttura a scelta"],
      },
    ],
  },

  // ── Portfolio ─────────────────────────────────────────────────────────────────
  portfolio: {
    eyebrow: "LAVORI SELEZIONATI",
    heading: "Cosa si costruisce quando lo scope è reale.",
    subheading:
      "Anonimizzati per scelta, una lista clienti reale è in arrivo. Ogni progetto riflette il tipo di lavoro effettivamente consegnato: problema, soluzione e risultato.",
    labelProblem: "Problema",
    labelBuild: "Costruito",
    labelOutcome: "Risultato",
    items: [
      {
        id: "arvo",
        category: "Piattaforma LMS EdTech",
        client: "ARVO",
        url: "https://arvo.com.pk",
        problem:
          "Il settore educativo pakistano mancava di una piattaforma digitale unificata in grado di servire studenti, insegnanti, scuole e genitori in un unico posto senza la complessità degli strumenti enterprise.",
        build:
          "LMS full-stack con dashboard basate su ruoli per studenti, insegnanti, amministratori scolastici e genitori. Libri di testo digitali, gestione compiti, tracciamento dei progressi e notifiche in tempo reale — tutto in un unico prodotto.",
        outcome:
          "Distribuito nelle scuole pakistane, coinvolge attivamente gli studenti dei curricula di 11ª e 12ª classe con un'esperienza di apprendimento digitale moderna.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "React Native"],
      },
      {
        id: "whatever-ai",
        category: "Suite AI Creativa",
        client: "Whatever AI",
        url: "https://www.whatever-ai.com",
        problem:
          "Creator e utenti comuni avevano bisogno di un unico strumento per generare immagini, modificare foto, rimuovere sfondi e creare musica — senza destreggiarsi tra cinque app AI separate.",
        build:
          "Piattaforma AI all-in-one con più strumenti di generazione di contenuti sotto lo stesso tetto: generazione di immagini AI, editing foto, rimozione dello sfondo e creazione musicale. Costruita per un'UX veloce e semplice, senza curva di apprendimento.",
        outcome:
          "Online e attiva per utenti in tutto il mondo, con una suite crescente di strumenti AI gratuiti e un chiaro percorso freemium-to-paid.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
      {
        id: "supervise",
        category: "SaaS Produttività Team",
        client: "Supervise",
        url: "https://www.supervise.work",
        problem:
          "I team di ingegneria e remoti sprecavano ore in standup e check-in manuali senza dati reali su chi stesse facendo cosa tra GitHub, Figma, Google Docs e altri strumenti.",
        build:
          "Tracker di produttività multi-app che si integra con gli strumenti già in uso dai team. Dashboard unificata, analisi delle performance per persona, timeline di produttività e analytics del costo per progetto — tutto automatizzato.",
        outcome:
          "Utilizzato da team per eliminare completamente gli standup, con visibilità chiara sull'output di ogni app integrata senza report manuali.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "OAuth Integrations"],
      },
      {
        id: "graana",
        category: "Marketplace Immobiliare",
        client: "Graana",
        url: "https://www.graana.com",
        problem:
          "Il mercato immobiliare pakistano era opaco, frammentato e guidato dal passaparola — acquirenti e investitori non avevano una piattaforma digitale affidabile per cercare, confrontare e transare proprietà.",
        build:
          "Il primo grande marketplace immobiliare online pakistano con annunci in tutte le principali città, ricerca intelligente, vetrine per progetti di investimento e un'app mobile che offre l'esperienza completa nativamente.",
        outcome:
          "Uno dei portali immobiliari più affidabili in Pakistan, con annunci in ogni città principale e un'app mobile con ottimi rating sull'App Store.",
        stack: ["React", "Node.js", "PostgreSQL", "React Native", "Maps API"],
      },
    ],
  },

  // ── TechStack ─────────────────────────────────────────────────────────────────
  techStack: {
    eyebrow: "LO STACK",
    heading: "Uno stack profondo e aggiornato, non una raccolta di badge.",
  },

  // ── Process ───────────────────────────────────────────────────────────────────
  process: {
    eyebrow: "COME LAVOREREMMO INSIEME",
    heading: "Un processo chiaro, calibrato su quello che stai costruendo davvero.",
    items: [
      {
        id: "discovery",
        phase: "01",
        title: "Discovery",
        description:
          "Parliamo di cosa stai costruendo, per chi e come appare il successo — nessuna supposizione sullo scope.",
      },
      {
        id: "scope",
        phase: "02",
        title: "Scope & Architettura",
        description:
          "Ricevi un piano tecnico chiaro e un preventivo dettagliato prima che venga scritto qualsiasi codice.",
      },
      {
        id: "build",
        phase: "03",
        title: "Build con checkpoint regolari",
        description:
          "Lo sviluppo avviene in modo trasparente — check-in regolari così sai sempre a che punto siamo.",
      },
      {
        id: "qa",
        phase: "04",
        title: "QA & Consegna",
        description:
          "Test, revisione e una consegna pulita con piena proprietà del codice — niente viene trattenuto.",
      },
      {
        id: "support",
        phase: "05",
        title: "Supporto continuativo (opzionale)",
        description:
          "Passa a un retainer per lo sviluppo continuo, oppure prendi il prodotto finito e vai avanti per conto tuo.",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────────
  about: {
    eyebrow: "CHI SONO",
    heading: "Autodidatta dal 2018. Scrivo ancora ogni riga.",
    paragraphs: [
      "Costruisco software in produzione dal 2018 — full-stack, end to end, tra web, mobile e, più di recente, prodotti AI.",
      "Lavoro direttamente con founder e team che hanno bisogno di un senior engineer con cui parlare, non di un project manager che inoltra messaggi da un team offshore. Ogni progetto che prendo in carico, lo architettura, costruisco e consegno personalmente.",
    ] as [string, string],
  },

  // ── Differentiators ───────────────────────────────────────────────────────────
  differentiators: {
    eyebrow: "PERCHÉ È DIVERSO",
    heading: "Un senior engineer. Nessun intermediario.",
    items: [
      {
        id: "ownership",
        title: "Responsabilità senior",
        description:
          "Non vieni smistato a junior. Chi fa lo scope del tuo progetto è la stessa persona che lo consegna.",
      },
      {
        id: "direct",
        title: "Comunicazione diretta",
        description:
          "Parli con l'ingegnere che costruisce il tuo prodotto, non con un project manager che trasmette messaggi.",
      },
      {
        id: "ai-native",
        title: "AI-native, pronto per la produzione",
        description:
          "Pratiche ingegneristiche moderne e strumenti AI, applicati con la disciplina di software consegnato e manutenuto.",
      },
    ],
  },

  // ── Pricing ───────────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "MODELLI DI INGAGGIO",
    heading: "Tre modi per collaborare, nessun prezzo fisso in anticipo.",
    subheading:
      "Ogni ingaggio premium viene definito dopo una call — ecco come si struttura tipicamente ciascuno.",
    mostCommon: "Più comune",
    bookCall: "Prenota una call",
    items: [
      {
        id: "project",
        name: "Progetto a Scope Fisso",
        whoFor: "Un prodotto o una funzionalità definita con una linea di arrivo chiara.",
        includes: [
          "Build a scope fisso",
          "Preventivo personalizzato dopo una call",
          "Piena proprietà del codice alla consegna",
        ],
        highlighted: false,
      },
      {
        id: "partnership",
        name: "Partnership Continuativa",
        whoFor: "Sviluppo, iterazione e nuove funzionalità dopo il lancio.",
        includes: [
          "Retainer mensile",
          "Tempo di risposta prioritario",
          "Accesso diretto, nessun account manager",
        ],
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Build Enterprise / Complesse",
        whoFor: "Build multi-piattaforma, AI-intensive o con requisiti di compliance.",
        includes: [
          "Scope e timeline personalizzati",
          "Ingaggio architecture-first",
          "Web, mobile e AI in un unico build",
        ],
        highlighted: false,
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "RISULTATI DEI CLIENTI",
    heading: "La fiducia dei founder che spediscono.",
    openSlotHeading: "La tua recensione potrebbe essere la prossima.",
    openSlotBody:
      "Se hai lavorato con me e hai trovato l'esperienza degna di essere raccontata, mi fa piacere sentirla. Le parole reali dei clienti reali contano più di qualsiasi pitch.",
    openSlotCta: "Prenota una call per iniziare",
    items: [
      {
        id: "pietro-gadaleta",
        quote:
          "Ismail ha consegnato esattamente quello di cui avevamo bisogno: codice pulito, veloce e pronto per la produzione, senza andirivieni. Ha capito il brief immediatamente e ha consegnato un lavoro che ha genuinamente elevato come la nostra agenzia si presenta online. Raro trovare un ingegnere che pensa al prodotto, non solo al task.",
        authorName: "Pietro Gadaleta",
        authorRole: "Founder",
        company: "Agenzia Grafica Milano",
        companyUrl: "https://www.agenziagraficamilano.it",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "DOMANDE",
    heading: "Prima di prenotare una call.",
    items: [
      {
        id: "who",
        question: "Con chi lavori tipicamente?",
        answer:
          "Founder, startup finanziate e aziende consolidate che hanno bisogno di software di qualità produzione costruito da un senior engineer, non da un'agenzia lenta o da un gruppo di freelancer dispersi.",
      },
      {
        id: "ownership",
        question: "Come funziona la proprietà del codice e della IP?",
        answer:
          "Alla consegna possiedi tutto — codice sorgente completo, accesso all'infrastruttura e documentazione. Nessun vendor lock-in.",
      },
      {
        id: "timeline",
        question: "Qual è una timeline realistica?",
        answer:
          "Dipende dallo scope. Una funzionalità focalizzata può richiedere un paio di settimane; un build completo 0→1 si misura tipicamente in mesi. Riceverai una stima chiara dopo la call di scope.",
      },
      {
        id: "stack",
        question: "Sei flessibile sullo stack tecnologico?",
        answer:
          "Di default uso lo stack indicato su questo sito perché è quello che conosco meglio e in cui mi muovo più velocemente, ma lavoro anche su codebase esistenti o stack richiesti dal progetto.",
      },
      {
        id: "communication",
        question: "Come funziona la comunicazione durante il build?",
        answer:
          "Check-in diretti e regolari con me, non con un project manager che inoltra aggiornamenti. Il tempo di risposta tipico è inferiore alle 24 ore.",
      },
      {
        id: "premium",
        question: "Cosa significa \"premium\" nello scope?",
        answer:
          "Codice di qualità produzione, architettura ragionata e un build pensato per essere mantenuto e scalato — non un proof-of-concept usa e getta.",
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "METTITI IN CONTATTO",
    heading: "Hai un progetto in mente?",
    subheading:
      "Prenota una call breve o invia qualche dettaglio qui sotto. Rispondo a ogni messaggio personalmente, di solito entro un giorno.",
    bookCall: "Prenota una call",
    form: {
      labelName: "Nome",
      labelEmail: "Email",
      labelProjectType: "Tipo di progetto",
      labelMessage: "Messaggio",
      placeholder: "Seleziona",
      options: [
        { value: "Web application",          label: "Web application" },
        { value: "Mobile app",               label: "App mobile" },
        { value: "AI & automation",          label: "AI & automazione" },
        { value: "Full product build (0→1)", label: "Build prodotto completo (0→1)" },
        { value: "Not sure yet",             label: "Non ancora sicuro" },
      ],
      submit: "Invia messaggio",
      submitting: "Invio in corso…",
      successMessage:
        "Grazie, il tuo client email dovrebbe essersi aperto con il messaggio pronto da inviare. Se non è successo, scrivimi direttamente a",
      errorName: "Inserisci il tuo nome",
      errorEmail: "Inserisci un'email valida",
      errorProjectType: "Seleziona un tipo di progetto",
      errorMessage: "Aggiungi qualche dettaglio in più (almeno 10 caratteri)",
    },
  },

  // ── ClimaFlow page ────────────────────────────────────────────────────────────
  climaflow: {
    // Navigation chrome
    backToWork: "Torna ai progetti",
    scrollIndicator: "Scorri per scoprire il prodotto",
    dashboardCaption: "Mockup interattivo — dati di esempio",
    aiDisclaimer:
      "L'AI in ClimaFlow è uno strumento operativo, non un'interfaccia primaria. Il tecnico lavora con checklist e form; l'AI riempie i campi, genera testi e risponde a domande.",

    // Hero section
    heroEyebrow: "Prodotto · In sviluppo",
    heroTaglinePart1: "Meno telefonate. Meno Excel.",
    heroTaglinePart2: "Più interventi.",
    heroDescription:
      "Un gestionale mobile-first che sto progettando per aiutare le aziende italiane di climatizzazione a gestire clienti, tecnici, interventi e manutenzioni in un unico posto.",

    // Hero meta labels & values
    metaRoleLabel: "Ruolo",
    metaRoleValue: "Product Design · Engineering",
    metaMarketLabel: "Mercato",
    metaMarketValue: "Italia",
    metaIndustryLabel: "Settore",
    metaIndustryValue: "HVAC / Field Service",
    metaStatusLabel: "Stato",
    metaStatusValue: "In sviluppo",

    // CTA section
    ctaEyebrow: "In costruzione",
    ctaHeadline: "Sto costruendo ClimaFlow per il mercato italiano.",
    ctaDescription:
      "Se gestisci un'azienda HVAC o lavori nel settore dell'assistenza tecnica, mi interessa capire come gestisci oggi il tuo lavoro sul campo. Ogni conversazione aiuta a costruire un prodotto che risponde a problemi reali.",
    ctaPrimary: "Parliamone",
    ctaSecondary: "Torna ai progetti",
    ctaFooterNote:
      "Questo è un prodotto che sto progettando e costruendo personalmente.\nNessun team di vendita, nessun CRM — rispondo io direttamente.",

    // ── Problem section ───────────────────────────────────────────────────────
    problemEyebrow: "IL PROBLEMA",
    problemHeading: "Il problema non è il lavoro. È tutto quello che succede intorno.",
    problemSubheading: "Le aziende HVAC italiane sono operative e capaci. Ma coordinano tutto con strumenti nati per altri scopi.",
    problemFrictionLabel: "Troppo attrito operativo",
    problemOutcomeLabel: "Risultato concreto",
    problemTools: [
      { label: "WhatsApp",                desc: "Richieste sparse tra centinaia di chat",      color: "#25D366" },
      { label: "Excel",                   desc: "Fogli non aggiornati, versioni diverse",       color: "#217346" },
      { label: "Telefonate",              desc: "Accordi verbali, niente traccia scritta",      color: "#0EA5E9" },
      { label: "Carta",                   desc: "Rapportini manuali, illeggibili o persi",      color: "#F59E0B" },
      { label: "Foto sparse",             desc: "Gallery del telefono senza contesto",           color: "#8B5CF6" },
      { label: "Manutenzioni dimenticate", desc: "Scadenze mancate, clienti insoddisfatti",    color: "#EF4444" },
    ],
    problemPainPoints: [
      "Il tecnico non sa dove trovare la storia dell'impianto",
      "Il responsabile non sa dove sono i suoi tecnici",
      "Le manutenzioni scadono senza che nessuno intervenga",
      "Il rapportino viene compilato ore dopo l'intervento, a memoria",
      "Le parti usate non vengono registrate in modo coerente",
      "I dati del cliente vivono su tre strumenti diversi",
    ],

    // ── Vision section ────────────────────────────────────────────────────────
    visionEyebrow: "LA VISIONE",
    visionHeading: "Un unico sistema per tutto il lavoro sul campo.",
    visionSubheading: "Dalla prima chiamata del cliente all'archivio digitale degli interventi, ClimaFlow connette ogni parte del processo in un flusso unico.",
    visionSteps: [
      { label: "Cliente",       desc: "Anagrafica, contatti, impianti" },
      { label: "Impianto",      desc: "Modello, refrigerante, storico" },
      { label: "Richiesta",     desc: "Ticket di assistenza, priorità" },
      { label: "Tecnico",       desc: "Assegnazione, navigazione" },
      { label: "Intervento",    desc: "Checklist, foto, parti, firma" },
      { label: "Manutenzione",  desc: "Programmazione automatica" },
    ],
    visionCalloutQuote: "Dalla richiesta al rapporto d'intervento,",
    visionCalloutEmphasis: "tutto in un unico posto.",
    visionCalloutSub: "Niente più salti tra app diverse. Ogni informazione è dove ti aspetti di trovarla.",

    // ── Dashboard section ─────────────────────────────────────────────────────
    dashboardEyebrow: "DASHBOARD OPERATIVA",
    dashboardHeading: "Il controllo dell'intera azienda in un'unica schermata.",
    dashboardSubheading: "Il responsabile vede cosa sta succedendo adesso, cosa è stato completato e cosa rischia di passare inosservato.",
    dashboardTabOverview: "Panoramica",
    dashboardTabSchedule: "Pianificazione",
    dashboardTabMaintenance: "Manutenzioni",
    dashboardTabScheduleShort: "Agenda",
    dashboardTabMaintenanceShort: "Manut.",
    dashboardSidebarLinks: ["Dashboard", "Clienti", "Impianti", "Interventi", "Tecnici", "Manutenzioni", "Magazzino", "Rapporti"],
    dashboardStatLabels: ["Interventi oggi", "In corso", "Completati", "Manut. in scadenza"],
    dashboardAlertText: "manutenzioni in scadenza nei prossimi 30 giorni.",
    dashboardAlertCta: "Genera interventi →",
    dashboardActivityTitle: "Attività recente",
    dashboardActivityItems: [
      "Marco ha completato l'intervento da Hotel Milano",
      "Nuova richiesta da Farmacia Centrale — urgente",
      "Sofia ha avviato l'intervento da Ristorante Aurora",
    ],
    dashboardScheduleDate: "Oggi — Sabato 22 agosto 2026",
    dashboardMaintenanceCount: "manutenzioni in scadenza",
    dashboardGenerateBtn: "Genera interventi",
    dashboardMoreClients: "+ 22 altri clienti in scadenza",
    dashboardMoreClientsSchedule: "+ 20 altri clienti",

    // ── Technician section ────────────────────────────────────────────────────
    technicianEyebrow: "APP TECNICO",
    technicianHeading: "Il software deve seguire il tecnico, non il contrario.",
    technicianSubheading: "L'app mobile di ClimaFlow è progettata per funzionare sul cantiere: una mano libera, segnale debole, guanti addosso.",
    technicianSteps: [
      { step: "01", title: "Vedi i tuoi interventi del giorno",    desc: "Lista ordinata per orario, con cliente, indirizzo e tipo di intervento. Nessuna chiamata per sapere dove andare." },
      { step: "02", title: "Naviga e chiama direttamente dall'app", desc: "Un tap per aprire Maps, uno per chiamare il cliente. La storia dell'impianto è sempre a portata di mano." },
      { step: "03", title: "Compila la checklist sul posto",         desc: "Passi guidati specifici per il tipo di intervento. Foto integrate, note vocali, nessun margine di errore." },
      { step: "04", title: "Chiudi l'intervento con la firma del cliente", desc: "Il rapporto digitale si genera automaticamente. Il cliente firma su schermo. Zero carta, zero ritardi." },
    ],
    technicianScreenLabels: {
      jobs: "I miei interventi",
      detail: "Dettaglio intervento",
      checklist: "Checklist",
      report: "Chiudi intervento",
    },
    technicianTodayLabel: "Oggi — 3 interventi assegnati",
    technicianInProgressLabel: "In corso",
    technicianBackLabel: "Torna indietro",
    technicianClientLabel: "Cliente",
    technicianEquipmentLabel: "Impianto",
    technicianProblemLabel: "Problema segnalato",
    technicianProblemText: "Climatizzatore non raffredda, rumore anomalo all'avvio",
    technicianCallBtn: "Chiama",
    technicianNavigateBtn: "Naviga",
    technicianStartBtn: "Avvia",
    technicianChecklistLabel: "Checklist intervento",
    technicianPhotoBtn: "Foto",
    technicianVoiceBtn: "Nota vocale",
    technicianCloseBtn: "Chiudi",
    technicianMaterialsLabel: "Materiali usati",
    technicianNotesLabel: "Note tecnico",
    technicianNotesText: "Sostituito filtro, ricaricato gas R32. Impianto ora funziona correttamente.",
    technicianSignatureLabel: "Firma cliente",
    technicianSignatureAriaLabel: "Firma cliente",
    technicianSendBtn: "Invia rapporto",
    technicianChecklistItems: [
      { id: "filtri",    label: "Controllo filtri",                  done: true },
      { id: "scarico",   label: "Controllo scarico condensa",        done: true },
      { id: "pressione", label: "Controllo pressione refrigerante",  done: true },
      { id: "elettrico", label: "Controllo connessioni elettriche",  done: false },
      { id: "test",      label: "Test funzionamento finale",          done: false },
    ],
    technicianJobsList: [
      { time: "09:00", client: "Mario Rossi",    issue: "Climatizzatore non raffredda", addr: "Via Roma 42, Milano",   status: "active" },
      { time: "11:30", client: "Hotel Milano",   issue: "Manutenzione annuale",          addr: "Corso Como 10, Milano", status: "pending" },
      { time: "14:00", client: "Studio Ferretti", issue: "Nuova installazione",          addr: "Via Torino 8, Milano",  status: "pending" },
    ],

    // ── Equipment section ─────────────────────────────────────────────────────
    equipmentEyebrow: "GESTIONE IMPIANTI",
    equipmentHeading: "Ogni impianto ha una storia. ClimaFlow la ricorda.",
    equipmentSubheading: "Modello, refrigerante, data installazione, storico interventi — tutto legato al cliente, consultabile in 2 secondi.",
    equipmentTabOverview: "Scheda",
    equipmentTabHistory: "Storico",
    equipmentTabDocs: "Documenti",
    equipmentUnitLabel: "Impianto",
    equipmentUnitType: "Unità split inverter — 3.5 kW",
    equipmentActiveLabel: "Attivo",
    equipmentClientLabel: "Cliente",
    equipmentHistoryCount: "4 interventi registrati",
    equipmentTechnicianLabel: "Tecnico",
    equipmentSpecLabels: ["Installato", "Refrigerante", "Ultima manut.", "Prossima manut."],
    equipmentNoteLabel: "Note tecniche",
    equipmentHistoryItems: [
      { date: "12/05/2026", type: "Manutenzione",  tech: "Marco", notes: "Pulizia filtri, controllo pressione R32. Tutto ok." },
      { date: "04/02/2026", type: "Riparazione",    tech: "Paolo", notes: "Sostituito condensatore esterno. Gas ricaricato 0.2 kg." },
      { date: "18/08/2025", type: "Controllo",      tech: "Marco", notes: "Controllo post estate. Nessuna anomalia rilevata." },
      { date: "14/06/2024", type: "Installazione",  tech: "Sofia", notes: "Prima installazione. Impianto collaudato." },
    ],
    equipmentValueProps: [
      { title: "Storia completa dell'impianto",   desc: "Ogni tecnico che arriva dal cliente conosce già la storia dell'impianto — modello, refrigerante, interventi passati, note tecniche." },
      { title: "Manutenzioni collegate all'impianto", desc: "Le scadenze di manutenzione sono legate direttamente all'impianto. Il sistema avvisa automaticamente quando si avvicina la data." },
      { title: "Documenti sempre accessibili",    desc: "Manuali, garanzie, rapporti PDF — tutto associato all'impianto e disponibile offline dal telefono del tecnico." },
      { title: "Dati tecnici strutturati",        desc: "Tipo di refrigerante, quantità, data carica, numero di matricola. Progettato per organizzare in modo strutturato i dati operativi degli impianti." },
    ],

    // ── Reports section ───────────────────────────────────────────────────────
    reportsEyebrow: "RAPPORTINI DIGITALI",
    reportsHeading: "Il rapportino nasce direttamente sul posto.",
    reportsSubheading: "Nessun foglio di carta da compilare in serata. Il tecnico chiude l'intervento sul telefono, il rapporto è già generato.",
    reportsTitleLabel: "Rapporto d'Intervento",
    reportsWorkDoneLabel: "Lavori eseguiti",
    reportsMaterialsLabel: "Materiali utilizzati",
    reportsPhotosLabel: "Foto allegate",
    reportsNotesLabel: "Note tecnico",
    reportsSignatureLabel: "Firma cliente",
    reportsGeneratePdfBtn: "Genera PDF",
    reportsFieldLabels: ["Cliente", "Impianto", "Tecnico", "Data", "Inizio", "Fine"],
    reportsWorkItems: [
      "Pulizia filtri aria interni ed esterni",
      "Controllo e verifica pressione gas R32",
      "Ispezione connessioni elettriche",
      "Test completo di funzionamento",
      "Sostituzione filtro aria (1 pz.)",
    ],
    reportsNotesText: "Impianto ora funziona correttamente. Consigliata sostituzione filtro alla prossima manutenzione annuale.",
    reportsZeroPaperTitle: "Zero carta",
    reportsZeroPaperHeadline: "Il rapportino si compila da solo.",
    reportsZeroPaperBody: "Dati impianto, lavori dalla checklist, materiali usati, foto, firma — tutto viene aggregato automaticamente. Il tecnico non riscrive nulla.",
    reportsValueProps: [
      { title: "Inviato al cliente via email", desc: "Il PDF parte automaticamente alla chiusura dell'intervento. Il cliente riceve la sua copia in tempo reale." },
      { title: "Archiviato automaticamente",  desc: "Ogni rapporto è collegato al cliente, all'impianto e al tecnico. Ritrovabile in 2 secondi." },
      { title: "Firma digitale su schermo",   desc: "Il cliente firma direttamente sul telefono del tecnico. Nessuna stampa, nessuna scansione." },
    ],

    // ── Maintenance section ───────────────────────────────────────────────────
    maintenanceEyebrow: "MANUTENZIONE PREVENTIVA",
    maintenanceHeading: "Non aspettare che il cliente chiami.",
    maintenanceSubheading: "ClimaFlow trasforma le manutenzioni ricorrenti in interventi programmati — automaticamente, prima della scadenza.",
    maintenanceCardTitle: "Manutenzioni in scadenza",
    maintenanceTotalBadge: "27 totali",
    maintenanceMoreClients: "+ 20 altri clienti",
    maintenanceGenerateBtn: "Genera interventi (27)",
    maintenanceGeneratingLabel: "Generazione in corso…",
    maintenanceGeneratedLabel: "Interventi generati",
    maintenanceCreatedLabel: "27 interventi creati",
    maintenanceMoreDistributed: "+ 22 altri distribuiti tra i tecnici",
    maintenanceScheduledLabel: "Programmato",
    maintenanceSystemAutoLabel: "Sistema crea automaticamente",
    maintenanceValueProps: [
      { title: "Nessuna manutenzione dimenticata",             desc: "ClimaFlow traccia ogni contratto di manutenzione e avvisa con anticipo configurabile." },
      { title: "Distribuzione automatica tra i tecnici",       desc: "Il sistema assegna gli interventi in base alla disponibilità e alla zona geografica." },
      { title: "Da 27 scadenze a 27 interventi in un click",  desc: "Quello che richiedeva ore di telefonate e aggiornamenti Excel si risolve in pochi secondi." },
    ],

    // ── Inventory section ─────────────────────────────────────────────────────
    inventoryEyebrow: "MAGAZZINO & FURGONI",
    inventoryHeading: "Sai sempre cosa hai. E dove si trova.",
    inventorySubheading: "Magazzino centrale, stock di ogni furgone, consumo automatico a fine intervento. Zero sorprese sul cantiere.",
    inventoryWarehouseTitle: "Magazzino centrale",
    inventoryVansTitle: "Stock furgoni",
    inventoryVanLabel: "Furgone —",
    inventoryLowStockLabel: "scorta bassa",
    inventoryAutoTitle: "Consumo automatico a fine intervento",
    inventoryAutoBody: "Quando Marco chiude un intervento e registra 0.2 kg di R32, il suo stock furgone si aggiorna automaticamente. Nessun foglio da compilare, nessun magazziniere da avvisare.",

    // ── AI section ────────────────────────────────────────────────────────────
    aiEyebrow: "INTELLIGENZA ARTIFICIALE",
    aiHeading: "L'AI elimina il lavoro amministrativo.",
    aiSubheading: "L'AI non è il prodotto. È uno strato che rende ogni azione più veloce, senza aggiungere complessità.",
    aiTab1: "Nota vocale → Rapportino",
    aiTab2: "Assistente operativo",
    aiVoiceNoteLabel: "Nota vocale del tecnico",
    aiGeneratedReportLabel: "Rapportino generato",
    aiGenerateBtn: "Genera rapportino con AI",
    aiGeneratingLabel: "Trascrizione in corso…",
    aiGeneratedLabel: "Rapportino generato",
    aiClickPrompt: "Clicca \"Genera rapportino\" per vedere l'AI in azione",
    aiWorkLabel: "Lavori eseguiti",
    aiMaterialsLabel: "Materiali rilevati",
    aiEditableNote: "Modificabile prima dell'invio",
    aiVoiceText: "Ho sostituito il condensatore esterno e pulito il filtro aria. Il livello di gas R32 era basso, ho ricaricato con 0.2 kg. L'impianto ora funziona correttamente, temperatura raggiunta in 4 minuti.",
    aiReportLines: [
      "Condensatore esterno sostituito.",
      "Filtro aria pulito.",
      "Gas R32 ricaricato: 0.2 kg.",
      "Test di funzionamento completato con esito positivo.",
      "Temperatura target raggiunta in 4 minuti.",
    ],
    aiMaterials: ["Condensatore split 9k × 1", "Filtro aria universale × 1", "Gas R32 × 0.2 kg"],
    aiChatMessages: [
      { role: "user", text: "Quali manutenzioni sono scadute questo mese?" },
      { role: "ai",  text: "27 clienti hanno manutenzioni in scadenza entro agosto 2026. I più urgenti sono Mario Rossi (6 gg), Hotel Milano P.1 e P.2 (8 gg), Studio Ferretti (11 gg). Posso creare gli interventi e distribuirli tra Marco, Paolo e Sofia in base alla loro disponibilità." },
      { role: "user", text: "Sì, crea gli interventi e assegnali." },
      { role: "ai",  text: "✓ 27 interventi creati e assegnati. Marco: 10, Paolo: 9, Sofia: 8. Prima disponibilità: domani mattina. Vuoi che notifichi i clienti via email?" },
    ],
    aiAssistantTitle: "ClimaFlow AI — Assistente operativo",
    aiOnlineLabel: "Online",
    aiInputPlaceholder: "Chiedi qualcosa…",

    // ── BeforeAfter section ───────────────────────────────────────────────────
    beforeAfterEyebrow: "IL CAMBIAMENTO",
    beforeAfterHeading: "Lo stesso lavoro. Senza l'attrito.",
    beforeAfterSubheading: "ClimaFlow non aggiunge complessità — rimuove il rumore operativo che esiste già.",
    beforeAfterBeforeLabel: "Prima",
    beforeAfterAfterLabel: "Con ClimaFlow",
    beforeItems: [
      "WhatsApp per le richieste di assistenza",
      "Excel per la pianificazione tecnici",
      "Telefonate per coordinare il lavoro",
      "Rapportini su carta compilati a mano",
      "Foto nel telefono senza contesto",
      "Manutenzioni dimenticate o in ritardo",
      "Storia impianto sparsa in più posti",
      "Magazzino aggiornato manualmente",
    ],
    afterItems: [
      "Richieste centralizzate con priorità",
      "Pianificazione visiva con drag & drop",
      "Interventi assegnati dall'app in 10 secondi",
      "Rapportini digitali generati automaticamente",
      "Foto associate all'impianto e al cliente",
      "Manutenzioni programmate automaticamente",
      "Storia completa a portata di mano sul cantiere",
      "Consumo materiali registrato in automatico",
    ],

    // ── WhyThis section ───────────────────────────────────────────────────────
    whyThisEyebrow: "PERCHÉ È DIVERSO",
    whyThisHeading: "Quattro principi di prodotto.",
    whyThisSubheading: "Non è l'unico gestionale sul mercato. Ma è il primo progettato esplicitamente per come lavora un'azienda HVAC italiana.",
    whyThisPillars: [
      { title: "Mobile-first",  headline: "Il tecnico lavora dal telefono.",                    desc: "L'app è progettata per un cantiere reale: schermo piccolo, guanti, segnale assente. Ogni azione richiede al massimo 3 tap. Funziona anche offline." },
      { title: "HVAC-specific", headline: "Costruito per il lavoro HVAC, non adattato.",         desc: "Refrigeranti, manutenzione annuale, impianti split, F-Gas — sono concetti nativi del prodotto, non campi personalizzati aggiunti a un CRM generico." },
      { title: "Semplice",      headline: "Niente ERP complicati.",                               desc: "ClimaFlow è progettato per aziende da 3 a 20 tecnici che vogliono organizzarsi meglio, non per aziende enterprise con un reparto IT dedicato." },
      { title: "Automatizzato", headline: "Meno attività ripetitive.",                            desc: "Manutenzioni programmate in automatico, rapportini generati dalla nota vocale, stock aggiornato a fine intervento. Il sistema lavora, non il responsabile." },
    ],

    // ── Market section ────────────────────────────────────────────────────────
    marketEyebrow: "OPPORTUNITÀ DI MERCATO",
    marketHeading: "Perché questo prodotto.",
    marketSubheading: "Un'osservazione diretta del mercato, non un'analisi desk. Ho parlato con titolari di aziende HVAC italiane. Ecco cosa emerge.",
    marketSignals: [
      { title: "Un mercato frammentato",                           desc: "Le aziende italiane di climatizzazione e assistenza tecnica sono prevalentemente PMI e artigiani. Operano con competenza tecnica elevata, ma con processi amministrativi ancora analogici." },
      { title: "Strumenti generici, problemi specifici",            desc: "Chi ha già digitalizzato qualcosa usa CRM generici non progettati per il field service, o soluzioni enterprise troppo complesse e costose per aziende da 5-15 tecnici." },
      { title: "La domanda di efficienza operativa sta crescendo",  desc: "I margini si comprimono, i clienti sono più esigenti, e il costo del personale amministrativo cresce. Le aziende cercano modi per fare di più con le stesse risorse." },
      { title: "La distribuzione geografica è un vantaggio",        desc: "Il mercato italiano è distribuito: nord, centro, sud hanno reti di piccole aziende locali. Un prodotto verticale e in italiano può penetrare dove i player internazionali faticano." },
    ],
    marketPerspectiveLabel: "La mia prospettiva",
    marketPerspectiveQuote: "Ho deciso di costruire ClimaFlow perché il problema è reale, il mercato è maturo per la digitalizzazione, e la soluzione giusta non esiste ancora.",
    marketPerspectiveBody: "Ci sono grandi piattaforme di field service management — Salesforce, ServiceTitan — ma sono costruite per mercati anglosassoni, costano migliaia di euro al mese, e richiedono implementazioni complesse. Dall'altra parte ci sono Excel e WhatsApp. ClimaFlow si posiziona nel mezzo: verticale, italiano, semplice, accessibile.",
    marketAuthor: "— Ismail, founder & designer",

    // ── Roadmap section ───────────────────────────────────────────────────────
    roadmapEyebrow: "ROADMAP",
    roadmapHeading: "Da MVP a piattaforma verticale.",
    roadmapSubheading: "Ogni fase aggiunge valore senza appesantire il prodotto. L'obiettivo è sempre lo stesso: far lavorare meglio le aziende sul campo.",
    roadmapBottomNote: "La roadmap evolve con il feedback degli utenti reali. V1 è l'obiettivo attuale.",
    roadmapPhases: [
      {
        version: "V1", title: "Core Field Service", status: "active", label: "In sviluppo", color: "#C5D86D",
        features: ["Anagrafica clienti", "Gestione impianti", "Richieste di assistenza", "Work order & assegnazione tecnici", "App mobile tecnico", "Checklist intervento", "Rapportini digitali con firma"],
      },
      {
        version: "V2", title: "Operazioni HVAC", status: "planned", label: "Pianificato", color: "#0EA5E9",
        features: ["Contratti di manutenzione", "Programmazione manutenzioni", "Magazzino centralizzato", "Stock furgoni", "Gestione dati tecnici impianti", "Portale cliente"],
      },
      {
        version: "V3", title: "Intelligenza operativa", status: "future", label: "Futuro", color: "#8B5CF6",
        features: ["AI per rapportini vocali", "Assistente AI operativo", "Smart scheduling", "Comunicazioni automatiche cliente", "Analytics & dashboard avanzata"],
      },
      {
        version: "V4", title: "Espansione verticale", status: "future", label: "Visione", color: "#F59E0B",
        features: ["Idraulica", "Impianti elettrici", "Refrigerazione commerciale", "Energie rinnovabili / fotovoltaico", "Field service generalista"],
      },
    ],
  },
};
