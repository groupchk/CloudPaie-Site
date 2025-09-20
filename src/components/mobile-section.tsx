"use client"

import { motion } from "framer-motion"
import { Smartphone, FileText, CalendarDays, BellRing, Languages, Apple, Smartphone as Android } from "lucide-react"
import { SectionReveal } from "./section-reveal"
export default function MobileAppSection() {
  return (
    <section id="app-mobile" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-[color:hsla(var(--accent)/0.14)] text-[color:hsl(var(--accent))] px-3 py-1 text-xs font-medium mb-3">
              Application Mobile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              CloudPaie sur mobile pour vos salariés
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Consultez vos bulletins, suivez vos congés et accédez à vos informations personnelles en toute simplicité.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Screenshots */}
            <motion.div
              className="relative rounded-2xl border overflow-hidden bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1754920071-6g1BjhxlCN9dp9eGaamWrnQdcE6qre.png"
                    alt="Écran d'accueil de l'application mobile CloudPaie"
                    className="w-full h-auto rounded-xl border shadow-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1754920113-oJMPdil019Oj6BKy2O9t6DX1QvUwvU.png"
                    alt="Écran des informations personnelles sur l'application mobile"
                    className="w-full h-auto rounded-xl border shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Features Card */}
            <div className="grid gap-4">
              <div className="rounded-xl border bg-white shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">Fonctionnalités disponibles</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Interface intuitive et sécurisée pour tous vos salariés
                  </p>
                </div>
                <div className="p-6">
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Consultation des bulletins de paie (PDF)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>Gestion des congés et absences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BellRing className="h-4 w-4 text-primary" />
                      <span>Demandes de modifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-primary" />
                      <span>Accès aux documents personnels</span>
                    </li>
                  </ul>
                  <div className="flex gap-3 mt-6">
                    <button
                      disabled
                      className="flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground bg-transparent cursor-not-allowed"
                    >
                      <Apple className="h-4 w-4 mr-2" />
                      App Store (bientôt)
                    </button>
                    <button
                      disabled
                      className="flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground bg-transparent cursor-not-allowed"
                    >
                      <Android className="h-4 w-4 mr-2" />
                      Google Play (bientôt)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
