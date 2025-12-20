export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 py-20 bg-apple-light mt-auto no-print">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-gray-500">
        <p className="mb-2">
          Compiled based on official App Store Review Guidelines.
        </p>
        <p>
          &copy; {currentYear} iOS Submission Guide. Not affiliated with Apple Inc.
        </p>
      </div>
    </footer>
  )
}
