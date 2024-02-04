import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const configService = app.get(ConfigService);
  app.enableCors({
    credentials: true,
    origin: configService.getOrThrow<string>('app.origin'),
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    optionsSuccessStatus: 200,
    methods: '*',
    maxAge: 1000 * 60 * 60 * 24 * 14,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.getOrThrow<number>('app.port'));
}

bootstrap().then();
