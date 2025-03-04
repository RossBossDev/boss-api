import { join } from 'path';
import { readManifest } from '@inertify/core';
import { inertia } from '@inertify/express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './common/exceptions/not-found.filter';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(),
    );

    let publicPath = join(__dirname, '../public');

    if (process.env.NODE_ENV === 'development') {
        publicPath = join(__dirname, '../../public');
    }

    app.useStaticAssets(publicPath);
    app.setBaseViewsDir(join(__dirname, 'views'));
    app.setViewEngine('ejs');
    app.useGlobalFilters(new NotFoundExceptionFilter());

    let manifest: any = undefined;

    if (process.env.NODE_ENV !== 'development') {
        manifest = await readManifest(join(publicPath, '.vite/manifest.json'));
    }

    app.use(inertia(manifest));

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
