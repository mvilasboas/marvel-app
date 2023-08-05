'use client';

import Image from 'next/image';
import styles from './component-styles.module.css';
import searchIcon from '../assets/icons/search-icon.svg';

export default function SearchInput() {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.inputSearchContainer}>
      <div className={styles.inputSearchWrapper}>
        <Image
          priority
          src={searchIcon}
          alt="Ícone de lupa"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Procure por heróis"
          autoComplete="true"
          className={styles.inputSearch}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
}
