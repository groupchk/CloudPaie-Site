"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Liste réelle des partenaires
const sampleLogos = [
  { name: "CWUS" },
  { name: "KATHEOH CONSULTING" },
  { name: "HP AUTOMOTIVE CI" },
  { name: "HOREB SERVICES ENERGIES COTE D'IVOIRE" },
  { name: "ARC TRADE AND CONSULTING" },
  { name: "CABINET DENTAIRE CHOUMALI EKRA" },
  { name: "AFRICA PAIE RH" },
  { name: "ABCD CONSULTING" },
  { name: "SVDG AFRIQUE" },
  { name: "AFRICA PROJECT MANAGEMENT" },
  { name: "TECHNOMEDIA SARL" },
  { name: "ACS GROUPE CORPORATION" },
  { name: "CONSELIOR" },
  { name: "EXTERNALLIANCE CI" },
  { name: "AFRICA CAPITAL MARKETS CORPORATION" },
  { name: "AMUGA" },
  { name: "GROUPE GOLDEN" },
  { name: "KADOEL HOLDING" },
  { name: "ACCA CONSULTING AGENCY" },
  { name: "LE REFLEXE" },
  { name: "M.A.M TRANSIT" },
  { name: "PC PLUS" },
  { name: "KAAHLIAN CONSEILS" },
  { name: "DEMO" },
  { name: "CLOUDPAIE IMPLEMENATAION" },
  { name: "GAZPRO-ENERGY" },
  { name: "CONTROL PARKS COTE D'IVOIRE" },
  { name: "GROUPE M'VOLAIS" },
  { name: "DOSSIER AG TRANSIT" },
  { name: "GROUPE CHK" },
  { name: "CERCIS SENEGAL" },
  { name: "JOBO" },
  { name: "VALUE AUDIT & ADVISORY" },
];

// Petit wrapper reveal simple
function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function TrustedLogos() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 md:px-6">
        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Ils nous font confiance
            </p>
          </div>

          {/* Marquee défilant */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25, // un peu plus lent vu la grande liste
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...sampleLogos, ...sampleLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="h-10 px-4 rounded-md border bg-white text-gray-500 flex items-center justify-center whitespace-nowrap hover:text-gray-800 transition-colors"
                >
                  {logo.name}
                </div>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
