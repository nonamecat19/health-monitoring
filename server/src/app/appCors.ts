import {ConfigService} from '@nestjs/config';
import {NestFastifyApplication} from '@nestjs/platform-fastify';

export function enableCors(app: NestFastifyApplication) {
  const configService = app.get(ConfigService);
  app.enableCors({
    credentials: true,
    origin: configService.getOrThrow<string>('app.origin'),
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-csrf-token',
    optionsSuccessStatus: 200,
    methods: '*',
    maxAge: 1000 * 60 * 60 * 24 * 14,
  });
}
