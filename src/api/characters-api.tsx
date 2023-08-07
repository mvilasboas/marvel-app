import { Md5 } from 'ts-md5';

const BASE_URL = ' https://gateway.marvel.com/v1/public/';
const PUBLIC_KEY = 'e7e6ddd0450cd983336aec8c7a0d004a';
const PRIVATE_KEY = '7e4825945eecc2a99f6430e185babcbb1b2c596f';

const timestamp = new Date().getTime();
const md5 = new Md5();
const hash = md5
  .appendStr(`${timestamp}`)
  .appendStr(`${PRIVATE_KEY}`)
  .appendStr(`${PUBLIC_KEY}`)
  .end();
const queryString = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error('Não foi possível realizar integração com API da Marvel');
  }

  const data = await response.json();
  return data.data.results;
};

export const getAllCharacters = async (limit: number) => {
  const response = await fetch(
    `${BASE_URL}characters?limit=${limit}&${queryString}`,
    {
      cache: 'force-cache',
      next: { revalidate: 86400000 },
    }
  );

  return handleResponse(response);
};

export const getCharacterByName = async (searchName: string, limit: number) => {
  const response = await fetch(
    `${BASE_URL}characters?nameStartsWith=${searchName}&limit=${limit}&${queryString}`
  );

  return handleResponse(response);
};

export const getComicsByCharacter = async (idCharacter: number) => {
  const response = await fetch(
    `${BASE_URL}characters/${idCharacter}/comics?limit=5&${queryString}`
  );

  return handleResponse(response);
};
