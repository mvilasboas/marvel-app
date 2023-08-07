'use client';
import React, { createContext, useState } from 'react';
import { ICharacter } from '@/types/marvel';

interface MarvelContextProps {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[] | []>>;
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
  favorite: ICharacter[];
  setFavorite: React.Dispatch<React.SetStateAction<ICharacter[] | []>>;
  isShowingFavorite: boolean;
  setIsShowingFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export const MarvelContext = createContext<MarvelContextProps>({
  characters: [],
  setCharacters: () => null,
  filtered: '',
  setFiltered: () => null,
  favorite: [],
  setFavorite: () => null,
  isShowingFavorite: false,
  setIsShowingFavorite: () => null,
  limit: 20,
  setLimit: () => null,
});

export const MarvelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [filtered, setFiltered] = useState<string>('');
  const [favorite, setFavorite] = useState<ICharacter[] | []>([]);
  const [isShowingFavorite, setIsShowingFavorite] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(20);

  return (
    <MarvelContext.Provider
      value={{
        characters,
        setCharacters,
        filtered,
        setFiltered,
        favorite,
        setFavorite,
        isShowingFavorite,
        setIsShowingFavorite,
        limit,
        setLimit
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};
