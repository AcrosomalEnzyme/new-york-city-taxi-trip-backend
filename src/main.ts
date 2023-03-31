import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('new-york-city-taxi-trip');
  await app.listen(3001);
}
bootstrap();
