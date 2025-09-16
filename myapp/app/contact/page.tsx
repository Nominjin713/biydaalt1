import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        You can reach us at <a href="mailto:contact@example.com">contact@example.com</a>.
      </p>
    </div>
  );
}
