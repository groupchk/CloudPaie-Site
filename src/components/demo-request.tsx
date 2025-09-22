import { useState } from "react";
import type { DemoRequestFormData } from "../lib/DemoRequestFormData";
//import { sendFormMail } from "../services/demoService";

interface DemoRequestState {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export default function DemoRequestForm() {
  const [state, setState] = useState<DemoRequestState>({});
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);


   const formData = Object.fromEntries( new FormData(e.currentTarget)) as unknown as DemoRequestFormData
   try {
   // await sendFormMail(formData);
    setState({
      success: true,
      message: "Votre demande a été envoyée avec succès !",
    });
   } catch (error) {
    setState({
      success: false,
      message: "Une erreur s'est produite !",
    });
   }
   
    setIsPending(false);
  };

  if (state.success) {
    return (
      <div className="border rounded-xl bg-white shadow p-6 text-center">
        <div className="flex flex-col items-center py-10">
          {/* Icône check circle */}
          <svg
            className="h-12 w-12 text-blue-600 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-lg font-medium">{state.message}</p>
          <button
            className="mt-6 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Retour à l’accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-xl bg-white shadow p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              placeholder="Prénom Nom"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {state.errors?.name && <p className="text-sm text-red-600 mt-1">{state.errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email professionnel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="prenom.nom@entreprise.com"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {state.errors?.email && <p className="text-sm text-red-600 mt-1">{state.errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Société
            </label>
            <input
              id="company"
              name="company"
              placeholder="Nom de l’entreprise"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {state.errors?.company && <p className="text-sm text-red-600 mt-1">{state.errors.company}</p>}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Pays
            </label>
            <select
              id="country"
              name="country"
              defaultValue="Côte d’Ivoire"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Côte d’Ivoire">Côte d’Ivoire</option>
              <option value="Bénin">Bénin</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Mali">Mali</option>
              <option value="Sénégal">Sénégal</option>
              <option value="Togo">Togo</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Taille de l’effectif
            </label>
            <select
              id="size"
              name="size"
              defaultValue="0-5"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="0-5">0 à 5</option>
              <option value="6-15">6 à 15</option>
              <option value="16-30">16 à 30</option>
              <option value="31-50">31 à 50</option>
              <option value="51-100">51 à 100</option>
              <option value="+100">+ de 100</option>
            </select>
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
              Intérêt principal
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue="paie"
              className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="paie">Calcul de paie</option>
              <option value="declarations">Déclarations sociales</option>
              <option value="administratif">Gestion administrative</option>
              <option value="conges">Congés & absences</option>
              <option value="compta">Service d’experts comptables</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Parlez-nous de vos besoins…"
            className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Envoi en cours…" : "Envoyer la demande"}
        </button>

        {state.message && !state.success && (
          <p className="text-sm text-red-600 text-center mt-2">{state.message}</p>
        )}
      </form>
    </div>
  );
}
