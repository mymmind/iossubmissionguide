'use client'

import { useMobileMenu } from './MobileMenuContext'

interface MobileHeaderProps {
  title?: string
}

export function MobileHeader({ title = 'iOS Submission Guide' }: MobileHeaderProps) {
  const { toggleMenu } = useMobileMenu()

  return (
    <header className="lg:hidden fixed top-0 w-full glass-header border-b border-gray-200 z-50 h-16 flex items-center justify-between px-6">
      <h1 className="font-semibold text-sm tracking-tight text-apple-dark">{title}</h1>
      <button
        aria-label="Open Menu"
        onClick={toggleMenu}
        className="text-apple-blue font-medium"
      >
        Menu
      </button>
    </header>
  )
}
