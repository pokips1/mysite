import type { Locale, SeoMeta } from "../types/site";
import { toAbsoluteUrl } from "./links";
import { SITE_NAME } from "./site";

export const createSeo = (params: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  alternates?: Partial<Record<Locale, string>>;
  noindex?: boolean;
}): SeoMeta => {
  const canonical = toAbsoluteUrl(params.path);
  return {
    title: `${params.title} | ${SITE_NAME}`,
    description: params.description,
    canonical,
    ogImage: toAbsoluteUrl("/og-default.svg"),
    alternates: params.alternates,
    noindex: params.noindex
  };
};
