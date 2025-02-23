import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL
    ? encodeURI(process.env.DATABASE_URL)
    : undefined,
  autoLoadEntities: true,
  synchronize: false,
  ssl: false,
};
