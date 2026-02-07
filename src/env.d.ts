export interface ImportMetaEnv {
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
}

interface Window {
  plausible?: (eventName: string) => void;
}