import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ArticleForm } from '@/components/admin'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export default async function EditArticlePage({ params }: PageProps) {
  const { slug } = await params

  let article = null

  try {
    article = await prisma.article.findUnique({
      where: { slug },
    })
  } catch (error) {
    console.log('Could not fetch article')
  }

  if (!article) {
    notFound()
  }

  const initialData = {
    slug: article.slug,
    title: article.title,
    description: article.description,
    content: article.content,
    category: article.category,
    metaKeywords: article.metaKeywords,
    isHub: article.isHub,
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-apple-dark mb-8">Edit Article</h1>
      <ArticleForm initialData={initialData} isEditing />
    </div>
  )
}
