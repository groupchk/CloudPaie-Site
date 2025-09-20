"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Cloudpaie est-il uniquement un logiciel ?",
    answer:
      "Non. Cloudpaie est à la fois un logiciel et un service : vous bénéficiez d’un gestionnaire dédié qui vous accompagne, vous conseille et peut même reprendre vos paies antérieures pour garantir une conformité totale.",
  },
  {
    question: "Comment se passe l’intégration de mon entreprise dans Cloudpaie ?",
    answer:
      "Dès votre inscription, nous configurons vos paramètres (conventions, déclarations locales, effectif) et nous vous formons. Vous êtes opérationnel en quelques jours.",
  },
  {
    question: "Est-ce que Cloudpaie est conforme aux législations locales ?",
    answer:
      "Oui ✅. Chaque pays OHADA couvert dispose de ses propres paramétrages : organismes sociaux, impôts sur salaires, barèmes, fichiers déclaratifs (EDI), échéances, etc.",
  },
  {
    question: "Puis-je gérer plusieurs sociétés dans Cloudpaie ?",
    answer:
      "Oui. Le plan PRO est spécialement conçu pour les cabinets comptables et consultants paie qui gèrent plusieurs entreprises à la fois.",
  },
  {
    question: "Quelles déclarations puis-je produire avec Cloudpaie ?",
    answer:
      "Cela dépend de votre pays. Exemple en Côte d’Ivoire : CNPS, CMU, ITS, FDFP, État 301. Au Sénégal : IPRES, CSS, retenues IR/RS. Chaque page “Pays” détaille la liste complète.",
  },
  {
    question: "Est-ce que Cloudpaie calcule le Solde de Tout Compte (STC) ?",
    answer:
      "Oui. Le module STC est intégré et tient compte des règles locales (indemnités de fin de contrat, congés non pris, primes, etc.).",
  },
  {
    question: "Puis-je exporter mes données pour la comptabilité ou la banque ?",
    answer:
      "Oui. Cloudpaie génère vos ordres de virement et propose des exports comptables adaptés.",
  },
  {
    question: "Est-ce que le support est inclus dans l’abonnement ?",
    answer:
      "Oui. Vous avez accès à un support via votre interface Cloudpaie (chat et assistance intégrée), mais aussi par WhatsApp, email, téléphone, ainsi qu’à des guides pratiques.",
  },
  {
    question: "Puis-je tester Cloudpaie gratuitement ?",
    answer:
      "Oui. Vous pouvez tester le simulateur de paie en ligne gratuitement et demander une démo personnalisée.",
  },
  {
    question: "Qu’entend-on par paie standard ?",
    answer:
      "La paie standard concerne les cas simples : un salarié avec un salaire fixe, sans primes ni avantages particuliers. On y applique uniquement les retenues sociales et fiscales obligatoires.",
  },
  {
    question: "Qu’est-ce qui rend une paie complexe ?",
    answer:
      "La paie devient complexe dès qu’il faut gérer plusieurs éléments variables : primes, heures supplémentaires, avantages en nature, situations contractuelles particulières, calculs de fin de contrat (STC, indemnités, congés non pris…).",
  },
  {
    question:
      "Pourquoi est-il risqué de gérer une paie complexe avec Excel ou un logiciel basique ?",
    answer:
      "Parce que le risque d’erreur est élevé (mauvais calcul de primes, oubli d’un taux d’heures sup, erreurs dans le STC, etc.). Ces erreurs peuvent entraîner des conflits juridiques ou des redressements sociaux et fiscaux.",
  },
  {
    question: "Comment Cloudpaie simplifie la gestion de la paie complexe ?",
    answer:
      "Cloudpaie automatise les calculs, applique les barèmes et règles locales, et intègre des contrôles pour détecter les incohérences. Résultat : gain de temps ⏱️ et réduction jusqu’à 99 % du risque de redressement.",
  },
  {
    question: "Quel est le délai de migration sur Cloudpaie ?",
    answer:
      "Le délai varie selon vos besoins. Paie simple : mise en place en quelques jours. Cas plus complexes : plus de temps, selon la disponibilité des données et le niveau de formation de vos équipes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Questions fréquentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm bg-white p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
