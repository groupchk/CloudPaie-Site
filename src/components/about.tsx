"use client"

import { Globe2 } from "lucide-react"
import { SectionReveal } from "./section-reveal"


const COUNTRIES = [
  { name: "Côte d’Ivoire", flag: "🇨🇮" },
  { name: "Bénin", flag: "🇧🇯" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Sénégal", flag: "🇸🇳" },
  { name: "Togo", flag: "🇹🇬" },
]

export default function About() {
  return (
    <section id="a-propos" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Texte */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium mb-3">
                <Globe2 className="h-3.5 w-3.5" /> Afrique de l’Ouest
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Accessible, conforme, local
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                CloudPaie est conçu pour les entreprises d’Afrique de l’Ouest. 
                La solution est conforme aux réglementations des 6 pays suivants 
                et s’adapte à l’évolution des législations locales.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {COUNTRIES.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center rounded-full bg-blue-600 text-white px-3 py-1 text-sm font-medium"
                  >
                    <span className="mr-2">{c.flag}</span>
                    {c.name}
                  </span>
                ))}
              </div>

              <p className="text-gray-600">
                Automatisez les calculs complexes de paie, standardisez vos processus RH 
                et centralisez vos documents, tout en restant conforme aux obligations légales 
                (CNPS, impôts, déclarations sociales) propres à chaque pays.
              </p>
            </div>

            {/* Carte */}
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Couverture multi-pays</h3>
                <p className="text-sm text-gray-500">
                  Visualisation des zones couvertes en Afrique de l’Ouest
                </p>
              </div>
              <div className="p-4">
                <img
                  src="/images/africa-map.png"
                  alt="Carte de l’Afrique avec les pays couverts mis en évidence"
                  className="w-full rounded-md border"
                  width={720}
                  height={480}
                />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
