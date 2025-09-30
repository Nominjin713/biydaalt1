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
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryData.map((img) => (
          <div
            key={img.id}
            onClick={() => handleClick(img.id)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold">{img.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
