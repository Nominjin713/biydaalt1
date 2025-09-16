// // app/blog/page.tsx
// import Link from 'next/link';

// export default function BlogHome() {
//   return (
//     <div>
//       <h1>Blog Homepage</h1>
//       <p>Welcome to our blog! Here are some posts:</p>
//       <ul>
//         <li><Link href="/blog/1">Post 1</Link></li>
//         <li><Link href="/blog/2">Post 2</Link></li>
//         <li><Link href="/blog/3">Post 3</Link></li>
//       </ul>
//     </div>
//   );
// }

import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header";
export default function BlogHome() {
  const posts = [
    { id: "1", title: "Post 1", excerpt: "Short intro to post 1" },
    { id: "2", title: "Post 2", excerpt: "Short intro to post 2" },
    { id: "3", title: "Post 3", excerpt: "Short intro to post 3" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Blog Homepage</h1>
          <p className={styles.subtitle}>Welcome — here are our latest posts</p>
        </div>
      </header>

      <section className={styles.grid}>
        {posts.map(p => (
          <article key={p.id} className={styles.card}>
            <h3 className={styles.postTitle}>{p.title}</h3>
            <div className={styles.postMeta}>Jun 15 • 3 min read</div>
            <p className={styles.excerpt}>{p.excerpt}</p>
            <Link className={styles.link} href={`/blog/${p.id}`}>Read more →</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
