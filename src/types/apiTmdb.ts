export type MovieVideos = {
  id: number;
  results:
    | {
        iso6391: string;
        iso31661: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        publishedAt: string;
        id: string;
      }[]
    | [];
};

export type MovieDetails = {
  adult: boolean;
  backdropPath: null | string;
  belongsToCollection: null | {
    id: number;
    name: string;
    posterPath: null | string;
    backdropPath: null | string;
  };
  budget: number;
  genres: [] | { id: number; name: string }[];
  homepage: string;
  id: number;
  imdbId: null | string;
  originCountry: [] | string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  productionCompanies:
    | []
    | { id: number; logoPath: string | null; name: string; originCountry: string }[];
  productionCountries: [] | { iso31661: string; name: string }[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages:
    | []
    | {
        englishName: string;
        iso6391: string;
        name: string;
      }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type TvEpisode = {
  id: number;
  overview: string;
  name: string;
  voteAverage: number;
  voteCount: number;
  airDate: string | null;
  episodeNumber: number;
  episodeType: string;
  productionCode: string;
  runtime: null | number;
  seasonNumber: number;
  showId: number;
  stillPath: null | string;
};

export type TvDetails = {
  adult: boolean;
  backdropPath: string | null;
  createdBy:
    | {
        id: number;
        creditId: string;
        name: string;
        originalName: string;
        gender: number;
        profilePath: null | string;
      }[]
    | [];
  episodeRunTime: [] | number[];
  firstAirDate: string;
  genres: [] | { id: number; name: string }[];
  homepage: string;
  id: number;
  inProduction: boolean;
  languages: [] | string[];
  lastAirDate: string | null;
  lastEpisodeToAir: null | TvEpisode;
  name: string;
  nextEpisodeToAir: null | TvEpisode;
  networks:
    | []
    | {
        id: number;
        logoPath: string | null;
        name: string;
        originCountry: string;
      }[];
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: [] | string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  productionCompanies:
    | []
    | { id: number; logoPath: string | null; name: string; originCountry: string }[];
  productionCountries: [] | { iso31661: string; name: string }[];
  seasons:
    | []
    | {
        airDate: string | null;
        episodeCount: number;
        id: number;
        name: string;
        overview: string;
        posterPath: string | null;
        seasonNumber: number;
        voteAverage: number;
      }[];
  spokenLanguages:
    | []
    | {
        englishName: string;
        iso6391: string;
        name: string;
      }[];
  status: string;
  tagline: string;
  type: string;
  voteAverage: number;
  voteCount: number;
};

export type MovieListResult = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type TvListResult = {
  adult: boolean;
  backdropPath: string | null;
  genreIds: number[] | [];
  id: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  firstAirDate: string;
  name: string;
  voteAverage: number;
  voteCount: number;
};

export type SearchMultiResult = {
  backdropPath?: string | null;
  id: number;
  originalName?: string;
  overview?: string;
  posterPath?: string | null;
  mediaType: 'tv' | 'movie' | 'person';
  adult: boolean;
  name?: string;
  originalLanguage?: string;
  genreIds?: number[] | [];
  popularity: number;
  firstAirDate?: string;
  voteAverage?: number;
  voteCount?: number;
  originCountry?: string[];
  originalTitle?: string;
  title?: string;
  releaseDate?: string;
  video?: boolean;
  gender?: number;
  knownForDepartment?: string;
  profilePath?: string | null;
  knownFor?: string[];
};

export type SearchMulti = {
  page: number;
  results: SearchMultiResult[];
  totalPages: number;
  totalResults: number;
};

export type PopularMovies = {
  page: number;
  results: MovieListResult[];
  totalPages: number;
  totalResults: number;
};

export type TopRatedMovies = {
  page: number;
  results: MovieListResult[];
  totalPages: number;
  totalResults: number;
};

export type UpcomingMovies = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieListResult[];
  totalPages: number;
  totalResults: number;
};

export type PopularTvShows = {
  page: number;
  results: TvListResult[];
  totalPages: number;
  totalResults: number;
};

export type TopRatedTvShows = {
  page: number;
  results: TvListResult[];
  totalPages: number;
  totalResults: number;
};
