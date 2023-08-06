'use client';

import React, { createContext, useState } from 'react';
import { ICharacter } from '@/types/marvel';

interface MarvelContextProps {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[] | []>>;
}

export const MarvelContext = createContext<MarvelContextProps>({
  characters: [],
  setCharacters: () => null,
});

export const MarvelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);

  return (
    <MarvelContext.Provider value={{ characters, setCharacters }}>
      {children}
    </MarvelContext.Provider>
  );
};
