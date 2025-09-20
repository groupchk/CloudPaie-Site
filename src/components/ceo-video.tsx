import { motion } from "framer-motion"
import { SectionReveal } from "./section-reveal"
export default function CeoVideo() {
  return (
    <section id="video" className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div
              className="relative w-full overflow-hidden rounded-xl border aspect-video bg-black"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                title="Un mot du Directeur Général de CloudPaie"
                aria-label="Vidéo: Un mot du Directeur Général de CloudPaie"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:hsla(var(--primary)/0.12)] text-[color:hsl(var(--primary))] px-3 py-1 text-xs font-medium mb-3">
                Message officiel
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Un mot du Directeur Général</h2>
              <p className="text-muted-foreground mt-3">
                Notre mission chez CloudPaie est de simplifier la gestion RH et paie en Afrique de l’Ouest en respectant
                les particularités réglementaires de chaque pays. Nous accompagnons les organisations de toutes tailles
                dans leur croissance grâce à une solution moderne, fiable et conforme.
              </p>
              <ul className="mt-5 space-y-2 text-foreground/90">
                <li>• Vision long terme centrée sur la conformité locale</li>
                <li>• Sécurité et performances au cœur de la plateforme</li>
                <li>• Support et accompagnement de proximité</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-primary px-6 py-2 text-white font-medium hover:bg-primary/90 transition"
                >
                  Demander une démo
                </a>
                <a
                  href="#a-propos"
                  className="inline-block rounded-full border border-white/70 px-6 py-2 text-white hover:bg-white/10 transition"
                >
                  En savoir plus
                </a>
              </div>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
