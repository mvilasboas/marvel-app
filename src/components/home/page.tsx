'use client';

import { Suspense, useContext, useEffect, useCallback } from 'react';
import styles from './home-styles.module.css';
import SearchInput from '../search-input';
import CharactersSection from './characters-section/characters-section';
import { MarvelContext } from '@/context/marvel-context';
import { getAllCharacters } from '@/api/characters-api';

export default function Home() {
  const { setCharacters } = useContext(MarvelContext);

  const getCharacters = useCallback(async () => {
    try {
      setCharacters(await getAllCharacters());
    } catch (error) {
      console.error('Erro ao listar todos personagens');
    }
  }, []);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className={styles.homeContainer}>
      <h1>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</h1>
      <p className={styles.subtitle}>
        Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
        generosa porção de heróis e vilões!
      </p>
      <SearchInput />
      <Suspense
        fallback={
          <div style={{ margin: '0px auto', width: '100%' }}>
            Carregando heróis...
          </div>
        }
      >
        <CharactersSection />
      </Suspense>
    </section>
  );
}
