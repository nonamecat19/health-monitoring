import {Logger} from '@nestjs/common';

export function createLogger(context: any) {
  return new Logger(context.constructor.name);
}
