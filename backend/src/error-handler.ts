import { FastifyReply, FastifyRequest } from 'fastify'

// Standard error messages that don't leak implementation details
const SAFE_ERROR_MESSAGES: Record<number, string> = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  429: 'Too many requests',
  500: 'Internal server error',
}

interface SafeErrorOptions {
  statusCode: number
  message?: string
  logError?: boolean
}

// Creates a safe error response that doesn't leak internal details
export function createSafeError(
  reply: FastifyReply,
  request: FastifyRequest,
  error: unknown,
  options: SafeErrorOptions
): FastifyReply {
  const { statusCode, message, logError = true } = options

  // Log the actual error for debugging
  if (logError) {
    request.log.error({ err: error, path: request.url }, 'Request error')
  }

  // Return a safe message to the client
  const safeMessage = message || SAFE_ERROR_MESSAGES[statusCode] || 'An error occurred'

  return reply.status(statusCode).send({ error: safeMessage })
}

// Error handler plugin for Fastify
export function errorHandlerPlugin(fastify: ReturnType<typeof import('fastify').fastify>) {
  fastify.setErrorHandler((error, request, reply) => {
    // Don't leak stack traces or internal error details
    const statusCode = error.statusCode || 500

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

// Type guard for checking if something is an Error
export function isError(error: unknown): error is Error {
  return error instanceof Error
}

// Safely extract error message for logging (not for client response)
export function getErrorMessage(error: unknown): string {
  if (isError(error)) {
    return error.message
  }
  return String(error)
}
