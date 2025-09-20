import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionReveal } from "./section-reveal";

// Composant simple typewriter
type TypewriterTextProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  ariaLabel: string;
};

function TypewriterText({ text, speed = 50, startDelay = 0, ariaLabel }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed((prev) => prev + (text[i] ?? ""));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return <span aria-label={ariaLabel}>{displayed}  <span className="inline-block w-[1ch] -mb-1.5 ml-[1px] animate-pulse opacity-70">|</span></span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* Background image with blue overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/academy-2.jpg"
          alt="Contexte de travail moderne en entreprise"
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

      <div className="container px-4 md:px-6 py-16 md:py-24 relative">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Texte principal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-3 py-1 text-xs font-medium mb-4">
                Conformité multi-pays · Sécurité · Automatisation
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
                <TypewriterText
                  text={
                    "CloudPaie – Votre solution RH et paie adaptée à l’Afrique de l’Ouest"
                  }
                  speed={55}
                  startDelay={200}
                  ariaLabel="Titre principal de CloudPaie"
                />
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6">
                <TypewriterText
                  text={
                    "Plateforme cloud qui simplifie la gestion administrative, le calcul de la paie et les déclarations sociales, en conformité avec les législations de la Côte d’Ivoire, Bénin, Burkina Faso, Mali, Sénégal et Togo."
                  }
                  speed={28}
                  startDelay={5600}
                  ariaLabel="Accroche de la page d’accueil"
                />
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full px-6 h-11 flex items-center bg-white text-[#008AFF] font-semibold hover:bg-white/90 transition-colors"
                >
                  Demander une démo
                </a>
                <a
                  href="#a-propos"
                  className="rounded-full px-6 h-11 flex items-center border border-white/70 text-white hover:bg-white/10 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </motion.div>

            {/* Glow décoratif */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div
                className="absolute -inset-8 rounded-3xl bg-white/10 blur-2xl"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
