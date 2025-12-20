import AdminJS from 'adminjs'
import AdminJSFastify from '@adminjs/fastify'
import * as AdminJSPrisma from '@adminjs/prisma'
import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
})

const prisma = new PrismaClient()

export async function setupAdmin(fastify: FastifyInstance) {
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

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hi@sieggg.com'
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Iw+n1DBedNZ7gSc7BUggyduVUZ32wQdt'

  await AdminJSFastify.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email: any, password: any) => {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          return { email }
        }
        return null
      },
      cookiePassword: process.env.SESSION_SECRET || 'a-very-long-secret-that-is-at-least-32-characters-long',
    },
    fastify,
    {
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET || 'a-very-long-secret-that-is-at-least-32-characters-long',
      cookie: {
        httpOnly: true,
        secure: false, // Set to true in production if using HTTPS
      },
    }
  )
  
  console.log('AdminJS setup completed at /admin (Authenticated)')
}
