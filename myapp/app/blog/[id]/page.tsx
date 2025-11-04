import Link from "next/link";
import styles from "./page.module.css";

interface Props {
  params: { id: string };
}

export default function BlogPost({ params }: Props) {
  const postId = params.id;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <Link href="/blog" className={styles.backBtn}>
          ← Back to Blog
        </Link>

        <h1 className={styles.title}>Blog Post #{postId}</h1>
        <p className={styles.meta}>📅 Jan 2025 • ✍️ Admin • ⏱️ 4 min read</p>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Doloremque exercitationem dignissimos nihil commodi eaque 
            laborum quaerat pariatur fugiat obcaecati aspernatur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec vel sapien lacus. Suspendisse potenti. Praesent 
            volutpat elit et massa hendrerit, sed porta massa feugiat.
          </p>

          <p>
            Etiam non nunc felis. Sed in elementum purus. In hac 
            habitasse platea dictumst. Aenean vehicula lectus vel 
            urna euismod, quis tincidunt arcu aliquet.
          </p>
        </div>
      </div>
    </div>
  );
}
