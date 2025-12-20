# iOS Submission Guide

A comprehensive web application helping iOS developers navigate the App Store review process. Built with Next.js 14, PostgreSQL, Prisma, and styled with an Apple-inspired design system.

## Features

- **SEO-Optimized**: Server-side rendering, meta tags, JSON-LD structured data, and automatic sitemap
- **Apple Design System**: Clean typography, micro-borders, glassmorphism, and Apple color palette
- **Database-Driven Content**: Articles stored in PostgreSQL with HTML content
- **Hub & Spoke Architecture**: One hub article (homepage) with related sub-articles
- **Responsive Layout**: Mobile-first with collapsible sidebar and glass-effect header
- **Docker Ready**: One-command deployment with Docker Compose

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Database | PostgreSQL + Prisma ORM |
| Styling | Tailwind CSS + Apple Design Tokens |
| Content | HTML (sanitized with DOMPurify) |
| Deployment | Docker + Docker Compose |

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL (local or Docker)

### Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Start PostgreSQL (if using Docker)
docker compose up -d db

# 3. Set up environment
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL

# 4. Initialize database
npx prisma generate
npx prisma migrate dev

# 5. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Architecture

### Content Model

Articles are stored in PostgreSQL with this schema:

```prisma
model Article {
  id           Int      @id @default(autoincrement())
  slug         String   @unique    // URL path (e.g., "legal-compliance")
  title        String              // SEO title / H1
  description  String   @db.Text   // Meta description
  content      String   @db.Text   // HTML content
  category     String              // Category label
  isHub        Boolean  @default(false)  // true = homepage article
  metaKeywords String[]            // SEO keywords
  publishedAt  DateTime
  updatedAt    DateTime
}
```

**Key concepts:**
- **Hub article** (`isHub: true`): Displays on homepage (`/`)
- **Sub-articles** (`isHub: false`): Display at `/{slug}`
- **Content format**: Raw HTML (not Markdown)

### Content Rendering

Content flows through:
1. **Prisma** → fetches article from database
2. **HtmlRenderer** → sanitizes HTML with DOMPurify
3. **CSS** → `.prose-content` styles apply typography

```tsx
// src/lib/html-renderer.tsx
<div
  className="prose-content"
  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
/>
```

## Updating Articles

### Option 1: Direct Database Update (Recommended)

Use `npx tsx` to run inline scripts:

```bash
DATABASE_URL="postgresql://user@localhost:5432/appstore_guides" npx tsx -e "
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.article.update({
    where: { slug: 'legal-compliance' },
    data: {
      title: 'New Title Here',
      content: \`
        <h1>New Title Here</h1>
        <p class=\"lead\">Introduction paragraph.</p>

        <section id=\"section-1\">
          <h2>Section Title</h2>
          <p>Content here...</p>
        </section>
      \`
    }
  })
  await prisma.\$disconnect()
}
main()
"
```

### Option 2: Prisma Studio

```bash
npx prisma studio
```

Opens a visual database editor at http://localhost:5555

### Option 3: API Endpoints

```bash
# Update article
curl -X PUT http://localhost:3000/api/articles/legal-compliance \
  -H "Content-Type: application/json" \
  -d '{"title": "New Title", "content": "<h1>...</h1>"}'
```

## Content Format

Articles use semantic HTML with these conventions:

### Required Structure

```html
<!-- H1 must match article.title for SEO -->
<h1>Article Title (2025 Guide)</h1>

<!-- Lead paragraph - styled differently -->
<p class="lead">Brief introduction that appears larger and muted.</p>

<!-- Sections with IDs for anchor links -->
<section id="section-name">
  <h2>Section Title</h2>
  <p>Content...</p>

  <h3>Subsection</h3>
  <ul>
    <li><strong>Bold label:</strong> Description</li>
  </ul>
</section>
```

### Supported Elements

| Element | Usage |
|---------|-------|
| `<h1>` | Page title (one per page) |
| `<h2>` | Major sections |
| `<h3>` | Subsections |
| `<p>` | Paragraphs |
| `<ul>`, `<ol>` | Lists |
| `<strong>` | Bold/emphasis |
| `<a>` | Links |
| `<blockquote>` | Callouts/quotes |
| `<code>` | Inline code |
| `<pre>` | Code blocks |
| `<table>` | Data tables |
| `<section id="">` | Anchor sections |

### Lead Paragraph

The first `<p>` after `<h1>` (or any `<p class="lead">`) gets special styling:
- Larger font size (xl)
- Muted color (apple-gray)
- Extra bottom margin

