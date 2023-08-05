import styles from './home-styles.module.css';
import SearchInput from '../search-input';
import CharactersSection from './characters-section/characters-section';

export default function Home() {
  // async function getMemberInfo(member) {
  //   try {
  //     const res = await fetch(`${baseAPI_URL}/users/${member}`);
  //     renderInfoPanel(await res.json());
  //   } catch (error) {
  //     console.error(`Falha na requisição de getMemberInfo(): ${error.message}`);
  //   }
  // }

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
