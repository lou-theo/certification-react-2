/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE_PATH: string;
  readonly VITE_NUMBER_OF_QUESTIONS: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
