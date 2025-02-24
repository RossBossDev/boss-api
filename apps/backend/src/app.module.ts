import { join } from 'path';
import { readManifest } from '@inertify/core';
import { inertia } from '@inertify/express';
import { InertiaModule } from '@inertify/nest';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    ExampleModule,
    InertiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
