import { ErrorNameType, Errors } from '../enums/error.enum';
import { HttpException } from '@nestjs/common';

export function handleError(statusName: ErrorNameType, handelErrorCode: ErrorNameType, additionalData: Record<string, any>) {
  if (statusName !== handelErrorCode) {
    return;
  }
  const { code: statusCode, message } = Errors[statusName];
  throw new HttpException({
    statusCode,
    message,
    statusName,
    ...additionalData
  }, statusCode);
}

export function handleDynamicError(statusName: ErrorNameType) {
  const { code: statusCode, message } = Errors[statusName];
  throw new HttpException({
    statusCode,
    message,
    statusName
  }, statusCode);
}