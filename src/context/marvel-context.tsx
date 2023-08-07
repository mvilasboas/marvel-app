'use client';
import React, { createContext, useState } from 'react';
import { ICharacter } from '@/types/marvel';

interface MarvelContextProps {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[] | []>>;
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
}

export const MarvelContext = createContext<MarvelContextProps>({
  characters: [],
  setCharacters: () => null,
  filtered: '',
  setFiltered: () => null,
});

export const MarvelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [filtered, setFiltered] = useState<string>('');

  return (
    <MarvelContext.Provider
      value={{ characters, setCharacters, filtered, setFiltered }}
    >
      {children}
    </MarvelContext.Provider>
  );
};
