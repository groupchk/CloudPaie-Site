"use client";

//import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Typewriter ---
// type TypewriterTextProps = {
//   text: string;
//   speed?: number;
//   startDelay?: number;
//   ariaLabel: string;
// };

// function TypewriterText({ text, speed = 50, startDelay = 0, ariaLabel }: TypewriterTextProps) {
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const start = setTimeout(() => {
//       const interval = setInterval(() => {
//         setDisplayed((prev) => prev + (text[i] ?? ""));
//         i++;
//         if (i >= text.length) clearInterval(interval);
//       }, speed);
//     }, startDelay);

//     return () => clearTimeout(start);
//   }, [text, speed, startDelay]);

//   return (
//     <span aria-label={ariaLabel}>
//       {displayed}
//       <span className="inline-block w-[1ch] -mb-1.5 ml-[1px] animate-pulse opacity-70">
//         |
//       </span>
//     </span>
//   );
// }

// --- SectionReveal simple ---
// function SectionReveal({ children }: { children: React.ReactNode }) {
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

// --- Logos ---
const sampleLogos = [
  { name: "CWUS" },
  { name: "KATHEOH CONSULTING" },
  { name: "HP AUTOMOTIVE CI" },
  { name: "HOREB SERVICES ENERGIES" },
  { name: "ARC TRADE & CONSULTING" },
  { name: "CABINET DENTAIRE CHOUMALI" },
  { name: "AFRICA PAIE RH" },
  { name: "ABCD CONSULTING" },
  { name: "SVDG AFRIQUE" },
  { name: "AFRICA PROJECT MGMT" },
];

// --- Composant principal ---
export default function HomePage() {
  return (
    <div className="relative">
      {/* Section Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-bg.jpg"
            alt="Contexte familial et financier"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          initial={{ opacity: 0.62 }}
          animate={{ opacity: [0.62, 0.78, 0.62] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0,138,255,0.62), rgba(0,138,255,0.4))",
          }}
        />

        <div className="container relative px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10">
          {/* Texte */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Reliable. Secure. <br /> Cross-border Payments.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-lg">
              With daremit, cross border transfers are made easy. Send and
              receive money from one secure wallet.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-white/90">
                App Store
              </button>
              <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-white/90">
                Play Store
              </button>
            </div>
          </div>

          {/* Box Transaction */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto">
            <h3 className="font-semibold mb-4">Transaction</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-gray-600">You send</label>
                <input
                  type="number"
                  defaultValue={250}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-600">They receive</label>
                <input
                  type="number"
                  defaultValue={530}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <p className="text-center mb-6 text-lg font-medium">
            Trusted by 10,000+ founders & business owners
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

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold mb-2">+70 Millions</h3>
            <p className="text-gray-600">Versés aux bénéficiaires</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold mb-2">Garantie de disponibilité</h3>
            <p className="text-gray-600">Plateforme disponible 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
}
