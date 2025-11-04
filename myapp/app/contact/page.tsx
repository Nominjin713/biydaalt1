"use client";

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>📬 Contact Us</h1>
        <p className={styles.subtitle}>Бидэнтэй холбогдоорой</p>

        <div className={styles.info}>
          <p>📧 contact@example.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 Ulaanbaatar, Mongolia</p>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Нэр" className={styles.input} />
          <input type="email" placeholder="Имэйл" className={styles.input} />
          <textarea placeholder="Таны мессеж..." className={styles.textarea}></textarea>

          <button className={styles.button}>Илгээх</button>
        </form>
      </div>
    </div>
  );
}
