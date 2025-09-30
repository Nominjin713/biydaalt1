import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Layout>
        <h2 className="text-2xl font-bold">Welcome</h2>

        <div className="p-6">
          {/* <h1 className="text-2xl font-bold mb-4">My First Image</h1> */}

          {/* <Image
            src="/images/jennie.jpg"         // Must start with '/' for public folder
            alt="Beautiful Mountain"        // Good for SEO and accessibility
            width={600}                     // Required
            height={400}                    // Required
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </Layout>
    </div>
  );
}

