"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "./section-reveal"
const testimonials = [
  {
    quote:
      "CloudPaie nous a permis d’automatiser la paie multi-pays tout en restant conforme. Le gain de temps est considérable.",
    name: "Fatou N.",
    role: "DRH, Groupe agroalimentaire",
    avatar: "/images/assistance-1.jpg",
  },
  {
    quote: "La mise en conformité CNPS et les déclarations sont devenues simples. L’équipe support est très réactive.",
    name: "Moussa K.",
    role: "Directeur Financier, Services",
    avatar: "/images/academy-2.jpg",
  },
  {
    quote: "En tant qu’expert-comptable, j’apprécie la fiabilité du calcul de paie et la centralisation documentaire.",
    name: "Aïcha D.",
    role: "Cabinet d’expertise comptable",
    avatar: "/images/paie.png",
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Témoignages</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Ce que nos clients apprécient dans CloudPaie.
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="h-full border rounded-2xl bg-white shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 p-4 border-b">
                    <div className="h-11 w-11 rounded-full overflow-hidden border flex-shrink-0">
                     <div className="h-11 w-11 rounded-full overflow-hidden border flex-shrink-0">
                            <img
                                src={t.avatar || "/placeholder.svg"}
                                alt={`Photo de ${t.name}`}
                                className="h-full w-full object-cover"
                            />
                            </div>

                    </div>
                    <div>
                      <p className="text-base font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <p className="text-sm text-foreground/90">“{t.quote}”</p>
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
