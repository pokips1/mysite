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
  const base = site?.toString() ?? "https://example.com";
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${new URL(route, base).toString()}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};