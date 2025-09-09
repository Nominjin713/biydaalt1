import styles from "./page.module.css";
import Header from "@/components/Header";
export default function About() {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Minii tuhai</h1>
      <p className={styles.description}>ene huudsiig css module ashiglj hiisn</p>
      <p className="mt-2">bi unshih durtai</p>
    </div>
  );
}
