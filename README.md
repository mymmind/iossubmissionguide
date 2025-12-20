# iOS Submission Guide

A comprehensive web application helping iOS developers navigate the App Store review process. Built with Next.js 14, PostgreSQL, Prisma, and styled with an Apple-inspired design system.

## Features

- **SEO-Optimized**: Server-side rendering, meta tags, JSON-LD structured data, and automatic sitemap
- **Apple Design System**: Clean typography, micro-borders, glassmorphism, and Apple color palette
- **Rich Component Library**: Dark cards, alert boxes, feature grids, checklists, timelines, and more
- **Database-Driven Content**: Articles stored in PostgreSQL with HTML content
- **Hub & Spoke Architecture**: One hub article (homepage) with related sub-articles
- **API-First**: Frontend fetches content via REST API for flexibility
- **Responsive Layout**: Mobile-first with collapsible sidebar and glass-effect header
- **Docker Ready**: One-command deployment with Docker Compose

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Database | PostgreSQL + Prisma ORM |
| Backend | Express.js API server |
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
# Edit .env.local with your DATABASE_URL and NEXT_PUBLIC_API_URL

# 4. Initialize database
npx prisma generate
npx prisma migrate dev

# 5. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Architecture

### Content Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  PostgreSQL │ ──▶ │  Prisma ORM │ ──▶ │  Express    │ ──▶ │  Next.js    │
│  Database   │     │             │     │  API Server │     │  Frontend   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

1. **PostgreSQL** stores articles with HTML content
2. **Prisma** provides type-safe database access
3. **Express API** serves content at `/api/articles/*`
4. **Next.js** fetches via `NEXT_PUBLIC_API_URL` and renders with `HtmlRenderer`

### Content Model

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
- **Content format**: Raw HTML with component classes

## Content Format

Articles use semantic HTML with custom component classes for rich layouts.

### Basic Structure

```html
<!-- Pre-header label (optional) -->
<span class="pre-header">Complete Guide</span>

<!-- H1 must match article.title for SEO -->
<h1>Article Title (2025 Guide)</h1>

<!-- Lead paragraph - automatically styled -->
<p class="lead">Brief introduction that appears larger and muted.</p>

<!-- Sections with IDs for anchor links -->
<section id="section-name">
  <h2>Section Title</h2>
  <p>Content...</p>
</section>
```

### Component Classes

The design system provides ready-to-use component classes:

#### Alert Boxes

```html
<div class="alert-box info">
  <div class="alert-title">Pro Tip</div>
  <p>Informational content here.</p>
</div>

<div class="alert-box warning">
  <div class="alert-title">Warning</div>
  <p>Critical information here.</p>
</div>

<div class="alert-box neutral">
  <div class="alert-title">Note</div>
  <p>Neutral information here.</p>
</div>
```

#### Dark Cards

```html
<div class="dark-card">
  <h3>Featured Section</h3>
  <p>Content on dark background.</p>
  <div class="dark-card-grid">
    <div>Column 1</div>
    <div>Column 2</div>
  </div>
</div>
```

#### Feature Grids

```html
<div class="feature-grid">
  <div class="feature-card">
    <h3>Feature Title</h3>
    <p>Feature description.</p>
  </div>
  <!-- Repeat for more features -->
</div>
```

#### Checklists

```html
<div class="checklist">
  <div class="checklist-item">
    <div class="checklist-number">1</div>
    <div class="checklist-content">
      <h4>Step Title</h4>
      <p>Step description.</p>
    </div>
  </div>
  <!-- Repeat for more items -->
</div>
```

#### Timelines

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot blue"></div>
    <h4>Timeline Event</h4>
    <p>Event description.</p>
  </div>
  <!-- Repeat for more events -->
</div>
```

#### Section Headers with Icons

```html
<div class="section-header">
  <div class="section-header-icon blue">
    <svg><!-- icon --></svg>
  </div>
  <h2>Section Title</h2>
</div>
```

#### Deep Dive Cards

```html
<div class="deep-dive-grid">
  <a href="/article-slug" class="deep-dive-card">
    <div class="deep-dive-card-icon blue">
      <svg><!-- icon --></svg>
    </div>
    <h3>Card Title</h3>
    <p>Card description.</p>
  </a>
  <!-- Repeat for more cards -->
</div>
```

#### Tables

```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Column 1</th><th>Column 2</th></tr>
    </thead>
    <tbody>
      <tr><td>Data</td><td>Data</td></tr>
    </tbody>
  </table>
