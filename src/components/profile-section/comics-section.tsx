import { getComicsByCharacter } from '@/api/characters-api';
import { IComics } from '@/types/marvel';
import ComicsCard from '@/components/profile-section/comics-card';

interface ComicsSectionProps {
  idCharacter: number;
}

export default async function ComicsSection({
  idCharacter,
}: ComicsSectionProps) {
  const comics = await getComicsByCharacter(idCharacter);

  return (
    <>
      {comics.map((comic: IComics) => (
        <ComicsCard key={comic.id} data={comic} />
      ))}
    </>
  );
}
