import { FacebookIcon, Linkedin } from "lucide-react"

export default function CloudPayFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-blue-700" />
              <span className="text-lg font-semibold">CloudPaie</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Logiciel cloud de gestion RH et paie pour l’Afrique de l’Ouest.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#api" className="text-gray-500 hover:text-gray-900">API</a>
              </li>
              <li>
                <a href="#app-mobile" className="text-gray-500 hover:text-gray-900">App mobile</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-500 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#fonctionnalites" className="text-gray-500 hover:text-gray-900">Fonctionnalités</a>
              </li>
              <li>
                <a href="#tarifs" className="text-gray-500 hover:text-gray-900">Tarifs</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/mentions-legales" className="text-gray-500 hover:text-gray-900">Mentions légales</a>
              </li>
              <li>
                <a href="/confidentialite" className="text-gray-500 hover:text-gray-900">Politique de confidentialité</a>
              </li>
              <li>
                <a href="/cgu" className="text-gray-500 hover:text-gray-900">Conditions d’utilisation</a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cloudpaie/posts/?feedView=all"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gray-900"
              >
                <Linkedin
                    className="h-5 w-5"/>
              </a>

              {/* Twitter */}
              {/* <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9...z" />
                </svg>
              </a> */}

              {/* Facebook */}
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-500 hover:text-gray-900"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 pt-6 border-t text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {year} CloudPaie. Tous droits réservés.</p>
          <p className="text-xs">
            Conforme aux réglementations de la Côte d’Ivoire, Bénin, Burkina Faso, Mali, Sénégal et Togo.
          </p>
        </div>
      </div>
    </footer>
  )
}
