import { ErrorNameType } from '../enums/error.enum';

export type ServiceReturn<T> = [T, null] | [null, ErrorNameType]
export type ServiceReturnPromise<T> = Promise<ServiceReturn<T>>