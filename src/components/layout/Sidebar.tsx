'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavArticle } from '@/types/article'

interface SidebarProps {
  articles: NavArticle[]
}

// Navigation structure for the main guide (hub page)
const mainGuideNav = [
  {
    section: null,
    items: [
      { href: '#', label: 'Introduction' },
      { href: '#pre-submission-checklist', label: 'Pre-Submission Checklist' },
    ],
  },
  {
    section: 'KEY FOCUS AREAS',
    items: [
      { href: '#safety', label: '1. Safety' },
      { href: '#performance', label: '2. Performance' },
      { href: '#business-monetization', label: '3. Business' },
      { href: '#design', label: '4. Design' },
      { href: '#legal', label: '5. Legal' },
    ],
  },
  {
    section: 'SUBMISSION',
    items: [
      { href: '#preparing-your-app-store-listing', label: 'Store Listing' },
      { href: '#the-review-process', label: 'Review Process' },
      { href: '#top-reasons-for-rejection', label: 'Common Rejections' },
    ],
  },
  {
    section: null,
    items: [
      { href: '#deep-dive-guides', label: 'Deep Dive Guides' },
      { href: '#references', label: 'References' },
    ],
  },
]

// Group articles by category for sub-pages
function groupByCategory(articles: NavArticle[]): Record<string, NavArticle[]> {
  return articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {} as Record<string, NavArticle[]>)
}

export function Sidebar({ articles }: SidebarProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <aside className="hidden lg:block w-72 fixed h-screen overflow-y-auto pt-16 pb-12 pl-10 pr-6 border-r border-gray-100 sidebar bg-white/50 backdrop-blur-sm">
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-apple-blue mb-1 block">Edition 2025</span>
        <h2 className="text-2xl font-bold tracking-tight text-apple-dark">iOS Submission</h2>
      </div>

      {isHomePage ? (
        // Main guide page - show table of contents navigation
        <nav className="space-y-1">
          {mainGuideNav.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6 last:mb-0">
              {group.section && (
                <div className="py-2 mb-1">
                  <span className="text-[10px] font-bold text-apple-gray uppercase tracking-[0.15em]">
                    {group.section}
                  </span>
                </div>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group block py-2 px-3 text-[13px] font-medium rounded-xl transition-all hover:bg-apple-light text-gray-500 hover:text-apple-dark"
                  >
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      ) : (
        // Sub-pages - show back link and article list
        <>
          <Link
            href="/"
            className="flex items-center text-[13px] font-bold text-apple-blue hover:opacity-70 mb-10 transition-all uppercase tracking-wider"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Main Guide
          </Link>

          <nav className="space-y-1">
            {Object.entries(groupByCategory(articles)).map(([category, categoryArticles]) => (
              <div key={category} className="mb-6 last:mb-0">
                <div className="py-2 mb-1">
                  <span className="text-[10px] font-bold text-apple-gray uppercase tracking-[0.15em]">
                    {category}
                  </span>
                </div>
                <div className="space-y-0.5">
                  {categoryArticles.map((article) => {
                    const isActive = pathname === `/${article.slug}`
                    return (
                      <Link
                        key={article.slug}
                        href={`/${article.slug}`}
                        className={`group block py-2 px-3 text-[13px] font-medium rounded-xl transition-all ${
                          isActive
                            ? 'bg-apple-blue text-white shadow-lg shadow-apple-blue/20'
                            : 'text-gray-500 hover:bg-apple-light hover:text-apple-dark'
                        }`}
                      >
                        <span className={`inline-block transition-transform ${!isActive ? 'group-hover:translate-x-0.5' : ''}`}>
                          {article.title}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </>
      )}
    </aside>
  )
}
