import styles from './characters-styles.module.css';
import CharactersCard from './characters-card';

export default function CharactersList() {
  return (
    <div className={styles.listContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <CharactersCard key={i}/>
      ))}
    </div>
  );
}
