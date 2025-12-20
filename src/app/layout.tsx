import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Sidebar, MobileHeader, MobileMenu, MobileMenuProvider, Footer } from '@/components/layout'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let articles: { slug: string; title: string; category: string }[] = []
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
  
  try {
    const res = await fetch(`${apiUrl}/api/articles`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const allArticles = await res.json()
      articles = allArticles.filter((a: any) => !a.isHub)
    }
  } catch (error) {
    console.error('Could not fetch articles for navigation from API:', error)
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-apple-dark font-sans antialiased selection:bg-apple-blue selection:text-white`}
      >
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="91345023-264f-4a98-b6d7-492ddf3217ff"
          strategy="afterInteractive"
        />
        <MobileMenuProvider>
          <MobileHeader />
          <MobileMenu articles={articles} />
          <div className="flex max-w-7xl mx-auto min-h-screen">
            <Sidebar articles={articles} />
            <main className="flex-1 lg:ml-64 px-6 lg:px-16 py-20 lg:py-16">
              {children}
            </main>
          </div>
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  )
}
