import { HtmlRenderer } from '@/lib/html-renderer'
import { ArticleJsonLd, WebsiteJsonLd } from '@/components/seo'
import { generateHomeMetadata } from '@/lib/metadata'

export const metadata = generateHomeMetadata()

// Revalidate every hour
export const revalidate = 3600

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
  let hubArticle = null

  try {
    const res = await fetch(`${apiUrl}/api/articles/app-store-guide`, { 
      next: { revalidate: 3600 } 
    })
    if (res.ok) {
      hubArticle = await res.json()
    }
  } catch (error) {
    console.error('Could not fetch hub article from API:', error)
  }

  // If no hub article exists, show a placeholder
  if (!hubArticle) {
    return (
      <div className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-apple-dark">
          iOS Submission Guide
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to the iOS Submission Guide. Content is being set up.
        </p>
        <p className="text-gray-500">
          Run the database seed script to populate the content.
        </p>
      </div>
    )
  }

  return (
    <>
      <WebsiteJsonLd />
      <ArticleJsonLd
        title={hubArticle.title}
        description={hubArticle.description}
        slug=""
        publishedAt={hubArticle.publishedAt}
        updatedAt={hubArticle.updatedAt}
        keywords={hubArticle.metaKeywords}
      />

      <article>
        <HtmlRenderer content={hubArticle.content} />
      </article>
    </>
  )
}
