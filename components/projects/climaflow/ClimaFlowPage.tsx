"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClimaFlowHero from "./ClimaFlowHero";
import ClimaFlowProblem from "./ClimaFlowProblem";
import ClimaFlowVision from "./ClimaFlowVision";
import ClimaFlowDashboard from "./ClimaFlowDashboard";
import ClimaFlowTechnician from "./ClimaFlowTechnician";
import ClimaFlowEquipment from "./ClimaFlowEquipment";
import ClimaFlowReports from "./ClimaFlowReports";
import ClimaFlowMaintenance from "./ClimaFlowMaintenance";
import ClimaFlowInventory from "./ClimaFlowInventory";
import ClimaFlowAI from "./ClimaFlowAI";
import ClimaFlowBeforeAfter from "./ClimaFlowBeforeAfter";
import ClimaFlowWhyThis from "./ClimaFlowWhyThis";
import ClimaFlowMarket from "./ClimaFlowMarket";
import ClimaFlowRoadmap from "./ClimaFlowRoadmap";
import ClimaFlowCTA from "./ClimaFlowCTA";

export default function ClimaFlowPage() {
  return (
    <>
      <Header />
      <main>
        <ClimaFlowHero />
        <ClimaFlowProblem />
        <ClimaFlowVision />
        <ClimaFlowDashboard />
        <ClimaFlowTechnician />
        <ClimaFlowEquipment />
        <ClimaFlowReports />
        <ClimaFlowMaintenance />
        <ClimaFlowInventory />
        <ClimaFlowAI />
        <ClimaFlowBeforeAfter />
        <ClimaFlowWhyThis />
        <ClimaFlowMarket />
        <ClimaFlowRoadmap />
        <ClimaFlowCTA />
      </main>
      <Footer />
    </>
  );
}
