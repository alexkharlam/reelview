import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import type {
  MovieDetails,
  MovieVideos,
  PopularMovies,
  PopularTvShows,
  SearchMulti,
  TopRatedMovies,
  TopRatedTvShows,
  TvDetails,
  UpcomingMovies,
} from '../types/apiTmdb.ts';

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const defaultParams = { api_key: TMDB_API_KEY };

export const searchContent = async (query: string): Promise<SearchMulti> => {
  const res = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
    params: { ...defaultParams, query },
  });
  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getPopularMovies = async (): Promise<PopularMovies> => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTopRatedMovies = async (): Promise<TopRatedMovies> => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getUpcomingMovies = async (): Promise<UpcomingMovies> => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/upcoming`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getPopularTvShows = async (): Promise<PopularTvShows> => {
  const res = await axios.get(`${TMDB_BASE_URL}/tv/popular`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTopRatedTvShows = async (): Promise<TopRatedTvShows> => {
  const res = await axios.get(`${TMDB_BASE_URL}/tv/top_rated`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getMovieVideos = async (id: number): Promise<MovieVideos> => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/${id}/videos`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTvShowDetails = async (id: number): Promise<TvDetails> => {
  const res = await axios.get(`${TMDB_BASE_URL}/tv/${id}`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};
