import { HttpStatus } from '@nestjs/common';

export const Errors = {
  AUTH_ERROR: {
    code: HttpStatus.UNAUTHORIZED,
    message: 'Auth error'
  },
  PERMISSION_ERROR: {
    code: HttpStatus.FORBIDDEN,
    message: 'Permission error'
  },
  NOT_FOUND: {
    code: HttpStatus.NOT_FOUND,
    message: 'Not found'
  },
  TOO_MANY_REQUESTS: {
    code: HttpStatus.TOO_MANY_REQUESTS,
    message: 'Too many requests'
  },
  SERVER_ERROR: {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Server error'
  },
} as const;

export const ErrorStatusNames = {
  AUTH_ERROR: 'AUTH_ERROR',
  PERMISSION_ERROR: 'PERMISSION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  SERVER_ERROR: 'SERVER_ERROR'
} as const

export type ErrorNameType = keyof typeof ErrorStatusNames