"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Clock, AlertCircle, Wrench, ChevronRight,
  Calendar, BarChart2, RefreshCw, Zap,
} from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type Tab = "overview" | "schedule" | "maintenance";

const STAT_ICONS = [Wrench, Clock, CheckCircle2, AlertCircle];
const STAT_COLORS = ["#C5D86D", "#F59E0B", "#10B981", "#EF4444"];
const STAT_BGS = ["rgba(197,216,109,0.12)", "rgba(245,158,11,0.12)", "rgba(16,185,129,0.12)", "rgba(239,68,68,0.12)"];
const STAT_VALUES = ["17", "4", "11", "27"];

const SCHEDULE = [
  {
    tech: "Marco",
    jobs: [
      { time: "09:00", client: "Mario Rossi",       status: "done",    address: "Via Roma 42, Milano" },
      { time: "11:30", client: "Hotel Milano",       status: "active",  address: "Corso Como 10, Milano" },
      { time: "14:00", client: "Studio Ferretti",    status: "pending", address: "Via Torino 8, Milano" },
    ],
  },
  {
    tech: "Paolo",
    jobs: [
      { time: "10:00", client: "Luca Bianchi",       status: "done",    address: "Via Garibaldi 5, Milano" },
      { time: "13:30", client: "Farmacia Centrale",  status: "active",  address: "Piazza Duomo 1, Milano" },
      { time: "15:00", client: "Rossi Immobiliare",  status: "pending", address: "Viale Monza 12, Milano" },
    ],
  },
  {
    tech: "Sofia",
    jobs: [
      { time: "08:30", client: "Ristorante Aurora",  status: "done",    address: "Via Brera 4, Milano" },
      { time: "12:00", client: "Condominio Verde",   status: "done",    address: "Via Padova 33, Milano" },
      { time: "16:00", client: "TechCo Srl",         status: "pending", address: "Via Sammartini 1, Milano" },
    ],
  },
];

const MAINTENANCE_UPCOMING = [
  { client: "Mario Rossi",              equipment: "Daikin FTXM35R",       due: "28 ago 2026", days: 6,  urgency: "soon" },
  { client: "Hotel Milano (piano 1)",   equipment: "Mitsubishi MSZ-LN50",  due: "30 ago 2026", days: 8,  urgency: "soon" },
  { client: "Studio Legale Ferretti",   equipment: "LG S12EQ",             due: "02 set 2026", days: 11, urgency: "normal" },
  { client: "Farmacia Centrale",        equipment: "Daikin FTXM25R",       due: "05 set 2026", days: 14, urgency: "normal" },
  { client: "Condominio Verde",         equipment: "Mitsubishi MSZ-HR25VF",due: "10 set 2026", days: 19, urgency: "normal" },
];

const STATUS_DOT: Record<string, string> = {
  done: "bg-emerald-400", active: "bg-amber-400 animate-pulse", pending: "bg-light/25",
};

