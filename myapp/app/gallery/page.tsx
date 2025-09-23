import Image from "next/image";

export default function GalleryPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Image src="/images/jennie.jpg" alt="Mountain" width={300} height={200}/>
        <Image src="/images/jisoo.webp" alt="City" width={300} height={200} />
        <Image src="/images/lisa.jpg" alt="Nature" width={300} height={200} />
      </div>
    </div>
  );
}
