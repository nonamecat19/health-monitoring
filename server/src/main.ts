import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import {VersioningType} from '@nestjs/common';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {ConfigService} from '@nestjs/config';
import {enableCors} from './app/appCors';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const configService = app.get(ConfigService);

  enableCors(app);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(configService.getOrThrow<number>('app.port'));
}

bootstrap().then();
