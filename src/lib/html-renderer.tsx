'use client'

import DOMPurify from 'dompurify'

interface HtmlRendererProps {
  content: string
  className?: string
}

export function HtmlRenderer({ content, className = '' }: HtmlRendererProps) {
  // Sanitize HTML to prevent XSS
  const sanitizedContent = typeof window !== 'undefined'
    ? DOMPurify.sanitize(content, {
        ADD_TAGS: ['section'],
        ADD_ATTR: ['target', 'rel'],
      })
    : content

  return (
    <div
      className={`prose-content ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}
