import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/articles - List all articles
export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        category: true,
        publishedAt: true,
        isHub: true,
      },
      orderBy: { publishedAt: 'desc' },
    })

    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}

// POST /api/articles - Create new article (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { slug, title, description, content, category, metaKeywords, isHub } = body

    if (!slug || !title || !description || !content || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const article = await prisma.article.create({
      data: {
        slug,
        title,
        description,
        content,
        category,
        metaKeywords: metaKeywords || [],
        isHub: isHub || false,
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    )
  }
}
