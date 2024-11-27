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

  const imageUrls = [
    {
      loc: `${baseUrl}/images/0AW(Multitronic).jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/0B5(DL501).jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/01j.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/5L40E.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/5R55N.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/6DCT450.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/6hp.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/6HP26.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/8hp.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/8HP70.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/722.8.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/aideEn.webp`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/audi.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/audiArti.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/audiArti2.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/AW-55-50.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/bmw.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/bmwArti.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/bmwArti2.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/boite.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/boiteOld.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculateurs.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/calculators.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/carArt.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/carBlog.jpg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/chevrolet.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/chrysler.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/citreonArti.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/citreonArti2.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/citroen-ds.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/cookies.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/diag1.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/diag2.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/diag3.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/diagChild.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/diagnostic.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/dodge.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/dq381.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/dqg6Meca.jpeg`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/VBAlogo.webp`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/meca3.png`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/images/video.webm`,
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  ];

  const urls = [...staticUrls, ...imageUrls];

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
