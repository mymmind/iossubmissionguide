'use client'

import Link from 'next/link'
import { useMobileMenu } from './MobileMenuContext'
import type { NavArticle } from '@/types/article'

interface MobileMenuProps {
  articles: NavArticle[]
  isSubPage?: boolean
}

export function MobileMenu({ articles, isSubPage = false }: MobileMenuProps) {
  const { isOpen, closeMenu } = useMobileMenu()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 overflow-y-auto lg:hidden">
      <nav className="space-y-4">
        {isSubPage && (
          <Link
            href="/"
            onClick={closeMenu}
            className="block text-lg font-bold text-apple-blue"
          >
            &larr; Back to Main Guide
          </Link>
        )}
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            onClick={closeMenu}
            className="block text-lg font-medium text-gray-800 hover:text-apple-blue"
          >
            {article.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
