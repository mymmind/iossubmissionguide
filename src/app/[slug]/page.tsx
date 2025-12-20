import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { HtmlRenderer } from '@/lib/html-renderer'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo'
import { generateArticleMetadata } from '@/lib/metadata'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Revalidate every hour
export const revalidate = 3600

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'

// Generate static paths at build time
export async function generateStaticParams() {
  try {
    const res = await fetch(`${apiUrl}/api/articles`)
    if (res.ok) {
      const articles = await res.json()
      return articles
        .filter((a: any) => !a.isHub)
        .map((article: any) => ({ slug: article.slug }))
    }
    return []
  } catch (error) {
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const res = await fetch(`${apiUrl}/api/articles/${slug}`)
    if (!res.ok) return { title: 'Not Found' }
    
    const article = await res.json()

    return generateArticleMetadata({
      title: article.title,
      description: article.description,
      slug,
      keywords: article.metaKeywords,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
    })
  } catch (error) {
    return { title: 'Article' }
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params

  let article = null

  try {
    const res = await fetch(`${apiUrl}/api/articles/${slug}`)
    if (res.ok) {
      article = await res.json()
    }
  } catch (error) {
    console.error('Could not fetch article from API:', error)
  }

  if (!article) {
    notFound()
  }

  const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: article.title, url: `${siteUrl}/${slug}` },
        ]}
      />
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        slug={slug}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        keywords={article.metaKeywords}
      />

      <article>
        <HtmlRenderer content={article.content} />
      </article>
    </>
  )
}
