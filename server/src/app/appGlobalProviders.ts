import {APP_FILTER, APP_GUARD, APP_INTERCEPTOR} from '@nestjs/core';
import {ThrottlerGuard} from '@nestjs/throttler';
import {ResponseInterceptor} from '@shared/interceptors';
import {ResponseTransformFilter} from '@shared/filters';

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
];
