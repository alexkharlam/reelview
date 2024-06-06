import slugify from 'slugify';
import defaultPoster from '../assets/poster-empty.png';
import { BackdropSize, PosterSize } from '../types/ConfigTmdb.ts';
import { Genres } from '../types/apiTmdb.ts';

const baseUrl = import.meta.env.VITE_TMDB_IMG_BASE_URL;

export const getPosterSrc = (size: PosterSize, posterPath?: string | null) => {
  const posterBaseUrl = `${baseUrl}/${size}`;
  return posterPath ? `${posterBaseUrl}/${posterPath}` : defaultPoster;
};

export const getBackdropSrc = (size: BackdropSize, backdropPath?: string | null) => {
  const posterBaseUrl = `${baseUrl}/${size}`;
  return backdropPath ? `${posterBaseUrl}/${backdropPath}` : defaultPoster;
};

export const getLinkPath = (id: number, mediaType: 'tv' | 'movie' | 'person', title: string) => {
  const slug = slugify(title, { strict: true });

  return `/${mediaType}/${id}-${slug}`;
};

export const getGenresText = (genres: Genres) => {
  if (genres.length === 0) return '';

  return genres.map((genre) => genre.name).join(', ');
};
