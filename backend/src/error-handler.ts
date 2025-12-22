import type { FastifyInstance } from 'fastify'

// Standard error messages that don't leak implementation details
const SAFE_ERROR_MESSAGES: Record<number, string> = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  429: 'Too many requests',
  500: 'Internal server error',
}

// Error handler plugin for Fastify - prevents leaking internal error details
export function errorHandlerPlugin(fastify: FastifyInstance) {
  fastify.setErrorHandler((error, request, reply) => {
    // Don't leak stack traces or internal error details
    const statusCode = (error as { statusCode?: number }).statusCode || 500

    request.log.error({
      err: error,
      path: request.url,
      method: request.method,
    }, 'Unhandled error')

    const safeMessage = SAFE_ERROR_MESSAGES[statusCode] || 'An error occurred'

    reply.status(statusCode).send({
      error: safeMessage,
      statusCode,
    })
  })
}
