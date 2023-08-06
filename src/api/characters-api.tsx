'use client';

import { Md5 } from 'ts-md5';

const BASE_URL = 'https:gateway.marvel.com/v1/public/characters';
const PUBLIC_KEY = 'e7e6ddd0450cd983336aec8c7a0d004a';
const PRIVATE_KEY = '7e4825945eecc2a99f6430e185babcbb1b2c596f';
const timestamp = new Date().getTime();
const md5 = new Md5();
const hash = md5
  .appendStr(`${timestamp}`)
  .appendStr(`${PRIVATE_KEY}`)
  .appendStr(`${PUBLIC_KEY}`)
  .end();

export const getAllCharacters = async () => {
  const response = await fetch(
    `${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
  );

  if (!response.ok) {
    throw new Error('Não foi possível realizar integração com API da Marvel');
  }

  const data = await response.json();
  return data.data.results;
};
