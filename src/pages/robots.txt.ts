import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = new URL(site?.toString() ?? "https://example.com");
  const basePath = base.pathname.replace(/\/$/, "");
  const sitemapPath = `${basePath}/sitemap.xml`;
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${new URL(sitemapPath, base.origin).toString()}\n`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
