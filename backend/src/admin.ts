import AdminJS from 'adminjs'
import AdminJSFastify from '@adminjs/fastify'
import * as AdminJSPrisma from '@adminjs/prisma'
import { FastifyInstance } from 'fastify'
import { prisma } from './prisma.js'

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
})

export async function setupAdmin(fastify: FastifyInstance): Promise<void> {
  const adminOptions = {
    resources: [
      {
        resource: { model: AdminJSPrisma.getModelByName('Article'), client: prisma },
        options: {
          navigation: { icon: 'Document' },
          properties: {
            content: {
              type: 'richtext',
            },
            id: { isVisible: { list: false, filter: true, show: true, edit: false } },
            publishedAt: { isVisible: { list: true, filter: true, show: true, edit: true } },
            isHub: { isVisible: { list: true, filter: true, show: true, edit: true } },
            category: { isVisible: { list: true, filter: true, show: true, edit: true } },
          },
          listProperties: ['title', 'slug', 'category', 'isHub', 'publishedAt'],
        },
      },
      {
        resource: { model: AdminJSPrisma.getModelByName('RelatedArticle'), client: prisma },
        options: {
          navigation: { icon: 'Link' },
          parent: { name: 'Relations', icon: 'Connect' },
        },
      },
    ],
    rootPath: '/admin',
    branding: {
      companyName: 'App Store Guide Admin',
      softwareBrothers: false,
    },
  }

  const admin = new AdminJS(adminOptions)

  // Require environment variables - no insecure defaults
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required')
  }

  await AdminJSFastify.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email: string, password: string) => {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          return { email }
        }
        return null
      },
      cookiePassword: process.env.SESSION_SECRET || (() => { throw new Error('SESSION_SECRET is required') })(),
    },
    fastify,
    {
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET || (() => { throw new Error('SESSION_SECRET is required') })(),
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict' as const,
      },
    }
  )
  
  console.log('AdminJS setup completed at /admin (Authenticated)')
}
