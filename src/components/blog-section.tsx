interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  date: string;
}

// Exemple de posts
const POSTS: Post[] = [
  {
    slug: "exemple-post-1",
    title: "Titre du post 1",
    excerpt: "Extrait du post 1 pour l’aperçu...",
    image: "/images/Affiche-simulateur.png",
    category: "Paie",
    date: "20 Septembre 2025",
  },
  {
    slug: "exemple-post-2",
    title: "Titre du post 2",
    excerpt: "Extrait du post 2 pour l’aperçu...",
    image: "/images/Affiche-simulateur.png",
    category: "RH",
    date: "18 Septembre 2025",
  },
  {
    slug: "exemple-post-3",
    title: "Titre du post 3",
    excerpt: "Extrait du post 3 pour l’aperçu...",
    image: "/images/Affiche-simulateur.png",
    category: "Formation",
    date: "15 Septembre 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 text-blue-600 px-3 py-1 text-xs font-medium mb-3">
            Formations & Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Articles de formation
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Guides pratiques et retours d’expérience pour maîtriser la paie et les processus RH en Afrique de l’Ouest.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <div
              key={post.slug}
              className="h-full border rounded-xl overflow-hidden shadow hover:scale-101 transition-transform duration-300"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={`Illustration: ${post.title}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mt-1 line-clamp-3">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 mt-2 inline-block hover:underline"
                  aria-label={`Lire l’article: ${post.title}`}
                >
                  Lire l’article →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Voir tous les articles */}
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-block rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
          >
            Voir tous les articles
          </a>
        </div>
      </div>
    </section>
  );
}
