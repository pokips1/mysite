import type { Locale, SeoMeta } from "../types/site";
import { toAbsoluteUrl } from "./links";

export const createSeo = (params: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  alternates?: Partial<Record<Locale, string>>;
}): SeoMeta => {
  const canonical = toAbsoluteUrl(params.path);
  return {
    title: `${params.title} | Mario Rossi`,
    description: params.description,
    canonical,
    ogImage: toAbsoluteUrl("/og-default.svg"),
    alternates: params.alternates
  };
};