'use client';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import iconHeart from '../../assets/icons/heart-icon.svg';
import iconFilledHeart from '../../assets/icons/filled-heart-icon.svg';
import styles from './characters-styles.module.css';
import { ICharacter } from '@/types/marvel';
import { limitString } from '@/utils/utils';
import { MarvelContext } from '@/context/marvel-context';

interface CharactersCardProps {
  character: ICharacter;
}

export default function CharactersCard({ character }: CharactersCardProps) {
  const { favorite, setFavorite } = useContext(MarvelContext);

  useEffect(() => {
    localStorage.setItem('ListOfFavoriteHeroes', JSON.stringify(favorite));
  }, [favorite]);
  
  const handleFavorite = (param: ICharacter) => {
    favorite?.find((c) => c.id === param.id)
      ? setFavorite(favorite.filter((c) => c.id !== param.id))
      : setFavorite((prev) => [...prev, param]);
  };

  const checkIfIsFavorite = (id: number): string => {
    return favorite?.find((c) => c.id === id) ? iconFilledHeart : iconHeart;
  };

  return (
    <div style={{ position: 'relative' }}>
      <Link
        href={{
          pathname: '/character-profile',
          query: { id: character.id },
        }}
      >
        <div className={styles.card}>
          <Image
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            alt={`Imagem do ${character.name}`}
            width={200}
            height={100}
            className={styles.cardImg}
          />
          <div className={styles.wrapper}>
            <span className={styles.charLabel}>{character.name}</span>
          </div>
          <p className={styles.charDescription}>
            {limitString(character.description, 80)}
          </p>
        </div>
      </Link>
      <Image
        src={checkIfIsFavorite(character.id)}
        alt="Ícone de favorito"
        className={styles.iconBtn}
        onClick={() => handleFavorite(character)}
      />
    </div>
  );
}