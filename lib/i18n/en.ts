// ─── English dictionary ──────────────────────────────────────────────────────
// Single source of truth for all EN copy. Keys mirror the IT dictionary 1:1.

export const en = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    techStack: "Tech Stack",
    about: "About",
    contact: "Contact",
    bookCall: "Book a call",
    langToggleLabel: "Switch to Italian",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Based in Lahore, Pakistan · Working with clients globally.",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Full-Stack Engineer · Since 2018",
    headline: "Production software for founders who can't afford to get it wrong.",
    body: "I'm a full-stack engineer who partners directly with premium clients (no account managers, no offshore bench) to design and build web, mobile, and AI-powered products end to end.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See the work",
  },

  // ── ProofBar (stats) ─────────────────────────────────────────────────────────
  stats: [
    { id: "since",    value: "2018",                  label: "Building production software since" },
    { id: "breadth",  value: "Web · Mobile · AI",     label: "Full-stack breadth, one engineer" },
    { id: "response", value: "<24h",                  label: "Typical response time" },
    { id: "model",    value: "Fixed-scope or retainer", label: "Engagement model" },
  ],

  // ── Services ─────────────────────────────────────────────────────────────────
  services: {
    eyebrow: "WHAT I BUILD",
    heading: "Four ways to work with a senior engineer, not an agency queue.",
    items: [
      {
        id: "web",
        title: "Web Application Development",
        description:
          "Production-grade web apps built for scale from day one, not a prototype that needs a rewrite in six months.",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
      },
      {
        id: "mobile",
        title: "Mobile App Development",
        description:
          "Native-feel apps shipped to iOS and Android from a single codebase, without sacrificing performance.",
        tech: ["React Native", "Expo"],
      },
      {
        id: "ai",
        title: "AI & Automation Integration",
        description:
          "Agentic workflows and AI-powered product features that actually ship to production and hold up under real usage.",
        tech: ["OpenAI API", "Agentic Workflows"],
      },
      {
        id: "full-build",
        title: "Full Product Builds (0→1)",
        description:
          "Idea to launched product, architecture, implementation, and handoff, built and owned by one engineer throughout.",
        tech: ["Full stack", "Your choice of infra"],
      },
    ],
  },

  // ── Portfolio ─────────────────────────────────────────────────────────────────
  portfolio: {
    eyebrow: "SELECTED WORK",
    heading: "What gets built when scope is real.",
    subheading:
      "Anonymized by design, a real client roster is on the way. Every project below reflects the kind of work actually shipped: problem, build, and outcome.",
    labelProblem: "Problem",
    labelBuild: "Built",
    labelOutcome: "Outcome",
    items: [
      {
        id: "arvo",
        category: "EdTech LMS Platform",
        client: "ARVO",
        url: "https://arvo.com.pk",
        problem:
          "Pakistan's education sector lacked a unified digital platform that could serve students, teachers, schools, and parents in one place without the complexity of enterprise tools.",
        build:
          "Full-stack LMS with role-based dashboards for students, teachers, school admins, and parents. Digital textbooks, assignment management, progress tracking, and real-time notifications — all in a single product.",
        outcome:
          "Deployed across schools in Pakistan, actively engaging students in 11th and 12th grade curricula through a modern digital learning experience.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "React Native"],
      },
      {
        id: "whatever-ai",
        category: "AI Creative Suite",
        client: "Whatever AI",
        url: "https://www.whatever-ai.com",
        problem:
          "Creators and everyday users needed a single tool to generate images, edit photos, remove backgrounds, and create music — without juggling five separate AI apps.",
        build:
          "All-in-one AI platform with multiple content generation tools under one roof: AI image generation, photo editing, background removal, and music creation. Built for fast, simple UX with no learning curve.",
        outcome:
          "Live and serving users globally, with a growing suite of free AI tools and a clear freemium-to-paid conversion path.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
      {
        id: "supervise",
        category: "Team Productivity SaaS",
        client: "Supervise",
        url: "https://www.supervise.work",
        problem:
          "Engineering and remote teams were wasting hours on manual standups and check-ins with no factual data on who was actually doing what across GitHub, Figma, Google Docs, and other tools.",
        build:
          "Multi-app productivity tracker that integrates with the tools teams already use. Unified activity dashboard, per-person performance breakdowns, productivity timelines, and cost-per-project analytics — all automated.",
        outcome:
          "Used by teams to replace standups entirely, with clear visibility into output across every integrated app without manual reporting.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "OAuth Integrations"],
      },
      {
        id: "graana",
        category: "Real Estate Marketplace",
        client: "Graana",
        url: "https://www.graana.com",
        problem:
          "Pakistan's real estate market was opaque, fragmented, and driven by word-of-mouth — buyers and investors had no reliable digital platform to search, compare, and transact on properties.",
        build:
          "Pakistan's first large-scale online real estate marketplace with property listings across all major cities, smart search, investment project showcases, and a mobile app delivering the full experience natively.",
        outcome:
          "One of Pakistan's most trusted property portals, with listings in every major city and a mobile app rated highly on the App Store.",
        stack: ["React", "Node.js", "PostgreSQL", "React Native", "Maps API"],
      },
    ],
  },

  // ── TechStack ─────────────────────────────────────────────────────────────────
  techStack: {
    eyebrow: "THE STACK",
    heading: "A deep, current stack, not a badge wall.",
  },

  // ── Process ───────────────────────────────────────────────────────────────────
  process: {
    eyebrow: "HOW WE'D WORK TOGETHER",
    heading: "A clear process, scoped to what you're actually building.",
    items: [
      {
        id: "discovery",
        phase: "01",
        title: "Discovery",
        description:
          "We talk through what you're building, who it's for, and what success looks like, no scope guessing.",
      },
      {
        id: "scope",
        phase: "02",
        title: "Scope & Architecture",
        description:
          "You get a clear technical plan and a scoped quote before any code is written.",
      },
      {
        id: "build",
        phase: "03",
        title: "Build, with Regular Checkpoints",
        description:
          "Development happens in the open, regular check-ins so you always know where things stand.",
      },
      {
        id: "qa",
        phase: "04",
        title: "QA & Handoff",
        description:
          "Testing, review, and a clean handoff with full code ownership, nothing held back.",
      },
      {
        id: "support",
        phase: "05",
        title: "Ongoing Support (Optional)",
        description:
          "Move into a retainer for continued development, or take the finished product and run with it.",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────────
  about: {
    eyebrow: "ABOUT",
    heading: "Started self-taught in 2018. Still writing every line.",
    paragraphs: [
      "I've been building production software since 2018, full-stack, end to end, across web, mobile, and, more recently, AI-powered products.",
      "I work directly with founders and teams who need a senior engineer they can talk to, not a project manager relaying messages from an offshore bench. Every project I take on, I architect, build, and ship myself.",
    ] as [string, string],
  },

  // ── Differentiators ───────────────────────────────────────────────────────────
  differentiators: {
    eyebrow: "WHY IT'S DIFFERENT",
    heading: "One senior engineer. No layers.",
    items: [
      {
        id: "ownership",
        title: "Senior-level ownership",
        description:
          "You're not routed through juniors. The person scoping your project is the person shipping it.",
      },
      {
        id: "direct",
        title: "Direct communication",
        description:
          "You talk to the engineer building your product, not a project manager relaying messages.",
      },
      {
        id: "ai-native",
        title: "AI-native, production-grade",
        description:
          "Modern engineering practices and AI tooling, applied with the discipline of shipped, maintained software.",
      },
    ],
  },

  // ── Pricing ───────────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "ENGAGEMENT MODELS",
    heading: "Three ways to engage, no flat number upfront.",
    subheading:
      "Every premium engagement is scoped after a call, here's the shape each one typically takes.",
    mostCommon: "Most common",
    bookCall: "Book a call",
    items: [
      {
        id: "project",
        name: "Project Engagement",
        whoFor: "A defined product or feature with a clear finish line.",
        includes: [
          "Fixed-scope build",
          "Custom quote after a scoping call",
          "Full code ownership on handoff",
        ],
        highlighted: false,
      },
      {
        id: "partnership",
        name: "Ongoing Partnership",
        whoFor: "Continued development, iteration, and feature work post-launch.",
        includes: [
          "Monthly retainer",
          "Priority response time",
          "Direct access, no account manager",
        ],
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Enterprise / Complex Builds",
        whoFor: "Multi-platform, AI-heavy, or compliance-sensitive builds.",
        includes: [
          "Custom scope and timeline",
          "Architecture-first engagement",
          "Web, mobile, and AI in one build",
        ],
        highlighted: false,
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "CLIENT RESULTS",
    heading: "Trusted by founders who ship.",
    openSlotHeading: "Your review could be next.",
    openSlotBody:
      "If you've worked with me and found the experience worth talking about, I'd love to hear it. Real words from real clients matter more than any pitch.",
    openSlotCta: "Book a call to get started",
    items: [
      {
        id: "pietro-gadaleta",
        quote:
          "Ismail delivered exactly what we needed; clean, fast, production-ready code with no back-and-forth. He understood the brief immediately and shipped work that genuinely elevated how our agency presents itself online. Rare to find an engineer who thinks about the product, not just the task.",
        authorName: "Pietro Gadaleta",
        authorRole: "Founder",
        company: "Agenzia Grafica Milano",
        companyUrl: "https://www.agenziagraficamilano.it",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "QUESTIONS",
    heading: "Before you book a call.",
    items: [
      {
        id: "who",
        question: "Who do you typically work with?",
        answer:
          "Founders, funded startups, and established businesses who need production-grade software built by a senior engineer, not a slow agency or a scattered freelancer bench.",
      },
      {
        id: "ownership",
        question: "How does IP and code ownership work?",
        answer:
          "You own everything on handoff, full source code, infrastructure access, and documentation. No vendor lock-in.",
      },
      {
        id: "timeline",
        question: "What's a realistic timeline?",
        answer:
          "It depends on scope. A focused feature might take a couple of weeks; a full 0→1 product build is typically measured in months. You'll get a clear estimate after the scoping call.",
      },
      {
        id: "stack",
        question: "Are you flexible on tech stack?",
        answer:
          "I default to the stack listed on this site because it's what I know best and can move fastest in, but I'll work within an existing codebase or a required stack when the project calls for it.",
      },
      {
        id: "communication",
        question: "How does communication work during the build?",
        answer:
          "Direct, regular check-ins with me, not a project manager relaying updates. Typical response time is under 24 hours.",
      },
      {
        id: "premium",
        question: "What does \"premium\" mean in scope?",
        answer:
          "Production-grade code, thoughtful architecture, and a build that's meant to be maintained and scaled, not a proof-of-concept meant to be thrown away.",
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Have a project in mind?",
    subheading:
      "Book a short call, or send a few details below. I respond to every message myself, usually within a day.",
    bookCall: "Book a call",
    form: {
      labelName: "Name",
      labelEmail: "Email",
      labelProjectType: "Project type",
      labelMessage: "Message",
      placeholder: "Select one",
      options: [
        { value: "Web application",          label: "Web application" },
        { value: "Mobile app",               label: "Mobile app" },
        { value: "AI & automation",          label: "AI & automation" },
        { value: "Full product build (0→1)", label: "Full product build (0→1)" },
        { value: "Not sure yet",             label: "Not sure yet" },
      ],
      submit: "Send message",
      submitting: "Sending…",
      successMessage:
        "Thanks, your email client should have opened with your message ready to send. If it didn't, reach out directly at",
      errorName: "Enter your name",
      errorEmail: "Enter a valid email",
      errorProjectType: "Select a project type",
      errorMessage: "Give a bit more detail (10+ characters)",
    },
  },

  // ── ClimaFlow page ────────────────────────────────────────────────────────────
  climaflow: {
    // Navigation chrome
    backToWork: "Back to work",
    scrollIndicator: "Scroll to explore the product",
    dashboardCaption: "Interactive mockup — sample data",
    aiDisclaimer:
      "AI in ClimaFlow is an operational tool, not the primary interface. The technician works with checklists and forms; AI fills in the fields, generates text, and answers questions.",

    // Hero section
    heroEyebrow: "Product · In Development",
    heroTaglinePart1: "Less calls. Less Excel.",
    heroTaglinePart2: "More jobs.",
    heroDescription:
      "A mobile-first management platform I am designing to help Italian HVAC companies manage customers, technicians, jobs and maintenance in one place.",

    // Hero meta labels & values
    metaRoleLabel: "Role",
    metaRoleValue: "Product Design · Engineering",
    metaMarketLabel: "Market",
    metaMarketValue: "Italy",
    metaIndustryLabel: "Industry",
    metaIndustryValue: "HVAC / Field Service",
    metaStatusLabel: "Status",
    metaStatusValue: "In Development",

    // CTA section
    ctaEyebrow: "In Development",
    ctaHeadline: "I'm building ClimaFlow for the Italian market.",
    ctaDescription:
      "If you run an HVAC company or work in the technical service sector, I'd love to understand how you manage your field work today. Every conversation helps build a product that solves real problems.",
    ctaPrimary: "Let's talk",
    ctaSecondary: "Back to projects",
    ctaFooterNote:
      "This is a product I'm designing and building personally.\nNo sales team, no CRM — I respond directly.",

    // ── Problem section ───────────────────────────────────────────────────────
    problemEyebrow: "THE PROBLEM",
    problemHeading: "The problem isn't the work. It's everything around it.",
    problemSubheading: "Italian HVAC companies are skilled and operational. But they coordinate everything with tools built for other purposes.",
    problemFrictionLabel: "Too much operational friction",
    problemOutcomeLabel: "The concrete result",
    problemTools: [
      { label: "WhatsApp",              desc: "Requests scattered across hundreds of chats",    color: "#25D366" },
      { label: "Excel",                 desc: "Outdated spreadsheets, conflicting versions",     color: "#217346" },
      { label: "Phone calls",           desc: "Verbal agreements, nothing in writing",           color: "#0EA5E9" },
      { label: "Paper",                 desc: "Manual reports, illegible or lost",               color: "#F59E0B" },
      { label: "Scattered photos",      desc: "Phone gallery with no context",                   color: "#8B5CF6" },
      { label: "Forgotten maintenance", desc: "Missed deadlines, dissatisfied clients",          color: "#EF4444" },
    ],
    problemPainPoints: [
      "The technician doesn't know where to find the equipment history",
      "The manager doesn't know where his technicians are",
      "Maintenance deadlines pass with nobody acting on them",
      "The service report is filled hours after the job, from memory",
      "Parts used are not consistently recorded",
      "Customer data lives across three different tools",
    ],

    // ── Vision section ────────────────────────────────────────────────────────
    visionEyebrow: "THE VISION",
    visionHeading: "One system for all field operations.",
    visionSubheading: "From the first customer call to the digital archive of jobs, ClimaFlow connects every part of the process in a single flow.",
    visionSteps: [
      { label: "Customer",    desc: "Records, contacts, equipment" },
      { label: "Equipment",   desc: "Model, refrigerant, history" },
      { label: "Request",     desc: "Support ticket, priority" },
      { label: "Technician",  desc: "Assignment, navigation" },
      { label: "Job",         desc: "Checklist, photos, parts, signature" },
      { label: "Maintenance", desc: "Automatic scheduling" },
    ],
    visionCalloutQuote: "From the first request to the completed service report,",
    visionCalloutEmphasis: "everything in one place.",
    visionCalloutSub: "No more jumping between apps. Every piece of information is exactly where you expect it.",

    // ── Dashboard section ─────────────────────────────────────────────────────
    dashboardEyebrow: "OPERATIONS DASHBOARD",
    dashboardHeading: "Control of the entire business in a single screen.",
    dashboardSubheading: "The manager sees what is happening now, what has been completed, and what risks being overlooked.",
    dashboardTabOverview: "Overview",
    dashboardTabSchedule: "Schedule",
    dashboardTabMaintenance: "Maintenance",
    dashboardTabScheduleShort: "Agenda",
    dashboardTabMaintenanceShort: "Maint.",
    dashboardSidebarLinks: ["Dashboard", "Customers", "Equipment", "Jobs", "Technicians", "Maintenance", "Inventory", "Reports"],
    dashboardStatLabels: ["Jobs today", "In progress", "Completed", "Maint. due"],
    dashboardAlertText: "maintenance deadlines in the next 30 days.",
    dashboardAlertCta: "Generate jobs →",
    dashboardActivityTitle: "Recent activity",
    dashboardActivityItems: [
      "Marco completed the job at Hotel Milano",
      "New request from Farmacia Centrale — urgent",
      "Sofia started the job at Ristorante Aurora",
    ],
    dashboardScheduleDate: "Today — Saturday 22 August 2026",
    dashboardMaintenanceCount: "maintenance deadlines",
    dashboardGenerateBtn: "Generate jobs",
    dashboardMoreClients: "+ 22 more clients due",
    dashboardMoreClientsSchedule: "+ 20 more clients",

    // ── Technician section ────────────────────────────────────────────────────
    technicianEyebrow: "TECHNICIAN APP",
    technicianHeading: "The software should follow the technician, not the other way around.",
    technicianSubheading: "The ClimaFlow mobile app is designed to work on-site: one hand free, weak signal, gloves on.",
    technicianSteps: [
      { step: "01", title: "See your jobs for the day",     desc: "Ordered list by time, with client, address and job type. No phone call needed to know where to go." },
      { step: "02", title: "Navigate and call from the app", desc: "One tap to open Maps, one to call the client. The equipment history is always at hand." },
      { step: "03", title: "Fill the checklist on-site",     desc: "Guided steps specific to the job type. Integrated photos, voice notes, no margin for error." },
      { step: "04", title: "Close the job with the client's signature", desc: "The digital report is generated automatically. The client signs on screen. Zero paper, zero delays." },
    ],
    technicianScreenLabels: {
      jobs: "My jobs",
      detail: "Job detail",
      checklist: "Checklist",
      report: "Close job",
    },
    technicianTodayLabel: "Today — 3 jobs assigned",
    technicianInProgressLabel: "In progress",
    technicianBackLabel: "Go back",
    technicianClientLabel: "Client",
    technicianEquipmentLabel: "Equipment",
    technicianProblemLabel: "Reported problem",
    technicianProblemText: "AC not cooling, unusual noise on start-up",
    technicianCallBtn: "Call",
    technicianNavigateBtn: "Navigate",
    technicianStartBtn: "Start",
    technicianChecklistLabel: "Job checklist",
    technicianPhotoBtn: "Photo",
    technicianVoiceBtn: "Voice note",
    technicianCloseBtn: "Close",
    technicianMaterialsLabel: "Materials used",
    technicianNotesLabel: "Technician notes",
    technicianNotesText: "Filter replaced, R32 gas recharged. Equipment now working correctly.",
    technicianSignatureLabel: "Client signature",
    technicianSignatureAriaLabel: "Client signature",
    technicianSendBtn: "Send report",
    technicianChecklistItems: [
      { id: "filtri",    label: "Filter check",             done: true },
      { id: "scarico",   label: "Condensate drain check",   done: true },
      { id: "pressione", label: "Refrigerant pressure check", done: true },
      { id: "elettrico", label: "Electrical connections",   done: false },
      { id: "test",      label: "Final function test",       done: false },
    ],
    technicianJobsList: [
      { time: "09:00", client: "Mario Rossi",   issue: "AC not cooling",      addr: "Via Roma 42, Milano",    status: "active" },
      { time: "11:30", client: "Hotel Milano",  issue: "Annual maintenance",   addr: "Corso Como 10, Milano",  status: "pending" },
      { time: "14:00", client: "Studio Ferretti", issue: "New installation",  addr: "Via Torino 8, Milano",   status: "pending" },
    ],

    // ── Equipment section ─────────────────────────────────────────────────────
    equipmentEyebrow: "EQUIPMENT MANAGEMENT",
    equipmentHeading: "Every system has a history. ClimaFlow remembers it.",
    equipmentSubheading: "Model, refrigerant, install date, service history — all linked to the customer, accessible in 2 seconds.",
    equipmentTabOverview: "Overview",
    equipmentTabHistory: "History",
    equipmentTabDocs: "Documents",
    equipmentUnitLabel: "Equipment",
    equipmentUnitType: "Split inverter unit — 3.5 kW",
    equipmentActiveLabel: "Active",
    equipmentClientLabel: "Customer",
    equipmentHistoryCount: "4 recorded jobs",
    equipmentTechnicianLabel: "Technician",
    equipmentSpecLabels: ["Installed", "Refrigerant", "Last service", "Next service"],
    equipmentNoteLabel: "Technical notes",
    equipmentHistoryItems: [
      { date: "12/05/2026", type: "Maintenance", tech: "Marco", notes: "Filter cleaning, R32 pressure check. All OK." },
      { date: "04/02/2026", type: "Repair",      tech: "Paolo", notes: "External condenser replaced. Gas recharged 0.2 kg." },
      { date: "18/08/2025", type: "Inspection",  tech: "Marco", notes: "Post-summer inspection. No anomalies detected." },
      { date: "14/06/2024", type: "Installation", tech: "Sofia", notes: "First installation. System commissioned." },
    ],
    equipmentValueProps: [
      { title: "Complete equipment history", desc: "Every technician arriving at a client already knows the equipment history — model, refrigerant, past jobs, technical notes." },
      { title: "Maintenance linked to the equipment", desc: "Maintenance deadlines are tied directly to the equipment. The system automatically alerts when the date approaches." },
      { title: "Documents always accessible", desc: "Manuals, warranties, PDF reports — all linked to the equipment and available offline on the technician's phone." },
      { title: "Structured technical data", desc: "Refrigerant type, quantity, charge date, serial number. Designed to organise equipment operational data in a structured way." },
    ],

    // ── Reports section ───────────────────────────────────────────────────────
    reportsEyebrow: "DIGITAL SERVICE REPORTS",
    reportsHeading: "The report is created on-site.",
    reportsSubheading: "No paper to fill in later that evening. The technician closes the job on the phone, the report is already generated.",
    reportsTitleLabel: "Service Report",
    reportsWorkDoneLabel: "Work performed",
    reportsMaterialsLabel: "Materials used",
    reportsPhotosLabel: "Attached photos",
    reportsNotesLabel: "Technician notes",
    reportsSignatureLabel: "Client signature",
    reportsGeneratePdfBtn: "Generate PDF",
    reportsFieldLabels: ["Customer", "Equipment", "Technician", "Date", "Start", "End"],
    reportsWorkItems: [
      "Internal and external air filter cleaning",
      "R32 gas pressure check and verification",
      "Electrical connections inspection",
      "Full function test",
      "Air filter replacement (1 unit)",
    ],
    reportsNotesText: "Equipment now working correctly. Filter replacement recommended at next annual maintenance.",
    reportsZeroPaperTitle: "Zero paper",
    reportsZeroPaperHeadline: "The report fills itself.",
    reportsZeroPaperBody: "Equipment data, checklist work, materials used, photos, signature — all aggregated automatically. The technician rewrites nothing.",
    reportsValueProps: [
      { title: "Sent to the client by email", desc: "The PDF goes out automatically when the job is closed. The client receives their copy in real time." },
      { title: "Automatically archived",      desc: "Every report is linked to the client, equipment and technician. Retrievable in 2 seconds." },
      { title: "Digital signature on screen", desc: "The client signs directly on the technician's phone. No printing, no scanning." },
    ],

    // ── Maintenance section ───────────────────────────────────────────────────
    maintenanceEyebrow: "PREVENTIVE MAINTENANCE",
    maintenanceHeading: "Don't wait for the client to call.",
    maintenanceSubheading: "ClimaFlow turns recurring maintenance into scheduled jobs — automatically, before the deadline.",
    maintenanceCardTitle: "Maintenance due",
    maintenanceTotalBadge: "27 total",
    maintenanceMoreClients: "+ 20 more clients",
    maintenanceGenerateBtn: "Generate jobs (27)",
    maintenanceGeneratingLabel: "Generating…",
    maintenanceGeneratedLabel: "Jobs generated",
    maintenanceCreatedLabel: "27 jobs created",
    maintenanceMoreDistributed: "+ 22 more distributed among technicians",
    maintenanceScheduledLabel: "Scheduled",
    maintenanceSystemAutoLabel: "System creates automatically",
    maintenanceValueProps: [
      { title: "No missed maintenance",             desc: "ClimaFlow tracks every maintenance contract and alerts with a configurable lead time." },
      { title: "Automatic distribution to technicians", desc: "The system assigns jobs based on availability and geographic area." },
      { title: "From 27 deadlines to 27 jobs in one click", desc: "What used to take hours of phone calls and Excel updates is resolved in seconds." },
    ],

    // ── Inventory section ─────────────────────────────────────────────────────
    inventoryEyebrow: "WAREHOUSE & VANS",
    inventoryHeading: "You always know what you have. And where it is.",
    inventorySubheading: "Central warehouse, each van's stock, automatic consumption at job close. Zero surprises on-site.",
    inventoryWarehouseTitle: "Central warehouse",
    inventoryVansTitle: "Van stock",
    inventoryVanLabel: "Van —",
    inventoryLowStockLabel: "low stock",
    inventoryAutoTitle: "Automatic consumption at job close",
    inventoryAutoBody: "When Marco closes a job and records 0.2 kg of R32, his van stock updates automatically. No sheet to fill, no storekeeper to notify.",

    // ── AI section ────────────────────────────────────────────────────────────
    aiEyebrow: "ARTIFICIAL INTELLIGENCE",
    aiHeading: "AI eliminates admin work.",
    aiSubheading: "AI isn't the product. It's a layer that makes every action faster, without adding complexity.",
    aiTab1: "Voice note → Report",
    aiTab2: "Operational assistant",
    aiVoiceNoteLabel: "Technician voice note",
    aiGeneratedReportLabel: "Generated report",
    aiGenerateBtn: "Generate report with AI",
    aiGeneratingLabel: "Transcribing…",
    aiGeneratedLabel: "Report generated",
    aiClickPrompt: "Click \"Generate report\" to see AI in action",
    aiWorkLabel: "Work performed",
    aiMaterialsLabel: "Materials detected",
    aiEditableNote: "Editable before sending",
    aiVoiceText: "I replaced the external condenser and cleaned the air filter. The R32 gas level was low, I recharged with 0.2 kg. The system is now working correctly, target temperature reached in 4 minutes.",
    aiReportLines: [
      "External condenser replaced.",
      "Air filter cleaned.",
      "R32 gas recharged: 0.2 kg.",
      "Function test completed successfully.",
      "Target temperature reached in 4 minutes.",
    ],
    aiMaterials: ["Split condenser 9k × 1", "Universal air filter × 1", "R32 gas × 0.2 kg"],
    aiChatMessages: [
      { role: "user", text: "Which maintenance jobs have expired this month?" },
      { role: "ai",  text: "27 clients have maintenance due before end of August 2026. Most urgent: Mario Rossi (6d), Hotel Milano P.1 & P.2 (8d), Studio Ferretti (11d). I can create the jobs and distribute them among Marco, Paolo and Sofia based on availability." },
      { role: "user", text: "Yes, create the jobs and assign them." },
      { role: "ai",  text: "✓ 27 jobs created and assigned. Marco: 10, Paolo: 9, Sofia: 8. First availability: tomorrow morning. Should I notify the clients by email?" },
    ],
    aiAssistantTitle: "ClimaFlow AI — Operational assistant",
    aiOnlineLabel: "Online",
    aiInputPlaceholder: "Ask something…",

    // ── BeforeAfter section ───────────────────────────────────────────────────
    beforeAfterEyebrow: "THE CHANGE",
    beforeAfterHeading: "The same work. Without the friction.",
    beforeAfterSubheading: "ClimaFlow doesn't add complexity — it removes the operational noise that already exists.",
    beforeAfterBeforeLabel: "Before",
    beforeAfterAfterLabel: "With ClimaFlow",
    beforeItems: [
      "WhatsApp for service requests",
      "Excel for technician planning",
      "Phone calls to coordinate work",
      "Handwritten paper reports",
      "Photos on the phone with no context",
      "Forgotten or delayed maintenance",
      "Equipment history scattered across multiple places",
      "Manually updated inventory",
    ],
    afterItems: [
      "Centralised requests with priority",
      "Visual scheduling with drag & drop",
      "Jobs assigned from the app in 10 seconds",
      "Digital reports generated automatically",
      "Photos linked to equipment and client",
      "Maintenance scheduled automatically",
      "Full history at hand on-site",
      "Materials consumption recorded automatically",
    ],

    // ── WhyThis section ───────────────────────────────────────────────────────
    whyThisEyebrow: "WHY IT'S DIFFERENT",
    whyThisHeading: "Four product principles.",
    whyThisSubheading: "It isn't the only management tool on the market. But it's the first designed explicitly around how an Italian HVAC company actually works.",
    whyThisPillars: [
      { title: "Mobile-first",  headline: "The technician works from their phone.",                    desc: "The app is designed for a real job site: small screen, gloves, no signal. Every action takes at most 3 taps. Works offline too." },
      { title: "HVAC-specific", headline: "Built for HVAC work, not adapted.",                        desc: "Refrigerants, annual maintenance, split systems, F-Gas — these are native product concepts, not custom fields bolted onto a generic CRM." },
      { title: "Simple",        headline: "No complicated ERP.",                                       desc: "ClimaFlow is designed for companies with 3–20 technicians who want to get more organised, not enterprise firms with a dedicated IT department." },
      { title: "Automated",     headline: "Less repetitive work.",                                     desc: "Maintenance scheduled automatically, reports generated from voice notes, stock updated at job close. The system works, not the manager." },
    ],

    // ── Market section ────────────────────────────────────────────────────────
    marketEyebrow: "MARKET OPPORTUNITY",
    marketHeading: "Why this product.",
    marketSubheading: "Direct market observation, not a desk analysis. I spoke with owners of Italian HVAC companies. Here is what emerged.",
    marketSignals: [
      { title: "A fragmented market",                    desc: "Italian HVAC and technical service companies are predominantly SMEs and tradespeople. They operate with high technical skill, but with still-analogue administrative processes." },
      { title: "Generic tools, specific problems",        desc: "Those who have already digitised use generic CRMs not designed for field service, or enterprise solutions too complex and expensive for companies with 5–15 technicians." },
      { title: "Demand for operational efficiency is growing", desc: "Margins are compressing, clients are more demanding, and administrative staff costs are rising. Companies are looking for ways to do more with the same resources." },
      { title: "Geographic distribution is an advantage", desc: "The Italian market is distributed: north, centre, south each have networks of small local companies. A vertical, Italian-language product can penetrate where international players struggle." },
    ],
    marketPerspectiveLabel: "My perspective",
    marketPerspectiveQuote: "I decided to build ClimaFlow because the problem is real, the market is ready for digitalisation, and the right solution doesn't exist yet.",
    marketPerspectiveBody: "There are large field service management platforms — Salesforce, ServiceTitan — but they are built for English-speaking markets, cost thousands of euros per month, and require complex implementations. On the other side there is Excel and WhatsApp. ClimaFlow sits in the middle: vertical, Italian, simple, accessible.",
    marketAuthor: "— Ismail, founder & designer",

    // ── Roadmap section ───────────────────────────────────────────────────────
    roadmapEyebrow: "ROADMAP",
    roadmapHeading: "From MVP to vertical platform.",
    roadmapSubheading: "Each phase adds value without making the product heavier. The goal is always the same: help field companies work better.",
    roadmapBottomNote: "The roadmap evolves with feedback from real users. V1 is the current objective.",
    roadmapPhases: [
      {
        version: "V1", title: "Core Field Service", status: "active", label: "In development", color: "#C5D86D",
        features: ["Customer records", "Equipment management", "Service requests", "Work orders & technician assignment", "Technician mobile app", "Job checklist", "Digital reports with signature"],
      },
      {
        version: "V2", title: "HVAC Operations", status: "planned", label: "Planned", color: "#0EA5E9",
        features: ["Maintenance contracts", "Maintenance scheduling", "Centralised warehouse", "Van stock", "Equipment technical data management", "Customer portal"],
      },
      {
        version: "V3", title: "Operational Intelligence", status: "future", label: "Future", color: "#8B5CF6",
        features: ["AI for voice reports", "AI operational assistant", "Smart scheduling", "Automated client communications", "Analytics & advanced dashboard"],
      },
      {
        version: "V4", title: "Vertical Expansion", status: "future", label: "Vision", color: "#F59E0B",
        features: ["Plumbing", "Electrical systems", "Commercial refrigeration", "Renewables / solar", "General field service"],
      },
    ],
  },
};

// ── Dictionary type ───────────────────────────────────────────────────────────
// Derived from the shape of the English dictionary but with all leaf strings
// widened to `string` so the Italian file can satisfy the same interface.
type LooseLeaves<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends ReadonlyArray<infer U>
    ? Array<LooseLeaves<U>>
    : LooseLeaves<T[K]>;
};

export type Dictionary = LooseLeaves<typeof en>;
