/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENTID: string;
  readonly VITE_TMDB_BASE_URL: string;
  readonly VITE_TMDB_API_KEY: string;
  readonly VITE_TMDB_IMG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
