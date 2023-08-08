import { getComicsByCharacter } from '@/api/characters-api';
import { ICharacter, IComics } from '@/types/marvel';
import ComicsCard from '@/components/profile-section/comics-card';

interface ComicsSectionProps {
  data: ICharacter;
}

export default async function ComicsSection({ data }: ComicsSectionProps) {
  const comics = await getComicsByCharacter(data?.id);

  return (
    <>
      {comics.map((comic: IComics) => (
        <ComicsCard key={comic.id} data={comic} />
      ))}
    </>
  );
}
