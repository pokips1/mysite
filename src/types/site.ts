export type Locale = "it" | "en";

export type Theme = "light" | "dark" | "system";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  noindex?: boolean;
  alternates?: Partial<Record<Locale, string>>;
}

export interface ProjectData {
  title: string;
  slug: string;
  summary: string;
  sector: string;
  tech: string[];
  cover: string;
  liveUrl: string;
  repoUrl?: string;
  results: string;
  featured: boolean;
  lang: Locale;
}