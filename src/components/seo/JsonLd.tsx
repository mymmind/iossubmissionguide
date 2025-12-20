interface ArticleJsonLdProps {
  title: string
  description: string
  slug: string
  publishedAt: Date | string
  updatedAt: Date | string
  keywords: string[]
  siteUrl?: string
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  keywords,
  siteUrl = process.env.SITE_URL || 'http://localhost:3000',
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    image: [`${siteUrl}/assets/${slug}-share.jpg`],
    datePublished: new Date(publishedAt).toISOString(),
    dateModified: new Date(updatedAt).toISOString(),
    author: [
      {
        '@type': 'Organization',
        name: 'iOS Developer Guide',
        url: siteUrl,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'iOS Submission Guide',
      url: siteUrl,
    },
    description,
    articleSection: 'iOS Development',
    keywords: keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebsiteJsonLdProps {
  siteUrl?: string
}

export function WebsiteJsonLd({
  siteUrl = process.env.SITE_URL || 'http://localhost:3000',
}: WebsiteJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iOS Submission Guide',
    description: 'Comprehensive guide for passing the Apple App Store review process',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'iOS Developer Guide',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
