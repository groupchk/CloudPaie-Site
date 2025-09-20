import { useState } from "react"

type Video = {
  id: number
  title: string
  thumbnail: string
  url: string
}

export default function VideoCapsules() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  // Exemple de capsules vidéos (tu peux remplacer par les tiennes)
  const videos = [
    {
      id: 1,
      title: "Simulateur de paie",
      thumbnail: "/images/Affiche-simulateur.png",
      url: "/videos/Simulateur-cloudpaie.mp4",
    },
    {
      id: 2,
      title: "Tutoriel d'utilisation",
      thumbnail: "/images/1753457699683.jpeg",
      url: "/videos/tutoriel-cloudpaie.mp4",
    },
    {
      id: 3,
      title: "Présentation des fonctionnalités",
      thumbnail: "/images/1751888571700.jpeg",
      url: "/videos/tutoriel-cloudpaie.mp4",
    },
  ]

  return (
    <div className="w-full px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 text-blue-600 px-3 py-1 text-xs font-medium mb-3">
            Formations Vidéos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Points clés en vidéo
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Découvrez CloudPaie à travers des vidéos courtes et informatives.
          </p>
        </div>

      {/* Grille des capsules */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-45 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal lecteur vidéo */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
