import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      select: {
        slug: true,
        updatedAt: true,
        isHub: true,
      },
      orderBy: { publishedAt: 'desc' },
    })

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${articles
  .filter((article) => !article.isHub)
  .map(
    (article) => `  <url>
    <loc>${siteUrl}/${article.slug}</loc>
    <lastmod>${article.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return NextResponse.json(
      { error: 'Failed to generate sitemap' },
      { status: 500 }
    )
  }
}
