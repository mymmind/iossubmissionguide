// Shared type definitions for the backend

// Article types
export interface Article {
  id: number
  slug: string
  title: string
  description: string
  content: string
  category: string
  metaKeywords: string | null
  isHub: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface ArticleWithRelations extends Article {
  relatedFrom: RelatedArticle[]
}

export interface RelatedArticle {
  id: number
  sourceArticleId: number
  targetArticleId: number
  displayOrder: number
  targetArticle: {
    slug: string
    title: string
    description: string
    category: string
  }
}

// Stripe types
export interface StripeSessionVerifyResponse {
  status: 'paid' | 'unpaid'
  customer_email?: string
  content?: ToolkitContent
}

export interface ToolkitContent {
  native: ToolkitTrack
  expo: ToolkitTrack
}

export interface ToolkitTrack {
  title: string
  downloads: ToolkitDownload[]
  prompt: string
}

export interface ToolkitDownload {
  name: string
  description: string
  url: string
}

// API Response types
export interface ApiError {
  error: string
  type?: string
}
