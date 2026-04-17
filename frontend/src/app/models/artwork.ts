import { Artist } from './artist';

export class Artwork {
  id?: number;
  title!: string;
  style!: string;
  description!: string;
  imageUrl!: string;
  artist!: Artist;
}