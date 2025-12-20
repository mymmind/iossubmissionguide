import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/userlogin" className="font-bold text-lg text-apple-dark">
                Admin
              </Link>
              <nav className="hidden sm:flex gap-6">
                <Link
                  href="/userlogin"
                  className="text-gray-600 hover:text-apple-dark transition-colors"
                >
                  Articles
                </Link>
                <Link
                  href="/userlogin/new"
                  className="text-gray-600 hover:text-apple-dark transition-colors"
                >
                  New Article
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-sm text-gray-600 hover:text-apple-blue transition-colors"
              >
                View Site &rarr;
              </Link>
              <form action="/api/userlogin/logout" method="POST">
                <button
                  type="submit"
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
