import type { Locale } from "../types/site";

export const SITE_NAME = "Mario Rossi";
export const SITE_TAGLINE = "Siti web statici moderni, veloci e orientati alla conversione";
export const SITE_BASE_URL = "https://pokips1.github.io";

export const CONTACT = {
  email: "ciao@example.com",
  whatsappNumber: "393400000000",
  whatsappMessage: "Ciao Mario, vorrei informazioni per un sito web."
};

export const NAV: Record<Locale, Array<{ href: string; label: string }>> = {
  it: [
    { href: "/", label: "Home" },
    { href: "/chi-sono", label: "Chi sono" },
    { href: "/progetti", label: "Progetti" },
    { href: "/contattami", label: "Contattami" }
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/about", label: "About" },
    { href: "/en/projects", label: "Projects" },
    { href: "/en/contact", label: "Contact" }
  ]
};
