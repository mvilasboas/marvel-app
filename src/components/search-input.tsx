'use client';
import Image from 'next/image';
import styles from './component-styles.module.css';
import searchIcon from '../assets/icons/search-icon.svg';
import { useContext } from 'react';
import { MarvelContext } from '@/context/marvel-context';

export default function SearchInput() {
  const { filtered, setFiltered } = useContext(MarvelContext);

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
          value={filtered}
          className={styles.inputSearch}
          onChange={(event) => setFiltered(event.target.value)}
        />
      </div>
    </div>
  );
}
