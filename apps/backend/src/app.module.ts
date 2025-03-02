import { InertiaModule } from '@inertify/nest';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { databaseConfig } from './config/database.config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig),
        InertiaModule,
        RecipesModule,
        CommonModule,
    ],
})
export class AppModule {}
