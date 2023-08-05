import styles from './component-styles.module.css';

export default function Footer() {
  const COPYRIGHT_YEAR = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p>
          Data provided by Marvel. © {COPYRIGHT_YEAR} MARVEL
        </p>
        <p>
          Desenvolvido por <span>Marcelo Vilas Boas</span>
        </p>
      </div>
    </footer>
  );
}
