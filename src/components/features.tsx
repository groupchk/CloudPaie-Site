"use client"

import { motion } from "framer-motion"
import {
  FileSpreadsheet,
  FileCheck2,
  Calculator,
  CalendarDays,
  Receipt,
  Briefcase,
  Banknote,
} from "lucide-react"
import { SectionReveal } from "./section-reveal"
const FEATURES = [
  {
    icon: FileSpreadsheet,
    title: "Gestion administrative",
    desc: "Données structurelles, contrats, dossiers et documents RH centralisés.",
  },
  {
    icon: FileCheck2,
    title: "Déclarations sociales",
    desc: "CNPS, impôts et autres obligations légales selon le pays.",
  },
  {
    icon: Calculator,
    title: "Calcul de paie",
    desc: "Calcul automatique, fiable et conforme à la législation locale.",
  },
  {
    icon: CalendarDays,
    title: "Congés & absences",
    desc: "Suivi, validation, workflow et historique complet.",
  },
  {
    icon: Receipt,
    title: "Solde de tout compte",
    desc: "Calcul rapide, traçable et conforme.",
  },
  {
    icon: Briefcase,
    title: "Outils RH avancés",
    desc: "Barème catégorique, contrats, multi-dossiers clients.",
  },
  {
    icon: Banknote,
    title: "Service d’experts comptables",
    desc: "Accompagnement paie et conformité par des experts de la région.",
  },
]

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Fonctionnalités principales
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer vos ressources humaines
              et votre paie en toute sérénité.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="h-full rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 border-b flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-base">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}
