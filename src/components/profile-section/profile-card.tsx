import Image from 'next/image';
import styles from '@/components/profile-section/profile-styles.module.css';
import { ICharacter } from '@/types/marvel';

interface ProfileCardProps {
  data: ICharacter;
}

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <Image
        src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
        alt="Foto do herói"
        className={styles.profileImg}
        width={220}
        height={212}
      />
      <div className={styles.dataWrapper}>
        <span className={styles.profileName}>{data?.name}</span>
        <span className={styles.profileDesc}>{data?.description}</span>
      </div>
    </div>
  );
}
