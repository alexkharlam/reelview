export type MovieVideos = {
  id: number;
  results:
    | {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }[]
    | [];
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: null | string;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: null | string;
    backdrop_path: null | string;
  };
  budget: number;
  genres: [] | { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: null | string;
  origin_country: [] | string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies:
    | []
    | { id: number; logo_path: string | null; name: string; origin_country: string }[];
  production_countries: [] | { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages:
    | []
    | {
        english_name: string;
        iso_639_1: string;
        name: string;
      }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TvEpisode = {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string | null;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: null | number;
  season_number: number;
  show_id: number;
  still_path: null | string;
};

export type TvDetails = {
  adult: boolean;
  backdrop_path: string | null;
  created_by:
    | {
        id: number;
        credit_id: string;
        name: string;
        original_name: string;
        gender: number;
        profile_path: null | string;
      }[]
    | [];
  episode_run_time: [] | number[];
  first_air_date: string;
  genres: [] | { id: number; name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: [] | string[];
  last_air_date: string | null;
  last_episode_to_air: null | TvEpisode;
  name: string;
  next_episode_to_air: null | TvEpisode;
  networks:
    | []
    | {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
      }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [] | string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies:
    | []
    | { id: number; logo_path: string | null; name: string; origin_country: string }[];
  production_countries: [] | { iso_3166_1: string; name: string }[];
  seasons:
    | []
    | {
        air_date: string | null;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string | null;
        season_number: number;
        vote_average: number;
      }[];
  spoken_languages:
    | []
    | {
        english_name: string;
        iso_639_1: string;
        name: string;
      }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type MovieListResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TvListResult = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[] | [];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type SearchMultiResult = {
  backdrop_path?: string | null;
  id: number;
  original_name?: string;
  overview?: string;
  poster_path?: string | null;
  media_type: string;
  adult: boolean;
  name?: string;
  original_language?: string;
  genre_ids?: number[] | [];
  popularity: number;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  origin_country?: string[];
  original_title?: string;
  title?: string;
  release_date?: string;
  video?: boolean;
  gender?: number;
  known_for_department?: string;
  profile_path?: string | null;
  known_for?: string[];
};

export type SearchMulti = {
  page: number;
  results: SearchMultiResult[];
  total_pages: number;
  total_results: number;
};

export type PopularMovies = {
  page: number;
  results: MovieListResult[];
  total_pages: number;
  total_results: number;
};

export type TopRatedMovies = {
  page: number;
  results: MovieListResult[];
  total_pages: number;
  total_results: number;
};

export type UpcomingMovies = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieListResult[];
  total_pages: number;
  total_results: number;
};

export type PopularTvShows = {
  page: number;
  results: TvListResult[];
  total_pages: number;
  total_results: number;
};

export type TopRatedTvShows = {
  page: number;
  results: TvListResult[];
  total_pages: number;
  total_results: number;
};
