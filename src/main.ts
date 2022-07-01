import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import AppModule from './app.module';

config();
async function bootstrap() {
  const PORT = process.env.NEST_PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  await app.listen(PORT).then(() => {
    // eslint-disable-next-line
    console.log(`server start on port ${PORT}`);
  });
}
bootstrap();
