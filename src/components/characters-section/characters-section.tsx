
import styles from './characters-styles.module.css';
import Image from 'next/image';
import heartFilledIcon from '../../assets/icons/filled-heart-icon.svg';
import CharactersCard from './characters-card';
import { useContext } from 'react';
import { MarvelContext } from '@/context/marvel-context';
import { ICharacter } from '@/types/marvel';

export default function CharactersSection() {
  const { characters } = useContext(MarvelContext);
  
  const filterByFavorites = () => {
    console.log('Só favoritos');
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfoWrapper}>
        <p className={styles.searchResult}>
          {characters.length > 0
            ? characters.length !== 1
              ? `Encontrados ${characters.length} heróis`
              : 'Encontrado 1 herói'
            : 'Nenhum herói encontrado'}
        </p>
        {characters.length > 0 && (
          <button
            className={styles.favoriteBtn}
            onClick={() => filterByFavorites()}
          >
            <Image
              priority
              src={heartFilledIcon}
              alt="Ícone de favoritos"
              className={styles.heartIcon}
            />
            <span className={styles.favoriteTxt}>Somente favoritos</span>
          </button>
        )}
      </div>
      <div className={styles.listContainer}>
        {characters?.map((character: ICharacter) => (
          <CharactersCard key={character?.id} character={character}/>
        ))}
      </div>
    </div>
  );
}
