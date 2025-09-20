"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Shield, Globe2, Users, Sparkles } from "lucide-react"
import { SectionReveal } from "./section-reveal"
export default function WhyCloudPay() {
  const points = [
    { icon: Shield, text: "Solution 100% en ligne et sécurisée" },
    { icon: Globe2, text: "Compatible multi-pays Afrique de l’Ouest" },
    { icon: Users, text: "Adaptée aux entreprises de 5 à 1000 salariés" },
    { icon: Sparkles, text: "Interface intuitive, support réactif" },
  ]

  return (
    <section id="pourquoi" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left Text Column */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Pourquoi choisir CloudPaie ?
              </h2>
              <p className="text-muted-foreground mt-3">
                Une plateforme moderne, fiable et conforme aux réglementations locales pour accompagner votre croissance.
              </p>
              <ul className="mt-6 space-y-3">
                {points.map(({ text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-foreground/90">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Grid Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              {/* Background Glow */}
              <div
                className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-primary/10 to-[color:hsla(var(--accent)/0.12)] blur-2xl"
                aria-hidden="true"
              />
              {/* Card Container */}
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {points.map(({ icon: Icon, text }) => (
                    <motion.div
                      key={text}
                      className="rounded-xl border p-4 flex items-start gap-3 hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm">{text}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Conçu pour la conformité et la performance dans toute la région.
                </p>
              </div>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
