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

  let manifest: any = undefined;

  if (process.env.NODE_ENV !== 'development') {
    manifest = await readManifest(
      join(__dirname, '../../public/.vite/manifest.json'),
    );
  }

  app.use(inertia(manifest));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
