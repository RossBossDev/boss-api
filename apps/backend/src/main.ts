import { join } from 'path';
import { readManifest } from '@inertify/core';
import { inertia } from '@inertify/express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  app.useStaticAssets(join(__dirname, '../../public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');

  app.use(
    inertia({
      manifest:
        process.env.NODE_ENV === 'development'
          ? null
          : readManifest(join(__dirname, '../../public/.vite/manifest.json')),
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
