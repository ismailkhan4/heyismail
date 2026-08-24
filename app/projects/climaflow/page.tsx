import type { Metadata } from "next";
import ClimaFlowPage from "@/components/projects/climaflow/ClimaFlowPage";

export const metadata: Metadata = {
  title: "ClimaFlow — HVAC Field Service Platform | heyIsmail",
  description:
    "ClimaFlow è un gestionale mobile-first che sto progettando per aziende italiane di climatizzazione e assistenza tecnica. Clienti, tecnici, interventi e manutenzioni in un unico posto.",
  openGraph: {
    title: "ClimaFlow — HVAC Field Service Platform",
    description:
      "Un gestionale mobile-first per aziende italiane di climatizzazione. In sviluppo.",
    type: "website",
  },
};

export default function ClimaFlowProjectPage() {
  return <ClimaFlowPage />;
}