export default function ClimaFlowDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  const TABS: { id: Tab; label: string; short: string; icon: React.ElementType }[] = [
    { id: "overview",    label: cf.dashboardTabOverview,    short: cf.dashboardTabOverview,      icon: BarChart2 },
    { id: "schedule",    label: cf.dashboardTabSchedule,    short: cf.dashboardTabScheduleShort, icon: Calendar },
    { id: "maintenance", label: cf.dashboardTabMaintenance, short: cf.dashboardTabMaintenanceShort, icon: RefreshCw },
  ];

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <SectionHeading eyebrow={cf.dashboardEyebrow} heading={cf.dashboardHeading} subheading={cf.dashboardSubheading} theme="light" />
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-light/8" style={{ backgroundColor: "#0A140A" }}>
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-amber-500/70" /><div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex-1 mx-3">
              <div className="bg-light/5 rounded-md px-3 py-1 text-center w-full max-w-xs mx-auto">
                <span className="font-body text-xs text-light/30">app.climaflow.io/dashboard</span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[480px] md:min-h-[540px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-48 border-r border-light/8 py-4 px-3 gap-1 flex-shrink-0" style={{ backgroundColor: "#0A140A" }}>
              <div className="flex items-center gap-2 px-2 pb-4 mb-2 border-b border-light/8">
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2C7 2 4 4.5 4 7.5a3 3 0 0 0 6 0C10 4.5 7 2 7 2Z" fill="white" opacity="0.9" /></svg>
                </div>
                <span className="font-display font-semibold text-sm text-light">ClimaFlow</span>
              </div>
              {cf.dashboardSidebarLinks.map((label, i) => (
                <button key={label} className={cn("text-left px-3 py-2 rounded-lg font-body text-xs transition-colors", i === 0 ? "bg-brand-accent/15 text-brand-accent font-semibold" : "text-light/45 hover:text-light/70")}>
                  {label}
                </button>
              ))}
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Tabs */}
              <div className="flex items-center gap-1 px-4 md:px-6 pt-4 pb-0 border-b border-light/8">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={cn("flex items-center gap-1.5 px-3 py-2.5 font-body text-xs font-semibold border-b-2 transition-all duration-200 -mb-px",
                        activeTab === tab.id ? "border-brand-accent text-brand-accent" : "border-transparent text-light/40 hover:text-light/60")}>
                      <Icon size={12} />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.short}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="flex-1 p-4 md:p-6 overflow-auto">
                {activeTab === "overview" && (
                  <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {STAT_VALUES.map((value, i) => {
                        const Icon = STAT_ICONS[i];
                        return (
                          <div key={i} className="rounded-xl border border-light/8 p-4" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: STAT_BGS[i] }}>
                              <Icon size={15} style={{ color: STAT_COLORS[i] }} />
                            </div>
                            <p className="font-display font-bold text-2xl md:text-3xl text-light leading-none">{value}</p>
                            <p className="font-body text-xs text-light/45 mt-1">{cf.dashboardStatLabels[i]}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 flex items-center gap-3">
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                      <p className="font-body text-sm text-light/80">
                        <span className="font-semibold text-red-400">27 {cf.dashboardMaintenanceCount}</span> {cf.dashboardAlertText}
                      </p>
                      <button className="ml-auto font-body text-xs text-brand-accent font-semibold hover:underline flex-shrink-0">{cf.dashboardAlertCta}</button>
                    </div>
                    <div className="rounded-xl border border-light/8 p-4" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                      <p className="font-body text-xs uppercase tracking-widest text-light/30 font-semibold mb-3">{cf.dashboardActivityTitle}</p>
                      <div className="flex flex-col gap-2">
                        {[{ time: "11:42", type: "done" }, { time: "10:15", type: "alert" }, { time: "09:03", type: "active" }].map((item, i) => (
                          <div key={item.time} className="flex items-start gap-3">
                            <span className="font-body text-xs text-light/30 w-10 flex-shrink-0 pt-0.5">{item.time}</span>
                            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", item.type === "done" ? "bg-emerald-400" : item.type === "alert" ? "bg-red-400" : "bg-amber-400")} aria-hidden="true" />
                            <p className="font-body text-xs text-light/60">{cf.dashboardActivityItems[i]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "schedule" && (
                  <motion.div key="schedule" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex flex-col gap-4">
                    <p className="font-body text-xs text-light/40">{cf.dashboardScheduleDate}</p>
                    {SCHEDULE.map((row) => (
                      <div key={row.tech} className="rounded-xl border border-light/8 p-4" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-full bg-brand-accent/20 flex items-center justify-center">
                            <span className="font-display font-bold text-xs text-brand-accent">{row.tech[0]}</span>
                          </div>
                          <p className="font-display font-semibold text-sm text-light">{row.tech}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          {row.jobs.map((job) => (
                            <div key={job.time + job.client} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                              <span className="font-body text-xs text-light/35 w-10 flex-shrink-0">{job.time}</span>
                              <span className={cn("w-2 h-2 rounded-full flex-shrink-0", STATUS_DOT[job.status])} aria-hidden="true" />
                              <div className="flex-1 min-w-0">
                                <p className="font-body text-xs font-semibold text-light/85 truncate">{job.client}</p>
                                <p className="font-body text-xs text-light/40 truncate">{job.address}</p>
                              </div>
                              <ChevronRight size={12} className="text-light/20 flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "maintenance" && (
                  <motion.div key="maintenance" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <p className="font-body text-sm text-light/70"><span className="font-semibold text-red-400">27</span> {cf.dashboardMaintenanceCount}</p>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body text-xs font-semibold" style={{ backgroundColor: "rgba(197,216,109,0.15)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.2)" }}>
                        <Zap size={11} />{cf.dashboardGenerateBtn}
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      {MAINTENANCE_UPCOMING.map((item) => (
                        <div key={item.client} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-light/8" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                          <div className={cn("w-2 h-2 rounded-full flex-shrink-0", item.urgency === "soon" ? "bg-red-400" : "bg-amber-400/60")} aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                            <p className="font-body text-xs font-semibold text-light/80 truncate">{item.client}</p>
                            <p className="font-body text-xs text-light/40 truncate">{item.equipment}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="font-body text-xs text-light/50">{item.due}</p>
                            <p className={cn("font-body text-xs font-semibold", item.urgency === "soon" ? "text-red-400" : "text-amber-400")}>{item.days}d</p>
                          </div>
                        </div>
                      ))}
                      <p className="font-body text-xs text-light/25 text-center pt-1">{cf.dashboardMoreClients}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center font-body text-sm text-light/30 mt-5">
          {cf.dashboardCaption}
        </motion.p>
      </div>
    </section>
  );
}
