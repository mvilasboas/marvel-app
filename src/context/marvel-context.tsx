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
}

export const MarvelContext = createContext<MarvelContextProps>({
  characters: [],
  setCharacters: () => null,
  filtered: '',
  setFiltered: () => null,
  favorite: [],
  setFavorite: () => null,
});

export const MarvelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [filtered, setFiltered] = useState<string>('');
  const [favorite, setFavorite] = useState<ICharacter[] | []>([]);

  return (
    <MarvelContext.Provider
      value={{
        characters,
        setCharacters,
        filtered,
        setFiltered,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};
