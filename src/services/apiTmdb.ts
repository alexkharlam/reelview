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

export const searchContent = async (query: string) => {
  const res = await axios.get<SearchMulti>(`${TMDB_BASE_URL}/search/multi`, {
    params: { ...defaultParams, query },
  });
  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getPopularMovies = async () => {
  const res = await axios.get<PopularMovies>(`${TMDB_BASE_URL}/movie/popular`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTopRatedMovies = async () => {
  const res = await axios.get<TopRatedMovies>(`${TMDB_BASE_URL}/movie/top_rated`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getUpcomingMovies = async () => {
  const res = await axios.get<UpcomingMovies>(`${TMDB_BASE_URL}/movie/upcoming`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getPopularTvShows = async () => {
  const res = await axios.get<PopularTvShows>(`${TMDB_BASE_URL}/tv/popular`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTopRatedTvShows = async () => {
  const res = await axios.get<TopRatedTvShows>(`${TMDB_BASE_URL}/tv/top_rated`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getMovieDetails = async (id: number) => {
  const res = await axios.get<MovieDetails>(`${TMDB_BASE_URL}/movie/${id}`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getMovieVideos = async (id: number) => {
  const res = await axios.get<MovieVideos>(`${TMDB_BASE_URL}/movie/${id}/videos`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};

export const getTvShowDetails = async (id: number) => {
  const res = await axios.get<TvDetails>(`${TMDB_BASE_URL}/tv/${id}`, {
    params: { ...defaultParams },
  });

  const camelData = camelcaseKeys(res.data, { deep: true });
  return camelData;
};
