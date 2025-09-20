export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  category: "Formation" | "Actualité" | "Guide"
  author?: string
  readingTime?: string
  content: Array<{ type: "p" | "h2" | "ul" | "li" | "quote"; text: string }>
}

export const posts: Post[] = [
  {
    slug: "parametrage-paie-uemoa",
    title: "Paramétrer la paie dans un contexte UEMOA",
    excerpt: "Bases légales, grilles, éléments variables et bonnes pratiques pour sécuriser vos traitements.",
    date: "05 août 2025",
    image: "/formation-parametrage-paie-uemoa.png",
    category: "Formation",
    author: "Équipe CloudPaie",
    readingTime: "7 min",
    content: [
      { type: "p", text: "L’espace UEMOA impose des règles communes tout en laissant des spécificités nationales." },
      { type: "h2", text: "1. Cadre légal et référentiels" },
      {
        type: "p",
        text: "Rassemblez barèmes, conventions collectives et règles de calcul propres à chaque pays avant toute mise en production.",
      },
      { type: "h2", text: "2. Grilles et éléments variables" },
      {
        type: "p",
        text: "Structurez vos rubriques (gains, retenues, cotisations) et normalisez les éléments variables pour éviter les erreurs.",
      },
      { type: "h2", text: "3. Contrôles et traçabilité" },
      {
        type: "p",
        text: "Mettez en place des contrôles automatiques et un journal de paie pour retracer toute modification.",
      },
      { type: "quote", text: "La fiabilité de la paie repose sur la standardisation et la preuve." },
    ],
  },
  {
    slug: "cnps-declarations",
    title: "Déclarations CNPS: automatiser et rester conforme",
    excerpt: "Comment structurer vos processus déclaratifs pour éviter les erreurs et gagner du temps.",
    date: "22 juillet 2025",
    image: "/cnps-automatisation.png",
    category: "Formation",
    author: "Équipe CloudPaie",
    readingTime: "6 min",
    content: [
      {
        type: "p",
        text: "L’automatisation CNPS réduit les risques d’omission et accélère vos routines mensuelles.",
      },
      { type: "h2", text: "Préparation des bases" },
      { type: "ul", text: "• Comptes employeurs • Identifiants salariés • Barèmes à jour • Calendrier légal" },
      { type: "h2", text: "Validation & contrôle" },
      {
        type: "p",
        text: "Validez les écarts et contrôlez les bases avec un export pivot avant la soumission finale.",
      },
    ],
  },
  {
    slug: "conges-absences",
    title: "Congés & Absences: workflow, calculs et traçabilité",
    excerpt: "Mettre en place des circuits de validation et suivre les compteurs en toute transparence.",
    date: "10 juillet 2025",
    image: "/rh-conges-absences.png",
    category: "Formation",
    author: "Équipe CloudPaie",
    readingTime: "5 min",
    content: [
      { type: "p", text: "Un bon workflow réduit les retards et garantit l’équité des règles d’acquisition." },
      { type: "h2", text: "Workflows recommandés" },
      {
        type: "ul",
        text: "• Demande employé → Manager → RH • Notifications automatiques • Historique sécurisé",
      },
      { type: "h2", text: "Contrôles" },
      {
        type: "p",
        text: "Appliquez des règles de plafonds, d’antériorité et de soldes négatifs pour prévenir les abus.",
      },
    ],
  },
]

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug)
}
