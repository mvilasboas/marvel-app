'use client';

import Image from 'next/image';
import heartFilledIcon from '../../../assets/icons/filled-heart-icon.svg';
import styles from './characters-styles.module.css';
import CharactersList from './characters-list';

export default function CharactersSection() {
  const filterByFavorites = () => {
    console.log('Só favoritos');
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfoWrapper}>
        <p className={styles.searchResult}>Encontrados 12 heróis</p>
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
      </div>
      <CharactersList />
    </div>
  );
}
