'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Validate redirect URL to prevent open redirect attacks
function getSafeRedirect(redirectParam: string | null): string {
  const defaultRedirect = '/userlogin'

  if (!redirectParam) return defaultRedirect

  // Only allow relative paths starting with /
  // Reject absolute URLs, protocol-relative URLs, and javascript: URLs
  if (
    !redirectParam.startsWith('/') ||
    redirectParam.startsWith('//') ||
    redirectParam.toLowerCase().startsWith('/\\') ||
    redirectParam.includes(':')
  ) {
    return defaultRedirect
  }

  // Only allow paths within /userlogin
  if (!redirectParam.startsWith('/userlogin')) {
    return defaultRedirect
  }

  return redirectParam
}

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = getSafeRedirect(searchParams.get('redirect'))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/userlogin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        router.push(redirect)
        router.refresh()
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-apple-blue outline-none transition-colors"
          placeholder="Enter admin password"
          required
          autoFocus
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-apple-blue text-white font-medium rounded-xl hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-apple-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-apple-dark">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter your password to continue</p>
          </div>

          <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
