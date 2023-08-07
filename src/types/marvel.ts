export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface IComics {
  id: number;
  title: string;
  modified: string;
  pageCount: number;
  variantDescription: string;
  description: string;
  thumbnail: { path: string; extension: string };
}
