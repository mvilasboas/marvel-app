'use client';
import { useContext } from 'react';
import { MarvelContext } from '@/context/marvel-context';
import Image from 'next/image';
import backgroundImg from '@/assets/images/profile-background.png';
import styles from '@/components/profile-section/profile-styles.module.css';
import ProfileCard from '@/components/profile-section/profile-card';
import ComicsSection from '@/components/profile-section/comics-section';

interface ProfileProps {
  searchParams: {
    id: string;
  };
}

export default function Profile({ searchParams }: ProfileProps) {
  const { characters } = useContext(MarvelContext);
  const char = characters.filter(
    (char) => char.id === parseInt(searchParams.id)
  )[0];
  debugger;

  return (
    <section>
      <Image
        src={backgroundImg}
        alt="Foto do herói"
        className={styles.backgroundImg}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>
          DESCUBRA TODOS OS QUADRINHOS DESTE PERSONAGEM
        </h1>
        {char && (
          <>
            <ProfileCard data={char} />
            <ComicsSection idCharacter={char?.id} />
          </>
        )}
      </div>
    </section>
  );
}
