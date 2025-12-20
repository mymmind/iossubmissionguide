import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/lib/auth'

interface RouteParams {
  params: Promise<{ slug: string }>
}

// GET /api/articles/[slug] - Get single article
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params

    const article = await prisma.article.findUnique({
      where: { slug },
      include: {
        relatedFrom: {
          include: {
            targetArticle: {
              select: {
                id: true,
                slug: true,
                title: true,
                description: true,
                category: true,
              },
            },
          },
          orderBy: { displayOrder: 'asc' },
        },
      },
    })

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error('Error fetching article:', error)
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    )
  }
}

// PUT /api/articles/[slug] - Update article (admin only)
export async function PUT(request: Request, { params }: RouteParams) {
  // Require authentication
  if (!await isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { slug } = await params
    const body = await request.json()

    const { title, description, content, category, metaKeywords, isHub, relatedArticleIds } = body

    const article = await prisma.article.update({
      where: { slug },
      data: {
        title,
        description,
        content,
        category,
        metaKeywords,
        isHub,
      },
    })

    // Update related articles if provided
    if (relatedArticleIds && Array.isArray(relatedArticleIds)) {
      // Remove existing relations
      await prisma.relatedArticle.deleteMany({
        where: { sourceArticleId: article.id },
      })

      // Create new relations
      await prisma.relatedArticle.createMany({
        data: relatedArticleIds.map((targetId: number, index: number) => ({
          sourceArticleId: article.id,
          targetArticleId: targetId,
          displayOrder: index,
        })),
      })
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error('Error updating article:', error)
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    )
  }
}

// DELETE /api/articles/[slug] - Delete article (admin only)
export async function DELETE(request: Request, { params }: RouteParams) {
  // Require authentication
  if (!await isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { slug } = await params

    await prisma.article.delete({
      where: { slug },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting article:', error)
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    )
  }
}