## Design System

### Apple Color Palette

Defined in `tailwind.config.ts`:

```js
colors: {
  apple: {
    blue: '#0071e3',    // Links, buttons, accents
    dark: '#1d1d1f',    // Primary text (NOT black)
    gray: '#86868b',    // Secondary text
    light: '#f5f5f7',   // Light backgrounds
    border: '#d2d2d7',  // Borders
    green: '#34c759',   // Success
    red: '#ff3b30',     // Error
  }
}
```

### Design Principles

1. **High whitespace** - Generous padding and margins
2. **Micro-borders** - Subtle `border-gray-100/200`, no heavy shadows
3. **Glassmorphism** - Frosted glass effect on sticky header
4. **Typography** - Inter font, tight tracking on headings

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.prose-content` | Article content wrapper |
| `.glass-header` | Frosted glass effect |
| `.card` | Basic card styling |
| `.card-interactive` | Card with hover effects |
| `.lead` | Large intro paragraph |

## Project Structure

```
appstorepass/
├── prisma/
│   └── schema.prisma          # Database schema
├── scripts/
│   ├── seed-content.ts        # Initial content seeder
│   └── *.ts                   # Other utility scripts
├── src/
│   ├── app/
│   │   ├── [slug]/page.tsx    # Sub-article pages
│   │   ├── page.tsx           # Homepage (hub article)
│   │   ├── globals.css        # Tailwind + prose styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── MobileHeader.tsx
│   │   ├── mdx/               # Content components
│   │   └── seo/               # JSON-LD components
│   └── lib/
│       ├── html-renderer.tsx  # DOMPurify HTML renderer
│       ├── metadata.ts        # SEO metadata helpers
│       └── prisma.ts          # Prisma client singleton
├── tailwind.config.ts         # Tailwind + Apple colors
├── docker-compose.yml
└── package.json
```

## Database Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create migration from schema changes
npx prisma migrate dev --name description

# Apply migrations in production
npx prisma migrate deploy

# Push schema changes directly (dev only)
npx prisma db push

# Open visual database editor
npx prisma studio

# Seed initial content
npm run db:seed
```

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/articles` | List all articles |
| POST | `/api/articles` | Create article |
| GET | `/api/articles/[slug]` | Get article by slug |
| PUT | `/api/articles/[slug]` | Update article |
| DELETE | `/api/articles/[slug]` | Delete article |
| GET | `/sitemap.xml` | XML sitemap |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SITE_URL` | Public URL for SEO/meta | No (defaults to localhost:3000) |

Example `.env.local`:
```
DATABASE_URL="postgresql://user@localhost:5432/appstore_guides"
SITE_URL="https://yourdomain.com"
```

## Deployment

### Docker Compose (Production)

```bash
# Set environment
export DATABASE_URL="postgresql://..."
export SITE_URL="https://yourdomain.com"

# Build and run
docker compose up -d

# Apply migrations
docker compose exec app npx prisma migrate deploy
```

### Vercel

1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy (migrations run automatically via build script)

## Adding New Articles

1. **Create the article:**

```bash
DATABASE_URL="..." npx tsx -e "
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

await prisma.article.create({
  data: {
    slug: 'new-article-slug',
    title: 'Article Title for SEO',
    description: 'Meta description for search results.',
    category: 'Category Name',
    isHub: false,
    metaKeywords: ['keyword1', 'keyword2'],
    content: \`
      <h1>Article Title for SEO</h1>
      <p class=\"lead\">Introduction paragraph.</p>
      <section id=\"first-section\">
        <h2>First Section</h2>
        <p>Content here...</p>
      </section>
    \`
  }
})

await prisma.\$disconnect()
"
```

2. **Add to sidebar navigation** (if needed) in `src/components/layout/Sidebar.tsx`

3. **Create related article links** (optional):

```bash
# Link articles together
await prisma.relatedArticle.create({
  data: {
    sourceArticleId: 1,  // Hub article ID
    targetArticleId: 5,  // New article ID
    displayOrder: 3
  }
})
```

## Common Tasks

### Update article content
```bash
DATABASE_URL="..." npx tsx -e "..." # See "Updating Articles" section
```

### Check current articles
```bash
DATABASE_URL="..." npx tsx -e "
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const articles = await prisma.article.findMany({
  select: { id: true, slug: true, title: true, isHub: true }
})
console.table(articles)
await prisma.\$disconnect()
"
```

### Reset database (development only)
```bash
npx prisma migrate reset
npm run db:seed
```

## License

MIT
