import {Logger} from '@nestjs/common';

export function createLogger(currentClass: any) {
  return new Logger(currentClass.name);
}
