'use client';

import { Suspense, useContext, useEffect, useCallback } from 'react';
import styles from './home-styles.module.css';
import SearchInput from '../components/search-input';
import CharactersSection from '../components/characters-section/characters-section';
import { MarvelContext } from '@/context/marvel-context';
import { getAllCharacters, getCharacterByName } from '@/api/characters-api';

export default function Home() {
  const {
    setCharacters,
    filtered,
    setFavorite,
    isShowingFavorite,
    limit,
    setLimit,
  } = useContext(MarvelContext);

  const getCharacters = useCallback(
    async (filtered: string, limit: number) => {
      try {
        if (filtered.trim() === '') {
          setCharacters(await getAllCharacters(limit));
        } else {
          setCharacters(await getCharacterByName(filtered, limit));
        }
      } catch (error) {
        console.error('Erro ao listar todos personagens');
      }
    },
    [setCharacters]
  );

  const getFavoriteList = useCallback(() => {
    const data = localStorage.getItem('ListOfFavoriteHeroes');
    data ? setFavorite(JSON.parse(data)) : setFavorite([]);
  }, [setFavorite]);

  useEffect(() => {
    getFavoriteList();

    if (isShowingFavorite) {
      const data = localStorage.getItem('ListOfFavoriteHeroes');
      data ? setCharacters(JSON.parse(data)) : setCharacters([]);
    } else {
      getCharacters(filtered, limit);
    }
  }, [
    getCharacters,
    setCharacters,
    getFavoriteList,
    filtered,
    isShowingFavorite,
    limit,
  ]);

  useEffect(() => {
    const iObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLimit((prev) => prev + 20);
      }
    });

    iObserver.observe(document.querySelector('#observer')!);

    return () => iObserver.disconnect();
  }, [setLimit]);

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
