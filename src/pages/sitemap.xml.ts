import type { APIRoute } from "astro";

const routes = [
  "/",
  "/chi-sono",
  "/progetti",
  "/contattami",
  "/en",
  "/en/about",
  "/en/projects",
  "/en/contact"
];

export const GET: APIRoute = ({ site }) => {
  const base = new URL(site?.toString() ?? "https://example.com");
  const basePath = base.pathname.replace(/\/$/, "");
  const lastmod = new Date().toISOString();
  const toLoc = (route: string) => {
    const cleanRoute = route === "/" ? "" : route;
    return new URL(`${basePath}${cleanRoute}`, base.origin).toString();
  };
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${toLoc(route)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
