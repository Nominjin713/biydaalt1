import Image from "next/image";
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h4>hello</h4>
      <Layout> 
        <h2 className="text-2xl font-bold"></h2>
        <p className="mt-4">ene bol layout ashiglasan jishee</p>
      </Layout>
    </div>

  );
}
