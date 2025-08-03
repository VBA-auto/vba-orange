import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://laboiteauto.com";

  const staticUrls = [
    {
      loc: `${baseUrl}`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/prestations/diagnostic`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestations/reparation`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestations/vidange`,
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/prestations/montage`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/prestations/mecatronique`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/pieces/boite-auto`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/pieces/calculateurs`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/pieces/mecatronique`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/tarif`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressources/articles`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressources/faq`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/ressources/type-de-bva`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/ressources/aide-en-ligne`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
  ];

  const articleTitles = [
    "audi",
    "chrysler",
    "ford",
    "lexus",
    "nissan",
    "renault",
    "volkswagen",
    "citroen-ds",
    "hyundai",
    "mercedes",
    "opel",
    "skoda",
    "volvo",
    "bmw",
    "dodge",
    "jeep",
    "mini",
    "peugeot",
    "smart",
    "chevrolet",
    "fiat",
    "land-rover",
    "mitsubishi",
    "porsche",
    "toyota",
  ];

  const dynamicUrls = articleTitles.map((title) => ({
    loc: `${baseUrl}/ressources/articles/${title}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
  }));

  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urls
      .map(
        (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <priority>${url.priority}</priority>
        </url>
      `
      )
      .join("")}
  </urlset>
`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
