'use client'

import { useState } from 'react'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        <button
          type="button"
          onClick={() => setShowPreview(false)}
          className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
            !showPreview
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Write
        </button>
        <button
          type="button"
          onClick={() => setShowPreview(true)}
          className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
            showPreview
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Preview
        </button>
      </div>

      {showPreview ? (
        <div className="min-h-[400px] p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="prose max-w-none">
            {/* Simple markdown preview - just show raw for now */}
            <pre className="whitespace-pre-wrap text-sm text-gray-600 font-mono">
              {value || 'Nothing to preview...'}
            </pre>
          </div>
        </div>
      ) : (
        <div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full min-h-[400px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue focus:border-apple-blue outline-none font-mono text-sm"
            placeholder="Write your content in Markdown...

# Heading 1
## Heading 2

This is a paragraph with **bold** and *italic* text.

- Bullet point 1
- Bullet point 2

:::alert info &quot;Why this matters&quot;
This is an info alert box.
:::

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
"
          />
          <p className="mt-2 text-sm text-gray-500">
            Supports Markdown with GitHub Flavored Markdown extensions. Use{' '}
            <code className="bg-gray-100 px-1 rounded">:::alert info &quot;Title&quot;</code> for alert boxes.
          </p>
        </div>
      )}
    </div>
  )
}
