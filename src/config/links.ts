import type { Locale } from "../types/site";
import { CONTACT, SITE_BASE_URL } from "../config/site";

const baseUrl = import.meta.env.BASE_URL ?? "/";

export const withBase = (path: string) => {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedBase ? `${normalizedBase}${normalizedPath}` : normalizedPath;
};

export const toAbsoluteUrl = (path: string) => new URL(withBase(path), SITE_BASE_URL).toString();

export const whatsappLink = (locale: Locale) => {
  const message = locale === "it"
    ? CONTACT.whatsappMessage
    : "Hi Mario, I would like information about a website project.";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
};

export const mailtoLink = () => `mailto:${CONTACT.email}`;
