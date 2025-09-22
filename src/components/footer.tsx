import { FacebookIcon, Linkedin, Mail } from "lucide-react"

export default function CloudPayFooter() {
  const year = new Date().getFullYear()

  return (
   <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        {/* Newsletter */}
        <div className="p-6 border-b mb-10 rounded-lg bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Restez informé des nouveautés
          </h3>
          <p className="text-gray-600 mb-4">
            Inscrivez-vous à notre newsletter pour recevoir les dernières mises à jour produit.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              <Mail className="h-4 w-4" />
              S&apos;abonner
            </button>
          </form>
        </div>

        {/* Liens + Infos */}
        <div className="grid gap-10 md:grid-cols-4 mb-10">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-700" />
              <span className="text-lg font-semibold text-gray-900">CloudPaie</span>
            </div>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Logiciel cloud de gestion RH et paie pour l’Afrique de l’Ouest.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Liens
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#app-mobile" className="text-gray-600 hover:text-gray-900">App mobile</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#fonctionnalites" className="text-gray-600 hover:text-gray-900">Fonctionnalités</a></li>
              <li><a href="#tarifs" className="text-gray-600 hover:text-gray-900">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Légal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/mentions-legales" className="text-gray-600 hover:text-gray-900">Mentions légales</a></li>
              <li><a href="/confidentialite" className="text-gray-600 hover:text-gray-900">Politique de confidentialité</a></li>
              <li><a href="/cgu" className="text-gray-600 hover:text-gray-900">Conditions d’utilisation</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/cloudpaie/posts/?feedView=all"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-6 border-t text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} CloudPaie. Tous droits réservés.</p>
          <p className="text-xs text-center md:text-right">
            Conforme aux réglementations de la Côte d’Ivoire, Bénin, Burkina Faso, Mali, Sénégal et Togo.
          </p>
        </div>
      </div>
    </footer>
  )
}
