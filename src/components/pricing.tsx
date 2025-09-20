
const CLASSIC = [
  { name: "Classique 5", range: "0 à 5 salariés" },
  { name: "Classique 15", range: "6 à 15 salariés" },
  { name: "Classique 30", range: "16 à 30 salariés" },
  { name: "Classique 50", range: "31 à 50 salariés" },
  { name: "Classique 100", range: "51 à 100 salariés" },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tarification
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Des formules simples et évolutives pour accompagner votre entreprise,
            quelle que soit sa taille.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Abonnements Classique */}
          <div className="lg:col-span-2 border rounded-xl p-6 bg-white shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Abonnements Classique</h3>
              <p className="text-gray-500">Choisissez la taille adaptée à votre organisation</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CLASSIC.map((plan) => (
                <div key={plan.name} className="rounded-xl border p-4 flex flex-col">
                  <div className="text-sm text-blue-600 font-medium">{plan.name}</div>
                  <div className="text-base mt-1">{plan.range}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Facturation mensuelle ou annuelle
                  </div>
                  <a
                    href="#contact"
                    className="mt-4 rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-center hover:bg-blue-50"
                  >
                    Demander une démo
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Abonnements Pro */}
          <div className="border rounded-xl p-6 bg-white shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Abonnements Pro</h3>
              <p className="text-gray-500">Pour + de 100 salariés</p>
            </div>
            <p className="text-gray-600">
              Bénéficiez d’un accompagnement dédié, d’options avancées et d’un tarif sur devis.
            </p>
            <ul className="text-sm mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3h12v2H4V3zm0 4h12v2H4V7zm0 4h12v2H4v-2zm0 4h12v2H4v-2z" />
                </svg>
                <span>Modules avancés et personnalisation</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                </svg>
                <span>Support prioritaire</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0 L12 5 L18 6 L13 10 L14 16 L10 13 L6 16 L7 10 L2 6 L8 5 Z" />
                </svg>
                <span>SLA et déploiement accompagnés</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 block w-full text-center rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            >
              Obtenir un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
