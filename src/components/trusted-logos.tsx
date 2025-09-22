"use client";

import { motion } from "framer-motion";
//import type { ReactNode } from "react";

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
// function SectionReveal({ children }: { children: ReactNode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

export default function TrustedLogos() {
  return (
   <section className="py-12 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <p className="text-center mb-6 text-lg font-medium">
            Ils nous font confiance
          </p>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...sampleLogos, ...sampleLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="h-10 px-4 rounded-md border border-white/30 bg-white/10 text-white flex items-center justify-center whitespace-nowrap"
                >
                  {logo.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

  );
}
