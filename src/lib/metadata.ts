import type { Metadata } from 'next'

interface GenerateMetadataParams {
  title: string
  description: string
  slug: string
  keywords?: string[]
  publishedAt?: Date | string
  updatedAt?: Date | string
  image?: string
}

const siteUrl = process.env.SITE_URL || 'http://localhost:3000'
const siteName = 'iOS Submission Guide'

export function generateArticleMetadata({
  title,
  description,
  slug,
  keywords = [],
  publishedAt,
  updatedAt,
  image,
}: GenerateMetadataParams): Metadata {
  const url = slug ? `${siteUrl}/${slug}` : siteUrl
  const imageUrl = image || `${siteUrl}/og-image.png`

  return {
    title: `${title} | ${siteName}`,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: 'iOS Developer Guide' }],
    creator: 'iOS Developer Guide',
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedAt ? new Date(publishedAt).toISOString() : undefined,
      modifiedTime: updatedAt ? new Date(updatedAt).toISOString() : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateHomeMetadata(): Metadata {
  return {
    title: 'How to Pass App Store Review (2025) | iOS Submission Guide',
    description:
      'Master the Apple App Store review process with our comprehensive 2025 guide. Avoid rejections with our pre-submission checklist covering safety, performance, design, and legal guidelines.',
    keywords: [
      'App Store Review Guidelines',
      'iOS App Submission',
      'App Store Rejection Reasons',
      'Apple Developer Checklist',
      'Pass App Store Review',
      'iOS App Distribution',
      'App Store Connect Guide',
    ],
    authors: [{ name: 'iOS Developer Guide' }],
    creator: 'iOS Developer Guide',
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: siteUrl,
      title: 'How to Pass App Store Review (2025) | Complete iOS Submission Guide',
      description:
        'Stop getting rejected. Use this comprehensive checklist to navigate Apple\'s strict review process for Safety, Performance, and Design.',
      siteName,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'iOS Submission Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How to Pass App Store Review (2025) | Complete iOS Submission Guide',
      description:
        'Stop getting rejected. Use this comprehensive checklist to navigate Apple\'s strict review process.',
      images: [`${siteUrl}/og-image.png`],
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}
