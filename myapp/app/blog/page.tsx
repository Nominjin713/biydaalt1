import Link from "next/link";
import styles from "./page.module.css";

export default function BlogHome() {
  const posts = [
    { id: "1", title: "React Best Practices", excerpt: "Learn modern React clean code patterns." },
    { id: "2", title: "Next.js Routing Guide", excerpt: "Master dynamic & nested routing in Next.js." },
    { id: "3", title: "Tailwind vs CSS Modules", excerpt: "Which styling method should you choose?" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>📝 Modern Tech Blog</h1>
        <p className={styles.subtitle}>Latest articles — stay updated & learn faster 🚀</p>
      </header>

      <section className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.badge}>Tech</div>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>📅 Jan 2025 • ⏱️ 4 min read</div>

            <Link href={`/blog/${post.id}`} className={styles.link}>
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
