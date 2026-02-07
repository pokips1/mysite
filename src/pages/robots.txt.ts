import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString() ?? "https://example.com";
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", base).toString()}\n`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};