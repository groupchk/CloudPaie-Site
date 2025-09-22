"use client"

const countries = [
    { name: "Côte d'Ivoire", flag: "/flags/cote-divoire.png" },
    { name: "Bénin", flag: "/flags/Benin.png" },
    { name: "Burkina Faso", flag: "/flags/burkina-faso.png" },
    { name: "Mali", flag: "/flags/Mali.png" },
    { name: "Sénégal", flag: "/flags/Senegal.png" },
    { name: "Togo", flag: "/flags/togo.png" },
    { name: "GUinée", flag: "/flags/Guinea.png" },
]

export default function About() {
  return (
    <section id="a-propos" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accessible, conforme, local</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          CloudPaie est conçu pour les entreprises d’Afrique de l’Ouest. La solution est conforme aux réglementations des 6 pays suivants et s’adapte à l’évolution des législations locales.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 animate-bounce-gentle"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={country.flag || "/placeholder.svg"}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=64&width=64&query=${country.name} flag`
                  }}
                />
              </div>
              <span className="text-xs text-gray-600 font-medium text-center">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-bounce-gentle:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
