import Image from 'next/image';
import styles from '@/components/profile-section/profile-styles.module.css';
import dotIcon from '@/assets/icons/dot-icon.svg';
import { IComics } from '@/types/marvel';
import { getReadableDate, limitString } from '@/utils/utils';

interface ComicsCardProps {
  data: IComics;
}

export default function ComicsCard({ data }: ComicsCardProps) {
  return (
    <div className={styles.comicCard}>
      <Image
        src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
        alt="Capa do quadrinho"
        className={styles.comicImg}
        width={248}
        height={263}
      />
      <div className={styles.comicDataWrapper}>
        <span className={styles.comicTitle}>{data.title}</span>
        <span className={styles.comicInfo}>
          {getReadableDate(data.modified)}
          <Image
            src={dotIcon}
            alt="Ícone de separação"
            className={styles.dotIcon}
            width={11}
            height={8}
          />
          {data.pageCount} pages
        </span>
        <span className={styles.comicDesc}>
          {limitString(data.description, 200)}
        </span>
      </div>
    </div>
  );
}
