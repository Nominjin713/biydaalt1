import styles from "./page.module.css";

export default function About() {
  return (
    <div className={`p-8 ${styles.customContainer}`}>
      <h1 className={styles.title}>Minii tuhai</h1>
      <p className={styles.description}>ene huudsiig css module ashiglj hiisn</p>
      <p className="mt-2">bi unshih durtai</p>
    </div>
  );
}
