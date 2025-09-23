import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <h2 className="text-2xl font-bold">Нүүр хуудас</h2>

        {/* Зураг */}
        <Image
          src="/images/logo.png"   // public/images/logo.png
          alt="Манай сайтын лого"
          width={300}
          height={200}
        />
      </Layout>
    </div>
  );
}
