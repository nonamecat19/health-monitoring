import {APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE} from '@nestjs/core';
import {ThrottlerGuard} from '@nestjs/throttler';
import {ResponseInterceptor} from '@shared/interceptors';
import {ResponseTransformFilter} from '@shared/filters/response-transform.filter';
import {ValidationPipe} from '@nestjs/common';

export const appGlobalProviders = [
  {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ResponseInterceptor,
  },
  {
    provide: APP_FILTER,
    useClass: ResponseTransformFilter,
  },
  {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  },
];
