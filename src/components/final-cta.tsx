import DemoRequestForm from "./demo-request";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-white shadow">
          {/* Dégradé décoratif */}
          <div
            className="absolute -inset-16"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(600px 400px at 85% 30%, rgba(59,130,246,0.3), transparent 60%), radial-gradient(800px 500px at 15% 70%, rgba(16,185,129,0.25), transparent 60%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-2 p-6 md:p-10">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">
                Simplifiez vos RH, respectez la législation locale, gagnez du temps.
              </h3>
              <p className="mt-3 text-gray-600 max-w-xl">
                CloudPaie accompagne votre croissance en Afrique de l’Ouest avec une solution moderne et conforme.
                Demandez votre démonstration gratuite.
              </p>
            </div>

            <div className="lg:ml-auto">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
