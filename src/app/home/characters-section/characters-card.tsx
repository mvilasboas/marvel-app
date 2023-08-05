import Image from 'next/image';
import iconHeart from '../../../assets/icons/heart-icon.svg';
import iconFilledHeart from '../../../assets/icons/filled-heart-icon.svg';
import styles from './characters-styles.module.css';

export default function CharactersCard() {
  const setFavorite = () => {
    console.log('Favoritado');
  };

  const statusIcon = {
    unfavorite: iconHeart,
    favorite: iconFilledHeart,
  };

  return (
    <div className={styles.card}>
      <Image src={iconHeart} alt="Nome do personagem" className={styles.cardImg} />
      <div className={styles.wrapper}>
        <span className={styles.charLabel}>Nome do herói</span>
        <Image
          src={statusIcon["favorite"]}
          alt="Ícone de favorito"
          className={styles.iconBtn}
          onClick={() => setFavorite()}
        />
      </div>
      <p className={styles.charDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        convallis velit.
      </p>
    </div>
  );
}
