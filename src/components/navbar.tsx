import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "À propos", href: "#a-propos" },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "API", href: "#api" },
    { label: "App mobile", href: "#app-mobile" },
    { label: "Pourquoi CloudPaie", href: "#pourquoi" },
    { label: "Blog", href: "/blog" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="CloudPaie - Accueil">
          <img
            src="/logos/cloudpay-logo.svg"
            alt="CloudPaie"
            width={140}
            height={30}
            className="block"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full px-5 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Demander une démo
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden">
            <div className="bg-white w-72 sm:w-80 h-full shadow-lg flex flex-col p-6">
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-6 text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col gap-4">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium transition-colors hover:text-gray-900 text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="#contact"
                    className="rounded-full w-full px-5 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setOpen(false)}
                  >
                    Demander une démo
                  </a>
                </div>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
