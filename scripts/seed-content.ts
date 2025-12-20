import { PrismaClient } from '@prisma/client'
import { JSDOM } from 'jsdom'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

interface ContentMap {
  file: string
  slug: string
  isHub: boolean
  category: string
  relatedSlugs?: string[]
}

const contentMap: ContentMap[] = [
  {
    file: '../frontend/index.html',
    slug: 'app-store-guide',
    isHub: true,
    category: 'Overview',
    relatedSlugs: ['connect-guide', 'rejection-guide', 'legal-compliance'],
  },
  {
    file: '../frontend/legal.html',
    slug: 'legal-compliance',
    isHub: false,
    category: 'Legal',
  },
  {
    file: '../frontend/reject.html',
    slug: 'rejection-guide',
    isHub: false,
    category: 'Technical',
  },
  {
    file: '../content.html',
    slug: 'connect-guide',
    isHub: false,
    category: 'Technical',
  },
]

function extractMetadata(doc: Document) {
  const title = doc.querySelector('title')?.textContent?.trim() || 'Untitled'
  const description =
    doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ||
    ''
  const keywordsStr =
    doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || ''
  const keywords = keywordsStr
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)

  return { title, description, keywords }
}

function extractContent(doc: Document): string {
  // Find the main content area
  const main = doc.querySelector('main')
  if (!main) {
    console.warn('No <main> element found')
    return ''
  }

  // Remove navigation, mobile menu, and other non-content elements
  const elementsToRemove = main.querySelectorAll(
    'nav, .no-print, .sidebar, script, style'
  )
  elementsToRemove.forEach((el) => el.remove())

  // Return the cleaned HTML content
  return main.innerHTML.trim()
}

async function seed() {
  console.log('Starting content migration (HTML only)...\n')

  const createdArticles: Map<string, number> = new Map()

  for (const item of contentMap) {
    const filePath = path.join(__dirname, item.file)

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`)
      continue
    }

    console.log(`Processing: ${item.file}`)

    const html = fs.readFileSync(filePath, 'utf-8')
    const dom = new JSDOM(html)
    const doc = dom.window.document

    const { title, description, keywords } = extractMetadata(doc)
    const content = extractContent(doc)

    try {
      // Check if article already exists
      const existing = await prisma.article.findUnique({
        where: { slug: item.slug },
      })

      if (existing) {
        console.log(`  Updating existing article: ${item.slug}`)
        const article = await prisma.article.update({
          where: { slug: item.slug },
          data: {
            title,
            description,
            content,
            category: item.category,
            metaKeywords: keywords,
            isHub: item.isHub,
          },
        })
        createdArticles.set(item.slug, article.id)
      } else {
        console.log(`  Creating new article: ${item.slug}`)
        const article = await prisma.article.create({
          data: {
            slug: item.slug,
            title,
            description,
            content,
            category: item.category,
            metaKeywords: keywords,
            isHub: item.isHub,
          },
        })
        createdArticles.set(item.slug, article.id)
      }

      console.log(`  ✓ ${item.slug} (${title.substring(0, 50)}...)`)
    } catch (error) {
      console.error(`  ✗ Failed to create ${item.slug}:`, error)
    }
  }

  // Create related article links
  console.log('\nCreating related article links...')

  for (const item of contentMap) {
    if (!item.relatedSlugs || item.relatedSlugs.length === 0) continue

    const sourceId = createdArticles.get(item.slug)
    if (!sourceId) continue

    // Remove existing relations
    await prisma.relatedArticle.deleteMany({
      where: { sourceArticleId: sourceId },
    })

    for (let i = 0; i < item.relatedSlugs.length; i++) {
      const targetSlug = item.relatedSlugs[i]
      const targetId = createdArticles.get(targetSlug)

      if (!targetId) {
        console.warn(`  Target article not found: ${targetSlug}`)
        continue
      }

      await prisma.relatedArticle.create({
        data: {
          sourceArticleId: sourceId,
          targetArticleId: targetId,
          displayOrder: i,
        },
      })

      console.log(`  ✓ ${item.slug} -> ${targetSlug}`)
    }
  }

  console.log('\n✓ Content migration complete!')
}

seed()
  .catch((error) => {
    console.error('Migration failed:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
