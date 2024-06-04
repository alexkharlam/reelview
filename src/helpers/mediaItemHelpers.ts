import slugify from 'slugify';
import defaultPoster from '../assets/poster-empty.png';
import { PosterSize } from '../types/ConfigTmdb.ts';

const baseUrl = import.meta.env.VITE_TMDB_IMG_BASE_URL;

export const getPosterSrc = (size: PosterSize, posterPath?: string | null) => {
  const posterBaseUrl = `${baseUrl}/${size}`;
  return posterPath ? `${posterBaseUrl}/${posterPath}` : defaultPoster;
};

export const getLinkPath = (id: number, mediaType: 'tv' | 'movie' | 'person', title: string) => {
  const slug = slugify(title, { strict: true });

  return `/${mediaType}/${id}-${slug}`;
};
