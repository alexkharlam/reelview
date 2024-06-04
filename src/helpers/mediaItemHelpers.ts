import slugify from 'slugify';
import defaultPoster from '../assets/poster-empty.png';
import { baseUrl, posterSizes } from '../data/tmdb-images-config.ts';

export const getPosterSrc = (posterPath?: string | null) => {
  const posterBaseUrl = `${baseUrl}${posterSizes.md}`;
  return posterPath ? `${posterBaseUrl}/${posterPath}` : defaultPoster;
};

export const getLinkPath = (id: number, mediaType: 'tv' | 'movie' | 'person', title: string) => {
  const slug = slugify(title, { strict: true });

  return `/${mediaType}/${id}-${slug}`;
};
