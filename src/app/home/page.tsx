import styles from './home-styles.module.css';
import SearchInput from '../components/search-input';
import CharactersSection from './characters-section/characters-section';

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</h1>
      <p className={styles.subtitle}>
        Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
        generosa porção de heróis e vilões!
      </p>
      <SearchInput />
      <CharactersSection />
    </section>
  );
}
