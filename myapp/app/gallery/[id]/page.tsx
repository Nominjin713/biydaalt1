interface Params {
  params: { id: string };
}

interface ImageData {
  title: string;
  description: string;
  src: string;
}

const galleryData: Record<string, ImageData> = {
  '1': {
    title: 'Image 1',
    description: 'Jennie from BLACKPINK',
    src: '/images/jennie.jpg',
  },
  '2': {
    title: 'Image 2',
    description: 'Jisoo from BLACKPINK',
    src: '/images/jisoo.webp',
  },
  '3': {
    title: 'Image 3',
    description: 'Lisa from BLACKPINK',
    src: '/images/lisa.jpg',
  },
};

export default function ImageDetailPage({ params }: Params) {
  const { id } = params;
  const data = galleryData[id];

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-500">
        Зураг олдсонгүй.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{data.title}</h1>
      <div className="flex flex-col items-center">
        <img
          src={data.src}
          alt={data.title}
          width={400}
          className="rounded-lg shadow-lg mb-4"
        />
        <p className="text-gray-700 text-lg text-center">{data.description}</p>
      </div>
    </div>
  );
}
