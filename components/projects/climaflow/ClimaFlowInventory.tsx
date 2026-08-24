"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, TrendingDown, AlertTriangle } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

const WAREHOUSE = [
  { name: "Gas R32",              unit: "kg",  total: 15, low: false },
  { name: "Gas R410A",            unit: "kg",  total: 8,  low: true  },
  { name: "Universal air filters",unit: "pcs", total: 42, low: false },
  { name: "Split condensers 9k",  unit: "pcs", total: 18, low: false },
  { name: "NTC temp sensors",     unit: "pcs", total: 11, low: false },
  { name: "Expansion valves",     unit: "pcs", total: 4,  low: true  },
];

const VANS = [
  { tech: "Marco", items: [{ name: "Gas R32", qty: "3 kg", low: false }, { name: "Air filters", qty: "8 pcs", low: false }, { name: "Condensers", qty: "2 pcs", low: false }] },
  { tech: "Paolo", items: [{ name: "Gas R32", qty: "1 kg", low: true  }, { name: "Gas R410A",   qty: "2 kg", low: false }, { name: "Air filters",qty: "5 pcs", low: false }] },
  { tech: "Sofia", items: [{ name: "Gas R32", qty: "4 kg", low: false }, { name: "NTC sensors", qty: "3 pcs", low: false }, { name: "Valves",      qty: "1 pcs", low: true  }] },
];

export default function ClimaFlowInventory() {
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.inventoryEyebrow} heading={cf.inventoryHeading} subheading={cf.inventorySubheading} theme="dark" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Warehouse */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <Package size={16} className="text-dark/50" />
              <p className="font-display font-semibold text-sm text-dark">{cf.inventoryWarehouseTitle}</p>
            </div>
            <div className="rounded-2xl border border-dark/10 overflow-hidden bg-white shadow-sm">
              <div className="divide-y divide-dark/6">
                {WAREHOUSE.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 px-5 py-3.5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <p className="font-body text-sm font-semibold text-dark/80 truncate">{item.name}</p>
                        {item.low && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body text-xs font-semibold flex-shrink-0" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#EF4444" }}>
                            <AlertTriangle size={9} />{cf.inventoryLowStockLabel}
                          </span>
                        )}
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-dark/8 overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (item.total / 50) * 100)}%`, backgroundColor: item.low ? "#EF4444" : "#C5D86D" }} />
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={cn("font-display font-bold text-base", item.low ? "text-red-500" : "text-dark")}>{item.total}</span>
                      <span className="font-body text-xs text-dark/35 ml-1">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Van stocks */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-dark/50" />
              <p className="font-display font-semibold text-sm text-dark">{cf.inventoryVansTitle}</p>
            </div>
            {VANS.map((van) => (
              <motion.div key={van.tech} variants={fadeUp} className="rounded-2xl border border-dark/10 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-dark/6">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(197,216,109,0.15)" }}>
                    <span className="font-display font-bold text-xs" style={{ color: "#C5D86D" }}>{van.tech[0]}</span>
                  </div>
                  <p className="font-display font-semibold text-sm text-dark">{cf.inventoryVanLabel} {van.tech}</p>
                </div>
                <div className="divide-y divide-dark/6">
                  {van.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between px-5 py-2.5">
                      <p className="font-body text-sm text-dark/65">{item.name}</p>
                      <span className={cn("font-body text-sm font-semibold", item.low ? "text-red-500" : "text-dark/70")}>
                        {item.qty}{item.low && <AlertTriangle size={11} className="inline ml-1 text-red-400" />}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 rounded-2xl border border-dark/10 bg-dark px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(197,216,109,0.12)" }}>
            <TrendingDown size={18} style={{ color: "#C5D86D" }} />
          </div>
          <div className="flex-1">
            <p className="font-display font-semibold text-sm text-light mb-0.5">{cf.inventoryAutoTitle}</p>
            <p className="font-body text-sm text-light/45 leading-relaxed">{cf.inventoryAutoBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
