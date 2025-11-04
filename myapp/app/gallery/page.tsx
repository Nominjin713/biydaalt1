'use client'

import { useRouter } from 'next/navigation'

const galleryData = [
  { id: '1', title: 'Jennie', src: "/images/jennie.jpg" },
  { id: '2', title: 'Jisoo', src: '/images/jisoo.webp' },
  { id: '3', title: 'Lisa', src: '/images/lisa.jpg' },
];

export default function GalleryPage() {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/gallery/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-10 text-pink-700 drop-shadow-lg tracking-wide">
        ✨ BLACKPINK Gallery ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {galleryData.map((img) => (
          <div
            key={img.id}
            onClick={() => handleClick(img.id)}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-2xl border border-white/50 hover:scale-[1.05] hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            <div className="p-5 text-center bg-white/70 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                {img.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
