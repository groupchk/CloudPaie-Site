"use client"

import { Users, KeyRound, Code2, ShieldCheck, ExternalLink } from "lucide-react"
import { SectionReveal } from "./section-reveal"
export default function DeveloperAPISection() {
  return (
    <section id="api" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 text-blue-600 px-3 py-1 text-xs font-medium mb-3">
              API Développeurs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              API de gestion des salariés
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Une API REST sécurisée pour intégrer la gestion des salariés
              CloudPaie dans vos applications et systèmes existants.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Gestion des salariés */}
            <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 border-b pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Gestion des Salariés</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  CRUD complet pour créer, lire, modifier et supprimer les données salariés.
                </p>
              </div>
              <div className="p-4">
                <pre className="bg-gray-100 rounded-lg p-4 text-xs overflow-auto">
                  <code>{`GET /api/v1/employees
POST /api/v1/employees
PUT /api/v1/employees/{id}
DELETE /api/v1/employees/{id}`}</code>
                </pre>
              </div>
            </div>

            {/* Authentification */}
            <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 border-b pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <KeyRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Authentification</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Système d'authentification basé sur des headers sécurisés.
                </p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>Headers d'authentification, HTTPS obligatoire</span>
                </div>
              </div>
            </div>

            {/* Format JSON */}
            <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 border-b pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Format JSON</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Réponses structurées avec gestion d'erreurs normalisée.
                </p>
              </div>
              <div className="p-4">
                <pre className="bg-gray-100 rounded-lg p-4 text-xs overflow-auto">
                  <code>{`{
  "data": {...},
  "status": "success",
  "message": "OK"
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="mt-12 text-center">
            <div className="rounded-xl border bg-white shadow-sm max-w-2xl mx-auto p-6">
              <h3 className="text-xl font-semibold mb-2">Documentation complète</h3>
              <p className="text-gray-600 mb-4">
                Accédez à la documentation détaillée avec exemples de code,
                authentification et endpoints disponibles.
              </p>
              <pre className="bg-gray-100 rounded-lg p-4 text-xs overflow-auto mb-4 text-left">
                <code>{`// Exemple d'appel API
const response = await fetch('https://api.cloudpaietest.net/v1/employees', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const employees = await response.json();
console.log(employees);`}</code>
              </pre>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://docs.cloudpaietest.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir la documentation
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Demander l'accès
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
