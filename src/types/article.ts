export interface Article {
  id: number
  slug: string
  title: string
  description: string
  content: string
  category: string
  publishedAt: Date
  updatedAt: Date
  metaKeywords: string[]
  isHub: boolean
}

export interface ArticleWithRelated extends Article {
  relatedFrom: {
    id: number
    displayOrder: number
    targetArticle: {
      id: number
      slug: string
      title: string
      description: string
      category: string
    }
  }[]
}

export interface ArticleSummary {
  id: number
  slug: string
  title: string
  description: string
  category: string
  publishedAt: Date
  isHub: boolean
}

export interface NavArticle {
  slug: string
  title: string
  category: string
}
