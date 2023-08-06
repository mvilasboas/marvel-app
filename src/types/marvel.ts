export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface IComics {
  thumbnail: { path: string; extension: string };
  title: string;
  modified: string;
  pageCount: number;
  variantDescription: string;
  description: string;
}
