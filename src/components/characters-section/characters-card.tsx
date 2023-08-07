import Link from 'next/link';
import Image from 'next/image';
import iconHeart from '../../assets/icons/heart-icon.svg';
import iconFilledHeart from '../../assets/icons/filled-heart-icon.svg';
import styles from './characters-styles.module.css';
import { ICharacter } from '@/types/marvel';
import { limitString } from '@/utils/utils';

interface CharactersCardProps {
  character: ICharacter;
}

export default function CharactersCard({ character }: CharactersCardProps) {
  const setFavorite = () => {
    console.log('Favoritado');
  };

  const statusIcon = {
    unfavorite: iconHeart,
    favorite: iconFilledHeart,
  };

  return (
    <Link
      href={{
        pathname: '/character-profile/',
        query: { params: character.id },
      }}
      as={`/character-profile/${character.id}`}
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
          <Image
            src={iconHeart}
            alt="Ícone de favorito"
            className={styles.iconBtn}
            onClick={() => setFavorite()}
          />
        </div>
        <p className={styles.charDescription}>
          {limitString(character.description, 80)}
        </p>
      </div>
    </Link>
  );
}