</div>
```

### All Component Classes Reference

| Class | Purpose |
|-------|---------|
| `.prose-content` | Article content wrapper (auto-applied) |
| `.pre-header` | Small label above H1 |
| `.lead` | Large intro paragraph |
| `.glass-header` | Frosted glass effect |
| `.card` | Basic card with border |
| `.card-interactive` | Card with hover effects |
| `.dark-card` | Dark background card |
| `.dark-card-grid` | 2-column grid inside dark card |
| `.alert-box` | Alert container (add `.info`, `.warning`, `.neutral`) |
| `.alert-title` | Bold title inside alert |
| `.feature-grid` | 3-column feature grid |
| `.feature-card` | Card inside feature grid |
| `.checklist` | Numbered checklist container |
| `.checklist-item` | Single checklist item |
| `.checklist-number` | Numbered circle (add `.green` for green) |
| `.checklist-content` | Text container in checklist |
| `.timeline` | Timeline container |
| `.timeline-item` | Single timeline event |
| `.timeline-dot` | Dot indicator (add `.blue`, `.green`) |
| `.section-header` | Header with icon |
| `.section-header-icon` | Icon container (add `.blue`, `.green`, `.red`, `.yellow`) |
| `.deep-dive-grid` | 3-column card grid |
| `.deep-dive-card` | Linked card with icon |
| `.deep-dive-card-icon` | Icon in deep dive card |
| `.table-wrapper` | Styled table container |
| `.references-list` | Reference links list |
| `.reference-desc` | Description under reference |

## Design System

### Apple Color Palette

```js
// tailwind.config.ts
colors: {
  apple: {
    blue: '#0071e3',    // Links, buttons, accents
    dark: '#1d1d1f',    // Primary text (NOT black)
    gray: '#86868b',    // Secondary text
    light: '#f5f5f7',   // Light backgrounds
    border: '#d2d2d7',  // Borders
    green: '#34c759',   // Success states
    red: '#ff3b30',     // Error/warning states
    yellow: '#ffcc00',  // Caution states
  }
}
```

### Design Principles

1. **High whitespace** - Generous padding (`p-8`, `p-10`) and margins (`my-12`, `mb-24`)
2. **Micro-borders** - Subtle `border-gray-100`, no heavy shadows
3. **Rounded corners** - Large radius (`rounded-2xl`, `rounded-3xl`)
4. **Glassmorphism** - Frosted glass on sticky elements
5. **Typography** - Inter font, tight tracking on headings, relaxed line height

## Updating Articles

### Option 1: Direct Database Update (Recommended)

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

        <div class=\"alert-box info\">
          <div class=\"alert-title\">Key Point</div>
          <p>Important information here.</p>
        </div>

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

Opens visual database editor at http://localhost:5555

### Option 3: API Endpoints

```bash
curl -X PUT http://localhost:3005/api/articles/legal-compliance \
  -H "Content-Type: application/json" \
  -d '{"title": "New Title", "content": "<h1>...</h1>"}'
```

## Project Structure

```
appstorepass/
├── backend/
│   └── src/
│       ├── server.ts             # Express API server
│       └── routes/               # API route handlers
├── prisma/
│   └── schema.prisma             # Database schema
├── scripts/
│   ├── seed-content.ts           # Initial content seeder (HTML)
│   └── *.ts                      # Utility scripts
├── src/
│   ├── app/
│   │   ├── [slug]/page.tsx       # Sub-article pages
│   │   ├── page.tsx              # Homepage (fetches from API)
│   │   ├── globals.css           # Tailwind + component classes
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   └── MobileHeader.tsx
│   │   ├── mdx/                  # Content components
│   │   └── seo/                  # JSON-LD components
│   └── lib/
│       ├── html-renderer.tsx     # DOMPurify HTML renderer
│       ├── metadata.ts           # SEO metadata helpers
│       └── prisma.ts             # Prisma client singleton
├── tailwind.config.ts            # Tailwind + Apple colors + safelist
├── docker-compose.yml
└── package.json
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `SITE_URL` | Public URL for SEO/meta | No |

Example `.env.local`:
```env
DATABASE_URL="postgresql://user@localhost:5432/appstore_guides"
NEXT_PUBLIC_API_URL="http://localhost:3005"
SITE_URL="https://yourdomain.com"
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

## Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name description

# Apply migrations (production)
npx prisma migrate deploy

# Push schema changes (dev only)
npx prisma db push

# Visual database editor
npx prisma studio

# Seed initial content
npm run db:seed
```

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

      <div class=\"feature-grid\">
        <div class=\"feature-card\">
          <h3>Feature 1</h3>
          <p>Description.</p>
        </div>
      </div>

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

2. **Add to sidebar** in `src/components/layout/Sidebar.tsx` (if needed)

3. **Link to hub** (optional):
```bash
await prisma.relatedArticle.create({
  data: {
    sourceArticleId: 1,
    targetArticleId: 5,
    displayOrder: 3
  }
})
```

## Deployment

### Docker Compose

```bash
export DATABASE_URL="postgresql://..."
export NEXT_PUBLIC_API_URL="https://api.yourdomain.com"
export SITE_URL="https://yourdomain.com"

docker compose up -d
docker compose exec app npx prisma migrate deploy
```

### Vercel + Separate API

1. Deploy backend API separately (Railway, Render, etc.)
2. Set `NEXT_PUBLIC_API_URL` to your API URL
3. Deploy Next.js frontend to Vercel

## Common Tasks

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

### Reset database (dev only)
```bash
npx prisma migrate reset
npm run db:seed
```

## License

MIT
